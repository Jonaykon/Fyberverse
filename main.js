// --------------------------
// CONFIG
// --------------------------

// Lazy loader base path
const LAZY_BASE = 'https://cdn.jsdelivr.net/gh/blurplebun/blurplebun.github.io/';
const LOCAL_MODE = 1; // if you don't use a cdn service to load images, just set this to true

// Sound control
const INIT_MASTER_VOL = 1;
const INIT_BGM_MASTER_VOL = 0.75;
const INIT_SFX_MASTER_VOL = 1;
let SFX_CLICK_VOL = 0.4;
let SFX_LINK_VOL = 0.3;
let SFX_PAGE_CLOSE_VOL = 0.5;
let SFX_PAGE_OPEN_VOL = 0.5;
let SFX_SWAP_VOL = 0.4;
let SFX_WARP_VOL = 0.4;

let MASTER_VOL = INIT_MASTER_VOL;
let BGM_MASTER_VOL = INIT_BGM_MASTER_VOL;
let SFX_MASTER_VOL = 0;

// If you prefer to always use an orbit-less interface, set this to true
let SIMPLE_MODE = getSimpleMode();
// Simple mode index data
const MAIN_MENU_TITLE = pickSplash();
const MAIN_MENU_SUBTITLE = 'artifyber.xyz';
const MAIN_MENU_TEXT_OFFSET_Y = 90;
const mainMenuLogo = 'images/menu-logo.png';
const SIMPLE_MODE_MENU_LOGO_SCALE = 1.5;

// Pagination settings
const INITIAL_CARD_LOAD = 24;
const LOAD_MORE_INCREMENT = 24;

function pickSplash() {
    if (new Date().getMonth() == 5) return "Happy pride month!";
    const filtered = splashLines.filter(s => !s.includes('<') /* && s.length < 30 */);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

// Links
const eFolder = "e";

let appLoaded = false;
let LOW_ANIMATION_MODE = false;




// --------------------------
// UTILS
// --------------------------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function getCSSVar(name, parse = 'string') {
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (parse === 'int') return parseInt(val) || 0;
    if (parse === 'float') return parseFloat(val) || 0;
    return val;
}

function setCSSVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}

// Detect mobile/tablet device
window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

function setLayoutViz(layout, viz) {
    if (viz) {
        layout.classList.remove('hidden');
        return;
    }
    layout.classList.add('hidden');
}

function layoutViz(layout) {
    return !layout.classList.contains('hidden');
}

function setButtonViz(button, viz) {
    button.classList.toggle('ui-hide', !viz);
}

function getMenuData(menuId) {
    const menu = menuItems.find(m => m.menuId === menuId);
    if (!menu) return console.warn(`Menu with id "${menuId}" not found.`);
    return menu;
}

function getCardData(menuId, cardId) {
    const menu = getMenuData(menuId);
    return menu ? menu.cards.find(c => c.cardId === cardId) : null;
}

function changeBackBtnText(text = "Back") {
    backBtn.querySelector('span').textContent = text;
}

async function copyToClipboard(button, textbox) {
    try {
        await navigator.clipboard.writeText(textbox.value);

        const originalText = button.textContent;
        button.textContent = 'Copied!';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);

    } catch (err) {
        console.error('Failed to copy: ', err);
        textbox.select();
        document.execCommand('copy');

        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }
}

function extractImagesFromHTML(html) {
    const regex = /<img[^>]+src="([^"]+)"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(html)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

function getThumbPath(originalPath) {
    return `thumb/${originalPath}`;
}

function isEmojiOnly(str) {
    const stringToTest = str.replace(/ /g, '');
    const emojiRegex = /^(?:(?:\p{RI}\p{RI}|\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(?:\u{200D}\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*)|[\u{1f900}-\u{1f9ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}])+$/u;
    return emojiRegex.test(stringToTest) && Number.isNaN(Number(stringToTest));
}

function tweenOut(start, target, speed, onUpdate) {
    let value = start;
    let last = performance.now();

    function update(now) {
        const dt = (now - last) / 16.67; // normalize to ~60fps
        last = now;

        value += (target - value) * speed * dt;
        onUpdate(value);

        if (Math.abs(value - target) > 0.005) {
            requestAnimationFrame(update);
        } else {
            onUpdate(target);
        }
    }

    requestAnimationFrame(update);
}

// example:
// const stop = tweenOut(0, 100, 0.1, v => console.log(v));

// is wide screen?
function checkWideScreen() {
    return false;
    /* if (SIMPLE_MODE) {
        contentView.style.maxWidth = '100%';
        contentView.style.margin = 0;
        detailView.style.maxWidth = '100%';
        detailView.style.margin = 0;
        return false;
    }
    return getCSSVar('--offset-main-menu-on-open') != '0'; */
}






// --------------------------
// BUTTON STATES
// --------------------------

playBgmBtn.style.display = 'none';

const UI_STATES = {
    MAIN_MENU: {
        backBtn: false,
        settingsBtn: true,
        playBgmBtn: true,
        centerBtn: true,
        downloadImgBtn: false
    },

    MENU_OPEN: {
        backBtn: true,
        settingsBtn: false,
        playBgmBtn: false,
        centerBtn: true,
        downloadImgBtn: false
    },

    DETAIL_VIEW: {
        backBtn: true,
        settingsBtn: false,
        playBgmBtn: false,
        centerBtn: false,
        downloadImgBtn: false
    },

    IMAGE_VIEW: {
        backBtn: false,
        settingsBtn: false,
        playBgmBtn: false,
        centerBtn: false,
        downloadImgBtn: true
    }
};

function applyUIState(stateName) {
    const state = UI_STATES[stateName];
    if (!state) return;

    setButtonViz(backBtn, state.backBtn);
    setButtonViz(settingsBtn, state.settingsBtn);
    setButtonViz(playBgmBtn, state.playBgmBtn);
    setButtonViz(centerBtn, state.centerBtn);
    setButtonViz(downloadImgBtn, state.downloadImgBtn);

    if (stateName === "MAIN_MENU") {
        setButtonViz(rerollBtn, false);
        if (bgmEnabled) setButtonViz(playBgmBtn, false);
        if (currentX + currentY == 0) setButtonViz(centerBtn, false);
    }

    if (stateName === "MENU_OPEN") {
        setButtonViz(rerollBtn, false);
        if (currentX + currentY == 0) setButtonViz(centerBtn, false);
    }
}



// --------------------------
// MAIN MENU
// --------------------------

// copy link
const copyLinkIcon = `
    <span class="copy-link" title="Copy shareable link">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z"/>
        </svg>
    </span>
`;

const copiedLinkIcon = `
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
    </svg>
`

function copyLinkHandler(layout, menuId, cardId = null) {
    let shareURL = !eFolder ? `${location.origin}${location.pathname}?m=${menuId}` : `${location.origin}${location.pathname}${eFolder}/${menuId}`;
    if (cardId) shareURL = !eFolder ? `${location.origin}${location.pathname}?m=${menuId}&i=${cardId}` : `${location.origin}${location.pathname}${eFolder}/${menuId}/${cardId}`;
    layout.querySelector('.copy-link').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(shareURL);
        const icon = e.currentTarget;
        icon.classList.add('copied');
        icon.title = 'Link copied!';
        setTimeout(() => {
            icon.classList.remove('copied');
            icon.title = 'Copy shareable link';
        }, 1500);

        playSound('sfxLink', SFX_LINK_VOL);
    });
}



function blurMainMenu(bool) {
    if (bool) {
        mainMenu.classList.add('blur');
        return;
    }
    mainMenu.classList.remove('blur');
}

let openSingle = false;



