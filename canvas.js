// strip "var(--...)" syntax and get color value
function getCSSColor(value) {
    if (typeof value !== 'string') return null;
    const varMatch = value.match(/var\((--[^)]+)\)/);
    if (varMatch) {
        const varName = varMatch[1].trim();
        return getCSSVar(varName, 'string');
    }
    return value;
}

// convert hex code to rgba
function hex2rgba(hex, { r = null, g = null, b = null, a = null } = {}) {
    let digits = hex.substring(1);
    if (!/^([A-Fa-f0-9]{3,4}){1,2}$/.test(digits)) {
        throw new Error('Bad Hex');
    }
    let expanded = digits;
    if (digits.length === 3) {
        expanded = digits[0] + digits[0] + digits[1] + digits[1] + digits[2] + digits[2];
    } else if (digits.length === 4) {
        expanded = digits[0] + digits[0] + digits[1] + digits[1] + digits[2] + digits[2] + digits[3] + digits[3];
    }
    let num = parseInt('0x' + expanded, 16);
    let r0, g0, b0, a0;
    if (expanded.length === 6) {
        r0 = (num >> 16) & 255;
        g0 = (num >> 8) & 255;
        b0 = num & 255;
        a0 = null;
    } else { // 8
        r0 = (num >> 24) & 255;
        g0 = (num >> 16) & 255;
        b0 = (num >> 8) & 255;
        a0 = num & 255;
    }
    let finalR = r !== null ? r : r0;
    let finalG = g !== null ? g : g0;
    let finalB = b !== null ? b : b0;
    let finalA = a !== null ? a : (a0 !== null ? a0 / 255 : 1);
    return `rgba(${finalR}, ${finalG}, ${finalB}, ${finalA})`;
}

/* setCSSVar('--menu-radius', 50); */
/* setCSSVar('--ring-rotation-duration', 20); */

// keep image in consistent size and aspect ratio
function drawImageCentered(ctx, img, x, y, maxSize) {
    if (!img) return;
    const ratio = img.width / img.height;

    let w, h;
    if (ratio > 1) {
        // wider than tall
        w = Math.min(img.width, maxSize);
        h = w / ratio;
    } else {
        // taller than wide
        h = Math.min(img.height, maxSize);
        w = h * ratio;
    }

    ctx.drawImage(img, x - w / 2, y - h / 2, w, h);
}

function drawCircularImage(ctx, img, x, y, diameter) {
    if (!img) return;

    const sourceSize = Math.min(img.width, img.height);
    const sourceX = (img.width - sourceSize) / 2;
    const sourceY = (img.height - sourceSize) / 2;

    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, diameter / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sourceSize,
        sourceSize,
        x - diameter / 2,
        y - diameter / 2,
        diameter,
        diameter
    );
    ctx.restore();
}

// draw ellipse
/* function drawEllipse(ctx, x, y, w, h) {
    let kappa = .5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2;       // y-middle

    ctx.beginPath();
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx.stroke();
} */



const canvas = document.getElementById('mainMenu');
const ctx = canvas.getContext('2d');

canvas.addEventListener('contextmenu', (e) => e.preventDefault());



let canvasMenuNodes = [];
let orbitGroups = [];
let hoveredNode = null;
let isCanvasMenuReady = false;
let animationFrameId;
let canvasInitTime = null;
let imageAssets = {};
let orbitSets = {};

