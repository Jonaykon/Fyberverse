const todo_fix = [
752, 751, 698,
666, 665, 664, 663, 662, 661, 660, 659, 658, 657, 
656, 655, 654, 653, 652, 651, 650, 649, 648, 647,
646, 645, 644, 643, 642, 641, 640, 595, 594, 585, 551,
497, 496, 495, 494, 493, 492, 491, 490, 489, 488,
487, 486, 485, 484, 483, 482, 481, 480, 433, 432, 388, 384,
367, 357, 306, 305, 304, 303, 302, 301, 300, 299,
298, 297, 296, 295, 294, 293, 292, 291, 290, 289,
288, 287, 286, 285, 284, 283, 282, 281, 280, 279,
278, 277, 276, 275, 255, 244, 243, 226, 208, 180, 179,
172, 158, 146, 144, 136, 125, 109, 93, 91, 77, 76,
75, 62, 61, 60, 59, 58, 57, 56, 55, 54,
53, 52, 51, 50, 49, 48, 47, 46, 45, 44,
43, 42, 41, 40, 39, 38, 37, 36, 35, 34,
33, 32, 30, 25, 24, 20, 19, 18, 17, 16,
15, 14, 13, 12, 9, 8, 3, 2
];

function fetchLocalSnapshot(from = 274, to = 101) {
    /*
    const snaps = [];
    for (i = from; i > to; i--) {
        const ext = [132, 196, 263].includes(i) ? `.mp4` : '.png';
        snaps.push({
            num: i,
            title: '',
            embed: `images/snapshots/${i + ext}`,
        })
    }
    const str = JSON.stringify(snaps, null, 4)
        .replace(/"([^"]+)":/g, '$1:'); // remove quotes from keys

    console.log(str);
    return;
    */

    const feed = {
        feed: []
    };
    snapshots.forEach(s => {
        feed.feed.push({
            post: {
                embed: {
                    $type: s.embed.endsWith('.png') ? "app.bsky.embed.images" : "app.bsky.embed.video",
                    images: [{
                        fullsize: s.embed
                    }],
                    playlist: s.embed
                },
                record: {
                    text: `DAY ${s.num} - ${s.title}`
                },
                author: {
                    handle: 'artifyber.xyz'
                },
                isLocal: true
            }
        });
    });

    return feed;
}

// console.log(fetchLocalSnapshot())
const LOCAL_CACHE = fetchLocalSnapshot();
const ALL_POSTS = new Map();
let lowestBskyDay = Infinity;
let startAddingLocal = false;

function getNum(item) {
    return parseInt(
        item.post.record.text.replace("8DAY ", "").replace("DAY ", "").split(" - ")[0]
    );
}

function getTitle(item) {
    return item.post.record.text.replace("8DAY ", "").replace("DAY ", "").split(" - ").slice(1).join(" - ");
}