// --------------------------
// SIMPLE MODE
// --------------------------
function simpleModePushMenus(menus, m, banner = false) {
    menus.push({
        linkId: m.menuId,
        isInMenu: true,
        banner: banner
    });
    m.isInMenu = true;
}
function simpleModeSeparateMenus(menus, title, excerpt = null) {
    t = '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>' + title;
    e = excerpt ? '<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>' + excerpt : '';
    menus.push({
        title: t,
        subtitle: e
    });
}
function simpleModeCreateMenus(menus, menuMatches) {
    orbitData.forEach(o => {
        let separateOnce = false;
        menuMatches.forEach(m => {
            if (m.orbit == o.orbit) {
                if (!separateOnce) { simpleModeSeparateMenus(menus, o.title, o.desc); separateOnce = true; }
                simpleModePushMenus(menus, m);
            }
        });
    });

    let separateOnce = false;
    menuMatches.forEach(m => {
        if (!m.isInMenu) {
            if (!separateOnce) { simpleModeSeparateMenus(menus, "Uncategorized"); separateOnce = true; };
            simpleModePushMenus(menus, m);
        };
    });
}
function initSimpleMode() {
    menuItems.forEach(m => { if (!m.parent) m.parent = 'index'; });

    let menus = [];
    let menuMatches = menuItems.filter(menu => (!(menu.invisible || menu.hidden || menu.menuId == "logoHitbox")));

    // if menuLogoRedirect is set to a menu, prepend its content to the index menu
    const [redirectMenuId, redirectCardId] = menuLogoRedirect.split(":");
    let redirectMenu;
    if (redirectMenuId && !redirectCardId) {
        redirectMenu = getMenuData(redirectMenuId);
        if (redirectMenu && redirectMenu.cards) {
            menus.push(...redirectMenu.cards);
            menus.push({ separatorType: "space", title: "<br>", subtitle: "<br>" });
            menuMatches = menuMatches.filter(m => m.menuId !== redirectMenuId);
        }
    }

    if (menuMatches.length > 0) simpleModeCreateMenus(menus, menuMatches);
    const index = {
        menuId: "index",
        invisible: true,
        /* title: MAIN_MENU_TITLE, */
        title: "Main Menu",
        subtitle: MAIN_MENU_SUBTITLE,
        cards: menus,
        html: redirectMenu?.html || null
    }
    menuItems.push(index);
}

/* --------------------------
   Mode switcher
   -------------------------- */

// read SIMPLE_MODE from localStorage
function getSimpleMode() {
    // try localStorage first
    const saved = localStorage.getItem('simpleMode');
    if (saved !== null) {
        return saved === 'true' || saved === '1' ? 1 : 0;
    }

    // fallback to cookie for older browsers
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});

    if (cookies.simpleMode !== undefined) {
        return cookies.simpleMode === 'true' || cookies.simpleMode === '1' ? 1 : 0;
    }

    return 0;
}

// save SIMPLE_MODE preference
function setSimpleMode(value) {
    const boolValue = value ? 1 : 0;
    SIMPLE_MODE = boolValue;
    localStorage.setItem('simpleMode', boolValue.toString());
    document.cookie = `simpleMode=${boolValue}; path=/; max-age=${365 * 24 * 60 * 60}`; // 1 year expiry
    return boolValue;
}

const settingsBtn = document.getElementById('settingsBtn');
function toggleViewMode() {
    const newMode = !SIMPLE_MODE;
    if (confirm(`Switch to ${newMode ? 'Simple Mode' : 'Orbit Mode'}? Page will be reloaded.`)) {
        setSimpleMode(newMode);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
}





// --------------------------
// CONTENT VIEW
// --------------------------
function setCurrentMenu(id) { contentView.dataset.currentMenuId = id; }
function currentMenu() { return contentView.dataset.currentMenuId; }

// open menu with menu element and data
function openMenuById(menuId, showAll = false) {
    const targetMenu = menuItems?.find(m => m.menuId === menuId);
    if (!targetMenu) return console.warn(`Menu with id "${menuId}" not found.`);
    if (targetMenu.menuId === "random") {
        openRandom();
        setButtonViz(rerollBtn, true);
        return;
    }
    openMenu(null, targetMenu, showAll);
}

let currentM;
function openMenu(menu, m, showAll = false) {
    resetLayoutTransition();

    blurMainMenu(true);
    setLayoutViz(contentView, true);
    setLayoutViz(detailView, false);
    changeBackBtnText(m.parent && !openSingle ? getMenuData(m.parent).title : 'Close')
    applyUIState("MENU_OPEN");
    menuIsOpen = true;
    /* toggleMainMenuOffset(true); */

    const title = m.invisible ? m.title : m.title + copyLinkIcon;
    const subtitle = m.menuId.includes("nansenz") ? m.subtitle + `<div class="ticker-bar"><div class="ticker-text"></div></div>` : m.subtitle;
    contentViewTitle.innerHTML = title;
    contentViewSubtitle.innerHTML = subtitle || '';
    if (!m.invisible) copyLinkHandler(contentView, m.menuId);
    setCurrentMenu(m.menuId);

    // BGM transition when opening menu
    if (bgmEnabled && !bgmStop) {
        const rootId = m.menuId.split("-")[0];
        const newBgm = menuToBgm[rootId];

        if (silentMenus.has(rootId)) {
            fadeVolume(bgm[currentBgm], 0);

        } else if (newBgm && newBgm !== currentBgm) {
            fadeVolume(bgm[currentBgm], 0);
            fadeVolume(bgm[newBgm], 1);
            currentBgm = newBgm;

        } else if (!newBgm) {
            fadeVolume(bgm[currentBgm], 0);
            fadeVolume(bgm.fyberverse, 1);
            currentBgm = "fyberverse";
        }
    }

    playSound('sfxSwap', SFX_SWAP_VOL);
    renderContentGrid(m, true, showAll);
    currentM = m;
    setHistoryState(m.menuId);
}



// ------ character randomizer -------

const excludeFromRandomList = ['random', 'menuTemplate', 'floriverse'];
function excludeFromRandom(menuId) {
    let allow = true;
    excludeFromRandomList.forEach(id => {
        if (menuId.includes(id)) allow = false;
    });
    return !allow;
}

let characters = [];
let nextCharacter = null;
function getAllCharacters() {
    characters = [];
    menuItems.forEach(menu => {
        if (!menu.cards) return;
        if (menu.menuId === 'random') return;
        if (excludeFromRandom(menu.menuId)) return;
        menu.cards.forEach(card => { if (card.cardId && card.isCharacter) characters.push({ menu, card }); });
    });
    nextCharacter = randomNoRepeats(characters);
    return characters;
}

function randomNoRepeats(array) {
    let copy = array.slice();
    return function () {
        if (copy.length === 0) copy = array.slice();
        const index = Math.floor(Math.random() * copy.length);
        return copy.splice(index, 1)[0];
    };
}

function randomCharacter() {
    if (!nextCharacter) getAllCharacters();
    return nextCharacter();
}

let openedRandom = false;
function openRandom() {
    const { menu, card } = randomCharacter();
    openCardById(menu.menuId, card.cardId);
    setButtonViz(rerollBtn, true);
    openedRandom = true;
}

rerollBtn.addEventListener('click', () => { openRandom(); });



// the behavior for clicking cards that link to other menus
function menuCardBehavior(card, c) {
    const m = getMenuData(c.linkId);
    if (!m) return card.style.display = "none";
    const t = c.titleOverride || m.title;
    const s = c.subtitleOverride || m.subtitle;
    html = `
        <div class="card-text" style="background: color-mix(in srgb, ${m?.color || 'fff'} 10%, transparent)">
            <div class="card-text-title">${t}</div>
            ${s ? `<div class="card-text-excerpt">${s}</div>` : ''}
        </div>
        ${m.image ? `<img src="${m.image}" class="thumb card-thumb-flip" style="background-color:${m.color}; animation-delay:${-card.dataset.gridIndex / 5}s" draggable="false">` : ''}
        `;

    if (card.dataset.caption) html = `<div class="caption">${card.dataset.caption}</div>` + html;
    card.innerHTML = html;

    card.style.backgroundColor = 'transparent';
    card.style.border = `3px solid ${m.color}`;
    card.style.boxShadow = `inset 0 0 30px color-mix(in srgb, ${m.color} 50%, transparent)`;
    card.style.setProperty('--js-card-glow-color', m.color);

    card.addEventListener('click', () => { if (m) openMenuById(m.menuId); });
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = `color-mix(in srgb, ${m.color} 30%, transparent)`;
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = `transparent`;
    });
}