const DEFAULT_ORBIT_SHAPE = 'ellipse';
const orbitShapes = {
    ellipse: (angle, radius, { scaleX = 1, scaleY = 1 } = {}) => ({
        x: Math.cos(angle) * radius * scaleX,
        y: Math.sin(angle) * radius * scaleY,
    }),

    circle: (angle, radius) => ({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
    }),

    line: (angle, radius, { x1 = -1, y1 = -1, x2 = 1, y2 = 1 } = {}) => {
        const a = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI);
        return {
            x: (x1 + (x2 - x1) * a) * radius,
            y: (y1 + (y2 - y1) * a) * radius,
        };
    },

    oscillate: (angle, radius, { x1 = -1, y1 = -1, x2 = 1, y2 = 1 } = {}) => {
        const a = Math.sin(angle) * 0.5 + 0.5;
        return {
            x: (x1 + (x2 - x1) * a) * radius,
            y: (y1 + (y2 - y1) * a) * radius,
        };
    },

    polygon: (angle, radius, { n = 6 } = {}) => {
        const a = angle % (2 * Math.PI);
        const edgeAngle = 2 * Math.PI / n;
        const edgeIndex = Math.floor(a / edgeAngle);
        const edgeProgress = (a - edgeIndex * edgeAngle) / edgeAngle;
        const angle1 = edgeIndex * edgeAngle;
        const angle2 = ((edgeIndex + 1) % n) * edgeAngle;
        const x1 = Math.cos(angle1) * radius;
        const y1 = Math.sin(angle1) * radius;
        const x2 = Math.cos(angle2) * radius;
        const y2 = Math.sin(angle2) * radius;

        return {
            x: x1 + (x2 - x1) * edgeProgress,
            y: y1 + (y2 - y1) * edgeProgress,
        };
    },

    polyline: (angle, radius, { points = [

        { x: 0, y: 1 },
        { x: 0.8, y: 0.2 },
        { x: 1, y: -0.5 },
        { x: 0.4, y: -1 },
        { x: 0, y: -0.5 },
        { x: -0.4, y: -1 },
        { x: -1, y: -0.5 },
        { x: -0.8, y: 0.2 },

        /* { x: -1, y: 1 },
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: -1, y: -1 },
        { x: -1, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 1 },
        { x: 0.5, y: 1 },
        { x: 1, y: -1 },
        { x: 0.25, y: -1 },
        { x: 1, y: -1 },
        { x: 0.5, y: 1 }, */


    ] } = {}) => {
        function tracer(points) {
            const cx = points.reduce((s, p) => s + p.x, 0) / points.length;
            const cy = points.reduce((s, p) => s + p.y, 0) / points.length;
            const p = [...points]

            const n = p.length;
            return function (rad) {
                const TWO_PI = Math.PI * 2;
                rad = ((rad % TWO_PI) + TWO_PI) % TWO_PI;
                const t = (rad / TWO_PI) * n;
                const i = Math.floor(t);
                const alpha = t - i;
                const p1 = p[i];
                const p2 = p[(i + 1) % n];

                return {
                    x: ((1 - alpha) * p1.x + alpha * p2.x) * radius,
                    y: ((1 - alpha) * p1.y + alpha * p2.y) * radius
                };
            };
        }
        const t = tracer(points);
        return t(angle);
    },

    lissajous: (angle, radius, { freqX = 3, freqY = 2, phase = 0 } = {}) => ({
        x: Math.sin(freqX * angle + phase) * radius,
        y: Math.sin(freqY * angle) * radius,
    }),

    superellipse: (angle, radius, { n = 3, scaleX = 1, scaleY = 1 } = {}) => {
        const r = 1 / Math.pow(Math.pow(Math.abs(Math.cos(angle)), n) + Math.pow(Math.abs(Math.sin(angle)), n), 1 / n);
        return {
            x: Math.cos(angle) * r * radius * scaleX,
            y: Math.sin(angle) * r * radius * scaleY,
        };
    },

    rose: (angle, radius, { petals = 4 } = {}) => {
        const r = radius * Math.cos(petals * angle);
        return {
            x: Math.cos(angle) * r,
            y: Math.sin(angle) * r,
        };
    },

    epitrochoid: (angle, radius, { R = 4, r = 1, d = 2 } = {}) => {
        const k = R / r;
        const x = (R + r) * Math.cos(angle) - d * Math.cos((k + 1) * angle);
        const y = (R + r) * Math.sin(angle) - d * Math.sin((k + 1) * angle);
        return {
            x: x * radius / (R + r),
            y: y * radius / (R + r),
        };
    },
};

function getOrbitConfig(orbit) {
    return orbitData.find(o => o.orbit === orbit) || {};
}

function getOrbitShapeFunction(shapeName = 'ellipse', params) {
    const shape = orbitShapes[shapeName] || orbitShapes.ellipse;
    const rotationDegrees = params.rotation || getCSSVar('--menu-stage-rotation', 'float');
    const rotation = (rotationDegrees * Math.PI) / 180;

    return (angle, radius) => {
        const pos = shape(angle, radius, params);
        if (rotation !== 0) {
            const cosRot = Math.cos(rotation);
            const sinRot = Math.sin(rotation);
            const x = (pos.x * cosRot - pos.y * sinRot);
            const y = (pos.x * sinRot + pos.y * cosRot);
            return { x, y };
        }
        return pos;
    };
}

function getBaseRadius() {
    return getCSSVar('--menu-radius', 'int') || 180;
}

function getRingDuration() {
    return getCSSVar('--ring-rotation-duration', 'float') || 60;
}

function getNodeSize() {
    return getCSSVar('--button-size', 'int') || 100;
}

// get cached image by path
function getCachedImage(path) {
    return imageAssets[path] || null;
}

// preloadImages(['path/to/logo.png', 'path/to/background.jpg']);
// preloadImages([{path: 'logo.png', id: 'logo'}, {path: 'bg.jpg', id: 'bg'}]);
function preloadImages(imageList) {
    if (!Array.isArray(imageList)) return Promise.resolve();

    return Promise.all(
        imageList.map(item => {
            const path = typeof item === 'string' ? item : item.path;
            if (imageAssets[path]) return Promise.resolve();

            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    imageAssets[path] = img;
                    resolve();
                };
                img.onerror = resolve;
                img.src = path;
            });
        })
    );
}

const starCount = getCSSVar("--star-bg-particle-amount", "int") || Math.min(Math.floor(window.innerHeight / 5), 100);
let stars;
function resizeCanvas(density) {
    if (!canvas || !ctx) return;

    const dpr = (density || 1) * window.devicePixelRatio || 1;
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;

    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (density) return;
    buildCanvasMenuData();

    // starfield background
    if (!SIMPLE_MODE) {
        stars = [];
        const width = window.innerWidth;
        const height = window.innerHeight;
        for (let i = 0; i < starCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * (getCSSVar("--star-bg-particle-size", "float") || 3.5);
            const opacity = Math.random() * 0.5 + 0.5;
            const color = (Math.random() < 0.5 ? getCSSVar('--star-bg') : getCSSVar('--star-bg-2')) || 'rgba(0, 0, 0, 0)';
            const twinklePhase = Math.random() * 20;
            const parallaxFactor = 0.05 + Math.random() * 0.1;
            stars.push({ x, y, size, opacity, color, twinklePhase, parallaxFactor });
        }
    }
}

