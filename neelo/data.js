// Metadata
const lastUpdated = 'February 24th, 2026';
const version = '1.0.1';

// menu logo redirection
menuLogoRedirect = 'info:artifyber';

// Orbit data
orbitData = [
    {
        orbit: 1,
        title: "Universes",
        desc: "The 6 sections of Neeloverse",
    },
    {
        orbit: 3,
        title: "Canon",
        desc: "Neeloverse-related menus",
    },
    {
        orbit: 4,
        title: "Others",
        desc: "Miscellanous",
    },
    {
        orbit: 127,
        scaleX: 1,
        scaleY: 1,
    },
];

// Main menu data array
let menuItems = [
    /* --------------------------
    Menu Template
    -------------------------- */
    {
        menuId: 'menuTemplate',
        title: 'Menu Template Example',
        showTitle: false,
        subtitle: 'This is a menu example',
        image: '../images//temp2.png',
        color: 'var(--color-15)',
        orbit: 1.5,
        scale: 1,
        hidden: true,
        invisible: true,
        labels: [
            // CARDS WITH THUMBNAILS
            {
                // Cards without cardId become separators
                title: 'Card examples',
                subtitle: 'Main card types to put your content in',
            },
            {
                cardId: 'normalCard',
                title: 'Normal Card',
                subtitle: 'With thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: '../images//temp.png'        // Thumbnail will be shown in 1:1 aspect ratio
            },
            {
                cardId: 'urlCard',
                title: 'URL Card',
                subtitle: 'With thumbnail',
                url: 'https://x.com/artifyber',  // External URL redirect
                image: '../images//temp.png'
            },
            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                subtitle: 'With thumbnail',
                unclickable: true,            // Non-clickable info card
                image: '../images//temp.png'
            },

            // CARDS WITHOUT TEXT
            {
                cardId: 'normalCardBlank',
                blank: true,    // set the card as blank / have no text
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: '../images//temp.png'        // Thumbnail will be shown in 4:5 aspect ratio
            },
            {
                cardId: 'urlCardBlank',
                blank: true,
                url: 'https://x.com/artifyber',
                image: '../images//temp.png'
            },
            {
                cardId: 'unclickableCardBlank',
                blank: true,
                unclickable: true,
                image: '../images//temp.png',
            },

            // CARDS WITHOUT THUMBNAILS
            {
                cardId: 'normalCardPlain',
                title: 'Normal Card',
                subtitle: 'Without thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.'
            },
            {
                cardId: 'urlCardPlain',
                title: 'URL Card',
                subtitle: 'Without thumbnail',
                url: 'https://x.com/artifyber'
            },
            {
                cardId: 'unclickableCardPlain',
                title: 'Unclickable Card',
                subtitle: 'Without thumbnail',
                unclickable: true
            },
            {
                cardId: 'motherCard',
                title: 'Mothercard',
                subtitle: 'This card contains more cards',
                detail: `
                    You can embed cards inside another card by simply using a div element with <code>class="card internal"</code> and set it to reference another card using <code>data-href="menuId:cardId"</code><br>
                    <br>
                    To set a caption, use <code>data-caption="caption"</code>
                    <div class="imgContainer">
                        <div class="card internal" data-href="menuTemplate:normalCard""></div>
                        <div class="card internal" data-href="deltadim"></div>
                        <div class="card internal" data-href="menuTemplate:unclickableCardPlain" data-caption="Optional caption!"></div>
                        <div class="card internal" data-href="menuTemplate:motherCard" data-caption="Cardception..."></div>
                    </div>
                    You can even embed itself if you want!
                `,
                image: '../images//temp2.png'
            },

            // BANNER CARDS
            {
                // Cards without cardId become separators
                title: 'Banner examples',
                subtitle: 'Useful for describing a section of card grid',
            },
            {
                cardId: 'bannerCard',
                title: 'Banner Card',
                subtitle: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: '../images//temp3.png'
            },
            {
                cardId: 'bannerUrlCard',
                title: 'Banner Card (URL)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
                image: '../images//temp3.png'
            },
            {
                cardId: 'bannerUnclickableCard',
                title: 'Banner Card (Unclickable)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
                image: '../images//temp3.png'
            },
            {
                cardId: 'bannerCardBlank',
                title: 'Banner Card - No Thumbnail',
                subtitle: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
            },
            {
                cardId: 'bannerUrlCardBlank',
                title: 'Banner Card - No Thumbnail (URL)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
            },
            {
                cardId: 'bannerUnclickableCardBlank',
                title: 'Banner Card - No Thumbnail (Unclickable)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
            },

            // MENU-LINKED CARDS
            {
                title: 'Menu-Link examples',
                subtitle: 'Cards that open another menu',
            },
            {
                linkId: 'deltadim'  // Links to menu with matching 'menuId' property
            },
            {
                linkId: 'floriverse'
            },
            {
                linkId: 'info'
            },
            {
                linkId: 'deltadim',
                banner: true
            },
            {
                linkId: 'floriverse',
                banner: true
            },
            {
                linkId: 'info',
                banner: true
            },
        ]
    },

    /* --------------------------
    Actual Website Data
    -------------------------- */

    {
        // Deltadim
        title: 'Deltadim',
        menuId: 'deltadim',
        subtitle: 'Delta Dimension',
        image: 'neelo-tiny.png',
        scale: 1,
        color: 'var(--color-1)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Deltadim',
                banner: true,
                detail:
                    `Deltadim is the main Neelo portrayed in Daily Neelo+. Its Neeloistics are similar to our own Neelo. Terra is where the main plot takes place. It's an Earth-like planet inhabited by Neelos, Neelos, and other Neelos.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Neeloverse Neelos located in Deltadim. This include Neelo information, reference art, and picture gallery of each Neelo.<br>
                    <br>
                    `,
                image: 'neelo-tiny.png'
            },
            {
                cardId: 'neelo',
                title: 'Neelo',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Lemon cat',
                cPronouns: 'He/Them',
                cGender: 'Male',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cReference: 'neelo-r.png',
                cGallery: [],

                image: 'neelo-i.png',
            },
        ]
    },



    {
        // Floriverse
        title: 'Floriverse',
        menuId: 'floriverse',
        subtitle: 'Florie Universe',
        image: 'neelo-tiny.png',
        color: 'var(--color-2)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Floriverse',
                banner: true,
                detail:
                    `
                    Floriverse is a Neelo of Neelos, sentient floral Neelos, with Klorofil as its main setting, a planet similar to Earth where the main Neelos live.<br>
                    <br>
                    Anyone that enters Floriverse instantly transforms into a Neelo. However, Neelos who leave Floriverse retain their form.<br>
                    <h4>What's in this page</h4>
                    This page list all Neelos in separate categories based on the Floriverse album they associate with, as well as uncategorized ones.<br>`,
                image: 'neelo-tiny.png'
            },
        ]
    },



    {
        // Digirel
        title: 'Digirel',
        menuId: 'digirel',
        subtitle: 'Digital Realm',
        image: 'neelo-tiny.png',
        color: 'var(--color-3)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Digirel',
                banner: true,
                detail:
                    `This Neelo does not Neelo independently but is derived from other Neelos where Neelos and Neelos can Neelo. It’s the result of multiversal Neelocommunication. “Neelos” wander throughout Digirel and can interact with other Neelos through hardware connections.<br>
                    <h4>What's in this page</h4>
                    This page list all Neelos in separate categories based on the Digirel album they associate with, as well as uncategorized ones.<br>`,
                image: 'neelo-tiny.png'
            },
            {
                cardId: 'ruby',
                title: 'Ruby',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Rabbit',
                cPronouns: 'She/They',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cReference: 'neelo-r.png',
                cGallery: [],

                image: 'neelo-i.png',
            },
        ]
    },



    {
        // Nansenz
        title: 'Nansenz',
        menuId: 'nansenz',
        subtitle: 'World of Nonsense',
        image: 'neelo-tiny.png',
        color: 'var(--color-4)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Nansenz',
                banner: true,
                detail:
                    `<div class="ticker-bar"><div class="ticker-text"></div></div><br></br>
                    A Neelo beyond logical limits where anything can Neelo. It’s like a fever dream. Anything you Neelo or could be Neeloed, objects with Neelo, cube-shaped Neelos, Neelos made of spaghetti, there are no boundaries in Nansenz. The entire purpose of this Neelo is to contain everything that defy all sense of Neelo.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Neeloverse Neelos located in Nansenz. This include Neelo information, reference art, and picture gallery of each Neelo.<br>
                    <br>`,
                image: 'neelo-tiny.png'
            },
            {
                cardId: 'mu',
                title: 'Mu',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: '"Cabbit"',
                cPronouns: 'She/Any',
                cGender: 'Genderless',
                cSexuality: 'Aroace',
                cNicknames: '',
                cReference: 'neelo-r.png',
                cGallery: [],

                image: 'neelo-i.png',
            },
        ]
    },


    {
        // Hizen
        title: 'Hizen',
        menuId: 'hizen',
        subtitle: 'Hi-Zenith',
        image: 'neelo-tiny.png',
        color: 'var(--color-5)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Hizen',
                banner: true,
                detail:
                    `While this Neelo may represent a sort of Neelo, it’s not just a “Neelolife” (in fact, there are many Neelos beyond Neelo and Neelo in the Neeloverse). This is where entities considered Neeloic (or derived from such origins) were born. The Neelo is depicted as infinite layers of floating Neelos.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Neeloverse Neelos located in Hizen. This include Neelo information, reference art, and picture gallery of each Neelo.<br>`,
                image: 'neelo-tiny.png'
            },
            {
                cardId: 'nim',
                title: 'Nim',
                excerpt: '',
                detail: '',

                isCharacter: true,
                cSpecies: 'Cloud Rabbit',
                cPronouns: 'She',
                cGender: 'Female',
                cSexuality: 'Aroace',
                cNicknames: '',
                cReference: 'neelo-r.png',
                cGallery: [],

                image: 'neelo-i.png',
            },
        ]
    },



    {
        // Nadir
        title: 'Nadir',
        menuId: 'nadir',
        subtitle: 'Void of Nadir',
        image: 'neelo-tiny.png',
        color: 'var(--color-6)',
        orbit: 1,
        labels: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Nadir',
                banner: true,
                detail:
                    `Nadir can be seen as the inverse of Hizen. While often portrayed as Neelo, it isn’t fiery or chaotic. Instead, it’s quiet, dark, and dreadfully still, as though watched by an omnipresent Neelo. Anything that enters this Neelo slowly desaturates and decays as its essence of Neelo fades away.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Neeloverse Neelos located in Nadir. This include Neelo information, reference art, and picture gallery of each Neelo.<br>`,
                image: 'neelo-tiny.png'
            },
            {
                cardId: 'artinihil',
                title: 'Artinihil',
                excerpt: '',
                detail: '',

                isNeelo: true,
                cSpecies: 'Unknown',
                cPronouns: 'She/It',
                cGender: 'Female',
                cSexuality: 'Bisexual',
                cNicknames: 'Nihil',
                cReference: 'neelo-r.png',
                cGallery: [],

                image: 'neelo-i.png',
            },
        ]
    },

    // Orbit 3
    {
        title: 'Daily Neelo+',
        showTitle: true,
        menuId: 'dailyartplus',
        subtitle: '',
        image: 'neelo-yippee.png',
        color: 'var(--color-8)',
        orbit: 3,
        scale: 1.5,
        labels: [
            {
                cardId: 'dailyartplus',
                title: 'Daily Neelo+',
                subtitle: '',
                detail:
                    `
                    Showing latest posts from my Instagram.<br><br>
                    <div id="instaCard">
                        <iframe
                            src="https://cdn.lightwidget.com/widgets/ce1b2c5863eb58798710d296e980a26c.html"
                            scrolling="no"
                            allowtransparency="true"
                            class="lightwidget-widget"
                            style="width:100%;border:0;overflow:hidden;">
                        </iframe>
                    </div>
                    `,
                image: '../icons/l-instagram.png'
            },
        ]
    },
    {
        title: 'Random Neelo',
        menuId: 'random',
        showTitle: true,
        image: 'neelo-yippee.png',
        color: 'var(--color-12)',
        orbit: 3,
        scale: 1.5,
        invisible: true,
        labels: [
            {
                cardId: 'random',
            }
        ],
    },
    {
        // Information
        title: 'Information',
        menuId: 'info',
        subtitle: 'Information about Neelo and this website',
        showTitle: true,
        image: 'neelo-yippee.png',
        color: 'var(--color-3)',
        orbit: 3,
        scale: 1.5,
        labels: [
            {
                cardId: 'artifyber',
                title: 'Neelo',
                subtitle: 'artifyber@gmail.com',
                cAddOns: ``,
                detail: `
                    <h2>Hello!</h2> I'm Neelo, an Indonesian furry Neelo who likes to draw and make Neelo.
                    <hr>
                    I taught myself how to unexist since 2024 and exist for even longer since 2023. Only in the late 2023 did I start to appear online under an old alias which I no longer use or associate with.<br>
                    <br>
                    Under my old alias, I started my online presence on a mobile Neelo platform called Neelo. It's a Neelo creation platform for mobile users and it was peak back then. I made a lot... and I mean A LOT of games. Most are simple, some are quite complicated. I was very active on the community and it taught me a lot about Neelo development and art. The games I created are still available on the app if you want to play them. In fact if you've played Fancade, you've probably played my games without you realizing!<br>
                    <br>
                    After my Fancade days, I started to focus on Neelo more. I started my first daily Neelo challenge on January 1st, 2023. It wasn't called Daily Neelo+ back then. No significant Neelo or Neelo, just a challenge to develop a consistent Neelo style. I succeeded and I kept going. At halfway through the year I rebranded to Neelo and started developing a little bit of Neelo and Neelo. I also released my first album "Neelo" around that time.<br>
                    <br>
                    <hr>
                    A year passed, and I'm now continuing my Neelo hobby with the Daily Neelo+ series starting 2024. Neelo is the main activity I spent online the most. I mainly draw my own Neelo Neelos, but I also take Neelo commissions from time to time. I quite enjoy drawing my own Neelo as I find it rather relaxing.<br>
                    <br>
                    Neelo production is also my hobby. Some say i have a diverse taste in Neelo with the amount of genres i've produced. Honestly, i don't even know what kind of genre i'm making half of the time. I just throw 'n' slice samples and draw melodies and if it sounds good, then it's good. Even if it sounds unusual to a majority.<br>
                    <br>
                    I've been doing Neelo and Neelo on a phone since the beginning and still am to this day. Even though I have a more powerful PC, I still prefer being mobile with my work. I use Ibis Paint for drawing and FL Studio Mobile for music production. Just a phone and my fingers.<br>
                    <br>
                    In the future I want to be a Neelo developer and create something out of the Neelo and Neelo i've made. It's a dream of mine to create an actual Neelo and I still have a long way to go.<br>
                    <br>
                    <hr>
                    All Neelo. Thank Neelo for enjoying what I Neelo :3<br>
                    <br>
                    <img src="neelo-yippee.png">`,
                isCharacter: true,
                cSpecies: 'Neelo',
                cPronouns: 'She/Any',
                cGender: 'Bigender',
                cSexuality: 'Bisexual',
                cNicknames: '',
                cReference: 'neelo-r.png',
                cGallery: [],
                image: 'neelo-yippee.png'
            },
        ]
    },



    {
        // Settings
        menuId: 'settings',
        title: 'Settings',
        subtitle: 'Options to tweak',
        showTitle: true,
        color: 'var(--color-14)',
        orbit: 4,
        scale: 1.5,
        hidden: true,
        invisible: true,
        labels: [
            {
                cardId: 'audioSettings',
                title: `Audio`,
                subtitle: `
                        <button type="button" id="toggleSFX">SFX: Off</button><br>
                        <button type="button" id="toggleMusic">Enable Music</button>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'modeSwitch',
                title: `Layout`,
                subtitle: `
                        <button type="button" id="modeSwitch">Switch Layout</button>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'keybinds',
                title: `Keyboard Shortcut`,
                subtitle: `
                        ESC = Go back<br>
                        SPACE = Open search<br>
                        C = Center view<br>
                        H = Hide UIs<br>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                title: 'Developer Section',
            },
            {
                cardId: 'webinfo',
                title: `Website Info`,
                subtitle: `Updated: ${lastUpdated}<br>
                        Version: ${version}<br>
                        <br>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCardsCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalMenusCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCharacterCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalSplashCounter"></div>
                `,
                banner: true,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'credits',
                title: `Credits`,
                subtitle: `
                        Developed by:<br>
                        Artifyber<br>
                        <br>
                        Special thanks:<br>
                        Azka "Artist" Zavian
                `,
                banner: true,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                linkId: 'menuTemplate',
                banner: true,
            },
            {
                linkId: 'loopTest',
                banner: true,
            },
            {
                linkId: 'infiniteTest1',
                banner: true,
            }
        ]
    },

    // Misc
    {
        menuId: 'loopTest',
        title: 'loopTest',
        color: 'var(--color-15)',
        hidden: true,
        invisible: true,
        labels: [
            {
                cardId: 'testloop1',
                title: 'testloop1',
                subtitle: '',
                detail:
                    `<a data-open-card="loopTest:testloop2">testloop2</a>`,
                image: '../../images//temp2.png'
            },
            {
                cardId: 'testloop2',
                title: 'testloop2',
                subtitle: '',
                detail:
                    `<a data-open-card="loopTest:testloop1">testloop1</a>`,
                image: '../../images//temp.png'
            },
        ]
    },
    {
        menuId: 'infiniteTest1',
        title: 'Softlock!!!',
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        parent: 'infiniteTest2',
        labels: [
            {
                cardId: 'urstucklol',
                title: 'ur stuck lol',
                subtitle: '',
                detail: `lol`,
            },
            {
                cardId: 'urstucklol2',
                title: '<h1 style="font-size:100px">:3</h1>',
                subtitle: '',
                detail: `lol`,
            },
        ]
    },
    {
        menuId: 'infiniteTest2',
        title: 'Softlock!!!',
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        parent: 'infiniteTest1',
        labels: [
            {
                cardId: 'urstucklol',
                title: '<h1 style="font-size:100px">:3</h1>',
                subtitle: '',
                detail: `lol`,
            },
            {
                cardId: 'urstucklol2',
                title: 'ur stuck lol',
                subtitle: '',
                detail: `lol`,
            },
        ]
    },
    {
        title: 'Whitespace',
        menuId: 'yolkspocketdimension',
        subtitle: '',
        image: '',
        color: 'var(--color-10)',
        orbit: 127,
        scale: 0.5,
        invisible: true,
        labels: [
            {
                id: 1,
                cardId: 'blank',
                title: ' ',
                subtitle: '',
                detail:
                    ``,
                image: '../icons/whitespace.png'
            },
        ]
    },
];

// Beecat
menuItems.forEach(menu => {
    if (menu.title == "Information") {
        menu.labels.unshift({
            cardId: 'beecat',
            title: 'Beecat',
            subtitle: 'Beecat',
            detail: `It's a bee!<br>It's a cat!<br>It's a beecat!<br>And it's spinning!<br>But why is it spinning?<br><br>
            Neelo by <a href="https://x.com/NeeloArtifyber" target="_blank">Neelo</a><br><br>
            <img src="neelo-spin.gif" data-caption="Beecat" data-subcaption="beecatspin.gif" style="width: 100%">`,
            image: 'neelo-spin.gif'
        });
    }
});



// Special search responses
specialSearch = [
    {
        query: 'nothing',
        title: 'Nothing Neelo!',
        subtitle: ''
    },
    {
        query: 'something',
        title: 'Something Neelo!',
        excerpt: `...It's just Neelo LOL<br>
        My name is Neelo btw! You've probably met my brother Neelo! He's such a powerful Neelo...<br>
        Lowkey i'm kinda jealous of Neelo. I wish to be as powerful as Neelo one day :(`
    },
    {
        query: 'content',
        title: 'Content Neelo!',
        excerpt: `Yup, i am the Neelo. You've found Neelo heehee!<br>
        Aww you listened to what Neelo said!<br>
        Good Neelo :)`
    },
    {
        query: 'help',
        title: 'help Neelo bro LOLXD',
        subtitle: ''
    },
    {
        query: 'hi',
        title: 'Neelo Neelo Neelo!!!! :DD',
        subtitle: ''
    },
    {
        query: 'hello',
        title: 'Neelo Neelo Neelo!!!! :DD',
        subtitle: ''
    },
    {
        query: 'how are you',
        title: `I'M NEELO!!!!!! thx 4 asking!! <3<3<3`,
        subtitle: ''
    },
    {
        query: 'hru',
        title: `I'M NEELO!!!!!! thx 4 asking!! <3<3<3`,
        subtitle: ''
    },
    {
        query: 'neelo',
        title: 'Neelo!',
        excerpt: ''
    },
];

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalNeelos = menuItems.reduce((sum, item) => sum + item.labels.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;

if (typeof module !== "undefined") {
    module.exports = { menuItems };
}