// the behavior for clicking cards that reference other cards
let openFromReference = null;
function referenceCardBehavior(card, c) {
    const [menuRefId, cardRefId] = c.reference.split(':');
    const isMenu = !cardRefId;

    if (isMenu) {
        const r = {};
        r.linkId = getMenuData(menuRefId).menuId;
        menuCardBehavior(card, r);
        return;
    }

    const r = getCardData(menuRefId, cardRefId);
    if (!r) {
        card.style.display = "none";
        return;
    }

    overrideCardData(card, r)
    setCardAttributes(card, r);
    if (card.dataset.isMenu) { menuCardBehavior(card, r); return; }
    defaultCardBehavior(card, r)
}

// set / reset override dataset
function overrideCardData(card, c, override = true) {
    if (!override) {
        c.titleOverride = '';
        c.subtitleOverride = '';
        setCardHTML(card, c);
        return;
    }
    c.titleOverride = card.dataset.overrideTitle || '';
    c.subtitleOverride = card.dataset.overrideSubtitle || '';
}

// the default behavior for clicking a regular card
function defaultCardBehavior(card, c) {
    setCardHTML(card, c);
    card.addEventListener('click', () => {
        if (c.url) return window.open(c.url, '_blank');
        if (!card.dataset.isUnclickable) openCard(card, c);
    });
}

// handles the innerHTML of default cards (normal, url, unclickable)
function setCardHTML(card, c, r = null) {
    const t = c.titleOverride || c.title;
    const s = c.subtitleOverride || c.subtitle;
    let html = `
        <img src="${c.image}" class="thumb" draggable="false">
        <div class="card-text">
            <div class="card-text-title">${t}</div>
            ${s ? `<div class="card-text-excerpt">${s}</div>` : ''}
        </div>
        `;

    if (c.blank) html = `
        ${c.image ? `<img src="${c.image}" class="thumb" draggable="false">` : ''}
        `;

    if (!c.image) html = `
        <div class="card-text full">
            <div class="card-text-title">${t}</div>
            ${s ? `<div class="card-text-excerpt">${s}</div>` : ''}
        </div>
        `;

    if (r) {
        html = `
            <img src="${r.image}" class="thumb" draggable="false">
            <div class="card-text">
                <div class="card-text-title">${r.title}</div>
                ${r.subtitle ? `<div class="card-text-excerpt">${r.subtitle}</div>` : ''}
            </div>
            `;

        if (r.blank) html = `
            ${r.image ? `<img src="${r.image}" class="thumb" draggable="false">` : ''}
            `;

        if (!r.image) html = `
            <div class="card-text full">
                <div class="card-text-title">${r.title}</div>
                ${r.subtitle ? `<div class="card-text-excerpt">${r.subtitle}</div>` : ''}
            </div>
            `;
    }

    if (card.dataset.caption) html = `<div class="caption">${card.dataset.caption}</div>` + html;
    card.innerHTML = processImagesInHTML(html);
}

// set card attributes
function setCardAttributes(card, c) {
    if (c.linkId) card.dataset.isMenu = c.linkId;
    if (c.reference) card.dataset.isReference = c.reference;
    if (c.url) card.dataset.url = c.url;
    if (c.banner) card.dataset.isBanner = c.banner;
    if (c.semibanner) {
        card.dataset.isSemiBanner = c.semibanner;
        c.banner = true;
        card.dataset.isBanner = true;
    }
    if (c.isCharacter) card.dataset.isCharacter = c.isCharacter;
    if (c.unclickable) card.dataset.isUnclickable = c.unclickable;
    if (c.blank) card.dataset.blank = c.blank;
}

// the behavior for card separators
function separatorBehavior(card, c) {
    card.classList.remove('card');
    card.classList.add('card-separator');
    if (c.separatorType === "space") {
        card.innerHTML = `
            <div class="card-separator-title">${c.title || ''}</div>
            <div class="card-separator-subtitle">${c.subtitle || ''}</div>
        `;
        return;
    } else if (c.separatorType === "break") {
        card.innerHTML = ``;
        card.style.margin = "0";
    } else {
        card.innerHTML = `
            <div class="card-separator-title">${c.title || ''}</div>
            <div class="card-separator-subtitle">${c.subtitle || ''}</div>
            <hr>
            `;
    }
}

// render the content grid from a menu data
let lastRenderedMenu = null;
function renderContentGrid(m, animate = true, showAll = false) {
    /* contentView.scrollTop = 0; */
    contentViewGrid.innerHTML = '';
    if (m.html) contentViewGrid.innerHTML = `<div class="content-view-html">${m.html}</div>`;
    contentViewGrid.classList.remove('no-margin');
    if (m.noMargin) contentViewGrid.classList.add('no-margin');

    setCSSVar('--content-view-grid-bg-color', `color-mix(in srgb, ${getCSSVar('--content-view-grid-bg-color-default')} ${getCSSVar('--content-view-grid-bg-color-opacity-default')}%, transparent)`);
    setCSSVar('--content-view-grid-bg-color-2', `color-mix(in srgb, ${getCSSVar('--content-view-grid-bg-color-2-default')} ${Math.min(getCSSVar('--content-view-grid-bg-color-opacity-default', 'float') + 20, 100)}%, transparent)`);
    if (m.gridColor) {
        setCSSVar('--content-view-grid-bg-color', `color-mix(in srgb, ${m.gridColor}  ${Math.min((m.gridOpacity || 0.1) * 100, 100)}%, transparent)`);
        setCSSVar('--content-view-grid-bg-color-2', `color-mix(in srgb, ${m.gridColor2 || m.gridColor}  ${Math.min((m.gridOpacity || 0.1) * 100 + 10, 100)}%, transparent)`);
    }

    let i = 0;
    let cardArray = [];
    const frag = document.createDocumentFragment();
    m.cards.forEach(c => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = c.cardId;

        card.dataset.gridIndex = i;
        cardArray.push(card);
        i++;

        overrideCardData(card, c, false);
        setCardAttributes(card, c);
        frag.appendChild(card);

        if (card.dataset.isMenu) { menuCardBehavior(card, c); return; }
        if (card.dataset.isReference) { referenceCardBehavior(card, c); return; }
        if (!c.cardId) { card.dataset.isSeparator = 'true'; separatorBehavior(card, c); return; }

        defaultCardBehavior(card, c)
    });
    contentViewGrid.appendChild(frag);

    // show more button
    if (!showAll) {
        const totalCards = cardArray.length;
        if (totalCards > INITIAL_CARD_LOAD) {
            let visibleCount = INITIAL_CARD_LOAD;
            
            cardArray.forEach((card, idx) => {
                if (idx >= visibleCount) card.style.display = 'none';
            });

            const loadMoreBtn = document.createElement('div');
            loadMoreBtn.className = 'card load-more-btn';
            loadMoreBtn.textContent = `+${totalCards - visibleCount}`;
            contentViewGrid.appendChild(loadMoreBtn);

            loadMoreBtn.addEventListener('click', function handler() {
                const nextVisible = Math.min(visibleCount + LOAD_MORE_INCREMENT, totalCards);
                for (let i = visibleCount; i < nextVisible; i++) cardArray[i].style.display = '';
                visibleCount = nextVisible;
                if (visibleCount >= totalCards) {
                    this.remove();
                } else {
                    this.textContent = `+${totalCards - visibleCount}`;
                }
            });
        }
    }

    if (lastRenderedMenu?.menuId != m.menuId) {
        contentView.scrollTop = 0;
        if (animate) animateCardFirstTime(cardArray);
        lastRenderedMenu = m;
    }
    if (m.menuId === "dailyartplus") snapshotViewer();
    internalCardHandler(contentViewGrid);
    initLazyLoader(contentViewGrid);
}