function screenToCanvas(x, y) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: x - rect.left,
        y: y - rect.top,
    };
}




let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
const CAMERA_SNAP_SPEED = 0.25;
const CAMERA_SNAP_SPEED_SLOWED = 0.04;
let cameraSnapSpeed = CAMERA_SNAP_SPEED;
function enableCameraControl() {
    el = canvas;
    if (SIMPLE_MODE) return;

    // begin drag
    function beginDrag(clientX, clientY) {
        isCameraFollowingOrbitFocus = false;
        isDragging = true;
        startX = clientX - currentX;
        startY = clientY - currentY;
        el.style.cursor = 'grab';
        cameraSnapSpeed = CAMERA_SNAP_SPEED;
    }

    // move during drag
    let lastDrag = 0;
    function dragTo(clientX, clientY) {
        const now = performance.now();
        if (now - lastDrag < 16) return;
        lastDrag = now;
        if (!isDragging) return;
        currentX = clientX - startX;
        currentY = clientY - startY;
    }

    // end drag
    function endDrag() {
        isDragging = false;
        el.style.cursor = 'default';
        if (currentX * currentY != 0) setButtonViz(centerBtn, true);
    }

    // mouse events
    el.addEventListener('mousedown', (e) => { beginDrag(e.clientX, e.clientY); });
    window.addEventListener('mousemove', (e) => { dragTo(e.clientX, e.clientY); });
    window.addEventListener('mouseup', endDrag);

    // touch events
    el.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        beginDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        dragTo(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchend', endDrag);

    // trackpad events
    el.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (Math.abs(e.deltaX) < 100 && Math.abs(e.deltaY) < 100) {
            currentX -= e.deltaX * 1.5;
            currentY -= e.deltaY * 1.5;
            setElTransform(el, currentX, currentY, null, offsetMainMenu);
        }
    }, { passive: false });
}

function snapCameraToCenter() {
    currentX = 0;
    currentY = 0;
    setButtonViz(centerBtn, false);
    cameraSnapSpeed = CAMERA_SNAP_SPEED_SLOWED;
}
centerBtn?.addEventListener('click', () => {
    if (focusedOrbitMenuIds.length) {
        isCameraFollowingOrbitFocus = true;
        cameraSnapSpeed = CAMERA_SNAP_SPEED;
        return;
    }
    snapCameraToCenter();
});




const particleEmitRate = getCSSVar('--particle-emit-rate', 'int');
const particleSize = getCSSVar('--particle-size', 'float') || 1.5;
const particleOpacity = getCSSVar('--particle-opacity', 'float') || 0.8;
const particleSpeed = getCSSVar('--particle-speed', 'float') || 1;
const particleDamping = getCSSVar('--particle-damping', 'float') || 0.999;
const particleMaxLife = getCSSVar('--particle-max-life', 'int') || 120;
const particleSpread = getCSSVar('--particle-spread', 'float');
function buildCanvasMenuData() {
    if (!Array.isArray(menuItems) || !Array.isArray(orbitData)) return;

    const menus = SIMPLE_MODE ? menuItems.filter(m => m.menuId === 'logoHitbox') : menuItems;

    // Preload menu images and the logo only when its hitbox was added.
    const menuImagePaths = menus
        .filter(menu => menu.image)
        .map(menu => `${menu.image}`);
    if (menus.some(menu => menu.menuId === 'logoHitbox') && mainMenuLogo) menuImagePaths.push(mainMenuLogo);
    preloadImages(menuImagePaths);

    const groups = new Map();
    menus.forEach(menu => {
        if (menu.hidden) return;

        const orbit = menu.orbit;
        const oConfig = getOrbitConfig(orbit);

        const layer = oConfig?.orbitNum ? oConfig.orbitNum : orbit;

        let group = groups.get(orbit);
        if (!group) {
            const scaleX = oConfig?.scaleX || getCSSVar('--menu-orbit-scale-x') * getCSSVar('--menu-stage-scale') || 1;
            const scaleY = oConfig?.scaleY || getCSSVar('--menu-orbit-scale-y') * getCSSVar('--menu-stage-scale') || 1;
            const rotation = oConfig?.rotation || 0;

            group = {
                orbit,
                layer: oConfig?.orbitNum || orbit,
                phase: orbitSets[orbit + 'phase'] || (orbitSets[orbit + 'phase'] = Math.random() * Math.PI * 2),
                direction: oConfig?.direction || (layer % 2 === 0 ? -1 : 1),
                scaleX,
                scaleY,
                offsetX: oConfig?.offsetX || 0,
                offsetY: oConfig?.offsetY || 0,
                rotation,
                centerMenuId: oConfig?.center || null,
                hideRing: oConfig?.hideRing || false,
                shapeName: oConfig?.orbitShape || DEFAULT_ORBIT_SHAPE,
                shapeParams: {
                    scaleX,
                    scaleY,
                    rotation,
                    ...oConfig?.orbitShapeParams
                },
                items: [],
            };
            group.getOrbitPosition = getOrbitShapeFunction(group.shapeName, {
                ...group.shapeParams,
            });
            groups.set(orbit, group);
        }

        group.items.push({ menu });
    });

    orbitGroups = Array.from(groups.values()).sort((a, b) => a.layer - b.layer);

    canvasMenuNodes = [];

    orbitGroups.forEach(group => {
        const count = group.items.length;
        const layer = group.layer;
        const orbitRadius = layer === 0 ? 0 : (getBaseRadius() * layer * 1.2 + 60);

        group.items.forEach((entry, index) => {
            const baseAngle = (index / Math.max(1, count)) * Math.PI * 2;
            const menu = entry.menu;
            const size = Math.max(20, (menu.scale || 1) * getNodeSize() / 2) * getCSSVar('--menu-stage-scale');
            const sizeTrue = size;

            canvasMenuNodes.push({
                menu,
                group,
                baseAngle,
                orbitRadius,
                size,
                sizeTrue,
                x: 0,
                y: 0,
                prevX: 0,
                prevY: 0,
                glowRadius: size + 30,
                glowOpacity: 0,
                particleOpacity: 1,
                particles: [],
            });
        });
    });
}