function snapshotViewer() {
    let cursor = null;
    let isLoading = false;
    let hasMore = true;

    let lastSnap = 0;

    // fetch and display posts
    async function fetchPosts(actorHandle) {
        if (isLoading || !hasMore) return;

        isLoading = true;

        try {
            const apiEndpoint = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed';
            const url = new URL(apiEndpoint);
            url.searchParams.set('actor', actorHandle);
            url.searchParams.set('filter', 'posts_with_media');
            url.searchParams.set('limit', 100);

            if (cursor) {
                url.searchParams.set('cursor', cursor);
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            cursor = data.cursor;
            if (!cursor) hasMore = false;

            const feed = data.feed.filter(i => {if (!isNaN(getNum(i))) return true;});

            feed.forEach(item => {
                const num = getNum(item);

                if (!item.post.isLocal) {
                    lowestBskyDay = Math.min(lowestBskyDay, num);
                }

                if (!startAddingLocal) {
                    let index = feed.indexOf(item);
                    if (index >= 0 && index < feed.length - 1) {
                        let nextItem = feed[index + 1]
                        if ((getNum(nextItem) != num - 1) && num == 307) startAddingLocal = true
                    }
                }

                ALL_POSTS.set(num, item);
            });

            LOCAL_CACHE.feed.forEach(item => {
                const num = getNum(item);
                if (!ALL_POSTS.has(num)) {
                    ALL_POSTS.set(num, item);
                }
            });

            const sorted = Array.from(ALL_POSTS.values()).sort((a, b) => {
                return getNum(b) - getNum(a);
            });

            const filtered = sorted.filter((item) => {
                if (item.reason) return false;
                if (!(item.post.record.text.startsWith("DAY") || item.post.record.text.startsWith("8DAY")) || item.post.author.handle !== "artifyber.xyz") return false;
                if (todo_fix.includes(getNum(item))) return false;
                return true;
            })

            if (lastSnap == 0) {
                lastSnap = getNum(sorted[0]);
                snapStability = ((lastSnap - todo_fix.length) / lastSnap * 100).toFixed(2);
                console.warn(`[dpsanalyzer v1.21]\nLast run: ${new Date().toLocaleString()}\n\n- Latest snapshot: snapshot-${lastSnap}.fsf\n- Total healthy snapshots: ${lastSnap - todo_fix.length}\n- Stability: ${snapStability}%\n\n${snapStability < 85 ? "Warning: Potentially unstable timeline. Please fix the missing snapshots to avoid temporal inconsistencies or do a full history reset. Omniverse may prone to crash if the issue persists" : ""}`);
            }

            displayPosts(filtered, true);


        } catch (error) {
            console.error("Could not fetch posts:", error);
            const postsList = document.getElementById('snapshotViewer');
            const errorEl = document.createElement('div');
            errorEl.className = "snapshot error";
            errorEl.innerHTML = `
                An error occured: ${error.message}<br><br>
                <button onclick="location.reload()">Reload Page</button>
                `;
            postsList.appendChild(errorEl);
        } finally {
            isLoading = false;
        }
    }

    // display posts in the HTML list
    function displayPosts(feed, reset = false) {
        const postsList = document.getElementById('snapshotViewer');

        if (reset) {
            postsList.innerHTML = "";
        }

        let added = false;

        // console.log(feed);

        feed.forEach(item => {
            const post = item.post;
            const text = post.record.text;
            const num = getNum(item);
            const title = getTitle(item);
            added = true;

            const embed = post.embed;
            const isImage = embed?.$type?.startsWith("app.bsky.embed.images");
            let src = isImage
                ? embed.images[0].fullsize
                : embed?.playlist;

            const el = document.createElement('div');
            el.className = `snapshot ${post.isLocal ? 'local' : ''}`;
            el.innerHTML = `
                <div class="snapshot-header">
                    <div class="snapshot-header-number">${(num || " ") + (!isImage ? " <small>(anim)</small>" : "")}</div>
                    <div class="snapshot-header-title">${title || " "}</div>
                </div>
                ${src
                    ? isImage
                        ? `<img class="snapshot-img" src="${src}">`
                        : `<video controls="autoplay muted loop"><source src=${src}></video>`
                    : ""}
                <div class="snapshot-footer">
                    ${post.isLocal ? '' : `
                        ${new Date(post.record.createdAt).toLocaleString()} - <a href="https://bsky.app/profile/${post.author.handle}/post/${post.uri.split('/').pop()}" target="_blank">View Post</a>
                    `}
                </div>
            `;

            postsList.appendChild(el);
        });

        // add view more button
        const addMoreBtn = document.createElement('div');
        addMoreBtn.className = "snapshot loadMore";
        addMoreBtn.innerHTML = `View More`;
        addMoreBtn.addEventListener('click', () => {
            fetchPosts('artifyber.xyz');
            addMoreBtn.remove();
            playSound('sfxClick', SFX_CLICK_VOL);
        });

        function updateLocalVisibility() {
            if (!startAddingLocal) return;
            const locals = document.querySelectorAll('.snapshot.local');
            locals.forEach (el => {
                el.classList.remove('local');
            });
        }

        postsList.appendChild(addMoreBtn);
        updateLocalVisibility();

        if (!added && hasMore) {
            fetchPosts('artifyber.xyz');
        }
    }

    contentView.addEventListener('scroll', () => {
        return
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.offsetHeight;

        if (scrollTop + windowHeight >= fullHeight - 200) {
            fetchPosts('artifyber.xyz');
        }
    });

    fetchPosts('artifyber.xyz');
}