// animate card at first
function animateCardFirstTime(cardArray) {
    /*
    if (!LOW_ANIMATION_MODE) tweenOut(0.5, 1, 0.25, v => {
        contentViewGrid.style.scale = `${v} 1`;
    });
    */

    cardArray.forEach(card => {
        card.classList.add('no-transition');
        card.style.translate = "0 25px";
        card.style.opacity = 0;
        setTimeout(() => {
            card.classList.remove('no-transition');
            card.style.translate = "";
            card.style.opacity = "";
        }, (card.dataset.gridIndex + 1) * getCSSVar('--content-view-grid-cascade-transition-speed', 'int') / 10);
    });
}





// --------------------------
// DETAIL VIEW
// --------------------------

// open card by menu id and card id (strings)
function openCardById(menuId, cardId) {
    openMenuById(menuId, true);

    const menu = menuItems.find(m => m.menuId === menuId);
    if (!menu) return;
    const c = menu.cards.find(c => c.cardId === cardId);
    if (!c) return;

    const card = contentViewGrid.querySelector(`.card[data-id="${cardId}"]`);
    openCard(card, c);
}

// open card with card element and data
function openCard(card, c) {
    resetLayoutTransition();
    setLayoutViz(contentView, false);
    setLayoutViz(detailView, true);
    changeBackBtnText("Close");

    detailViewHeader.innerHTML = '';

    const active = card.cloneNode(true);
    active.classList.add('active');
    delete active.dataset.isBanner;
    delete active.dataset.isSemiBanner;
    overrideCardData(active, c, false);

    active.innerHTML += `<div class="copy-link-active-card-wrapper">${copyLinkIcon}</div>`

    // animate active card on creation
    active.classList.add('no-transition');
    active.style.translate = "10px";
    active.style.scale = "0.95";
    active.style.opacity = "1";
    detailViewContent.classList.add('no-transition');
    detailViewContent.style.translate = "8px 0";
    setTimeout(() => {
        active.classList.remove('no-transition');
        active.style.translate = "";
        active.style.scale = "";
        active.style.opacity = "";
        detailViewContent.classList.remove('no-transition');
        detailViewContent.style.translate = "";
    }, 1);


    if (!LOW_ANIMATION_MODE) {
        (function () {
            const cardText = active.querySelector('.card-text');
            if (!cardText) return;

            const cTExcerpt = cardText.querySelector('.card-text-excerpt');
            if (cTExcerpt) cTExcerpt.style.marginTop = '8px';
            const copyLinkWrapper = active.querySelector('.copy-link-active-card-wrapper');
            cardText.style.opacity = 0;
            copyLinkWrapper.style.opacity = 0;
            detailViewContent.style.height = 0;

            if (getCSSVar('--phone-mode') == 0) {
                active.style.height = `25%`;
                tweenOut(0, 1, 0.1, v => {
                    active.style.height = `${(v * 75) + 25}%`;
                    cardText.style.opacity = v;
                    copyLinkWrapper.style.opacity = v;
                });

            } else {
                active.style.maxWidth = `25%`;
                tweenOut(0, 1, 0.1, v => {
                    active.style.maxWidth = `${(v * 75) + 25}%`;
                    cardText.style.opacity = v;
                    copyLinkWrapper.style.opacity = v;
                });
            }

            tweenOut(0, 1, 0.0875, v => {
                detailViewContent.style.height = `${(v * 100)}%`;
            });
        }());
    }



    if (active.dataset.caption) active.removeChild(active.querySelector(".caption"));
    detailViewHeader.appendChild(active);

    renderCardDetail(c);
    initLazyLoader(detailView);

    playSound('sfxSwap', SFX_SWAP_VOL);

    if (openedRandom) {
        replaceHistoryState(c.cardParentId, c.cardId);
        openedRandom = false;
        return;
    }
    setHistoryState(c.cardParentId, c.cardId);
}

// render the detail view from a card data
function renderCardDetail(c) {
    detailViewContent.scrollTop = 0;

    const menu = getMenuData(c.cardParentId);
    const html = cardHTMLBuilder(c)

    let tabs = '';
    let gallery = '', relatives = '';
    const images = extractImagesFromHTML(html);
    const hasGallery = (c.gallery && c.gallery.length != 0) || (images && images.length != 0) || (c.refsheet);

    let sectionData;
    if (c.sections) sectionData = createCardSections(c);
    if (hasGallery || c.relatives || c.sections) {

        tabs = `
            <button class="tab main" type="button">Main</button>
            ${sectionData ? sectionData.tabs : ''}
            ${hasGallery ? `<button class="tab gallery" type="button">Gallery</button>` : ''}
            ${c.relatives && c.relatives.length > 0 ? `<button class="tab relatives" type="button">Related Cards</button>` : ''}
            `

        gallery = hasGallery ? `<div class="container grid">`
            + (c.refsheet ? `<img src=${c.refsheet}>` : '')
            + (c.gallery ? c.gallery.map(imgSrc => `<img src="${imgSrc}">`).join('') : '')
            + (images ? images.map(imgSrc => (!c.gallery?.includes(imgSrc) && !(c.refsheet === imgSrc)) ? `<img src="${imgSrc}">` : '').join('') : '')
            + `</div><br>`
            : '';

        relatives = c.relatives ? c.relatives.length != 0 ? `<div class="container">`
            + c.relatives.map(rel => `<div class="card internal" data-href="${rel.cardId}" data-caption="${rel.relation}"></div>`).join('')
            + `</div><br>`
            : '' : '';
    }

    const tabEl = tabs ? `<small class="detail-view-tabs">${tabs}</small><br>` : '';
    const mainSection = `
        <div class="detail-section detail-main">
            ${!c.blank
            ? `
                <small class="card-parent-link"><a data-open-card="${menu.menuId}">${menu.title}</a> /</small>
                <h1 style="margin-top: 0;">${c.title}</h1>`
            : `<small class="card-parent-link">From <a data-open-card="${menu.menuId}">${menu.title}</a></small>`}
        <hr>
        ${html}
        </div>`;

    const gallerySection = gallery ? `<div class="detail-section detail-gallery remove">${gallery}</div>` : '';
    const relativesSection = relatives ? `<div class="detail-section detail-relatives remove">${relatives}</div>` : '';
    const customSection = sectionData ? sectionData.html ? sectionData.html.map(d => `<div class="detail-section detail-${c.sections[sectionData.html.indexOf(d)].title.replaceAll(" ", "-")} remove">${d}</div>`).join('') : '' : '';

    const fullHtml = tabEl + mainSection + customSection + gallerySection + relativesSection;
    const processedHtml = processImagesInHTML(fullHtml);
    detailViewContent.innerHTML = processedHtml;

    emojiHandler();
    cardDetailScriptHandler(c);
    if (!menu.invisible) copyLinkHandler(detailView, menu.menuId, c.cardId);
    if (tabs) handleDetailViewTabs(c);

    internalCardHandler();
}