let prevCenterX = 0;
let prevCenterY = 0;
let centerX = 0;
let centerY = 0;
let cursorX = 0;
let cursorY = 0;
let logoHover = 0;
let buffer = null
const focusedOrbitMenuIds = [];
// Focused orbit state supports nested focusChildren menus and camera animation.
const FOCUSED_ORBIT_DIM_OPACITY = 0.05;
let focusedOrbitZoom = 1;
let focusedOrbitZoomTarget = 1;
let isCameraFollowingOrbitFocus = false;
let isExitingFocusedOrbit = false;

function hasFocusedAncestor(menu) {
    // Descendants stay hidden until their nearest focused parent is selected.
    let parentId = menu.parent;
    while (parentId) {
        const parent = getMenuData(parentId);
        if (!parent) return false;
        if (parent.focusChildren) return true;
        parentId = parent.parent;
    }
    return false;
}

function getFocusedOrbitMenuId() {
    return focusedOrbitMenuIds.at(-1) || null;
}

function getNodeOpacityTarget(node) {
    // Show only the focused menu and its direct children; dim unrelated root menus.
    const focusedMenuId = getFocusedOrbitMenuId();
    if (!focusedMenuId) return hasFocusedAncestor(node.menu) ? 0 : 1;
    if (node.menu.menuId === focusedMenuId || node.menu.parent === focusedMenuId) return 1;
    if (hasFocusedAncestor(node.menu)) return 0;
    return FOCUSED_ORBIT_DIM_OPACITY;
}

function focusOrbitMenu(menuId) {
    // Enter an opt-in focusChildren menu instead of opening its content page.
    const menu = getMenuData(menuId);
    const hasChildren = menuItems.some(candidate => candidate.parent === menuId && !candidate.hidden);
    if (!menu?.focusChildren || !hasChildren) return false;

    isExitingFocusedOrbit = false;
    focusedOrbitMenuIds.push(menuId);
    isCameraFollowingOrbitFocus = true;
    focusedOrbitZoomTarget = getCSSVar('--menu-stage-scale-zoom', 'float') || 1.5;
    changeBackBtnText('Back');
    applyUIState('FOCUSED_ORBIT');
    menuIsOpen = false;
    window.setOrbitFocusHistory?.(menuId);
    return true;
}

function restoreOrbitFocusFromURL(menuId) {
    // Rebuild every focused ancestor from f=<menuId> on load or browser navigation.
    const menu = getMenuData(menuId);
    if (!menu?.focusChildren) return false;

    isExitingFocusedOrbit = false;
    focusedOrbitMenuIds.length = 0;
    const focusPath = [];
    let current = menu;
    while (current) {
        if (current.focusChildren) focusPath.unshift(current.menuId);
        current = current.parent ? getMenuData(current.parent) : null;
    }

    focusPath.forEach(id => focusedOrbitMenuIds.push(id));
    isCameraFollowingOrbitFocus = true;
    focusedOrbitZoomTarget = getCSSVar('--menu-stage-scale-zoom', 'float') || 1.5;
    applyUIState('FOCUSED_ORBIT');
    menuIsOpen = false;
    return true;
}

function exitFocusedOrbitMenu(returnToMain = false) {
    // The dedicated UI control normally pops one level; returnToMain clears all levels.
    if (!focusedOrbitMenuIds.length) return false;

    if (returnToMain) focusedOrbitMenuIds.length = 0;
    else focusedOrbitMenuIds.pop();
    if (focusedOrbitMenuIds.length) {
        focusedOrbitZoomTarget = getCSSVar('--menu-stage-scale-zoom', 'float') || 1.5;
        isCameraFollowingOrbitFocus = true;
        changeBackBtnText('Back');
    } else {
        isExitingFocusedOrbit = true;
        focusedOrbitZoomTarget = 1;
        isCameraFollowingOrbitFocus = false;
        applyUIState('MAIN_MENU');
        cameraSnapSpeed = CAMERA_SNAP_SPEED;
    }
    return true;
}