function emojiHandler() {
    const emojiRegex = /:([a-zA-Z0-9_]+):/g;
    const walker = document.createTreeWalker(detailViewContent, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];

    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }

    textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        let match;
        let lastIndex = 0;
        const fragments = [];

        emojiRegex.lastIndex = 0;
        while ((match = emojiRegex.exec(text)) !== null) {
            fragments.push(document.createTextNode(text.slice(lastIndex, match.index)));

            const emojiName = match[1].toLowerCase();
            if (emojiList.includes(emojiName)) {
                const img = document.createElement('img');
                img.src = `emojis/${emojiName}.png`;
                img.alt = match[0];
                img.className = 'emoji';
                img.draggable = false;
                img.dataset.caption = `:${emojiName}:`;
                fragments.push(img);
            }

            lastIndex = emojiRegex.lastIndex;
        }

        if (fragments.length) {
            fragments.push(document.createTextNode(text.slice(lastIndex)));
            fragments.forEach(fragment => textNode.parentNode.insertBefore(fragment, textNode));
            textNode.remove();
        }
    });
}

// create custom sections
function createCardSections(c) {
    let tabs = '';
    let html = [];
    c.sections.forEach(s => {
        const secTitle = s.title;
        const secDetail = s.detail;
        tabs += `<button class="tab" type="button">${secTitle}</button>`;
        html.push(secDetail);
    });
    return { tabs, html };
}

// handle navigation tabs on the detail view
function handleDetailViewTabs(c, open = null) {
    const tabsContainer = detailViewContent.querySelector('.detail-view-tabs');
    if (!tabsContainer) return;

    const btns = tabsContainer.querySelectorAll('button.tab');
    const secs = detailViewContent.querySelectorAll('.detail-section');

    function setActive(button) {
        btns.forEach(b => b.classList.remove('active'));
        if (button) button.classList.add('active');
    }

    function showSection(section) {
        secs.forEach(s => { if (!s) return; s.classList.add('remove'); });
        if (section) {
            section.classList.remove('remove');
            section.classList.add('no-transition');
            section.style.opacity = 0;
            section.style.transform = "translateX(20px)";
            setTimeout(() => {
                section.classList.remove('no-transition');
                section.style.opacity = 1;
                section.style.transform = "none";
            }, 1);
        }
    }

    function activateTab(index) {
        const b = btns[index];
        const s = secs[index];
        if (!b || !s) return;

        setActive(b);
        showSection(s);

        let sName = s.classList[1].replace("detail-", "");
        if (sName === "main") return;

        setHistoryState(c.cardParentId, c.cardId, sName);
    }

    activateTab(0);

    const gallerySec = Array.prototype.indexOf.call(secs, detailViewContent.querySelector('.detail-gallery'));
    detailViewContent.querySelector(".show-more-art")?.addEventListener('click', () => { activateTab(gallerySec); playSound('sfxClick', SFX_CLICK_VOL); });

    btns.forEach((b, i) => {
        b.addEventListener('click', () => activateTab(i));
    });

    if (open) {
        btns.forEach((_, i) => {
            const s = secs[i];
            if (!s) return;

            let sName = s.classList[1].replace("detail-", "");
            if (sName === "main") sName = null;

            if (sName === open) activateTab(i);
        });
    }
}

// handles card that are placed as div element inside the detail view
function internalCardHandler(parent = detailViewContent) {
    const cards = parent.querySelectorAll(".card.internal");
    cards.forEach(card => {
        const c = {};
        c.reference = card.dataset.href;
        referenceCardBehavior(card, c); return;
    });
}

function normalizeFlagName(value) {
    const name = value?.trim().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9_-]/g, '');
    if (emojiList.includes(name)) return name;
    return null;
}

function getGenderFlagName(gender) {
    if (!gender) return null;
    const normalized = gender.trim().toLowerCase();
    if (normalized === 'male' || normalized === 'female') return null;
    if (normalized.includes('non-binary') || normalized.includes('nonbinary')) return 'nonbinary';
    if (normalized.includes('trans')) return 'trans';
    if (normalized.includes('genderless') || normalized.includes('agender')) return 'agender';
    /* if (normalized.includes('bigender')) return 'bigender';
    if (normalized.includes('intersex')) return 'bigender';
    if (normalized.includes('genderfluid')) return 'genderfluid';
    ;
    if (normalized.includes('any-gender') || normalized.includes('pangender')) return 'pangender'; */
    return normalizeFlagName(normalized);
}

function getSexualityFlagName(sexuality) {
    if (!sexuality) return null;
    const normalized = sexuality.trim().toLowerCase();
    /* if (normalized.includes('lesbian')) return 'lesbian';
    if (normalized.includes('bisexual') || normalized === 'bi') return 'bisexual';
    if (normalized.includes('gay')) return 'gay';
    if (normalized.includes('pan')) return 'pansexual';
    if (normalized.includes('asexual')) return 'asexual';
    if (normalized.includes('aromantic')) return 'aromantic';
    if (normalized.includes('aroace')) return 'aroace';
    if (normalized.includes('demi')) return 'demisexual';
    if (normalized.includes('omnisexual')) return 'omnisexual';
    if (normalized.includes('queer') || normalized.includes('questioning')) return 'rainbow'; */
    return normalizeFlagName(normalized);
}

// HTML builder for character cards
const CHARACTER_RULES_URL = `<a data-open-card="info:ocrules">`;
const useShowMoreArtButton = true;
function cardHTMLBuilder(c) {
    let html = c.detail + (c.html || '') || '';
    if (c.isCharacter) {
        const refsheet = c.refsheet ? `<h2>Reference Art:</h2><br><img src="${c.refsheet}"><br><br>` : '';
        const hasMoreArt = c.gallery.length > 6;
        const hasMoreArtArrowSVG = `<span><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 -2 16 18">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                    </svg></span>`
        const gallery = c.gallery
            ? c.gallery.length > 1
                ? `<h2>Top Images:</h2><div class="container character-gallery">` + c.gallery.slice(1, 6).map(imgSrc => `<img src="${imgSrc}">`).join('') + `${hasMoreArt && useShowMoreArtButton ? `<div class="show-more-art">Show More${hasMoreArtArrowSVG}</div>` : ''}` + `</div><br>`
                : ''
            : '';
        let details = c.detail ? `${c.detail}<br>` : '';
        const extraHTML = c.html ? `<hr>${c.html}<br>` : '';

        const genderFlag = getGenderFlagName(c.gender);
        const sexualityFlag = getSexualityFlagName(c.sexuality);
        let rows = '';

        if (genderFlag || sexualityFlag || c.flags) {
            const flagEmojis = `${genderFlag ? `:${genderFlag}:` : ''} ${sexualityFlag ? `:${sexualityFlag}:` : ''} ${c.flags ? c.flags.map(f => !isEmojiOnly(f) ? `:${f}:` : `${f}`).join(' ') : ''}`.trim();
            if (flagEmojis) rows += `<tr><td colspan="2"><h1 style="margin: 0;">${flagEmojis}</h1></td></tr>`;
        }

        function pickTableImage(c) {
            if (Array.isArray(c.gallery) && c.gallery.length > 0)
                return c.gallery[0];
            return "";
        }

        const tableImage = pickTableImage(c) ? `<tr><td colspan="2"><img src="${pickTableImage(c)}" style="max-width: 100%; background-color: ${c.color || 'transparent'};"></td></tr>` : '';

        if (c.species) rows += `<tr><td>Species</td><td>${c.species}</td></tr>`;
        if (c.pronouns) rows += `<tr><td>Pronouns</td><td>${c.pronouns}</td></tr>`;
        if (c.gender) rows += `<tr><td>Gender</td><td>${c.gender}</td></tr>`;
        if (c.sexuality) rows += `<tr><td>Sexuality</td><td>${c.sexuality}</td></tr>`;
        if (c.aliases) rows += `<tr><td>Aliases</td><td>${c.aliases}</td></tr>`;
        if (c.extra) rows += `<tr><td colspan="2">${c.extra}</td></tr>`;
        if (c.characterAttrs) {
            for (const attr in c.characterAttrs) {
                rows += `<tr><td>${attr}</td><td>${c.characterAttrs[attr]}</td></tr>`;
            }
        }

        details += refsheet

        const table = rows ? `
            <table>
            <tr><td colspan="2">${CHARACTER_RULES_URL}Character rules</a></td></tr>
                ${tableImage}
                ${rows}
            </table>` : '';

        if (!refsheet) {
            html = `
                <div class="character-info">
                    ${details || (!refsheet && c.gallery.length > 1) ? `<div class="character-detail">${details}${gallery}</div>` : ''}
                    ${table}
                </div>
                ${extraHTML}
            `;
        } else {
            html = `
                <div class="character-info">
                    ${details ? `<div class="character-detail">${details}</div>` : ''}
                    ${table}
                </div>
                ${extraHTML}
                ${gallery}
            `;
        }
    }
    return html;
}





// --------------------------
// IMAGES
// --------------------------

// handle image preview overlay
document.addEventListener('click', (e) => {
    const img = e.target.closest('#detailViewContent img') || e.target.closest('#contentViewGrid img');
    if (!img) return;
    if (img.classList.contains("thumb")) return;

    const fullSrc = img.dataset.fullSrc || img.src;
    const caption = img.dataset.caption ? `<h1 style="margin-top: 12px; margin-bottom: -10px;">${img.dataset.caption}</h1>` : '';
    const subcaption = caption && img.dataset.subcaption ? `<p style="color: color-mix(in srgb, var(--accentl) 75%, transparent)">${img.dataset.subcaption}</p>` : '';

    imageView.innerHTML = `<img src="${fullSrc}" alt="preview" ${caption ? 'data-hasCaption=true' : ''}>${caption}${subcaption}`;
    disableZoom();
    setLayoutViz(imageView, true);
    applyUIState("IMAGE_VIEW");
    playSound('sfxPageOpen', SFX_PAGE_OPEN_VOL);

    downloadImgBtn.addEventListener('click', () => {
        window.open(img.src, 'Image')
    });

    const imgEl = imageView.querySelector('img');
    imgEl.classList.add('no-transition');
    imgEl.style.scale = 0.1;
    imgEl.style.opacity = 0;
    setTimeout(() => {
        imgEl.classList.remove('no-transition');
        imgEl.style.scale = "";
        imgEl.style.opacity = "";
    }, 1);

    imageView.addEventListener('click', () => {
        enableZoom();
        setLayoutViz(imageView, false);
        applyUIState("DETAIL_VIEW");
        playSound('sfxPageClose', SFX_PAGE_CLOSE_VOL);
    }, { once: true });
});

function disableZoom() {
    const vp = $('meta[name=viewport]');
    if (!vp) return;
    vp.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
}

function enableZoom() {
    const vp = $('meta[name=viewport]');
    if (!vp) return;
    vp.setAttribute('content', 'width=device-width, initial-scale=1');
}



// --------------------------
// AUDIOS
// --------------------------

// Preload all audio files (SFX and BGM) in the background
async function preloadAudio() {
    const audioElements = document.querySelectorAll('audio');
    const promises = [];

    audioElements.forEach(audio => {
        if (audio.readyState >= 2) return;
        const p = new Promise((resolve, reject) => {
            const onCanPlay = () => {
                audio.removeEventListener('canplaythrough', onCanPlay);
                resolve();
            };
            audio.addEventListener('canplaythrough', onCanPlay);
            audio.addEventListener('error', () => {
                audio.removeEventListener('canplaythrough', onCanPlay);
                resolve();
            });
            audio.load();
        });
        promises.push(p);
    });

    await Promise.all(promises);
    showAudioButton();
}

function showAudioButton() {
    playBgmBtn.style.display = '';
    /* applyUIState("MAIN_MENU"); */
}

// -------- bgm system ----------

// declare BGMs
const bgm = {
    fyberverse: document.getElementById("bgmFyberverse"),
    deltadim: document.getElementById("bgmDeltadim"),
    floriverse: document.getElementById("bgmFloriverse"),
    digirel: document.getElementById("bgmDigirel"),
    nansenz: document.getElementById("bgmNansenz"),
    hizen: document.getElementById("bgmHizen"),
    nadir: document.getElementById("bgmNadir"),
};

const menuToBgm = {
    deltadim: "deltadim",
    floriverse: "floriverse",
    digirel: "digirel",
    nansenz: "nansenz",
    hizen: "hizen",
    nadir: "nadir",
};

const silentMenus = new Set([
    "yolkspocketdimension",
]);

// currently active background music
let currentBgm = "fyberverse";
let bgmEnabled = false;

// fade helper
function fadeVolume(audio, t, speed = 0.02) {
    const target = t * BGM_MASTER_VOL;
    if (!audio) return;
    clearInterval(audio._fadeInterval);
    const effectiveSpeed = Math.min(speed, 1);

    audio._fadeInterval = setInterval(() => {
        const currentVol = audio.volume;
        const diff = target - currentVol;
        if (Math.abs(diff) < 0.01) {
            audio.volume = target;
            clearInterval(audio._fadeInterval);
            return;
        }
        let step = diff * 0.1;
        if (Math.abs(step) > effectiveSpeed) {
            step = (diff > 0 ? effectiveSpeed : -effectiveSpeed);
        }

        audio.volume = currentVol + step;
        audio.volume = Math.max(0, Math.min(target > currentVol ? target : 1, audio.volume));

    }, 50);
}

// start all BGMs with only one audible
function startAllBgm() {
    Object.entries(bgm).forEach(([key, audio]) => {
        audio.volume = (key === "fyberverse" ? 1 : 0) * BGM_MASTER_VOL;
        audio.play().catch(() => { });
    });
    currentBgm = "fyberverse";
    bgmEnabled = true;
    setButtonViz(playBgmBtn, false);
    updateSettingsButtonText('toggleMusic', 'Mute Music');
}



// button clicks : sfx
document.addEventListener('click', (e) => {
    if (e.target.closest('button')) playSound('sfxClick', SFX_CLICK_VOL);
});

// play sfx
function playSound(soundId, volume = 1) {
    const s = document.getElementById(soundId);
    if (!s) return;
    if (s.readyState === 0) s.load();
    s.pause();
    s.currentTime = 0;
    s.volume = soundId.includes('bgm') ? volume * MASTER_VOL * BGM_MASTER_VOL : volume * MASTER_VOL * SFX_MASTER_VOL;
    s.play().catch(() => {});
}

const bgmList = Object.values(bgm);

// button to play bgm
playBgmBtn.addEventListener("click", () => {
    if (!bgmEnabled) {
        startAllBgm();
    }
    playSound("sfxClick", SFX_CLICK_VOL);
});




// --------------------------
// SEARCH
// --------------------------

const searchBox = document.getElementById('searchBox');
function stripHTML(html) {
    return html.replace(/<[^>]+>/g, '');
}

function createSearchMenu(title, subtitle, cards = []) {
    let search = {};
    const searchI = menuItems.findIndex(m => m.menuId === "search")
    if (searchI > -1) menuItems.splice(searchI, 1);
    search = {
        menuId: "search",
        hidden: true,
        invisible: true,
        title: title,
        subtitle: subtitle,
        cards: cards,
    }
    return menuItems.push(search)
}

function findCards(q, searchType) {
    results = {};
    menuItems.forEach(menu => {
        if (menu.invisible) return false;
        if (!menu.cards) return false;
        const matches = cardFilter(menu, q, searchType);
        if (matches.length > 0) results[menu.menuId] = { menu, cards: matches }
    });
    return results;
}