window.focusOrbitMenu = focusOrbitMenu;
// Expose focus helpers to the regular navigation and URL handlers in main.js.
window.exitFocusedOrbitMenu = exitFocusedOrbitMenu;
window.isOrbitFocusActive = () => focusedOrbitMenuIds.length > 0;
window.getFocusedOrbitMenuId = getFocusedOrbitMenuId;
// The menu that becomes focused after the next Return to Orbit action.
window.getFocusedOrbitReturnMenuId = () => focusedOrbitMenuIds.at(-2) || null;
window.restoreOrbitFocusFromURL = restoreOrbitFocusFromURL;
window.resumeOrbitFocusCameraFollow = () => {
    // Closing focused child content resumes follow unless the user drags again.
    if (focusedOrbitMenuIds.length) isCameraFollowingOrbitFocus = true;
};
function drawCanvasMenu(t) {
    if (!isCanvasMenuReady || !ctx) return;

    if (!canvasInitTime) canvasInitTime = t;
    const sec = (t - canvasInitTime) / 1000;

    // first frame
    if (sec == 0) {
        centerX = window.innerWidth / 2 + getCSSVar("--menu-orbit-offset-x", "int");
        centerY = window.innerHeight / 2 + getCSSVar("--menu-orbit-offset-y", "int");
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const focusedNode = canvasMenuNodes.find(node => node.menu.menuId === getFocusedOrbitMenuId());
    if (focusedNode && isCameraFollowingOrbitFocus) {
        // Follow the focused menu until a drag explicitly releases the camera.
        currentX += (width / 2 - focusedNode.x) * 0.1;
        currentY += (height / 2 - focusedNode.y) * 0.1;
        cameraSnapSpeed = CAMERA_SNAP_SPEED;
    }
    focusedOrbitZoom += (focusedOrbitZoomTarget - focusedOrbitZoom) * 0.1;
    const centerXT = width / 2 + currentX + getCSSVar("--menu-orbit-offset-x", "int");
    const centerYT = height / 2 + currentY + getCSSVar("--menu-orbit-offset-y", "int");
    centerX += (centerXT - centerX) * cameraSnapSpeed;
    centerY += (centerYT - centerY) * cameraSnapSpeed;
    const deltaX = centerX - prevCenterX;
    const deltaY = centerY - prevCenterY;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = getCSSVar('--bg') || '#000000';
    ctx.fillRect(0, 0, width, height);

    const bgColor = getCSSVar('--bg') || '#000000';
    const bgColor2 = getCSSVar('--bg-2') || '#000000';
    const bgGlow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 1200);
    bgGlow.addColorStop(0.3, hex2rgba(bgColor, { a: 1 }));
    bgGlow.addColorStop(1, hex2rgba(bgColor2, { a: 1 }));
    ctx.fillStyle = bgGlow;
    ctx.fillRect(0, 0, width, height);

    // draw stars
    stars?.forEach(star => {
        const offsetX = (centerX - width / 2) * star.parallaxFactor;
        const offsetY = (centerY - height / 2) * star.parallaxFactor;
        const x = ((star.x + offsetX) % width + width) % width;
        const y = ((star.y + offsetY) % height + height) % height;
        const radius = Math.max(Math.cos((sec + star.twinklePhase) / 2) + 0.5, 0) * star.size;
        const glowRadius = radius * 10;

        ctx.globalAlpha = star.opacity;

        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        const color = star.color;
        glow.addColorStop(0, hex2rgba(color, { a: 0.1 }));
        glow.addColorStop(1, hex2rgba(color, { a: 0 }));
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Resolve parent positions before drawing trails so centered child orbits use this frame's parent location.
    const positionedNodes = new Set();
    function positionNode(node) {
        if (positionedNodes.has(node)) return;

        const group = node.group;
        const layer = group.layer;
        const duration = getRingDuration() * Math.max(1, layer);
        const omega = layer === 0 ? 0 : ((2 * Math.PI) / duration) * group.direction;
        const angle = node.baseAngle + (omega * sec) + group.phase;
        const ringRadius = layer === 0 ? 0 : (getBaseRadius() * layer * 1.2 + 60);
        const hasCenter = group.centerMenuId && layer !== 0;

        let originX = centerX + (group.offsetX || 0);
        let originY = centerY + (group.offsetY || 0);
        if (hasCenter) {
            const centerNode = canvasMenuNodes.find(n => n.menu.menuId === group.centerMenuId);
            if (centerNode) {
                positionNode(centerNode);
                originX = centerNode.x + (group.offsetX || 0);
                originY = centerNode.y + (group.offsetY || 0);
            }
        }

        const pos = group.getOrbitPosition(angle, ringRadius);
        node.x = originX + pos.x;
        node.y = originY + pos.y;
        positionedNodes.add(node);
    }
    canvasMenuNodes.forEach(positionNode);

    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.scale(focusedOrbitZoom, focusedOrbitZoom);
    ctx.translate(-width / 2, -height / 2);

    // draw semi-transparent background ring geometry
    orbitGroups.forEach(group => {
        if (group.hideRing) return;

        const groupNodes = canvasMenuNodes.filter(node => node.group === group);
        const opacityTarget = Math.max(...groupNodes.map(getNodeOpacityTarget));
        group.opacity = (group.opacity ?? opacityTarget) + (opacityTarget - (group.opacity ?? opacityTarget)) * 0.1;
        if (group.opacity < 0.01) return;

        const layer = group.layer;
        if (layer === 0) return;

        const orbitRadius = getBaseRadius() * layer * 1.2 + 60;
        let originX = centerX;
        let originY = centerY;

        const hasCenter = group.centerMenuId;
        if (hasCenter) {
            const centerNode = canvasMenuNodes.find(n => n.menu.menuId === group.centerMenuId);
            if (centerNode) {
                originX = centerNode.x;
                originY = centerNode.y;
            }
        }
        const offsetX = (group.offsetX || 0) /* + !hasCenter ? getCSSVar("--menu-orbit-offset-x", "float") : 0 */;
        const offsetY = (group.offsetY || 0) /* + !hasCenter ? getCSSVar("--menu-orbit-offset-y", "float") : 0 */;

        const ringColor = getCSSVar("--ring");
        const ringOpacity = getCSSVar("--ring-opacity");
        const ringThickness = getCSSVar("--ring-thickness", "float") || 1;
        const ringPulseSpeed = getCSSVar("--ring-pulse-speed", "float");

        ctx.beginPath();
        ctx.strokeStyle = hex2rgba(ringColor, { a: ringOpacity });
        ctx.lineWidth = ringThickness;
        if (ringPulseSpeed) {
            ctx.lineWidth = Math.max(Math.cos(sec * ringPulseSpeed + layer) * 1.5 + 2, 0.5) * (ringThickness);
        }
        ctx.globalAlpha = group.opacity;

        const segments = 360;
        for (let i = 0; i <= segments; i++) {
            const angle = (i / segments) * Math.PI * 2;
            const pos = group.getOrbitPosition(angle, orbitRadius);
            const x = originX + pos.x + offsetX;
            const y = originY + pos.y + offsetY;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
    });

    let logoIsHover = false;

    // compute positions and draw nodes
    canvasMenuNodes.forEach(node => {
        const opacityTarget = getNodeOpacityTarget(node);
        node.opacity = (node.opacity ?? opacityTarget) + (opacityTarget - (node.opacity ?? opacityTarget)) * 0.1;
        const particleOpacityTarget = isExitingFocusedOrbit || (getFocusedOrbitMenuId() && opacityTarget < 1) ? 0 : 1;
        node.particleOpacity += (particleOpacityTarget - node.particleOpacity) * 0.1;
        if (particleOpacityTarget === 0 && node.particleOpacity <= 0.01) {
            node.particles.length = 0;
        }
        if (node.opacity < 0.01) return;

        const group = node.group;
        const layer = group.layer;
        const duration = getRingDuration() * Math.max(1, layer);
        const direction = group.direction;
        const omega = layer === 0 ? 0 : ((2 * Math.PI) / duration) * direction;
        const angle = node.baseAngle + (omega * sec) + group.phase;
        const ringRadius = layer === 0 ? 0 : (getBaseRadius() * layer * 1.2 + 60);

        const hasCenter = group.centerMenuId && layer !== 0;

        const offsetX = (group.offsetX || 0) /* + !hasCenter ? getCSSVar("--menu-orbit-offset-x", "float") : 0 */;
        const offsetY = (group.offsetY || 0) /* + !hasCenter ? getCSSVar("--menu-orbit-offset-y", "float") : 0 */;
        let originX = centerX + offsetX;
        let originY = centerY + offsetY;
        if (node.menu.menuId === "logoHitbox") {
            originX -= getCSSVar("--menu-orbit-offset-x", "int");
            originY -= getCSSVar("--menu-orbit-offset-Y", "int");
        }

        if (hasCenter) {
            const centerNode = canvasMenuNodes.find(n => n.menu.menuId === group.centerMenuId);
            if (centerNode) {
                originX = centerNode.x + group.offsetX;
                originY = centerNode.y + group.offsetY;
            }
        }

        const pos = group.getOrbitPosition(angle, ringRadius);
        const x = originX + pos.x;
        const y = originY + pos.y;
        node.x = x;
        node.y = y;

        // particle logic
        node.particles.forEach(p => {
            p.x += deltaX;
            p.y += deltaY;
        });
        
        const dx = node.x - node.prevX - deltaX;
        const dy = node.y - node.prevY - deltaY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        if (speed > 0.1 && node.particleOpacity > 0.01) {
            const dirX = -dx / speed;
            const dirY = -dy / speed;
            const numEmit = Math.random() < (particleEmitRate / 60) ? 1 : 0;
            for (let i = 0; i < numEmit; i++) {
                const spread = (Math.random() - 0.5) * particleSpread;
                const angle = Math.atan2(dirY, dirX) + spread;
                const xOff = Math.cos(angle) * node.size;
                const yOff = Math.sin(angle) * node.size;
                const vx = Math.cos(angle) * particleSpeed;
                const vy = Math.sin(angle) * particleSpeed;
                const px = node.x + xOff;
                const py = node.y + yOff;
                node.particles.push({
                    x: px,
                    y: py,
                    vx: vx,
                    vy: vy,
                    life: particleMaxLife,
                    size: Math.random() * particleSize + 0.5 * node.size / getNodeSize(),
                });
            }
        }
        node.prevX = node.x;
        node.prevY = node.y;

        // update particles
        node.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= particleDamping;
            p.vy *= particleDamping;
            p.life--;
        });
        node.particles = node.particles.filter(p => p.life > 0);



        const safeMargin = 1.5 * node.size;
        if (x < -safeMargin || x > width + safeMargin || y < -safeMargin || y > height + safeMargin) return;

        const isHovered = hoveredNode === node;
        logoIsHover = logoIsHover || !menuIsOpen && isHovered && node.menu.menuId === 'logoHitbox';

        const color = getCSSColor(node.menu.color) || '#00000000';
        ctx.save();
        ctx.globalAlpha = node.opacity;

        // Draw trails before the menu's glow and circle so the node stays in front.
        node.particles.forEach(p => {
            const alpha = p.life / particleMaxLife;
            ctx.globalAlpha = node.opacity * alpha * particleOpacity * node.particleOpacity;
            ctx.globalCompositeOperation = 'lighten';
            ctx.fillStyle = hex2rgba(color);
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = node.opacity;
        ctx.globalCompositeOperation = 'source-over';

        // node shadow glow / border
        ctx.beginPath();

        const glowRadius = isHovered ? node.size + 50 : node.size + 20;
        const glowOpacity = isHovered ? 0.8 : 0.5;

        node.glowRadiusT = glowRadius;
        node.glowRadius += (node.glowRadiusT - node.glowRadius) * 0.2;
        node.glowOpacityT = glowOpacity;
        node.glowOpacity += (node.glowOpacityT - node.glowOpacity) * 0.2;

        ctx.arc(x, y, node.glowRadius, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(x, y, 0, x, y, node.glowRadius);
        glow.addColorStop(0, hex2rgba(color, { a: color == '#00000000' ? 0 : node.glowOpacity }));
        glow.addColorStop(1, hex2rgba(color, { a: 0 }));
        ctx.fillStyle = glow;
        ctx.fill();

        const canHoverScale = getNodeOpacityTarget(node) === 1;
        function calculateNodeScale() {
            if (!canHoverScale) return 1;
            const maxDist = 300;

            let zoom = 1;

            const dx = cursorX - x;
            const dy = cursorY - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            zoom = 1 + Math.max(0, (1 - dist / maxDist)) * 0.375;
            return zoom;
        }
        node.sizeT = calculateNodeScale() * node.sizeTrue;
        node.size += (node.sizeT - node.size) * 0.1;

        // node circle
        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = getCSSColor(node.menu.color) || '#00000000';
        ctx.fill();

        // node stroke
        ctx.strokeStyle = hex2rgba(color, { a: color == '#00000000' ? 0 : node.glowOpacity - 0.4 });
        ctx.lineWidth = node.glowRadius * 0.05;
        ctx.stroke();

        // node label
        if (node.menu.showTitle) {
            const textSize = node.size / getNodeSize();
            const titleFontSize = clamp(
                28 * textSize,
                getCSSVar('--menu-title-font-size-min', 'float'),
                getCSSVar('--menu-title-font-size-max', 'float')
            );
            ctx.font = `${titleFontSize}px Main, Arial, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
            const label = node.menu.title || node.menu.menuId;
            /* const shortLabel = label.length > 20 ? label.slice(0, 20) + '...' : label; */
            ctx.fillText(label, x, y + 130 * textSize);
        }

        // node icon
        const path = `${node.menu.image}`;
        if (node.menu.image && getCachedImage(path)) {
            const img = getCachedImage(path);
            const maxSize = node.size * 2 * (node.menu.imageScale || 1);
            drawCircularImage(ctx, img, x, y, maxSize);
        }

        ctx.restore();
    });

    if (isExitingFocusedOrbit && canvasMenuNodes.every(node => node.particleOpacity <= 0.01)) {
        isExitingFocusedOrbit = false;
    }

    const hasLogoHitbox = canvasMenuNodes.some(node => node.menu.menuId === 'logoHitbox');
    if (hasLogoHitbox) {
        const logoCenterX = centerX - getCSSVar("--menu-orbit-offset-x", "int");
        const logoCenterY = centerY - getCSSVar("--menu-orbit-offset-y", "int");
        const color = getCSSVar('--logo-glow') || '#00000000';
        const logoHoverT = logoIsHover ? 1 : 0;
        logoHover += (logoHoverT - logoHover) * 0.1;
        ctx.arc(logoCenterX, logoCenterY, 150, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(logoCenterX, logoCenterY, 0, logoCenterX, logoCenterY, 150);
        glow.addColorStop(0, hex2rgba(color, { a: logoHover * 0.3 }));
        glow.addColorStop(1, hex2rgba(color, { a: 0 }));
        ctx.fillStyle = glow;
        ctx.fill();

        drawImageCentered(ctx, imageAssets[mainMenuLogo], logoCenterX, logoCenterY, 200 * getCSSVar('--menu-stage-scale') + logoHover * 20);

        const textOffset = MAIN_MENU_TEXT_OFFSET_Y + (logoHover * 10);
        ctx.globalAlpha = Math.cos(sec * 3) * 0.25 + 0.75;
        ctx.fillStyle = getCSSVar('--white');
        ctx.font = `${16 * getCSSVar('--menu-stage-scale')}px Main, Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(MAIN_MENU_TITLE, logoCenterX, logoCenterY + textOffset * getCSSVar('--menu-stage-scale'));
        ctx.globalAlpha = Math.cos((sec + 0.4) * 3) * 0.25 + 0.75;
        ctx.fillStyle = getCSSVar('--info-text-color');
        ctx.font = `${12 * getCSSVar('--menu-stage-scale')}px Main, Arial, sans-serif`;
        ctx.fillText(MAIN_MENU_SUBTITLE, logoCenterX, logoCenterY + (textOffset + 20) * getCSSVar('--menu-stage-scale'));
        ctx.globalAlpha = 1;
    }
    ctx.restore();

    // global glow
    const glowFXOpacity = getCSSVar("--glowfx-opacity", "float")
    function glowFX() {
        if (sec == 0) {
            buffer = document.createElement('canvas');
            mainMenu.after(buffer)
        }
        buffer.id = "mainMenuCopy";
        const bufferCtx = buffer.getContext('2d');

        const downscaleX = 8;
        const downscaleY = 8;
        const dpr = window.devicePixelRatio;
        const rect = canvas.getBoundingClientRect();

        const bufferWidth = Math.max(1, Math.round(rect.width * dpr / downscaleX));
        const bufferHeight = Math.max(1, Math.round(rect.height * dpr / downscaleY));
        if (buffer.width !== bufferWidth || buffer.height !== bufferHeight) {
            buffer.width = bufferWidth;
            buffer.height = bufferHeight;
        }

        buffer.style.width = `${rect.width}px`;
        buffer.style.height = `${rect.height}px`;
        bufferCtx.globalAlpha = glowFXOpacity;
        bufferCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, bufferWidth, bufferHeight);
    }
    if (glowFXOpacity) glowFX();

    prevCenterX = centerX;
    prevCenterY = centerY;

    animationFrameId = window.requestAnimationFrame(drawCanvasMenu);
}

enableCameraControl();



function getNodeAtPoint(x, y) {
    if (focusedOrbitZoom !== 1) {
        x = window.innerWidth / 2 + (x - window.innerWidth / 2) / focusedOrbitZoom;
        y = window.innerHeight / 2 + (y - window.innerHeight / 2) / focusedOrbitZoom;
    }
    return canvasMenuNodes.find(node => {
        if ((node.opacity ?? 1) < 0.5) return false;
        const dx = node.x - x;
        const dy = node.y - y;
        return Math.sqrt(dx * dx + dy * dy) <= node.size + 4;
    });
}

let touchStartX = null;
let touchStartY = null;
let touchMoved = false;
const TOUCH_MOVE_THRESHOLD = 10;

function handlePointerMove(e) {
    if (menuIsOpen) return;
    const pos = screenToCanvas(e.clientX, e.clientY);
    cursorX = pos.x;
    cursorY = pos.y;
    const node = getNodeAtPoint(pos.x, pos.y);
    if (node !== hoveredNode) {
        hoveredNode = node;
        canvas.style.cursor = node ? 'pointer' : 'default';
    }
}

function handlePointerDown(e) {
    if (menuIsOpen) return;
    if (!hoveredNode) return;
    const menuId = hoveredNode.menu.menuId;
    if (!menuId) return;
    if (menuId === 'logoHitbox') {
        openLogo();
        hoveredNode = undefined;
        return;
    }
    if (menuId === getFocusedOrbitMenuId()) {
        openMainMenu(menuId);
        return;
    }
    if (focusOrbitMenu(menuId)) {
        hoveredNode = undefined;
        return;
    }
    openMainMenu(menuId);
}

function canvasInitMainMenu() {
    if (!canvas || !ctx) return;

    isCanvasMenuReady = true;

    canvas.style.touchAction = 'none';
    canvas.style.display = 'block';
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.zIndex = '8';
    canvas.classList.remove('hidden');

    resizeCanvas();

    buildCanvasMenuData();

    window.addEventListener('resize', () => resizeCanvas());
    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('mousedown', handlePointerDown);

    canvas.addEventListener('touchstart', (e) => {
        hoveredNode = null;
        if (e.touches.length > 0) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchMoved = false;
        }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length === 0) return;
        if (touchStartX !== null && touchStartY !== null && !touchMoved) {
            const dx = e.touches[0].clientX - touchStartX;
            const dy = e.touches[0].clientY - touchStartY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > TOUCH_MOVE_THRESHOLD) {
                touchMoved = true;
                hoveredNode = null;
                canvas.style.cursor = 'default';
            }
        }
        if (!touchMoved) {
            handlePointerMove({
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
            });
        }
    }, { passive: true });

    canvas.addEventListener('touchend', (e) => {
        if (!touchMoved && hoveredNode) {
            handlePointerDown({
                clientX: e.changedTouches[0].clientX,
                clientY: e.changedTouches[0].clientY
            });
        }
        touchStartX = null;
        touchStartY = null;
        touchMoved = false;
        hoveredNode = null;
    }, { passive: true });

    if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    animationFrameId = window.requestAnimationFrame(drawCanvasMenu);

    if (typeof mainMenu !== 'undefined' && mainMenu) {
        mainMenu.style.opacity = 1;
    }
}

let menuIsOpen = false;
function openMainMenu(menuId) {
    hoveredNode = null;
    cursorX = null;
    cursorY = null;
    openMenuById(menuId);
    menuIsOpen = true;
    resizeCanvas(0.25);
}

window.initMainMenu = canvasInitMainMenu;

if (document.readyState === 'complete') {
    canvasInitMainMenu();
} else {
    window.addEventListener('load', canvasInitMainMenu);
}