function cardFilter(menu, q, searchType = null) {
    return menu.cards.filter(card => {
        if (!card.cardId) return false;
        if (searchType === "all") return true;
        if (searchType === "oc") return card.isCharacter;
        return (card.title && stripHTML(card.title).toLowerCase().includes(q)) ||
            (card.subtitle && stripHTML(card.subtitle).toLowerCase().includes(q)) ||
            (card.species && stripHTML(card.species).toLowerCase().includes(q)) ||
            (card.pronouns && stripHTML(card.pronouns).toLowerCase().includes(q)) ||
            (card.gender && stripHTML(card.gender).toLowerCase().includes(q)) ||
            (card.sexuality && stripHTML(card.sexuality).toLowerCase().includes(q)) ||
            (card.aliases && stripHTML(card.aliases).toLowerCase().includes(q)) ||
            (card.extra && stripHTML(card.extra).toLowerCase().includes(q));
    });
}

function findMenus(q, searchType = null) {
    let results = menuItems.filter(menu => {
        if (menu.invisible) return false;
        if (menu.menuId === "logoHitbox") return false;
        if (searchType === "all") return true;
        if (searchType === "oc") return false;
        return (menu.title && menu.title.toLowerCase().includes(q)) || (menu.subtitle && menu.subtitle.toLowerCase().includes(q));
    });
    return results;
}

function pushCards(cardFound) {
    const results = [];
    let resultsCounter = 0;
    cardFound.forEach(({ menu, cards }) => {
        if (!cards) return false;
        results.push({ title: `<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>Results from <a data-open-card="${menu.menuId}">${menu.title}</a>` });
        cards.forEach(c => { results.push({ ...c }); resultsCounter++; });
    });
    return { results, resultsCounter };
}

function pushMenus(menuFound) {
    const results = [];
    let resultsCounter = 0;
    menuFound.forEach((menu) => {
        if (!menu) return false;
        results.push({ linkId: menu.menuId, semibanner: true });
        resultsCounter++;
    });
    if (resultsCounter > 0) results.unshift({ title: `<span style="border-left: 6px solid var(--white); padding-right: 8px"></span>Matching menus found:` });
    return { results, resultsCounter };
}

function showSearch(query, results, resultsCounter) {
    const searchTitle = `Results for "${query}"`;
    const searchSubtitle = `Found ${resultsCounter} item(s)`;
    const searchCards = results;
    createSearchMenu(searchTitle, searchSubtitle, searchCards);
    openMenuById('search');
    setLayoutViz(imageView, false);
    searchText.value = '';
}

// main search function
function search() {
    const query = searchText.value;
    const q = query.trim().toLowerCase();
    if (!q) return;

    // is query special?
    const special = specialSearch.find(s => s.query == q);
    if (special) {
        const results = [{ title: special.title, subtitle: special.subtitle, }]
        const resultsCounter = 0;
        showSearch(query, results, resultsCounter)
        return;
    }

    const searchType =
        q === "all" ? "all" :
            q === "oc" ? "oc" :
                q === "ocs" ? "oc" :
                    q === "character" ? "oc" :
                        q === "characters" ? "oc" :
                            null;

    // normal query search
    const cardFound = Object.values(findCards(q, searchType));
    const menuFound = Object.values(findMenus(q, searchType));

    const { results: cardResults, resultsCounter: cardResultsCounter } = pushCards(cardFound);
    const { results: menuResults, resultsCounter: menuResultsCounter } = pushMenus(menuFound);
    const results = cardResults.concat(menuResults);
    const resultsCounter = cardResultsCounter + menuResultsCounter

    // nothing found?
    if (resultsCounter == 0) {
        const results = [{ title: 'Nothing found.', subtitle: '', }]
        showSearch(query, results, resultsCounter)
        return;
    }

    showSearch(query, results, resultsCounter);
}

function initSearchUI() {
    searchBox.innerHTML = `
        <form method="dialog" id="searchForm">
            <h2>Search</h2>
            <div style="text-align: left; color: color-mix(in srgb, var(--accentl) 75%, transparent)">
                <small>
                    Some keywords you can try:<br>
                    'all', 'characters', 'help'
                </small>
            </div>
            <input id="searchText" type="text" placeholder="Search for content" autocomplete="off">
            <div class="form-buttons">
                <button type="submit">Search</button>
                <button type="button" id="cancelSearch">Cancel</button>
            </div>
        </form>
    `
    const searchText = document.getElementById('searchText');
    const cancelSearch = document.getElementById('cancelSearch');
    searchText.focus();
    searchText.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchBox.close();
        }
    });
    cancelSearch.addEventListener('click', () => {
        searchText.value = '';
        searchBox.close();
    });
}

function openSearchBox() { searchBox.showModal(); initSearchUI(); }
const searchBtn = document.getElementById('searchBtn')
searchBtn?.addEventListener('click', () => { openSearchBox(); });
searchBox.addEventListener('close', () => { if (searchText.value.trim() !== '') search(); });







// --------------------------
// LAZY LOADER
// --------------------------

// initialize lazy loader
function initLazyLoader(root = document) {
    const images = root.querySelectorAll('img:not([data-lazy-processed])');
    images.forEach(img => {
        let realSrc = img.dataset.src || img.getAttribute('src');
        if (!realSrc || realSrc === 'icons/loading.gif' || realSrc.startsWith('data:') || realSrc.startsWith('emojis')) {
            return;
        }

        const currentSrc = img.getAttribute('src');
        if (currentSrc && currentSrc !== 'icons/loading.gif' && !currentSrc.startsWith('data:')) {
            img.dataset.src = currentSrc;
            realSrc = currentSrc;
            img.setAttribute('src', 'icons/loading.gif');
        }

        // Determine dimensions key
        let dimsKey = realSrc;
        let d = null;
        if (realSrc.startsWith("thumb/")) dimsKey = realSrc.replace("thumb/", "");
        
        if (thumbDimensionsData[dimsKey]) {
            d = thumbDimensionsData[dimsKey];
        } else if (dimensionsData[dimsKey]) {
            d = dimensionsData[dimsKey];
        }
        if (!d) d = { width: 4, height: 5 };
        if (img.classList.contains('thumb')) d = { width: 1, height: 1 };
        if (img.parentNode.dataset.blank) d = { width: 4, height: 5 };

        img.style.display = 'block';
        img.style.aspectRatio = `${d.width} / ${d.height}`;
        img.style.objectFit = 'cover';
        img.style.opacity = '0.1';
        img.style.border = '3px solid #ffffff';

        img.dataset.src = realSrc;
        img.dataset.lazyProcessed = 'true';

        lazyObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const imgEl = entry.target;
                const src = imgEl.dataset.src;
                if (src) {
                    imgEl.onload = () => {
                        imgEl.style.opacity = '1';
                        imgEl.style.border = 'none';
                    };
                    imgEl.src = src;
                    imgEl.removeAttribute('data-src');
                    imgEl.onerror = () => {
                        if (this.dataset.fullSrc) {
                            this.src = this.dataset.fullSrc;
                            this.removeAttribute('data-src');
                            this.removeAttribute('data-full-src');
                        }
                    };
                }
                observer.unobserve(imgEl);
            });
        }, {
            rootMargin: "100px",
            threshold: 0.01
        });
        lazyObserver.observe(img);
    });
}

// replace all img src with data-src and set src to placeholder
function processImagesInHTML(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const images = doc.querySelectorAll('img');
    images.forEach(img => {
        let src = img.getAttribute('src');
        if (!src || src.startsWith('data:') || src === 'icons/loading.gif' || src.startsWith('emojis')) return;

        const fullSrc = src;
        const THUMBNAIL_PREFIXES = ['images/c/', 'images/i/', 'images/flories'];

        const isThumbnailCandidate = THUMBNAIL_PREFIXES.some(prefix => fullSrc.startsWith(prefix));
        if (isThumbnailCandidate && fullSrc.match(/^(images|icons|drive)\//)) {
            const thumbSrc = getThumbPath(fullSrc);
            img.setAttribute('data-src', thumbSrc);
            img.setAttribute('data-full-src', fullSrc);
        } else {
            img.setAttribute('data-src', fullSrc);
        }
        img.setAttribute('src', 'icons/loading.gif');
    });
    return doc.body.innerHTML;
}






// --------------------------
// NAVIGATION
// --------------------------

// add invisible menu as logo hitbox
function menuLogoHitbox() {
    if (!mainMenuLogo) return;
    const menu = {
        menuId: "logoHitbox",
        orbit: 0,
        scale: 2,
        cards: [],
    }
    menuItems.push(menu);
}

// click logo to open specified card
function openLogo() {
    if (SIMPLE_MODE) return openMenuById('index');
    openSingle = true;
    const [menu, card] = menuLogoRedirect.split(":");
    if (checkWideScreen()) { currentX = 0; currentY = 0; resetCameraFollow(); }
    if (menu && card) {
        openCardById(menu, card);
        return;
    }
    openMenuById(menu);
}
/* mainMenuLogo.addEventListener('click', () => { openLogo(); });
if (SIMPLE_MODE) mainMenu.style.scale = `${SIMPLE_MODE_MENU_LOGO_SCALE}`; */

// click settings to open settings
settingsBtn.addEventListener('click', () => { openMenuById('settings') });

// back button
backBtn.addEventListener('click', () => { goBack(); });
function goBack() {
    if (openSingle) {
        openSingle = false;
        returnToMainMenu();
        return;
    }

    if (layoutViz(detailView)) {
        if (openFromReference) { openMenuWithoutHistoryPush(openFromReference); openFromReference = null; return; }
        const m = getMenuData(currentMenu());
        changeBackBtnText(m.parent && !openSingle ? getMenuData(m.parent).title : 'Close');
        setLayoutViz(detailView, false);
        setLayoutViz(contentView, true);

        const menuId = contentView.dataset.currentMenuId;
        if (menuId) history.replaceState({}, '', `?m=${menuId}`); else history.replaceState({}, '', window.location.pathname);
        return;

    } else if (layoutViz(contentView)) {
        const parentMenu = getMenuData(currentMenu()).parent;
        if (parentMenu) { openMenuWithoutHistoryPush(parentMenu); history.replaceState({}, '', `?m=${parentMenu}`); return; }
        returnToMainMenu();
    }
}

// open menu but do not push the history
function openMenuWithoutHistoryPush(menuId) {
    ignoreHistoryPush = true;
    openMenuById(menuId);
    ignoreHistoryPush = false;
}

// return to main menu
function returnToMainMenu() {
    blurMainMenu(false);
    resizeCanvas(1);
    setCurrentMenu(null);
    setLayoutViz(contentView, false);
    setLayoutViz(detailView, false);
    /*
    setButtonViz(backBtn, false);
    setButtonViz(settingsBtn, true);
    */
    applyUIState("MAIN_MENU");
    menuIsOpen = false;
    if (checkWideScreen()) snapCameraToCenter(mainMenu);

    history.replaceState({}, '', window.location.pathname);
}

// internal link handler: <a data-open-card="q:id">
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-open-card]');
    if (!link) return;
    e.preventDefault();
    const ref = link.dataset.openCard.trim();
    const [menuCode, cardKey] = ref.split(':');
    if (menuCode && cardKey) {
        openCardById(menuCode, cardKey);
        return;
    }
    openMenuById(menuCode);
});





// --------------------------
// URL PARAMS ON LOAD
// --------------------------

// history management helpers
let ignoreHistoryPush = false; // when true, setHistoryState does nothing

// set the history state by rewriting the URL parameters
function setHistoryState(menuId, cardId = null, tab = null) {
    if (ignoreHistoryPush) return;
    const url = !menuId ? window.location.pathname
        : `?m=${menuId}${cardId ? `&i=${cardId}` : ''}${cardId && tab ? `&t=${tab}` : ''}`;
    history.pushState({}, '', url);
}

// replace the history state by rewriting the URL parameters
function replaceHistoryState(menuId, cardId = null, tab = null) {
    if (ignoreHistoryPush) return;
    const url = !menuId ? window.location.pathname
        : `?m=${menuId}${cardId ? `&i=${cardId}` : ''}${cardId && tab ? `&t=${tab}` : ''}`;
    history.replaceState({}, '', url);
}

// wait for a card element to appear in the content grid (used for URL param loading)
async function waitForCard(cardId, timeout = 2000, interval = 50) {
    const start = performance.now();
    while (performance.now() - start < timeout) {
        const el = contentViewGrid.querySelector(`.card[data-id="${cardId}"]`);
        if (el) return el;

        await new Promise(r => setTimeout(r, interval));
    }
    return null;
}

// handle parameter loading and also popstate
async function loadAndPopstateHandler() {
    const params = new URLSearchParams(window.location.search);
    const menu = params.get('m');
    const card = params.get('i');
    const tab = params.get('t');

    if (layoutViz(imageView)) setLayoutViz(imageView, false);
    setButtonViz(rerollBtn, false);

    const targetMenu = menuItems.find(m => m.menuId === menu);
    if (!targetMenu) { returnToMainMenu(); return; };

    // when responding to a popstate event we do *not* want to push another history entry,
    // otherwise the browser back button never actually moves back.  Instead we temporarily
    // ignore history pushes while opening the requested menu/card and then restore the flag.
    ignoreHistoryPush = true;

    openMenuById(targetMenu.menuId);
    if (card && targetMenu) {
        const cardEl = await waitForCard(card, 2000, 40);
        if (cardEl) openCard(cardEl, getCardData(menu, card));
        if (tab) handleDetailViewTabs(getCardData(menu, card), tab);
    } else openSingle = false;
    ignoreHistoryPush = false;
}




// --------------------------
// KEYBINDS
// --------------------------
document.addEventListener("keydown", (e) => {
    const ae = document.activeElement;
    const inInput = ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.tagName === 'SELECT' || ae.isContentEditable);
    if (inInput) return;
    if (e.key === ' ') openSearchBox();
    if (e.key === 'Escape') goBack();
    if (e.key === 'c') snapCameraToCenter(mainMenu);
})





// --------------------------
// INIT
// --------------------------

window.addEventListener('popstate', async () => { loadAndPopstateHandler(); })

// initialize card data before anything else
function initCardData() {
    menuLogoHitbox();
    if (SIMPLE_MODE) initSimpleMode();
    menuItems.forEach(m => {
        if (!m.cards) m.cards = [];
        m.cards.forEach(c => { c.cardParentId = m.menuId; });
    });
}

// initialize layout visibility
function initLayoutViz() {
    contentView.classList.add("no-transition");
    detailView.classList.add("no-transition");
    imageView.classList.add("no-transition");
    setLayoutViz(contentView, false);
    setLayoutViz(detailView, false);
    setLayoutViz(imageView, false);
}

// reset layout transition animation when a menu or card is open for the first time
function resetLayoutTransition() {
    contentView.classList.remove("no-transition");
    detailView.classList.remove("no-transition");
    imageView.classList.remove("no-transition");
}

// disable most transitions if simple mode is activated
if (SIMPLE_MODE) {
    contentView.classList.add("no-transition-at-all");
    detailView.classList.add("no-transition-at-all");
};

// preload all menu icon images
function preloadMenuIcons() {
    return Promise.all(
        menuItems
            .filter(m => m.image && !m.hidden)
            .map(m => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = resolve; // resolve even if image fails to load
                    img.src = m.image;
                });
            })
    );
}

// initialize everything
/* if (!SIMPLE_MODE) createStarfield(); */
initCardData();
initLayoutViz();
preloadMenuIcons();

setLayoutViz(UIPanelTop, false);
setLayoutViz(UIPanelBottom, false);
window.addEventListener('load', async () => {
    setLayoutViz(loading, false);
    setLayoutViz(UIPanelTop, true);
    setLayoutViz(UIPanelBottom, true);
    initMainMenu();
    preloadAudio()
    appLoaded = true;

    // load any URL parameters after menu is initialized
    await loadAndPopstateHandler();
    /* pickSplash(); */
});
