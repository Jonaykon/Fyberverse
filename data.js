/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

// Metadata
const lastUpdated = "July 26, 2026";
const version = '1.2.3';

// menu logo redirection
menuLogoRedirect = 'info';

// orbitData attributes:
// orbit: int            - which orbit id these attributes apply to
// title: string         - the title of this orbit
// desc: string          - the description of this orbit
// orbitNum: int         - the actual orbit layer which determine how far it is from the center. defaults to orbit
// direction: float      - the direction of spin and how fast it is. x<0 is clockwise, x>0 is counterclockwise.
// offsetX: int          - offsets the X position of this orbit by pixels
// offsetY: int          - offsets the Y position of this orbit by pixels
// scaleX: float         - scale this orbit by the X axis
// scaleY: float         - scale this orbit by the Y axis
// center: string        - menuId of a visible orbiting button that can be set as the center of the ring, making the orbit behave like satellites
// hideRing: bool        - hides the ring visual if set to true
// orbitShape: string       - the shape of the orbit, which can be "ellipse", "circle", "square", or a custom shape defined in getOrbitShapeFunction() (defaults to "ellipse")
// orbitShapeParams: object   - parameters for the shape function, such as rotation for the ellipse shape

// Orbit data
orbitData = [
    {
        orbit: 1,
        title: "Universes",
        desc: "The 6 sections of Fyberverse",
        direction: 1,
    },
    /* {
        orbit: 3,
        title: "Canon",
        desc: "Fyberverse-related menus",
    },
    {
        orbit: 4,
        orbitNum: 5,
        direction: -1,
        title: "Info",
        desc: "About me and this website",
    },
    {
        orbit: 5,
        orbitNum: 0.375,
        direction: 0.75,
        title: "Links",
        desc: "Connections",
        center: "info",
        scaleX: 1,
        scaleY: 1,
    }, */
    {
        orbit: 127,
        scaleX: 1,
        scaleY: 1,
    },
];

// menu attributes:
// menuId: string                      - REQUIRED unique identifier for the menu (alphanumeric, no spaces)
// title: string                       - menu name and title
// subtitle: string                    - short menu description
// showTitle: bool                     - show the menu name in orbit
// orbit: float                        - orbit id and default layer placement
// image: string                       - path to the menu thumbnail image (optional)
// imageScale: float                   - scale for the menu thumbnail (default: 1)
// color: string                       - menu accent color (optional)
// gridColor: string                   - card grid background color (optional)
// gridColor2: string                  - secondary gradient color for the card grid background (optional)
// gridOpacity: float                  - opacity of the card grid background (optional)
// scale: float                        - scale the menu button
// hidden: bool                        - hide menu from orbit (accessible by direct link only)
// invisible: bool                     - exclude this menu from search
// noMargin: bool                      - make the card grid span the full window width
// html: string                        - optional custom HTML shown above the card grid
// cards: array                        - cards inside this menu; if only one card exists, it opens automatically

// card attributes:
// cardId: string                      - unique identifier for the card (alphanumeric, no spaces). if unset, this becomes a separator
// title: string                       - card title
// subtitle: string                    - short description or excerpt
// detail: string                      - HTML content for the card
// image: string                       - path to the card thumbnail image (optional)
// url: string                         - makes this card open a URL when clicked
// unclickable: bool                   - makes the card not clickable
// blank: bool                         - makes the card textless (image-only)
// banner: bool                        - makes the card a full-width banner
// semibanner: bool                    - makes the card a half-height banner
// linkId: string                      - when used alone, links to another menu (menuId)
// reference: string                   - when used alone, copies another card (menuId:cardId)
// isCharacter: bool                   - marks this card as a character card
// species: string                     - character species (optional)
// pronouns: string                    - character pronouns (optional)
// gender: string                      - character gender (optional)
// sexuality: string                   - character sexuality (optional)
// flags: array                        - array of emoji flag strings (optional)
// aliases: string                     - alternate character names (optional)
// characterAttrs: { name: value }     - custom character attribute table (optional)
// extra: string                       - appended info or HTML after the character table (optional)
// html: string                        - appended extra HTML at the end of the card (optional)
// separatorType: string               - if this card is a separator, type of the separator (only "default" or "space" is available for now) (optional)
// refsheet: string                    - path to character reference art (optional)
// gallery: array                      - array of image paths for a character gallery (optional)
// relatives: { cardId, relation }     - internal cards that redirect to another card (menuId:cardId)
// sections: { title, detail }         - add card sections with their own title and detail
// cardParentId: string                - DEV ONLY contains the automatically-assigned menuId of this card

// Main menu data array
let menuItems = [
    /* --------------------------
    Menu Template Example
    Demonstrates the available menu and card configurations
    -------------------------- */
    {
        menuId: 'menuTemplate',
        title: 'Menu Template Example',
        showTitle: false,
        subtitle: 'A demonstration of available menu and card layouts',
        image: 'images/temp2.png',

        // Visual styling
        color: 'var(--color-15)',
        gridColor: 'var(--bg)',
        gridColor2: 'var(--accent3)',
        gridOpacity: 0.8,

        // Orbit menu behavior
        orbit: 0,
        scale: 2,

        // Hidden from normal navigation
        hidden: true,
        invisible: true,

        // Custom HTML displayed at the top of the menu
        html: `
        <h1>Welcome!</h1>
        This menu demonstrates the capabilities of the template and also functions as a convenient CSS testing page. 
        You can freely adjust the styling of your website and instantly preview the results here.<br>
        <br>
        This message appears because the menu includes the <code>html</code> property, which allows you to inject 
        custom HTML directly at the top of a menu. Any elements that normally work inside cards can also be used here. 
        Feel free to modify it however you like!
    `,

        cards: [

            /* --------------------------
            BASIC CARD TYPES
            -------------------------- */

            {
                // Cards without cardId act as separators
                title: 'Card Examples',
                subtitle: 'Primary card formats used to display content',
            },

            {
                cardId: 'normalCard',
                title: 'Normal Card',
                subtitle: 'Standard card with thumbnail',
                detail: 'This is a template for a normal card.<br>You can place any raw HTML content here.',
                image: 'images/temp.png'   // Displayed in 1:1 aspect ratio
            },

            {
                cardId: 'urlCard',
                title: 'URL Card',
                subtitle: 'Card that redirects to an external link',
                url: 'https://x.com/artifyber',
                image: 'images/temp.png'
            },

            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                subtitle: 'Static informational card',
                unclickable: true,
                image: 'images/temp.png'
            },

            /* --------------------------
            BLANK CARDS (NO TEXT)
            -------------------------- */

            {
                cardId: 'normalCardBlank',
                blank: true,
                detail: 'This is a blank card template.<br>You can insert any HTML content you want.',
                image: 'images/temp.png'   // Displayed in 4:5 aspect ratio
            },

            {
                cardId: 'urlCardBlank',
                blank: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp.png'
            },

            {
                cardId: 'unclickableCardBlank',
                blank: true,
                unclickable: true,
                image: 'images/temp.png',
            },

            /* --------------------------
            TEXT-ONLY CARDS (NO THUMBNAIL)
            -------------------------- */

            {
                cardId: 'normalCardPlain',
                title: 'Normal Card',
                subtitle: 'Text-only card',
                detail: 'A standard card without an image thumbnail.<br>HTML content is supported.'
            },

            {
                cardId: 'urlCardPlain',
                title: 'URL Card',
                subtitle: 'Text-only external link',
                url: 'https://x.com/artifyber'
            },

            {
                cardId: 'unclickableCardPlain',
                title: 'Unclickable Card',
                subtitle: 'Text-only informational card',
                unclickable: true
            },

            /* --------------------------
            CARD CONTENT DEMOS
            -------------------------- */

            {
                title: 'Advanced Card Features',
                subtitle: 'Special functionality and content types',
            },

            {
                cardId: 'sectionedCard',
                title: 'Sectioned/Tabbed Card',
                subtitle: 'Cards with multiple pages via tabs',
                detail: `
                <p>Using the <code>sections</code> attribute allows a card to contain <strong>multiple pages</strong> with tabs for navigation!</p>
                <p>Click the tabs below to view each section:</p>
                <hr>
                <p><em>This is perfect for:</em></p>
                <ul>
                    <li>Character profiles with multiple categories</li>
                    <li>FAQ sections</li>
                    <li>Multi-part articles</li>
                </ul>
            `,
                sections: [
                    {
                        title: 'Features',
                        detail: `
                        <h3>Features of Sectioned Cards</h3>
                        <ul>
                            <li>Each section has its own title</li>
                            <li>Independent HTML content per section</li>
                            <li>Tabbed interface for easy navigation</li>
                            <li>Can include images, embeds, and internal cards</li>
                        </ul>
                    `
                    },
                    {
                        title: 'Usage',
                        detail: `
                        <h3>When to Use Sections</h3>
                        <p>Use sections when you have related but distinct content that benefits from organization:</p>
                        <ul>
                            <li><strong>Characters:</strong> Bio, Gallery, Relationships</li>
                            <li><strong>Projects:</strong> Overview, Details, Media</li>
                            <li><strong>Tutorials:</strong> Step 1, Step 2, Step 3</li>
                            <li><strong>Music Albums:</strong> Info, Tracklist, Lyrics</li>
                        </ul>
                    `
                    },
                    {
                        title: 'Example',
                        detail: `
                        <h3>Example Content</h3>
                        <p>Here's an embedded image in a section:</p>
                        <img src="images/temp2.png" style="max-width: 100%; border-radius: 10px;">
                        <p style="margin-top: 10px;">Sections support any HTML content!</p>
                    `
                    },
                ],
                image: 'images/temp2.png'
            },

            {
                cardId: 'internalCardsDemo',
                title: 'Internal Cards (Embedded)',
                subtitle: 'Cards that contain other cards',
                detail: `
                <h2>Internal Cards Demonstration</h2>
                <p>Cards can <strong>embed other cards</strong> using the <code>internalCard()</code> helper function!</p>
                <p>This creates a rich, interconnected content experience.</p>
                
                <h3>Embedded Examples:</h3>
                <div class="container">
                    ${internalCard({ href: "template:standardCard" })}
                    ${internalCard({ href: "deltadim" })}
                    ${internalCard({
                    href: "template:unclickableCard",
                    caption: "Custom caption for this card!",
                    banner: true
                })}
                </div>
                
                <h3>Customized Internal Cards:</h3>
                <div class="container">
                    ${internalCard({
                    href: "template:urlCard",
                    title: "Override Title",
                    subtitle: "This overrides the original card's title/subtitle"
                })}
                    ${internalCard({
                    href: "template:textOnlyCard",
                    banner: true,
                    unclickable: true
                })}
                </div>
                
                <p><strong>Internal cards support:</strong> Custom titles, custom subtitles, banner mode, captions, and unclickable mode!</p>
            `,
                image: 'images/temp2.png'
            },

            /* --------------------------
            BANNER CARDS
            -------------------------- */

            {
                title: 'Banner Examples',
                subtitle: 'Cards that span full width of the container',
            },

            {
                cardId: 'bannerCard',
                title: 'Banner Card',
                subtitle: 'Full-width card with image',
                detail: 'A banner card template. Supports raw HTML content.',
                banner: true,
                image: 'images/temp3.png'
            },

            {
                cardId: 'bannerUrlCard',
                title: 'Banner Card (URL)',
                subtitle: 'Full-width card that redirects to a link',
                banner: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp3.png'
            },

            {
                cardId: 'bannerUnclickableCard',
                title: 'Banner Card (Unclickable)',
                subtitle: 'Full-width static informational banner',
                banner: true,
                unclickable: true,
                image: 'images/temp3.png'
            },

            {
                cardId: 'bannerCardBlank',
                title: 'Banner Card - No Thumbnail',
                subtitle: 'Full-width card without an image',
                detail: 'A banner card template without a thumbnail.',
                banner: true,
            },

            {
                cardId: 'bannerUrlCardBlank',
                title: 'Banner Card - No Thumbnail (URL)',
                subtitle: 'Full-width external link banner',
                banner: true,
                url: 'https://x.com/artifyber',
            },

            {
                cardId: 'bannerUnclickableCardBlank',
                title: 'Banner Card - No Thumbnail (Unclickable)',
                subtitle: 'Full-width static banner',
                banner: true,
                unclickable: true,
            },

            /* --------------------------
            SEMIBANNER CARDS
            -------------------------- */

            {
                title: 'Semibanner Examples',
                subtitle: 'Cards that span half width of the container',
            },

            {
                cardId: 'semibannerCard',
                title: 'Semibanner Card',
                subtitle: 'Half-width card with image',
                detail: 'A semibanner card template. Supports raw HTML content.',
                semibanner: true,
                image: 'images/temp3.png'
            },

            {
                cardId: 'semibannerUrlCard',
                title: 'Semibanner Card (URL)',
                subtitle: 'Half-width card that redirects to a link',
                semibanner: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp3.png'
            },

            {
                cardId: 'semibannerUnclickableCard',
                title: 'Semibanner Card (Unclickable)',
                subtitle: `
                    Half-width static informational banner<br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    `,
                semibanner: true,
                unclickable: true,
                image: 'images/temp3.png'
            },

            {
                cardId: 'semibannerCardBlank',
                title: 'Semibanner Card - No Thumbnail',
                subtitle: 'Half-width card without an image',
                detail: 'A semi-banner card template without a thumbnail.',
                semibanner: true,
            },

            {
                cardId: 'semibannerUrlCardBlank',
                title: 'Semibanner Card - No Thumbnail (URL)',
                subtitle: 'Half-width external link banner',
                semibanner: true,
                url: 'https://x.com/artifyber',
            },

            {
                cardId: 'semibannerUnclickableCardBlank',
                title: 'Semibanner Card - No Thumbnail (Unclickable)',
                subtitle: `
                    Half-width static informational banner<br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    `,
                semibanner: true,
                unclickable: true,
            },

            /* --------------------------
            MENU LINKS
            -------------------------- */

            {
                title: 'Menu Link Examples',
                subtitle: 'Cards that open another menu',
            },

            {
                linkId: 'deltadim'
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
                semibanner: true
            },
            {
                linkId: 'info',
                semibanner: true
            },

            /* --------------------------
            CHARACTER CARDS
            -------------------------- */
            
            {
                title: 'Character Cards',
                subtitle: 'Specialized cards with character attributes',
            },

            {
                cardId: 'demoCharacter',
                title: 'Sample Character',
                subtitle: 'A demonstration character card',
                detail: `
                <p>This character card demonstrates all the <strong>character-specific features</strong> available!</p>
                <p>Character cards automatically generate information tables, gallery sections, and relationship links.</p>
            `,

                isCharacter: true,
                species: 'Digitalia',
                pronouns: 'It/They/He',
                gender: 'Non-binary',
                sexuality: 'Pansexual',
                flags: ['rainbow'],
                aliases: 'Demo, Example, Test Subject',

                characterAttrs: {
                    'Age': '???',
                    'Height': '4\'7" (140cm)',
                    'Occupation': 'Template Character',
                    'Residence': 'The Fyberverse',
                    'Design Origin': 'Built-in Template',
                    'Favorite Color': 'Gray',
                    'Artist Notes': 'This is a demo character - replace with your own!'
                },

                extra: `
                <p><strong>Special Notes:</strong> This character is purely for demonstration purposes. Feel free to use this structure for your own characters!</p>
                <p><em>Extra HTML can be added after the character table using the <code>extra</code> field.</em></p>
            `,

                refsheet: 'images/tempoc-r.png',

                gallery: [
                    'images/tempoc.png',
                ],

                relatives: [
                    {
                        cardId: 'menuTemplate:demoCharacter',
                        relation: 'Itself'
                    },
                ],

                sections: [
                    {
                        title: 'Backstory',
                        detail: `
                        <h3>Character Backstory</h3>
                        <p>This is where you'd put a character's backstory, personality traits, and other narrative details.</p>
                        <p>The <code>sections</code> array lets you add unlimited custom tabs to character cards!</p>
                    `
                    }
                ],

                html: `
                <div style="background: var(--accent2); padding: 15px; border-radius: 10px; margin-top: 10px;">
                    <strong>Pro Tip:</strong> The <code>html</code> field appends content at the very end of the card, after all auto-generated sections!
                </div>
            `,

                image: 'images/tempoc.png',
            },

            /* --------------------------
            SEPARATOR TYPES
            -------------------------- */
            {
                separatorType: 'default',
                title: 'Default Separator',
                subtitle: 'Standard section divider'
            },

            {
                separatorType: 'space',
                title: 'Space Separator',
                subtitle: 'Adds vertical spacing without a visible divider'
            },

            /* --------------------------
            RICH CONTENT
            -------------------------- */
            {
                title: 'Rich Content Examples',
                subtitle: 'Demonstrating various HTML capabilities',
            },

            {
                cardId: 'embedDemo',
                title: 'Embedded Content',
                subtitle: 'Spotify, YouTube, and more',
                detail: `
                <h2>Embedded Media Examples</h2>
                <p>Cards support all kinds of embedded content!</p>
                
                <h3>Spotify Embed:</h3>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4gdYjAljNAoRtL5TM7lZ13?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                
                <p>Any iframe or embed code works!</p>
            `,
                image: 'images/temp.png'
            },

            {
                cardId: 'galleryDemo',
                title: 'Image Gallery',
                subtitle: 'Grid layout image demonstration',
                detail: `
                <h2>Image Gallery Layout</h2>
                <p>Use the <code>container</code> class for horizontal galleries:</p>
                <div class="container">
                    <img src="images/temp.png">
                    <img src="images/temp2.png">
                    <img src="images/temp3.png">
                    <img src="images/temp.png">
                    <img src="images/temp2.png">
                    <img src="images/temp3.png">
                </div>
                <p>Or <code>container grid</code> to turn it into a grid:</p>
                <div class="container grid">
                    <img src="images/temp.png">
                    <img src="images/temp2.png">
                    <img src="images/temp3.png">
                    <img src="images/temp.png">
                    <img src="images/temp2.png">
                    <img src="images/temp3.png">
                </div>
                <p>Images with captions:</p>
                <div class="container grid">
                    <img src="images/temp.png" data-caption="Image 1" data-subcaption="First example image">
                    <img src="images/temp2.png" data-caption="Image 2" data-subcaption="Second example image">
                    <img src="images/temp3.png" data-caption="Image 3" data-subcaption="Third example image">
                </div>
                <hr>
                <div style="background: var(--accent2); padding: 15px; border-radius: 10px; margin-top: 10px;">
                    <strong>Pro Tip:</strong> The <code>gallery</code> tab is automatically created for each image in the card!
                </div>
            `,
                image: 'images/temp2.png'
            },

            // ============================================================
            // SECTION: TIPS & DOCUMENTATION
            // ============================================================
            {
                cardId: 'tipsAndTricks',
                title: 'Tips & Tricks',
                subtitle: 'Best practices for using this template',
                detail: `
                <h2>Template Usage Guide</h2>
                
                <h3>Card Structure</h3>
                <ul>
                    <li><strong>cardId:</strong> Unique identifier (required for linkable cards)</li>
                    <li><strong>title:</strong> Card heading</li>
                    <li><strong>subtitle:</strong> Secondary text (shorter is better)</li>
                    <li><strong>detail:</strong> Main HTML content (can be very long!)</li>
                    <li><strong>image:</strong> Path to thumbnail (optional but recommended)</li>
                </ul>
                
                <h3>Visual Options</h3>
                <ul>
                    <li><strong>banner: true</strong> - Full width card</li>
                    <li><strong>semibanner: true</strong> - Half width card</li>
                    <li><strong>blank: true</strong> - Image-only card (no text overlay)</li>
                    <li><strong>unclickable: true</strong> - Card doesn't open when clicked</li>
                </ul>
                
                <h3>Navigation</h3>
                <ul>
                    <li><strong>url: "https://..."</strong> - Opens external link</li>
                    <li><strong>linkId: "menuId"</strong> - Navigates to another menu</li>
                    <li><strong>reference: "menuId:cardId"</strong> - Copies content from another card</li>
                </ul>
                
                <h3>Character Cards</h3>
                <ul>
                    <li><strong>isCharacter: true</strong> - Enables character features</li>
                    <li><strong>species, pronouns, gender, sexuality</strong> - Basic info</li>
                    <li><strong>flags</strong> - Array of emoji strings</li>
                    <li><strong>characterAttrs</strong> - Custom key-value pairs</li>
                    <li><strong>relatives</strong> - Relationship links to other cards</li>
                    <li><strong>gallery</strong> - Array of image paths</li>
                    <li><strong>refsheet</strong> - Character reference sheet image</li>
                </ul>
                
                <h3>Sections/Tabs</h3>
                <ul>
                    <li><strong>sections</strong> - Array of {title, detail} objects for tabbed content</li>
                    <li>Auto-generates with gallery, relatives, and refsheet</li>
                </ul>
                
                <h3>Internal Cards</h3>
                <ul>
                    <li>Use <code>internalCard({ href: "menuId:cardId" })</code> function</li>
                    <li>Options: banner, caption, title, subtitle, unclickable</li>
                    <li>Good for linking related content</li>
                </ul>
                
                <hr>
                
                <h3>Quick Copy Template:</h3>
                <pre style="background: var(--bg); padding: 10px; border-radius: 5px; overflow-x: auto; font-size: 1rem;">
{
    cardId: 'yourCardId',
    title: 'Your Title',
    subtitle: 'Your Subtitle',
    detail: '&lt;p&gt;Your HTML content here&lt;/p&gt;',
    image: 'path/to/image.png',
    // Optional:
    banner: true,
    // or semibanner: true
    // or blank: true
    // or unclickable: true
    // or url: 'https://...'
    // or linkId: 'menuId'
    // or reference: 'menuId:cardId'
    // For characters:
    isCharacter: true,
    species: 'Species',
    pronouns: 'Pronouns',
    gender: 'Gender',
    sexuality: 'Sexuality',
    flags: ['rainbow'],
    aliases: 'Alias names',
    characterAttrs: { 'Key': 'Value' },
    relatives: [{ cardId: 'menuId:cardId', relation: 'Relation' }],
    gallery: ['image1.png', 'image2.png'],
    refsheet: 'refsheet.png',
    sections: [{ title: 'Section', detail: 'Content' }]
}
                </pre>
            `,
                banner: true,
                image: 'images/temp.png'
            },
        ]
    },

    /* --------------------------
    Actual Website Data
    -------------------------- */

    
    {
        // Information
        title: 'Information',
        menuId: 'info',
        subtitle: 'Information about Artifyber and this website',
        hidden: true,
        showTitle: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        gridColor: 'var(--bg)',
        gridColor2: 'var(--accent3)',
        gridOpacity: 0.9,
        orbit: 4,
        scale: 1.5,
        html: `
            <h1 style="margin-top: 0">Welcome!</h1>
            Click an item to view its content.
        `,
        cards: [
            {
                cardId: 'artifyber',
                title: 'Artifyber',
                subtitle: 'artifyber@gmail.com',
                extra: ``,
                detail: `
                    <h2>Hello!</h2>
                    I'm Artifyber, a furry artist who likes to draw and make music.<br>
                    <br>`,
                html: `
                    I taught myself how to draw since 2021 and produce music for even longer since 2019. Only in the late 2021 did I start to appear online.<br>
                    <br>
                    I started my first daily art challenge on January 1st, 2023. It wasn't called Daily Art+ back then. No significant worldbuilding or lore, just a challenge to develop a consistent art style. I succeeded and I kept going. At halfway through the year I rebranded to Artifyber and started developing a little bit of lore and worldbuilding. I also released my first album "Floriverse" around that time.<br>
                    <br>
                    A year passed, and I'm now continuing my art hobby with the Daily Art+ series starting 2024. Drawing is the main activity I spent online the most. I mainly draw my own furry characters, but I also take art commissions from time to time. I quite enjoy drawing my own characters as I find it rather relaxing.<br>
                    <br>
                    Music production is also my hobby. Some say i have a diverse taste in music with the amount of genres i've produced. Honestly, i don't even know what kind of genre i'm making half of the time. I just throw 'n' slice samples and draw melodies and if it sounds good, then it's good. Even if it sounds unusual to a majority.<br>
                    <br>
                    In the future I want to be a game developer and create something out of the worlds and characters i've made. It's a dream of mine to create an actual game and I still have a long way to go.<br>
                    <br>
                    Thank you for enjoying what I make :]<br>
                `,
                isCharacter: true,
                species: 'Fyber',
                pronouns: 'She/Any',
                gender: 'Bigender',
                sexuality: 'Bisexual',
                flags: ['aromantic'],
                aliases: '',
                refsheet: 'images/r/artifyber-r.png',
                gallery: [
                    "images/fyberhappy.png",
                    "images/c/artifyber-c.png",
                    "images/c/artifyber-c2.png",
                ],
                image: 'images/temp3.png'
            },
            {
                cardId: 'ocrules',
                title: 'Character Rules',
                subtitle: `Rules regarding Artifyber's characters`,
                detail:
                    `
                    Last updated: May 7th, 2026<br>
                    Feel free to reach out to me for anything else not listed.
                    <h2>Fanart Policy</h2>
                    <h4>Allowed:</h4>
                    <ul>
                        <li>Single-character</li><br>
                        <li>Paired with another Artifyber character</li><br>
                        <li>Paired with your own character</li><br>
                        <li>Shipping my characters with each other<br>
                            <small>Preferably canonical relationship but it isn't necessary</small></li><br>
                        <li>Suggestive content<br>
                            <small>It will not be reposted or boosted by my profile</small></li><br>
                    </ul>
                    <h4>Not Allowed:</h4>
                    <ul>
                        <li>Modifying the design of my characters</li><br>
                        <li>Creating all kinds of hateful or political content</li><br>
                        <li>Using my characters in a commercial setting unless i gave permission to do so</li><br>
                        <li>Using generative AI to create a fanart</li><br>
                    </ul>
                    <details>
                        <summary>About 18+ fanarts</summary>
                        <br>
                        If you are creating adult content of my characters, please put proper warnings and filters.<br>
                        <br>
                        Adult contents will not be reposted or boosted to my profile. Do not tag me when you post your adult content. Although, feel free to notify me privately.
                        <ul>
                            <li>Do not draw my characters paired with your own character in NSFW settings unless i explicitly give permission to</li><br>
                            <li>Do not draw fetish art of my characters</li><br>
                            <li>Do not create adult content out of these characters:</li><br>
                            <ul>
                                <li>Artineko, Artimouse, Articani, Singularikitty, Gamma, Sukie</li><br>
                                <li>Polygon species from <a data-open-card="hizen">Hizen</a></li><br>
                            </ul>
                    </details>
                    <hr>
                    <h2>Character Derivatives</h2>
                    You are allowed to create a new character that is a derivative of the following as long as your character is not too similar to one of mine:
                    <ul>
                        <li>All kinds of florie in <a data-open-card="floriverse">Floriverse</a></li><br>
                        <li>All kinds of object-heads or object characters in <a data-open-card="nansenz">Nansenz</a></li><br>
                        <li>Polygon species of <a data-open-card="hizen">Hizen</a></li><br>
                    </ul>
                    `,
                image: 'icons/oc-rules.png'
            },
            {
                linkId: 'links',
            },
            {
                separatorType: 'break'
            },
            {
                linkId: 'dailyartplus',
            },
            {
                linkId: 'converters',
            },
            {
                linkId: 'random',
            },
            {
                separatorType: 'space'
            },
        ]
    },

    {
        // Deltadim
        title: 'Deltadim',
        menuId: 'deltadim',
        subtitle: 'Delta Dimension',
        image: 'icons/deltadim.png',
        scale: 1,
        color: 'var(--color-1)',
        gridColor: 'var(--color-1)',
        gridColor2: 'var(--accent2)',
        gridOpacity: 0.1,
        orbit: 1,
        cards: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Deltadim',
                banner: true,
                detail:
                    `Deltadim is the main universe portrayed in Daily Art+. Its characteristics are similar to our own universe. Terra is where the main plot takes place. It's an Earth-like planet inhabited by furries, humanoids, and other creatures.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Deltadim. This include character information, reference art, and picture gallery of each character.<br>
                    <br>
                    `,
                image: 'icons/deltadim.png'
            },
            {
                linkId: 'deltadim-teksui',
            },
            {
                linkId: 'deltadim-chromasia',
            },
            {
                linkId: 'deltadim-aakik',
            },
            {
                linkId: 'deltadim-deltaspace',
            },
            {
                title: 'Pinned',
                subtitle: 'You might be looking for these'
            },
            {
                reference: 'deltadim-teksui:artibun',
            },
            {
                reference: 'deltadim-deltaspace:skitty',
            },
            {
                reference: 'deltadim-deltaspace:gamma',
            },
            {
                reference: 'deltadim-teksui:artifish',
            },
            {
                reference: 'deltadim-teksui:artilope',
            },
            {
                reference: 'deltadim-teksui:card',
            },
        ]
    },
    {
        menuId: 'deltadim-teksui',
        title: 'Teksui',
        subtitle: 'Terra',
        image: 'images/deltadim-teksui.png',
        color: 'var(--color-9)',
        parent: 'deltadim',
        hidden: true,
        cards: [
            {
                cardId: 'artibun',
                title: 'Artibun',
                subtitle: '',
                detail:
                    `Artibun is a white female rabbit, with parts of her body colored in lilac, such as her arms, legs, right ear, half of her tail, and chest to abdomen area. Her inner ears are colored in blurple and has dark blue eyes.<br>
                <br>
                Arti has a passion for drawing, singing, and cooking delicacies. She is known in Terra as a celebrity by her popularity on social medias.<br>
                <br>
                Artibun was born as a supposedly faulty clone of Articat. On prototype, she was meant to only be a near identical copy of Articat except with bunny ears and a puffy tail. However, an accident happened, and her flesh wasn't developed correctly. Thankfully, she was later recovered on a second attempt thanks to the love of her partner.
                `,

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'She/Any',
                gender: 'Bigender',
                sexuality: 'Bisexual',
                aliases: 'Arti, Bunbun',
                extra: ``,
                refsheet: 'images/r/artibun-r.png',
                gallery: [
                    'images/c/artibun-c.png',
                    'images/c/artibun-c2.png',
                    'images/c/artibun-c3.png',
                    'images/c/artibun-c4.png',
                    'images/c/artibun-c5.png',
                    'images/c/artibun-c6.png',
                    'images/c/artibun-c7.png',
                    'images/c/artibun-c9.png',
                    'images/c/artibun-c10.png',
                    'images/c/artibun-c11.png',
                    'images/c/artibun-c12.png',
                    'images/c/artibun-c13.png',
                    'images/c/artibun-c14.png',
                    'images/c/artibun-c15.png',
                    'images/c/artibun-c16.png',
                    'images/c/artibun-c17.png',
                    'images/c/artibun-c18.png',
                    'images/c/artibun-c19.png',
                    'images/c/artibun-c20.png',
                    'images/c/artibun-c21.png',
                    'images/c/artibun-c22.png',
                    'images/c/artibun-c23.png',
                    'images/c/artibun-c24.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:articat',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artibun-i.png',
            },
            {
                cardId: 'articat',
                title: 'Articat',
                subtitle: '',
                detail:
                    `Articat is a white cat, with parts of her body colored in light blurple such as her right ear and chest to abdomen area. The inside of her right ear is colored white while the other ear is colored in light blurple.<br>
                <br>
                Arti is a multi-genre music composer, typically creating EDM and a mix of jazz. Her success as a musical artist made her just as popular as her partner Artibun on social medias.
                `,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She/He',
                gender: 'Trans-Female',
                sexuality: 'Bisexual',
                aliases: 'Arti, Kiki',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/articat-c14.png',
                    'images/c/articat-c15.png',
                    'images/c/articat-c16.png',
                    'images/c/articat-c10.png',
                    'images/c/articat-c8.png',
                    'images/c/articat-c12.png',
                    'images/c/articat-c11.png',
                    'images/c/articat-c13.png',
                    'images/c/articat-c.png',
                    'images/c/articat-c2.png',
                    'images/c/articat-c3.png',
                    'images/c/articat-c4.png',
                    'images/c/articat-c5.png',
                    'images/c/articat-c6.png',
                    'images/c/articat-c7.png',
                    'images/c/articat-c9.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artibun',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/articat-i.png',
            },
            {
                cardId: 'artifox',
                title: 'Artifox',
                subtitle: '',
                detail: `Arti Fox is an arctic fox with blue accent colors on parts of his body, such as arms, pawfeet and the base of his tail. His inner ears and eyes are also colored in blue and he has top surgery scars.<br>
                <br>
                Arti likes to play drums and often expresses his pride as a transgender male. Although his selfish and sometime overconfident attitude made him look like a jerk to some people, he still care about the people he loved, such as his family and especially his sister Anna Fox.<br>
                <br>
                Arti was born in Chromasia and moved to Teksui after his gender-affirming surgery. He's currently living in an apartment and work part-time as a fast food employee.`,

                isCharacter: true,
                species: 'Fox',
                pronouns: 'He/They',
                gender: 'Trans-male',
                sexuality: 'Bisexual',
                aliases: 'Arti, Fofo, Foxxo',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artifox-c.png',
                    'images/c/artifox-c2.png',
                    'images/c/artifox-c3.png',
                    'images/c/artifox-c4.png',
                    'images/c/artifox-c5.png',
                    'images/c/artifox-c6.png',
                    'images/c/artifox-c7.png',
                    'images/c/artifox-c8.png',
                    'images/c/artifox-c9.png',
                    'images/c/artifox-c10.png',
                    'images/c/artifox-c11.png',
                    'images/c/artifox-c12.png',
                    'images/c/artifox-c13.png',
                ],

                image: 'images/i/artifox-i.png',
            },
            {
                cardId: 'artifish',
                title: 'Artifish',
                subtitle: '',
                detail: `
                Artifish is a white non-binary tiger-cat hybrid with shark features, having a dorsal fin at their back and a caudal fin at the end of their tail. They have green accent colors on their ears, arms, legs, and fins, as well as part of their hair.<br>
                <br>
                Fifi live with their partner Artilope at the outskirts of Teksui and have a passion of cooking and baking.<br>
                <br>
                While being an aquatic creature who needs water to survive, they can also breathe in air as long as their organs stay wet, which they do by sleeping in an aquarium or soaking themselves in nearby pond every couple hours.`,

                isCharacter: true,
                species: 'Cat + Shark',
                pronouns: 'They/Fish',
                gender: 'Non-binary',
                sexuality: 'Demisexual',
                flags: ['lesbian', 'fishgender'],
                aliases: 'Arti, Fifi',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artifish-c.png',
                    'images/c/artifish-c2.png',
                    'images/c/artifish-c3.png',
                    'images/c/artifish-c4.png',
                    'images/c/artifish-c5.png',
                    'images/c/artifish-c6.png',
                    'images/c/artifish-c7.png',
                    'images/c/artifish-c8.png',
                    'images/c/artifish-c9.png',
                    'images/c/artifish-c10.png',
                    'images/c/artifish-c11.png',
                    'images/c/artifish-c12.png',
                    'images/c/artifish-c13.png',
                    'images/c/artifish-c14.png',
                    'images/c/artifish-c15.png',
                    'images/c/artifish-c16.png',
                    'images/c/artifish-c17.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artilope',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artifish-i.png',
            },
            {
                cardId: 'artigoat',
                title: 'Artigoat',
                subtitle: '',
                detail: `
                Artigoat is a white male goat with yellow fur pattern on his legs and ears, as well as having a pair of short pointy horns. He also has a pair of hooves as his feet.<br>
                <br>
                Arti has a hobby of reading books, writing stories, and play saxophone. He lives in an apartment with his partner Artipup and works as a cashier at a local supermarket in Teksui.`,

                isCharacter: true,
                species: 'Goat',
                pronouns: 'He',
                gender: 'Male',
                sexuality: 'Gay',
                aliases: 'Arti, Baba, Goat',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artigoat-c.png',
                    'images/c/artigoat-c2.png',
                    'images/c/artigoat-c3.png',
                    'images/c/artigoat-c4.png',
                    'images/c/artigoat-c5.png',
                    'images/c/artigoat-c6.png',
                    'images/c/artigoat-c7.png',
                    'images/c/artigoat-c8.png',
                    'images/c/artigoat-c9.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artipup',
                        relation: 'Significant Other'
                    },
                    {
                        cardId: 'hizen:amari',
                        relation: 'Sister'
                    }
                ],

                image: 'images/i/artigoat-i.png',
            },
            {
                cardId: 'artilope',
                title: 'Artilope',
                subtitle: '',
                detail: `
                Artilope is a white female jackalope, a fusion between antelope and jackrabbit, with orange fur on her arms, legs, right ear, half of her tail, and chest in a shape resembling a heart. She has a pair of antlers on her head that look like forks.<br>
                <br>
                Living at the outskirts of Teksui with her partner Artifish, she is a lumberjack and carpenter. She likes to make wood sculptures and furnitures.`,

                isCharacter: true,
                species: 'Jackalope',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Demisexual',
                flags: ['lesbian'],
                aliases: 'Arti, Lolo, Jacquie, Jacqueline',
                extra: '',
                refsheet: 'images/r/artilope-r.png',
                gallery: [
                    'images/c/artilope-c3.png',
                    'images/c/artilope-c.png',
                    'images/c/artilope-c2.png',
                    'images/c/artilope-c4.png',
                    'images/c/artilope-c5.png',
                    'images/c/artilope-c6.png',
                    'images/c/artilope-c7.png',
                    'images/c/artilope-c8.png',
                    'images/c/artilope-c9.png',
                    'images/c/artilope-c10.png',
                    'images/c/artilope-c11.png',
                    'images/c/artilope-c12.png',
                    'images/c/artilope-c13.png',
                    'images/c/artilope-c14.png',
                    'images/c/artilope-c15.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artifish',
                        relation: 'Significant Other'
                    },
                    {
                        cardId: 'deltadim-teksui:xanthe',
                        relation: 'Younger Sister'
                    },
                ],

                image: 'images/i/artilope-i.png',
            },
            {
                cardId: 'artipup',
                title: 'Artipup',
                subtitle: '',
                detail: `
                Artipup is a white male dog with red fur on his legs, right ear, muzzle and abdomen.<br>
                <br>
                Living in an apartment with his partner Artigoat, this puppy occasionally makes music with his minimal setup, being a laptop, MIDI keytar and an amplifier.`,

                isCharacter: true,
                species: 'Dog',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Gay',
                aliases: 'Arti, Arfy, Puppy',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artipup-c.png',
                    'images/c/artipup-c2.png',
                    'images/c/artipup-c3.png',
                    'images/c/artipup-c4.png',
                    'images/c/artipup-c5.png',
                    'images/c/artipup-c6.png',
                    'images/c/artipup-c7.png',
                    'images/c/artipup-c8.png',
                    'images/c/artipup-c9.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artigoat',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artipup-i.png',
            },
            {
                cardId: 'artineko',
                title: 'Artineko',
                subtitle: '',
                detail: `
                Artineko is a female human who loves to cosplay as a pink catgirl, having pink cat ears, long hair, and paw gloves.<br>
                <br>
                She is an influencer and streamer who makes content on social medias. She has a younger sibling with the name Artimouse, who lives in Chromasia.<br>
                <br>
                Neko is rarely seen without her accessories, as she feels more comfortable keeping them on.`,

                isCharacter: true,
                species: 'Human (cat cosplay)',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Aroace',
                aliases: 'Arti, Nay, Neko',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artineko-c.png',
                    'images/c/artineko-c2.png',
                    'images/c/artineko-c3.png',
                    'images/c/artineko-c4.png',
                    'images/c/artineko-c5.png',
                    'images/c/artineko-c6.png',
                    'images/c/artineko-c7.png',
                    'images/c/artineko-c8.png',
                    'images/c/artineko-c9.png',
                    'images/c/artineko-c10.png',
                    'images/c/artineko-c11.png',
                ],
                sections: [
                    {
                        title: 'Fursona',
                        detail: `
                            <h1>Sprinkles</h1>
                            <hr>
                            Species: Cat<br>
                            Pronouns: She<br>
                            Gender: Female<br>
                            Sexuality: Aroace<br>
                            <br>
                            <br>
                            <div class="container grid">
                                <img src="images/c/sprinkles-c.png">
                                <img src="images/c/sprinkles-c2.png">
                                <img src="images/c/sprinkles-c3.png">
                                <img src="images/c/sprinkles-c4.png">
                            </div>
                    `
                    },
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:artimouse',
                        relation: 'Younger Sister'
                    },
                ],

                image: 'images/i/artineko-i.png',
            },
            {
                cardId: 'eros',
                title: 'Eros',
                subtitle: '',
                detail: `
                Eros is a tall black female cat with light gray fur on her face, darker shade of black on the tip of her ears, and orange pawpads. She has no tail and her ears are pointy, as well as wearing glasses.<br>
                <br>
                Eros works as a barista at a local cafe in Teksui. She has a shy and introverted personality and prefer to not be the center of attention. She lives in an apartment with her loving partner named Sora.
                `,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She/They',
                gender: 'Trans-female',
                sexuality: 'Demisexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/eros-c.png',
                    'images/c/eros-c2.png',
                    'images/c/eros-c3.png',
                    'images/c/eros-c4.png',
                    'images/c/eros-c5.png',
                    'images/c/eros-c7.png',
                    'images/c/eros-c6.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:sora',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/eros-i.png',
            },
            {
                cardId: 'sora',
                title: 'Sora',
                subtitle: '',
                detail: `
                Sora is a short light gray female cat with darker gray fur on her face. She has no tail and her ears are pointy.<br>
                <br>
                Sora is unemployed and spends most of her time at the apartment she shares with her partner Eros. She enjoys writing stories.
                `,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She/They',
                gender: 'Trans-female',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/sora-c.png',
                    'images/c/sora-c2.png',
                    'images/c/sora-c3.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:eros',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/sora-i.png',
            },
            {
                cardId: 'furfy',
                title: 'Furfy',
                subtitle: '',
                detail: `
                Furfy is a white female cat with green fur on the tip of her tail and lighter shade of green for her face. Her pawpads are green and is often seen wearing a green sweater.<br>
                <br>
                Furfy works as a baker at her own bakery shop in Teksui. Other than baking loaves of bread, she also enjoys taking care of her plants and flowers in her free time. She lives with her loving partner named Mist.
                `
                ,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Lesbian',
                flags: ['gynesexual'],
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/furfy-c3.png',
                    'images/c/furfy-c6.png',
                    'images/c/furfy-c7.png',
                    'images/c/furfy-c.png',
                    'images/c/furfy-c2.png',
                    'images/c/furfy-c4.png',
                    'images/c/furfy-c5.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:mist',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/furfy-i.png',
            },
            {
                cardId: 'mist',
                title: 'Mist',
                subtitle: '',
                detail: `
                Mist is a white female cat with her inner ears colored in teal and lighter shade of teal for her face. Her pawpads are teal and is often seen wearing a teal sweater and light blue scarf.<br>
                <br>
                Mist works together with her partner Furfy at the bakery shop in Teksui. Other than that she also loves to take care of plants.
                `,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/mist-c3.png',
                    'images/c/mist-c.png',
                    'images/c/mist-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:furfy',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/mist-i.png',
            },
            {
                cardId: 'card',
                title: 'Card',
                subtitle: '',
                detail: `
                Card is an orange female cat with an open cardboard box as her head. It consists of drawn-on cat features such as triangular ears, as well as some informational text on the sides of her head like a typical packaging box. Her eyes and mouth are also seemingly drawn-on. However it can dynamically change expression like a real face.<br>
                <br>
                Card has a part-time job as a delivery courier. She lives with her partner Gift at their own home in Teksui. She likes to make crafts and origamis out of paper. She also has an obsession of collecting anything and sort them into cardboard boxes.
                `,

                isCharacter: true,
                species: 'Cardboard Cat',
                pronouns: 'She/Any',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/card-r.png',
                gallery: [
                    'images/c/card-c.png',
                    'images/c/card-c2.png',
                    'images/c/card-c3.png',
                    'images/c/card-c4.png',
                    'images/c/card-c5.png',
                    'images/c/card-c6.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:gift',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/card-i.png',
            },
            {
                cardId: 'gift',
                title: 'Gift',
                subtitle: '',
                detail: `
                Gift is a white female rabbit with a gift box as her head. It's a plain white box with a red ribbon tied around it and a bow on top. It also has two droopy bunny ears attached from the lid. Like Card, her eyes and mouth are seemingly drawn-on but can dynamically change expressions like a real face.<br>
                <br>
                Gift lives with her partner Card and really love making surprises and parties for her loved ones and friends.
                `,

                isCharacter: true,
                species: 'Giftbox Rabbit',
                pronouns: 'She/Any',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/gift-r.png',
                gallery: [
                    'images/c/gift-c.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:card',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/gift-i.png',
            },
            {
                cardId: 'elise',
                title: 'Elise',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Sea Bunny',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/elise-c.png',
                ],

                image: 'images/i/elise-i.png',
            },
            {
                cardId: 'fika',
                title: 'Fika',
                subtitle: '',
                detail: `
                Fika is an orange female fox with long light beige hair. Her inner ears and pawpads are in slightly darker shade of orange.<br>
                <br>
                Fika lives with Rai as a couple. She enjoys drawing and painting as well as singing. She sometimes upload her paintings on social medias.<br>
                <br>
                As a neighbor to Artibun and Articat, Fika doesn't really interact with them too much. She doesn't hate them as much as Rai does, but she still prefer to keep a distance from both Arti's.
                `,

                isCharacter: true,
                species: 'Fox',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Heterosexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/fika-c.png',
                    'images/c/fika-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:rai',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/fika-i.png',
            },
            {
                cardId: 'rai',
                title: 'Rai',
                subtitle: '',
                detail: `
                Rai is a white male fox with grey ears and black eyes. His pupils are white and has no pawpads.<br>
                <br>
                Rai has a passion in music production, often making EDM tracks in his home studio. He lives with his partner Fika and is a neighbor to Artibun and Articat.<br>
                <br>
                Despite being neighbors, Rai dislikes both Arti's. He finds them too obnoxious and often tries to avoid them as much as possible. The reason? Might be because of their popularity and fame.
                `,

                isCharacter: true,
                species: 'Fox',
                pronouns: 'He',
                gender: 'Male',
                sexuality: 'Heterosexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/rai-r.png',
                gallery: [
                    'images/c/rai-c.png',
                    'images/c/rai-c3.png',
                    'images/c/rai-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:fika',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/rai-i.png',
            },
            {
                cardId: 'xanthe',
                title: 'Xanthe',
                subtitle: '',
                detail: `
                Xanthe is a white jackalope with short orange hair, light beige fur on her arms and legs, and red eyes. She has a pair of spiky antlers and hooves for her feet.<br>
                <br>
                Xanthe lives at the central part of Teksui. She loves photography and traveling. She occasionally visits her sister at the outskirts of Teksui to hang out, or just to annoy her.`,

                isCharacter: true,
                species: 'Jackalope',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Heterosexual',
                aliases: 'Xanthelope',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/xanthe-c5.png',
                    'images/c/xanthe-c.png',
                    'images/c/xanthe-c2.png',
                    'images/c/xanthe-c3.png',
                    'images/c/xanthe-c4.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artilope',
                        relation: 'Older Sister'
                    },
                ],

                image: 'images/i/xanthe-i.png',
            },
            {
                cardId: 'remy',
                title: 'Remy',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Robunny',
                pronouns: 'She/They/It',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/remy-r.png',
                gallery: [],

                image: 'images/i/remy-i.png',
            },
            {
                cardId: 'unnamed155',
                title: 'Unnamed-155',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Robocat',
                pronouns: 'He/They',
                gender: 'Non-Binary',
                sexuality: 'Asexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/unnamed155-r.png',
                gallery: [],

                image: 'images/i/unnamed155-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-chromasia',
        title: 'Chromasia',
        subtitle: 'Terra',
        image: 'images/deltadim-chromasia.png',
        color: 'var(--color-14)',
        parent: 'deltadim',
        hidden: true,
        cards: [
            {
                cardId: 'artibon',
                title: 'Artibon',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: 'Arti, Ribbon, Bonbon, Sylvy',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artibon-c2.png',
                    'images/c/artibon-c7.png',
                    'images/c/artibon-c8.png',
                    'images/c/artibon-c3.png',
                    'images/c/artibon-c4.png',
                    'images/c/artibon-c5.png',
                    'images/c/artibon-c6.png',
                    'images/c/artibon-c.png',
                    'images/c/artibon-c9.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:artishade',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artibon-i.png',
            },
            {
                cardId: 'artimouse',
                title: 'Artimouse',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Mousegirl',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: 'Arti, Mimi',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artimouse-c2.png',
                    'images/c/artimouse-c.png',
                    'images/c/artimouse-c1.png',
                    'images/c/artimouse-c3.png',
                    'images/c/artimouse-c5.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artineko',
                        relation: 'Older Sister'
                    },
                ],

                image: 'images/i/artimouse-i.png',
            },
            {
                cardId: 'artiferret',
                title: 'Artiferret',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Ferret',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: 'Arti, Fer',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artiferret-c4.png',
                    'images/c/artiferret-c.png',
                    'images/c/artiferret-c2.png',
                    'images/c/artiferret-c3.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-aakik:ellie',
                        relation: 'Married'
                    },
                ],

                image: 'images/i/artiferret-i.png',
            },
            {
                cardId: 'artitri',
                title: 'Artitri',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Sign',
                pronouns: 'She/Them',
                gender: 'None',
                sexuality: '',
                aliases: 'Arti, 3',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artitri-c.png',
                    'images/c/artitri-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:artibot',
                        relation: 'Machinemate'
                    },
                ],

                image: 'images/i/artitri-i.png',
            },
            {
                cardId: 'artibot',
                title: 'Artibot',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Robocat',
                pronouns: 'He/It',
                gender: 'None',
                sexuality: '',
                aliases: 'Arti, B.B',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artibot-c3.png',
                    'images/c/artibot-c.png',
                    'images/c/artibot-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:artitri',
                        relation: 'Machinemate'
                    },
                ],

                image: 'images/i/artibot-i.png',
            },
            {
                cardId: 'artishade',
                title: 'Artishade',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Fennec',
                pronouns: 'She/He/They',
                gender: 'Intersex Bigender',
                sexuality: 'Lesbian',
                flags: ['Intersex', 'bigender'],
                aliases: 'Arti, Sasha',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artishade-c3.png',
                    'images/c/artishade-c.png',
                    'images/c/artishade-c2.png',
                    'images/c/artishade-c4.png',
                    'images/c/artishade-c5.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:artibon',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/artishade-i.png',
            },
            {
                cardId: 'artidragon',
                title: 'Artidragon',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Dragon',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: 'Arti, Rara',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artidragon-c5.png',
                    'images/c/artidragon-c.png',
                    'images/c/artidragon-c2.png',
                    'images/c/artidragon-c3.png',
                    'images/c/artidragon-c4.png',
                    'images/c/artidragon-c6.png',
                    'images/c/artidragon-c7.png',
                ],

                image: 'images/i/artidragon-i.png',
            },
            // ------------------------------
            {
                cardId: 'willow',
                title: 'Willow',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Lamp Cat',
                pronouns: 'They',
                gender: 'Non-Binary',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/willow-c.png',
                ],

                image: 'images/i/willow-i.png',
            },
            {
                cardId: 'hana',
                title: 'Hana',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Bee',
                pronouns: 'She/They',
                gender: 'Demigirl',
                sexuality: 'Lesbian',
                flags: ['floriesexual'],
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/hana-c.png',
                    'images/c/hana-c2.png',
                    'images/c/hana-c3.png',
                    'images/c/hana-c4.png',
                    'images/c/hana-c5.png',
                    'images/c/hana-c6.png',
                    'images/c/hana-c7.png',
                ],
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveAurelia',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/hana-i.png',
            },
            {
                cardId: 'caramella',
                title: 'Caramella',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat + Shrimp',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: 'Mella',
                characterAttrs: {
                    'Design Origin': '<a href="https://x.com/M3ko_Ne" target="_blank">M3ko_Ne</a>',
                },
                extra: ``,
                refsheet: 'images/r/caramella-r.png',
                gallery: [
                    'images/c/caramella-c.png',
                    'images/c/caramella-c2.png',
                    'images/c/caramella-c3.png',
                    'images/c/caramella-c4.png',
                    'images/c/caramella-c5.png',
                    'images/c/caramella-c6.png',
                    'images/c/caramella-c7.png',
                    'images/c/caramella-c8.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:azurey',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/caramella-i.png',
            },
            {
                cardId: 'azurey',
                title: 'Azurey',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat + Shark',
                pronouns: 'He/They',
                gender: 'Demiboy',
                sexuality: 'Pansexual',
                flags: ['fishgender'],
                aliases: 'Azu',
                extra: '',
                refsheet: 'images/r/azurey-r.png',
                gallery: [
                    'images/c/azurey-c.png',
                    'images/c/azurey-c2.png',
                    'images/c/azurey-c3.png',
                    'images/c/azurey-c4.png',
                    'images/c/azurey-c5.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:caramella',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/azurey-i.png',
            },
            {
                cardId: 'mida',
                title: 'Mida',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Medusa + Cat',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Pansexual',
                aliases: 'Meowdusa',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/mida-c.png',
                    'images/c/mida-c2.png',
                    'images/c/mida-c3.png',
                ],

                image: 'images/i/mida-i.png',
            },
            {
                cardId: 'lilac',
                title: 'Lilac',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Angel-Demon Cat',
                pronouns: 'She/Any',
                gender: 'Female',
                sexuality: 'Pansexual',
                aliases: '',
                characterAttrs: {
                    'Design Origin': '<a href="https://x.com/naycookye" target="_blank">naycookye</a>',
                },
                extra: '',
                refsheet: 'images/r/lilac-r.png',
                gallery: [],

                image: 'images/i/lilac-i.png',
            },
            {
                cardId: 'moka',
                title: 'Moka',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Dog',
                pronouns: 'He/They',
                gender: 'Trans-male',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/moka-r.png',
                gallery: [],

                image: 'images/i/moka-i.png',
            },
            {
                cardId: 'nameless',
                title: 'Nameless',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Fennec + Cat',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Gay',
                aliases: '',
                extra: '',
                refsheet: 'images/r/nameless-r.png',
                gallery: [
                    'images/c/nameless-c.png',
                ],

                image: 'images/i/nameless-i.png',
            },
            {
                cardId: 'nuki',
                title: 'Nuki',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Tanuki',
                pronouns: 'She/Any',
                gender: 'Female',
                sexuality: 'Asexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/nuki-r.png',
                gallery: [
                    'images/c/nuki-c.png',
                    'images/c/nuki-c2.png',
                ],

                image: 'images/i/nuki-i.png',
            },
            {
                cardId: 'ara',
                title: 'Ara',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat',
                pronouns: 'He',
                gender: 'Male',
                sexuality: 'Heterosexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/ara-r.png',
                gallery: [],

                image: 'images/i/ara-i.png',
            },
            {
                cardId: 'sawo',
                title: 'Sawo',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Probably Gay',
                aliases: '',
                extra: '',
                refsheet: 'images/r/sawo-r.png',
                flags: ['gay'],
                gallery: [],

                image: 'images/i/sawo-i.png',
            },
            {
                cardId: 'nytro',
                title: 'Nytro',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Mouse',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Demiromantic',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/nytro-c3.png',
                    'images/c/nytro-c2.png',
                    'images/c/nytro-c.png',
                ],

                image: 'images/i/nytro-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-aakik',
        title: 'Aakik',
        subtitle: 'Terra',
        image: 'images/deltadim-aakik.png',
        color: 'var(--color-3)',
        parent: 'deltadim',
        hidden: true,
        cards: [
            {
                cardId: 'artiusagi',
                title: 'Sukie',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Human (Bunny cosplay)',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: 'Usagi, Sukie',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artiusagi-c.png',
                ],

                image: 'images/i/artiusagi-i.png',
            },
            {
                cardId: 'artiproto',
                title: 'Port',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Protogen',
                pronouns: 'He/They/It',
                gender: 'Male',
                sexuality: 'Asexual',
                aliases: 'Proto',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artiproto-c2.png',
                    'images/c/artiproto-c.png',
                ],

                image: 'images/i/artiproto-i.png',
            },
            {
                cardId: 'ellie',
                title: 'Ellie',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Catgirl',
                pronouns: 'She/It',
                gender: 'Trans-female',
                sexuality: 'Demisexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/ellie-c.png',
                    'images/c/ellie-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:artiferret',
                        relation: 'Married'
                    },
                ],

                image: 'images/i/ellie-i.png',
            },
            {
                cardId: 'amber',
                title: 'Amber',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Human',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Heterosexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/amber-c.png',
                    'images/c/amber-c2.png',
                ],

                image: 'images/i/amber-i.png',
            },
            {
                cardId: 'hazel',
                title: 'Hazel',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Goat',
                pronouns: 'She/Any',
                gender: 'Genderfluid',
                sexuality: 'Demisexual',
                aliases: '',
                characterAttrs: {
                    'Design Origin': '<a href="https://x.com/fixy_cookies" target="_blank">Fixy Cookies</a>',
                },
                extra: '',
                refsheet: 'images/r/hazel-r.png',
                gallery: [
                    'images/c/hazel-c.png',
                    'images/c/hazel-c2.png',
                ],

                image: 'images/i/hazel-i.png',
            },
            {
                cardId: 'cerulean',
                title: 'Cerulean',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Demisexual',
                aliases: '',
                characterAttrs: {
                    'Design Origin': '<a href="https://x.com/fixy_cookies" target="_blank">Fixy Cookies</a>',
                },
                extra: '',
                refsheet: 'images/r/cerulean-r.png',
                gallery: [
                    'images/c/cerulean-c.png',
                ],

                image: 'images/i/cerulean-i.png',
            },
        ]
    },
    {
        menuId: 'deltadim-deltaspace',
        title: 'Deltaspace',
        subtitle: 'Somewhere in space',
        image: 'images/deltadim-deltaspace.png',
        color: 'var(--color-15)',
        parent: 'deltadim',
        hidden: true,
        cards: [
            {
                cardId: 'skitty',
                title: 'Singularikitty',
                subtitle: '',
                detail: `
                Singularikitty is a black cat with red fur on his arms and legs, orange eyes, and a ring on the tip of his tail. He always wears a collar that holds a small black hole which they can deploy anytime.<br>
                <br>
                Skitty's eyes and mouth essentially function as black holes, which sucks in anything that gets nearby. However, she doesn't use this power to harm others, as she is a very kind and gentle cat. She constantly warn people to not get nearby his face for that matter.<br>
                <br>
                Skitty has an ability to grow or shrink in size as he pleases. He also can toggle the black hole on his collar whenever he wants.<br>
                <br>
                'DESTROYER' is the name Skitty given to his black hole.`,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'Any Pronouns',
                gender: 'Polygender',
                sexuality: 'Aroace',
                aliases: 'Skitty',
                characterAttrs: {
                    'Design Origin': '<a href="https://x.com/C0denameDelta" target="_blank">C0denameDelta</a>',
                },
                extra: '',
                refsheet: 'images/r/skitty-r.png',
                gallery: [
                    'images/c/skitty-c.png',
                    'images/c/skitty-c2.png',
                    'images/c/skitty-c3.png',
                    'images/c/skitty-c4.png',
                    'images/c/skitty-c5.png',
                    'images/c/skitty-c6.png',
                    'images/c/skitty-c7.png',
                    'images/c/skitty-c8.png',
                    'images/c/skitty-c9.png',
                    'images/c/skitty-c10.png',
                    'images/c/skitty-c11.png',
                    'images/c/skitty-c12.png',
                    'images/c/skitty-c13.png',
                    'images/c/skitty-c14.png',
                    'images/c/skitty-c15.png',
                    'images/c/skitty-c16.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:gamma',
                        relation: 'Spacekitty Trio'
                    },
                    {
                        cardId: 'deltadim-deltaspace:micro',
                        relation: 'Spacekitty Trio'
                    },
                ],

                image: 'images/i/skitty-i.png',
            },
            {
                cardId: 'gamma',
                title: 'Gamma',
                subtitle: '',
                detail: `
                Gamma is a white cat with blue fur on her arms and legs, dark inverted blue eyes, a long hair, and a ring on the tip of her tail. Her color scheme is essentially Skitty's inverted colors.<br>
                <br>
                Gamma is a very shy and soft person. She always wears a blue collar that holds a small white hole which she can deploy anytime. Her white hole ejects anything that gets nearby. As such, she is very warm due to constant radiation emitted from her body.<br>
                <br>
                Gamma has an ability to grow or shrink in size as she pleases. She also can toggle the white hole on her collar whenever she wants.<br>
                <br>
                Despite being a complete opposite of Skitty, Gamma confirmed that she is not his sibling, as the matter that she spew out does not come from Skitty's black hole. She's still speculating where it comes from...<br>
                <br>
                'RESTORER' is the name Gamma given to her white hole.`,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/gamma-r.png',
                gallery: [
                    'images/c/gamma-c.png',
                    'images/c/gamma-c2.png',
                    'images/c/gamma-c3.png',
                    'images/c/gamma-c4.png',
                    'images/c/gamma-c5.png',
                    'images/c/gamma-c6.png',
                    'images/c/gamma-c7.png',
                    'images/c/gamma-c9.png',
                    'images/c/gamma-c10.png',
                    'images/c/gamma-c11.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:skitty',
                        relation: 'Spacekitty Trio'
                    },
                    {
                        cardId: 'deltadim-deltaspace:micro',
                        relation: 'Spacekitty Trio'
                    },
                ],

                image: 'images/i/gamma-i.png',
            },
            {
                cardId: 'micro',
                title: 'Micro',
                subtitle: '',
                detail: `
                Micro is a non-binary dark purple cat with half of their body parts (eyes, pawpads, glows, etc.) in blue while the other half is in pink. They always wear a blue collar with a pink bell. They also sometimes wear an air bubble on their head purely for cosmetic.<br>
                <br>
                As a space cat, Micro doesn't need to breathe to survive. They also don't need to consume food or drink, as they have no mouth. This also makes them mute. They communicate through body language and writing on a small board they always carry around.<br>
                <br>
                Micro has a flying saucer that they use to travel long-distances in space. The saucer is also a storage for all sorts of thing they collect from their travels.<br>
                <br>
                They possess a power of vacuum manipulation, albeit they don't really use it often as it is very limited. They can push and pull objects by controlling the vacuum around them.
                `,

                isCharacter: true,
                species: 'Cat',
                pronouns: 'They',
                gender: 'Non-binary',
                flags: ['xenogender'],
                sexuality: 'Omnisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/micro-r.png',
                gallery: [
                    'images/c/micro-c2.png',
                    'images/c/micro-c.png',
                    'images/c/micro-c3.png',
                    'images/c/micro-c4.png',
                    'images/c/micro-c5.png',
                    'images/c/micro-c6.png',
                    'images/c/micro-c7.png',
                    'images/c/micro-c8.png',
                    'images/c/micro-c9.png',
                    'images/c/micro-c10.png',
                    'images/c/micro-c11.png',
                    'images/c/micro-c12.png',
                    'images/c/micro-c13.png',
                    'images/c/micro-c14.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:gamma',
                        relation: 'Spacekitty Trio'
                    },
                    {
                        cardId: 'deltadim-deltaspace:skitty',
                        relation: 'Spacekitty Trio'
                    },
                ],

                image: 'images/i/micro-i.png',
            },
            {
                cardId: 'artilotl',
                title: 'Artilotl',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Axolotl',
                pronouns: 'They/It',
                gender: 'Genderless',
                sexuality: 'Aromantic',
                aliases: 'Arti, Xio',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artilotl-c3.png',
                    'images/c/artilotl-c.png',
                    'images/c/artilotl-c2.png',
                    'images/c/artilotl-c4.png',
                    'images/c/artilotl-c5.png',
                    'images/c/artilotl-c6.png',
                    'images/c/artilotl-c7.png',
                ],

                image: 'images/i/artilotl-i.png',
            },
            {
                cardId: 'articani',
                title: 'Articani',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Lucani',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Heterosexual',
                aliases: 'Cani',
                extra: 'Lucani is an open-species created by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a>!',
                refsheet: 'images/r/articani-r.png',
                gallery: [
                    'images/c/articani-c.png',
                    'images/c/articani-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:nayacani',
                        relation: 'Sister'
                    }
                ],

                image: 'images/i/articani-i.png',
            },
            {
                cardId: 'nayacani',
                title: 'Nayacani',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Lucani',
                pronouns: 'She/They',
                gender: 'Demigirl',
                sexuality: 'Heterosexual',
                aliases: 'Naya',
                extra: 'Lucani is an open-species created by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a>!',
                refsheet: 'images/r/nayacani-r.png',
                gallery: [
                    'images/c/nayacani-c.png',
                    'images/c/nayacani-c2.png',
                    'images/c/nayacani-c3.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:articani',
                        relation: 'Brother'
                    }
                ],

                image: 'images/i/nayacani-i.png',
            },
            {
                cardId: 'ryon',
                title: 'Ryon',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Lucani',
                pronouns: 'Any Pronouns',
                gender: 'Non-binary',
                sexuality: 'Asexual',
                aliases: 'Baryon',
                extra: 'Lucani is an open-species created by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a>!',
                refsheet: 'images/r/ryon-r.png',
                gallery: [
                    'images/c/ryon-c.png',
                ],

                image: 'images/i/ryon-i.png',
            },
            {
                cardId: 'klora',
                title: 'Klora',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Mantis',
                pronouns: 'She/He/It',
                gender: 'Non-binary',
                sexuality: 'Aromantic',
                flags: ['xenogender'],
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/klora-c2.png',
                    'images/c/klora-c.png',
                ],

                image: 'images/i/klora-i.png',
            },
            {
                cardId: 'laniakea',
                title: 'Laniakea',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'They',
                gender: 'Non-binary',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/laniakea-c1.png',
                    'images/c/laniakea-c3.png',
                    'images/c/laniakea-c2.png',
                    'images/c/laniakea-c4.png',
                    'images/c/laniakea-c5.png',
                    'images/c/laniakea-c6.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:vela',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/laniakea-i.png',
            },
            {
                cardId: 'vela',
                title: 'Vela',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'She/Any',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/vela-c1.png',
                    'images/c/vela-c3.png',
                    'images/c/vela-c2.png',
                    'images/c/vela-c4.png',
                    'images/c/vela-c5.png',
                    'images/c/vela-c6.png',
                    'images/c/vela-c7.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-deltaspace:laniakea',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/vela-i.png',
            },
            {
                cardId: 'ichor',
                title: 'Ichor',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Black Hole',
                pronouns: 'Any Pronouns',
                gender: 'Non-binary',
                sexuality: 'Aroace',
                aliases: '',
                extra: '',
                refsheet: 'images/r/ichor-r.png',
                gallery: [],

                image: 'images/i/ichor-i.png',
            },
        ]
    },



    {
        // Floriverse
        title: 'Floriverse',
        menuId: 'floriverse',
        subtitle: 'Florie Universe',
        image: 'icons/floriverse.png',
        color: 'var(--color-2)',
        gridColor: 'var(--color-2)',
        gridColor2: 'var(--accent2)',
        gridOpacity: 0.1,
        orbit: 1,
        cards: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Floriverse',
                banner: true,
                detail:
                    `
                    Floriverse is a universe of flories, sentient floral creatures, with Klorofil as its main setting, a planet similar to Earth where the main characters live.<br>
                    <br>
                    Anyone that enters Floriverse instantly transforms into a florie. However, flories who leave Floriverse retain their form.<br>
                    <h4>What's in this page</h4>
                    This page list all flories in separate categories based on the Floriverse album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/floriverse.png'
            },
            {
                linkId: 'floriverse-uncat',
            },
            {
                linkId: 'floriverse-vanilla',
            },
            {
                linkId: 'floriverse-delta',
            },
            {
                linkId: 'floriverse-epsilon',
            },
            {
                title: 'Pinned',
                subtitle: 'You might be looking for these'
            },
            {
                reference: 'floriverse-epsilon:fveAurelia',
            },
            {
                reference: 'floriverse-uncat:fvArtiflow',
            },
            {
                reference: 'floriverse-uncat:fvArtidell',
            },
            {
                reference: 'floriverse-vanilla:fvvFurflow',
            },
            {
                reference: 'floriverse-delta:fvdWina',
            },
            {
                reference: 'floriverse-epsilon:fveMisty',
            },
        ]
    },
    {
        title: 'Floriverse (Unsorted)',
        menuId: 'floriverse-uncat',
        parent: 'floriverse',
        subtitle: 'Flories with no associated album',
        image: 'images/fvuncat-i.png',
        color: 'var(--color-11)',
        hidden: true,
        cards: [
            {
                cardId: 'fvZep',
                title: 'Zep',
                subtitle: '',
                isCharacter: true,
                species: 'Alien flower',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/Zep.png'],
                detail: '',
                image: 'images/flories/uncat/Zep.png'
            },
            {
                cardId: 'fvMintscreen',
                title: 'Mintscreen',
                subtitle: '',
                isCharacter: true,
                species: 'Robot florie',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Mintscreen.png'],
                detail: '',
                image: 'images/flories/uncat/Mintscreen.png'
            },
            {
                cardId: 'fvKau',
                title: 'Kau',
                subtitle: '',
                isCharacter: true,
                species: 'Cauliflower',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/Kau.png'],
                detail: '',
                image: 'images/flories/uncat/Kau.png'
            },
            {
                cardId: 'fvSweetbreaker',
                title: 'Sweetbreaker',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Sweetbreaker.png'],
                detail: '',
                image: 'images/flories/uncat/Sweetbreaker.png'
            },
            {
                cardId: 'fvCuby',
                title: 'Cuby',
                subtitle: '',
                isCharacter: true,
                species: 'Slimy blueberry',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Cuby.png'],
                detail: '',
                image: 'images/flories/uncat/Cuby.png'
            },
            {
                cardId: 'fvBlizzi',
                title: 'Blizzi',
                subtitle: '',
                isCharacter: true,
                species: 'Ice flower',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/Blizzi.png'],
                detail: '',
                image: 'images/flories/uncat/Blizzi.png'
            },
            {
                cardId: 'fvPlugika',
                title: 'Plugika',
                subtitle: '',
                isCharacter: true,
                species: 'Electric plug florie',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Plugika.png'],
                detail: '',
                image: 'images/flories/uncat/Plugika.png'
            },
            {
                cardId: 'fvTessa',
                title: 'Tessa',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/uncat/Tessa.png'],
                detail: '',
                image: 'images/flories/uncat/Tessa.png'
            },
            {
                cardId: 'fvGem',
                title: 'Gem',
                subtitle: '',
                isCharacter: true,
                species: 'Gem',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Gem.png'],
                detail: '',
                image: 'images/flories/uncat/Gem.png'
            },
            {
                cardId: 'fvAnvre',
                title: 'Anvre',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Anvre.png'],
                detail: '',
                image: 'images/flories/uncat/Anvre.png'
            },
            {
                cardId: 'fvLatrice',
                title: 'Latrice',
                subtitle: '',
                isCharacter: true,
                species: 'Bellflower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Latrice.png'],
                detail: '',
                image: 'images/flories/uncat/Latrice.png'
            },
            {
                cardId: 'fvCactunPipin',
                title: 'Cactun & Pipin',
                subtitle: '',
                isCharacter: true,
                species: 'Cactus',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/CactunAndPipin.png'],
                detail: '',
                image: 'images/flories/uncat/CactunAndPipin.png'
            },
            {
                cardId: 'fvSa',
                title: 'Sa',
                subtitle: '',
                isCharacter: true,
                species: 'Sawblade Flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Sa.png'],
                detail: '',
                image: 'images/flories/uncat/Sa.png'
            },
            {
                cardId: 'fvChloe',
                title: 'Chloe',
                subtitle: '',
                isCharacter: true,
                species: 'Four',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Chloe.png'],
                detail: '',
                image: 'images/flories/uncat/Chloe.png'
            },
            {
                cardId: 'fvTeknia',
                title: 'Teknia',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Roboflorie',
                pronouns: 'She/It',
                gender: 'Female',
                sexuality: 'Asexual',
                aliases: '',
                extra: '',
                refsheet: 'images/flories/uncat/Teknia.png',
                gallery: [
                    'images/c/teknia-c.png',
                ],

                image: 'images/flories/uncat/Teknia.png'
            },
            {
                cardId: 'fvArtiflow',
                title: 'Artiflow',
                subtitle: '',
                isCharacter: true,
                species: 'Hepatica',
                pronouns: 'She',
                gender: 'Female',
                refsheet: 'images/flories/uncat/Artiflow.png',
                extra: '',
                detail: '',
                gallery: [
                    'images/c/artiflow-c.png',
                    'images/c/artiflow-c2.png'
                ],
                relatives: [
                    {
                        cardId: 'floriverse-uncat:fvArtidell',
                        relation: 'Significant Other'
                    },
                ],
                image: 'images/flories/uncat/Artiflow.png'
            },
            {
                cardId: 'fvArtidell',
                title: 'Artidell',
                subtitle: '',
                isCharacter: true,
                species: 'Catdelion',
                pronouns: 'He/She',
                gender: 'Bigender',
                refsheet: 'images/flories/uncat/Artidell.png',
                extra: '',
                detail: '',
                gallery: [
                    'images/c/artidell-c.png'
                ],
                relatives: [
                    {
                        cardId: 'floriverse-uncat:fvArtiflow',
                        relation: 'Significant Other'
                    },
                ],
                image: 'images/flories/uncat/Artidell.png'
            },
            {
                cardId: 'fvKappa',
                title: 'Kappa',
                subtitle: '',
                isCharacter: true,
                species: 'Sunflower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Kappa.png'],
                detail: '',
                image: 'images/flories/uncat/Kappa.png'
            },
            {
                cardId: 'fvSunflette',
                title: 'Sunflette',
                subtitle: '',
                isCharacter: true,
                species: 'Sunflower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Sunflette.png'],
                detail: '',
                image: 'images/flories/uncat/Sunflette.png'
            },
            {
                cardId: 'fvStrawrberry',
                title: 'Strawrberry',
                subtitle: '',
                isCharacter: true,
                species: 'Strawberrikitty',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Strawrberry.png'],
                detail: '',
                image: 'images/flories/uncat/Strawrberry.png'
            },
            {
                cardId: 'fvLyte',
                title: 'Lyte',
                subtitle: '',
                isCharacter: true,
                species: 'Robot berry',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Lyte.png'],
                detail: '',
                image: 'images/flories/uncat/Lyte.png'
            },
            {
                cardId: 'fvFyra',
                title: 'Fyra',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Fyra.png'],
                detail: '',
                image: 'images/flories/uncat/Fyra.png'
            },
            {
                cardId: 'fvTherra',
                title: 'Therra',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Therra.png'],
                detail: '',
                image: 'images/flories/uncat/Therra.png'
            },
            {
                cardId: 'fvDJMuseberry',
                title: 'DJ Museberry',
                subtitle: '',
                isCharacter: true,
                species: 'Berry',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/DJMuseberry.png'],
                detail: '',
                image: 'images/flories/uncat/DJMuseberry.png'
            },
            {
                cardId: 'fvLineko',
                title: 'Lineko',
                subtitle: '',
                isCharacter: true,
                species: 'Cat lemon',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Lineko.png'],
                detail: '',
                gallery: [
                    'images/c/lineko-c.png'
                ],
                image: 'images/flories/uncat/Lineko.png'
            },
            {
                cardId: 'fvPompy',
                title: 'Pompy',
                subtitle: '',
                isCharacter: true,
                species: 'Allium',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Pompy.png'],
                detail: '',
                image: 'images/flories/uncat/Pompy.png'
            },
            {
                cardId: 'fvBeep',
                title: 'Beep',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/uncat/Beep.png'],
                detail: '',
                image: 'images/flories/uncat/Beep.png'
            },
            {
                cardId: 'fvSweetree',
                title: 'Sweetree',
                subtitle: '',
                isCharacter: true,
                species: 'Candy tree',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/Sweetree.png'],
                detail: '',
                image: 'images/flories/uncat/Sweetree.png'
            },
            {
                cardId: 'fvEco',
                title: 'Eco',
                subtitle: '',
                isCharacter: true,
                species: 'Cloudy cottonflower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Eco.png'],
                detail: '',
                image: 'images/flories/uncat/Eco.png'
            },
            {
                cardId: 'fvCryoflow',
                title: 'Cryoflow',
                subtitle: '',
                isCharacter: true,
                species: 'Frozen flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Cryoflow.png'],
                detail: '',
                image: 'images/flories/uncat/Cryoflow.png'
            },
            {
                cardId: 'fvDelia',
                title: 'Delia',
                subtitle: '',
                isCharacter: true,
                species: 'Dandelion',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Delia.png'],
                detail: '',
                image: 'images/flories/uncat/Delia.png'
            },
            {
                cardId: 'fvSpinny',
                title: 'Spinny',
                subtitle: '',
                isCharacter: true,
                species: 'Berry with wind turbine',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Spinny.png'],
                detail: '',
                image: 'images/flories/uncat/Spinny.png'
            },
            {
                cardId: 'fvAero',
                title: 'Aero',
                subtitle: '',
                isCharacter: true,
                species: 'Baloon tulip',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/uncat/Aero.png'],
                detail: '',
                image: 'images/flories/uncat/Aero.png'
            },
            {
                cardId: 'fvEnila',
                title: 'Enila',
                subtitle: '',
                isCharacter: true,
                species: 'Fruit with broken stem',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Enila.png'],
                detail: '',
                image: 'images/flories/uncat/Enila.png'
            },
            {
                cardId: 'fvTikao',
                title: 'Tikao',
                subtitle: '',
                isCharacter: true,
                species: 'Megaphone',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Tikao.png'],
                detail: '',
                image: 'images/flories/uncat/Tikao.png'
            },
            {
                cardId: 'fvFlaany',
                title: 'Flaany',
                subtitle: '',
                isCharacter: true,
                species: 'Upside',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Flaany.png'],
                detail: '',
                image: 'images/flories/uncat/Flaany.png'
            },
            {
                cardId: 'fvBna',
                title: 'B-na',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/B-na.png'],
                detail: '',
                image: 'images/flories/uncat/B-na.png'
            },
            {
                cardId: 'fvKraka',
                title: 'Kraka',
                subtitle: '',
                isCharacter: true,
                species: 'Cactus monster',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Kraka.png'],
                detail: '',
                image: 'images/flories/uncat/Kraka.png'
            },
            {
                cardId: 'fvAzerium',
                title: 'Azerium',
                subtitle: '',
                isCharacter: true,
                species: 'Robot tulip',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/Azerium.png'],
                detail: '',
                image: 'images/flories/uncat/Azerium.png'
            },
            {
                cardId: 'fvVo',
                title: 'Vo',
                subtitle: '',
                isCharacter: true,
                species: 'Ghost tulip',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/uncat/Vo.png'],
                detail: '',
                image: 'images/flories/uncat/Vo.png'
            },
            {
                cardId: 'fvSmog',
                title: 'Smog',
                subtitle: '',
                isCharacter: true,
                species: 'Pollutant',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/uncat/Smog.png'],
                detail: '',
                image: 'images/flories/uncat/Smog.png'
            },
            {
                cardId: 'fvNiane',
                title: 'Niane',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Niane.png'],
                detail: '',
                image: 'images/flories/uncat/Niane.png'
            },
            {
                cardId: 'fvNeru',
                title: 'Neru',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Neru.png'],
                detail: '',
                image: 'images/flories/uncat/Neru.png'
            },
            {
                cardId: 'fvViona',
                title: 'Viona',
                subtitle: '',
                isCharacter: true,
                species: 'Venus flytrap',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Viona.png'],
                detail: '',
                image: 'images/flories/uncat/Viona.png'
            },
            {
                cardId: 'fvPhyana',
                title: 'Phyana',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Phyana.png'],
                detail: '',
                image: 'images/flories/uncat/Phyana.png'
            },
            {
                cardId: 'fvNell',
                title: 'Nell',
                subtitle: '',
                isCharacter: true,
                species: 'Popcorn??',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/uncat/Nell.png'],
                detail: '',
                image: 'images/flories/uncat/Nell.png'
            },
            {
                cardId: 'fvVoni',
                title: 'Voni',
                subtitle: '',
                isCharacter: true,
                species: 'Void tulip',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/uncat/Voni.png'],
                detail: '',
                image: 'images/flories/uncat/Voni.png'
            },
            {
                cardId: 'fvMizudria',
                title: 'Mizudria',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Mizudria.png'],
                detail: '',
                image: 'images/flories/uncat/Mizudria.png'
            },
            {
                cardId: 'fvSuneea',
                title: 'Suneea',
                subtitle: '',
                isCharacter: true,
                species: 'Sunflower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Suneea.png'],
                detail: '',
                image: 'images/flories/uncat/Suneea.png'
            },
            {
                cardId: 'fvAcidzer',
                title: 'Acidzer',
                subtitle: '',
                isCharacter: true,
                species: 'Acid tulip',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/uncat/Acidzer.png'],
                detail: '',
                image: 'images/flories/uncat/Acidzer.png'
            },
            {
                cardId: 'fvMia',
                title: 'Mia',
                subtitle: '',
                isCharacter: true,
                species: 'Potted plant',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/uncat/Mia.png'],
                detail: '',
                image: 'images/flories/uncat/Mia.png'
            }
        ]
    },
    {
        title: 'Floriverse',
        menuId: 'floriverse-vanilla',
        parent: 'floriverse',
        subtitle: '2023 Album',
        image: 'images/fv-i.png',
        color: 'var(--color-16)',
        hidden: true,
        cards: [
            {
                cardId: 'fvvInfo',
                title: 'Album Information',
                subtitle: 'Floriverse',
                banner: true,
                detail: `
                    Released: October 5th, 2023<br>
                    Total tracks: 10<br>
                    Total length: 32m 16s<br>
                    <br>
                    <a href="https://open.spotify.com/album/0AGxggSyuXqGdYLk0D7pbF?si=4Eej22G-RcOnbu8XIagHWQ" target="_blank">Spotify Album</a><br>
                    <a href="https://artifyber.bandcamp.com/album/floriverse" target="_blank">Bandcamp Release</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fv-i.png" data-caption="Floriverse" data-subcaption="Album cover for Floriverse"><br>
                    `,
                sections: [
                    {
                        title: 'Tracklist',
                        detail: `
                            <div class="container">
                                ${internalCard({ href: "floriverse-vanilla:fvvPotto", banner: true, title: "1 - Grow!", subtitle: "02:19" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvTwinkle", banner: true, title: "2 - Starfruit Garden", subtitle: "02:26" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvStrawmon", banner: true, title: "3 - Fruity Bounce", subtitle: "02:08" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvNocto", banner: true, title: "4 - Nocturnal Photosynthesis", subtitle: "04:41" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvFurflow", banner: true, title: "5 - Catdelions", subtitle: "03:15" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvPana", banner: true, title: "6 - Pancake Pancake Pancake Pancake", subtitle: "02:58" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvPinkly", banner: true, title: "7 - Tulips", subtitle: "02:51" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvKosmaya", banner: true, title: "8 - Exoplants", subtitle: "05:15" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvMincha", banner: true, title: "9 - Jasmine Tea", subtitle: "03:05" })}
                                ${internalCard({ href: "floriverse-vanilla:fvvLan", banner: true, title: "10 - Moonflower", subtitle: "03:12" })}
                            </div>
                        `,
                    }
                ],
                image: 'images/fv-i.png'
            },
            {
                cardId: 'fvvPotto',
                title: 'Potto',
                subtitle: '',
                isCharacter: true,
                species: 'Potted plant',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fv-potto.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4gdYjAljNAoRtL5TM7lZ13?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-potto.png'
            },
            {
                cardId: 'fvvTwinkle',
                title: 'Twinkle',
                subtitle: '',
                isCharacter: true,
                species: 'Star flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fv-twinkle.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0BZTvGvSh3jy7vAsPgzIq8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-twinkle.png'
            },
            {
                cardId: 'fvvStrawmon',
                title: 'Strawmon',
                subtitle: '',
                isCharacter: true,
                species: 'Glass',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fv-strawmon.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7nNNU3DWb44jYQ58rhyPhC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-strawmon.png'
            },
            {
                cardId: 'fvvNocto',
                title: 'Nocto',
                subtitle: '',
                isCharacter: true,
                species: 'Spirit tulip',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fv-nocto.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2wr0z9kPBz3vaUUCeFKyJ0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-nocto.png'
            },
            {
                cardId: 'fvvFurflow',
                title: 'Furflow',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Catdelion',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: 'images/c/furflow-c.png',
                gallery: [
                    'images/c/furflow-c2.png',
                    'images/c/furflow-c3.png',
                    'images/c/furflow-c4.png',
                    'images/c/furflow-c5.png',
                    'images/flories/fv-furflow.png',
                ],
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveMisty',
                        relation: 'Significant Other'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6TtpP74DZMui1A1yW2ZkgF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],

                image: 'images/c/furflow-c.png'
            },
            {
                cardId: 'fvvPana',
                title: 'Pana',
                subtitle: '',
                isCharacter: true,
                species: 'Pancake tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fv-pana.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-delta:fvdYana',
                        relation: 'Younger Sister'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5if8Q8xC4zO3c3cnxsrLME?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-pana.png'
            },
            {
                cardId: 'fvvPinkly',
                title: 'Pinkly',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fv-pinkly.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/41AoLmWUjKgKoXwvuTtOlf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-pinkly.png'
            },
            {
                cardId: 'fvvKosmaya',
                title: 'Kosmaya',
                subtitle: '',
                isCharacter: true,
                species: 'Exotic flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fv-kosmaya.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0JqRjWreUkC8D8k0jkT1tH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-kosmaya.png'
            },
            {
                cardId: 'fvvMincha',
                title: 'Mincha',
                subtitle: '',
                isCharacter: true,
                species: 'Jasmine',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fv-mincha.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/71YSihtpFEGwW6KNlrRvwq?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-mincha.png'
            },
            {
                cardId: 'fvvLan',
                title: 'Lan',
                subtitle: '',
                isCharacter: true,
                species: 'Lemon',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fv-lan.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/47gXi6wzLJByNOhF3NHIoh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fv-lan.png'
            }
        ]
    },
    {
        title: 'Floriverse : Delta',
        menuId: 'floriverse-delta',
        parent: 'floriverse',
        subtitle: '2024 Album',
        image: 'images/fvd-i.png',
        color: 'var(--color-1)',
        hidden: true,
        cards: [
            {
                cardId: 'fvdInfo',
                title: 'Album Information',
                subtitle: 'Floriverse : Delta',
                banner: true,
                detail: `
                    Released: March 3rd, 2024<br>
                    Total tracks: 32<br>
                    Total length: 1hr 37m<br>
                    <br>
                    <a href="https://open.spotify.com/album/2PNIG5k8lEGQ6fSuMUn7ir?si=BO2liD1rSpq7Wna6xTksYQ" target="_blank">Spotify Album</a><br>
                    <a href="https://artifyber.bandcamp.com/album/floriverse-delta" target="_blank">Bandcamp Release</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fvd-i.png" data-caption="Floriverse : Delta" data-subcaption="Album cover for Floriverse : Delta"><br>
                    `,
                sections: [
                    {
                        title: 'Tracklist',
                        detail: `
                        <div class="container">
                            ${internalCard({ href: "floriverse-delta:fvdStarple", banner: true, title: "1 - Zenith", subtitle: "03:04" })}
                            ${internalCard({ href: "floriverse-delta:fvdChrora", banner: true, title: "2 - Aurora", subtitle: "02:19" })}
                            ${internalCard({ href: "floriverse-delta:fvdOrply", banner: true, title: "3 - Midnight Drawing", subtitle: "03:03" })}
                            ${internalCard({ href: "floriverse-delta:fvdTiram", banner: true, title: "4 - Spores", subtitle: "04:01" })}
                            ${internalCard({ href: "floriverse-delta:fvdNimibi", banner: true, title: "5 - Dreamy Sunflower", subtitle: "02:40" })}
                            ${internalCard({ href: "floriverse-delta:fvdSlump", banner: true, title: "6 - Oxygen", subtitle: "02:33" })}
                            ${internalCard({ href: "floriverse-delta:fvdPio", banner: true, title: "7 - Vitaelek", subtitle: "03:15" })}
                            ${internalCard({ href: "floriverse-delta:fvdYana", banner: true, title: "8 - Midnight Honey", subtitle: "03:07" })}
                            ${internalCard({ href: "floriverse-delta:fvdLooni", banner: true, title: "9 - You Are My Star", subtitle: "02:54" })}
                            ${internalCard({ href: "floriverse-delta:fvdChocopop", banner: true, title: "10 - JUST KIDDING!!", subtitle: "02:56" })}
                            ${internalCard({ href: "floriverse-delta:fvdStaz", banner: true, title: "11 - Pistachio", subtitle: "02:23" })}
                            ${internalCard({ href: "floriverse-delta:fvdDelly", banner: true, title: "12 - Catdelions II", subtitle: "03:05" })}
                            ${internalCard({ href: "floriverse-delta:fvdSprinkly", banner: true, title: "13 - Happy Cakeday", subtitle: "02:49" })}
                            ${internalCard({ href: "floriverse-delta:fvdEcno", banner: true, title: "14 - Tripetals", subtitle: "02:24" })}
                            ${internalCard({ href: "floriverse-delta:fvdDisaton", banner: true, title: "15 - WATA KASHI", subtitle: "02:48" })}
                            ${internalCard({ href: "floriverse-delta:fvdProtoberries", banner: true, title: "16 - Mixed Berries", subtitle: "03:08" })}
                            ${internalCard({ href: "floriverse-delta:fvdPipix", banner: true, title: "17 - Pixel Florie", subtitle: "03:02" })}
                            ${internalCard({ href: "floriverse-delta:fvdPico", banner: true, title: "18 - Pico", subtitle: "02:47" })}
                            ${internalCard({ href: "floriverse-delta:fvdStarlila", banner: true, title: "19 - I Love You!!!", subtitle: "02:08" })}
                            ${internalCard({ href: "floriverse-delta:fvdWina", banner: true, title: "20 - SRLAOANOEETVLEEYDS", subtitle: "04:28" })}
                            ${internalCard({ href: "floriverse-delta:fvdFret", banner: true, title: "21 - Metal Plate Petal Melta", subtitle: "03:38" })}
                            ${internalCard({ href: "floriverse-delta:fvdAzka", banner: true, title: "22 - Ascension", subtitle: "02:47" })}
                            ${internalCard({ href: "floriverse-delta:fvdCherro", banner: true, title: "23 - Tomato", subtitle: "03:13" })}
                            ${internalCard({ href: "floriverse-delta:fvdFloorion", banner: true, title: "24 - 5122", subtitle: "03:22" })}
                            ${internalCard({ href: "floriverse-delta:fvdStellA", banner: true, title: "25 - Interstella", subtitle: "03:51" })}
                            ${internalCard({ href: "floriverse-delta:fvdNully", banner: true, title: "26 - Nu15", subtitle: "02:21" })}
                            ${internalCard({ href: "floriverse-delta:fvdDatum", banner: true, title: "27 - Artificial Sprouts", subtitle: "03:30" })}
                            ${internalCard({ href: "floriverse-delta:fvdPoloniloo", banner: true, title: "28 - stem.cut", subtitle: "03:09" })}
                            ${internalCard({ href: "floriverse-delta:fvdGrayscale", banner: true, title: "29 - Colorblind", subtitle: "02:57" })}
                            ${internalCard({ href: "floriverse-delta:fvdErwith", banner: true, title: "30 - Anxiety", subtitle: "02:40" })}
                            ${internalCard({ href: "floriverse-delta:fvdFyzer", banner: true, title: "31 - ,", subtitle: "02:25" })}
                            ${internalCard({ href: "floriverse-delta:fvdKloroforo", banner: true, title: "32 - Xilem", subtitle: "04:44" })}
                        </div>
                        `
                    }
                ],
                image: 'images/fvd-i.png'
            },
            {
                cardId: 'fvdStarple',
                title: 'Starple',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-starple.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6qwqbRGdEyxusUFDCzsZPT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-starple.png'
            },
            {
                cardId: 'fvdChrora',
                title: 'Chrora',
                subtitle: '',
                isCharacter: true,
                species: 'Exotic flower',
                pronouns: 'They',
                gender: 'Non-Binary',
                gallery: ['images/flories/fvd-chrora.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6hqhGbC6nbp0tJxk3U4Grw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-chrora.png'
            },
            {
                cardId: 'fvdOrply',
                title: 'Orply',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-orply.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1M31eXSdpJeaDPZpCpQBUG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-orply.png'
            },
            {
                cardId: 'fvdTiram',
                title: 'Tiram',
                subtitle: '',
                isCharacter: true,
                species: 'Mushroom',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-tiram.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveZoey',
                        relation: 'Sibling'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4IODkTlrmrOPUGX6tXjCxv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-tiram.png'
            },
            {
                cardId: 'fvdNimibi',
                title: 'Nimibi',
                subtitle: '',
                isCharacter: true,
                species: 'Cloudy flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-nimibi.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2oTb7PEEwCp2HJXGJeboL5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-nimibi.png'
            },
            {
                cardId: 'fvdSlump',
                title: 'Slump',
                subtitle: '',
                isCharacter: true,
                species: 'Rock with kelps',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-slump.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3OzDbbEDCeN68ODbpCFJ19?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-slump.png'
            },
            {
                cardId: 'fvdPio',
                title: 'Pio',
                subtitle: '',
                isCharacter: true,
                species: 'Berry',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-pio.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3Fc9G9SBRr0tawPhs230nv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-pio.png'
            },
            {
                cardId: 'fvdYana',
                title: 'Yana',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-yana.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveNila',
                        relation: 'Significant Other'
                    },
                    {
                        cardId: 'floriverse-vanilla:fvvPana',
                        relation: 'Older Sister'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6lVBWrXkQDo9lvg3DCvfKk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-yana.png'
            },
            {
                cardId: 'fvdLooni',
                title: 'Looni',
                subtitle: '',
                isCharacter: true,
                species: 'Fruit',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-looni.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/72hvp8jiR2gEygYGwdI6sP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-looni.png'
            },
            {
                cardId: 'fvdChocopop',
                title: 'Chocopop',
                subtitle: '',
                isCharacter: true,
                species: 'Chocoflower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-chocopop.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0XEm6ZNg8aJEbJXfXHiw5G?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-chocopop.png'
            },
            {
                cardId: 'fvdStaz',
                title: 'Staz',
                subtitle: '',
                isCharacter: true,
                species: 'Pistachio',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-staz.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0AfF2Wd7GjJHCEtiOXxkUM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-staz.png'
            },
            {
                cardId: 'fvdDelly',
                title: 'Delly',
                subtitle: '',
                isCharacter: true,
                species: 'Catdelion',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-delly.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5OP8fr2erUsz19SyVoE9LR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-delly.png'
            },
            {
                cardId: 'fvdSprinkly',
                title: 'Sprinkly',
                subtitle: '',
                isCharacter: true,
                species: 'Potted cakeflower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-sprinkly.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2k4OSOLNmQYkdPHqJiaPKp?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-sprinkly.png'
            },
            {
                cardId: 'fvdEcno',
                title: 'Ecno',
                subtitle: '',
                isCharacter: true,
                species: 'Multi',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fvd-ecno.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3nXURiIDCHS7sgWm5HK3D1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-ecno.png'
            },
            {
                cardId: 'fvdDisaton',
                title: 'Disaton',
                subtitle: '',
                isCharacter: true,
                species: 'Cottonbun',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-disaton.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2OIRp2Szn2NCLasBAa9dLE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-disaton.png'
            },
            {
                cardId: 'fvdProtoberries',
                title: 'Protoberries',
                subtitle: '',
                isCharacter: true,
                species: 'Berries',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fvd-protoberries.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1CinvvQMgABDkN8XjEOaqr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-protoberries.png'
            },
            {
                cardId: 'fvdPipix',
                title: 'Pipix',
                subtitle: '',
                isCharacter: true,
                species: 'Pixel flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-pipix.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4ABYxyGWirHUon4Yyn1cI6?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-pipix.png'
            },
            {
                cardId: 'fvdPico',
                title: 'Pico',
                subtitle: '',
                isCharacter: true,
                species: 'Robot flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-pico.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0QNRQ9sOAhJuQ2npMhWTPB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-pico.png'
            },
            {
                cardId: 'fvdStarlila',
                title: 'Starlila',
                subtitle: '',
                isCharacter: true,
                species: 'Transgender flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-starlila.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4jBPsvM3xLINdFRGFrI6nw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-starlila.png'
            },
            {
                cardId: 'fvdWina',
                title: 'Wina',
                subtitle: '',
                isCharacter: true,
                species: 'Charred flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-wina.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'nansenz:mu',
                        relation: 'Multiversal Friend'
                    },
                    {
                        cardId: 'floriverse-epsilon:fveCorrode',
                        relation: 'Cousin'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2aG9OgByL6HMnuBpbhBtZq?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-wina.png'
            },
            {
                cardId: 'fvdFret',
                title: 'Fret',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-fret.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3ZgXT9ubENobpWYAwLByuG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-fret.png'
            },
            {
                cardId: 'fvdAzka',
                title: 'Azka',
                subtitle: '',
                isCharacter: true,
                species: 'Angel',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fvd-azka.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6CDOwxkjeeKlUQ9slp7HH1?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-azka.png'
            },
            {
                cardId: 'fvdCherro',
                title: 'Cherro',
                subtitle: '',
                isCharacter: true,
                species: 'Tomatoes',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fvd-cherro.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6cWkPhZdRFrEfXHt4VTdaF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-cherro.png'
            },
            {
                cardId: 'fvdFloorion',
                title: 'Floorion',
                subtitle: '',
                isCharacter: true,
                species: 'Potted robot flower',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fvd-floorion.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/08a6zLGmgnz7E6ERRVs8MG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-floorion.png'
            },
            {
                cardId: 'fvdStellA',
                title: 'Stell-A',
                subtitle: '',
                isCharacter: true,
                species: 'Black hole flower',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fvd-stell-a.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2gDE5ZevrFWTm2DbAyoKSa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-stell-a.png'
            },
            {
                cardId: 'fvdNully',
                title: 'Nully',
                subtitle: '',
                isCharacter: true,
                species: ' ',
                pronouns: ' ',
                gender: ' ',
                gallery: ['images/flories/fvd-nully.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0ksaxbYkDiQdUWs9AhuxZv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-nully.png'
            },
            {
                cardId: 'fvdDatum',
                title: 'Datum',
                subtitle: '',
                isCharacter: true,
                species: 'Digital flower',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fvd-datum.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/16qNFlojlNYe8cGGfawMbj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-datum.png'
            },
            {
                cardId: 'fvdPoloniloo',
                title: 'Poloniloo',
                subtitle: '',
                isCharacter: true,
                species: 'Polonium flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-poloniloo.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3ZzHlAWcRPORwAjL1hqOdc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-poloniloo.png'
            },
            {
                cardId: 'fvdGrayscale',
                title: 'Grayscale',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fvd-grayscale.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/61VIYvsGxstQU65lCIwTyx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-grayscale.png'
            },
            {
                cardId: 'fvdErwith',
                title: 'Erwith',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-erwith.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5uCO2B4m6lxjOoHOj38JfG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-erwith.png'
            },
            {
                cardId: 'fvdFyzer',
                title: 'Fyzer',
                subtitle: '',
                isCharacter: true,
                species: 'Florifyber',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fvd-fyzer.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/18hIDsoOvx483ajC3dMLYW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-fyzer.png'
            },
            {
                cardId: 'fvdKloroforo',
                title: 'Kloroforo',
                subtitle: '',
                isCharacter: true,
                species: 'Robot flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fvd-kloroforo.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6n3dbR0Cw3k6MYwGA2OgDJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fvd-kloroforo.png'
            }
        ]
    },
    {
        title: 'Floriverse : Epsilon',
        menuId: 'floriverse-epsilon',
        parent: 'floriverse',
        subtitle: '2025 Album',
        image: 'images/fve-i.png',
        color: 'var(--color-8)',
        hidden: true,
        cards: [
            {
                cardId: 'fveInfo',
                title: 'Album Information',
                subtitle: 'Floriverse : Epsilon',
                banner: true,
                detail: `
                    Released: June 4th, 2025<br>
                    Total tracks: 48<br>
                    Total length: 2hr 36m<br>
                    <br>
                    <a href="https://open.spotify.com/album/2qpLiyGRBhRHggKZSJUYbj?si=j0kxk_nfQ9u4bmv1iZmj3Q" target="_blank">Spotify Album</a><br>
                    <a href="https://artifyber.bandcamp.com/album/floriverse-epsilon" target="_blank">Bandcamp Release</a><br>
                    <h2>Album Cover:</h2><br>
                    <img src="images/fve-i.png" data-caption="Floriverse : Epsilon" data-subcaption="Album cover for Floriverse : Epsilon"><br>
                    `,
                sections: [
                    {
                        title: 'Tracklist',
                        detail: `
                        <div class="container">
                            ${internalCard({ href: "floriverse-epsilon:fveSolaris", banner: true, title: "1 - Hitzen", subtitle: "02:33" })}
                            ${internalCard({ href: "floriverse-epsilon:fveTrix", banner: true, title: "2 - touch grass", subtitle: "02:59" })}
                            ${internalCard({ href: "floriverse-epsilon:fveLux", banner: true, title: "3 - Borealis", subtitle: "03:10" })}
                            ${internalCard({ href: "floriverse-epsilon:fveGlitter", banner: true, title: "4 - Midnight Stargazing", subtitle: "04:03" })}
                            ${internalCard({ href: "floriverse-epsilon:fveFomfz", banner: true, title: "5 - Leaves", subtitle: "02:53" })}
                            ${internalCard({ href: "floriverse-epsilon:fveBion", banner: true, title: "6 - Vanished Horizons", subtitle: "02:35" })}
                            ${internalCard({ href: "floriverse-epsilon:fveZoey", banner: true, title: "7 - Spores II", subtitle: "02:54" })}
                            ${internalCard({ href: "floriverse-epsilon:fveHera", banner: true, title: "8 - Timeline", subtitle: "03:49" })}
                            ${internalCard({ href: "floriverse-epsilon:fveIsla", banner: true, title: "9 - Coconut", subtitle: "03:36" })}
                            ${internalCard({ href: "floriverse-epsilon:fveAzira", banner: true, title: "10 - Blueberry", subtitle: "03:04" })}
                            ${internalCard({ href: "floriverse-epsilon:fveMisty", banner: true, title: "11 - Catdelions III", subtitle: "03:37" })}
                            ${internalCard({ href: "floriverse-epsilon:fveNya", banner: true, title: "12 - Catdelions IV", subtitle: "04:00" })}
                            ${internalCard({ href: "floriverse-epsilon:fveAtto", banner: true, title: "13 - Catdelions V", subtitle: "03:19" })}
                            ${internalCard({ href: "floriverse-epsilon:fveClara", banner: true, title: "14 - Cottonbuns", subtitle: "02:53" })}
                            ${internalCard({ href: "floriverse-epsilon:fveLyra", banner: true, title: "15 - Cottonbuns II", subtitle: "04:07" })}
                            ${internalCard({ href: "floriverse-epsilon:fveStrawnilla", banner: true, title: "16 - Frozen Strawnilla Cream", subtitle: "02:32" })}
                            ${internalCard({ href: "floriverse-epsilon:fvePoppers", banner: true, title: "17 - Vitamin Supplement Commercials", subtitle: "02:30" })}
                            ${internalCard({ href: "floriverse-epsilon:fveAurelia", banner: true, title: "18 - Weekend255", subtitle: "03:01" })}
                            ${internalCard({ href: "floriverse-epsilon:fveDysis", banner: true, title: "19 - Afternoon", subtitle: "02:50" })}
                            ${internalCard({ href: "floriverse-epsilon:fveButter", banner: true, title: "20 - Peanut Butter", subtitle: "02:35" })}
                            ${internalCard({ href: "floriverse-epsilon:fveBell", banner: true, title: "21 - Under The Mistletoe", subtitle: "02:45" })}
                            ${internalCard({ href: "floriverse-epsilon:fveNila", banner: true, title: "22 - Midnight Honey II", subtitle: "03:24" })}
                            ${internalCard({ href: "floriverse-epsilon:fveZest", banner: true, title: "23 - Zesty Lemonade", subtitle: "02:02" })}
                            ${internalCard({ href: "floriverse-epsilon:fveCorrode", banner: true, title: "24 - へへ", subtitle: "03:40" })}
                            ${internalCard({ href: "floriverse-epsilon:fveAmalgamapot", banner: true, title: "25 - Flashbackverse", subtitle: "02:21" })}
                            ${internalCard({ href: "floriverse-epsilon:fvePosie", banner: true, title: "26 - Quintupetals", subtitle: "02:26" })}
                            ${internalCard({ href: "floriverse-epsilon:fveNonsense", banner: true, title: "27 - Nonsense Flower", subtitle: "04:03" })}
                            ${internalCard({ href: "floriverse-epsilon:fveTorq", banner: true, title: "28 - Mechanical Sprouts", subtitle: "03:22" })}
                            ${internalCard({ href: "floriverse-epsilon:fvePersen", banner: true, title: "29 - =fract", subtitle: "03:26" })}
                            ${internalCard({ href: "floriverse-epsilon:fveTerentia", banner: true, title: "30 - Ruins", subtitle: "03:41" })}
                            ${internalCard({ href: "floriverse-epsilon:fveLumina", banner: true, title: "31 - Luciferin", subtitle: "03:02" })}
                            ${internalCard({ href: "floriverse-epsilon:fveTriplequestionmark", banner: true, title: "32 - questionmark", subtitle: "02:48" })}
                            ${internalCard({ href: "floriverse-epsilon:fveUpsidedowntriplequestionmark", banner: true, title: "33 - ε", subtitle: "02:49" })}
                            ${internalCard({ href: "floriverse-epsilon:fveGhoargh", banner: true, title: "34 - BCE", subtitle: "01:36" })}
                            ${internalCard({ href: "floriverse-epsilon:fveHYD124", banner: true, title: "35 - Kugelblitz", subtitle: "04:00" })}
                            ${internalCard({ href: "floriverse-epsilon:fveThorn", banner: true, title: "36 - Livid Life", subtitle: "03:38" })}
                            ${internalCard({ href: "floriverse-epsilon:fveReva", banner: true, title: "37 - Cactus Storm", subtitle: "03:30" })}
                            ${internalCard({ href: "floriverse-epsilon:fveAsh", banner: true, title: "38 - Extreme Painist", subtitle: "02:58" })}
                            ${internalCard({ href: "floriverse-epsilon:fveFlailer", banner: true, title: "39 - PLUCK", subtitle: "02:24" })}
                            ${internalCard({ href: "floriverse-epsilon:fveMang", banner: true, title: "40 - THOSE WHO GROW", subtitle: "03:12" })}
                            ${internalCard({ href: "floriverse-epsilon:fveZappie", banner: true, title: "41 - SWARM!!!", subtitle: "02:56" })}
                            ${internalCard({ href: "floriverse-epsilon:fveKai", banner: true, title: "42 - Opinions", subtitle: "03:05" })}
                            ${internalCard({ href: "floriverse-epsilon:fveConsole", banner: true, title: "43 - h", subtitle: "03:30" })}
                            ${internalCard({ href: "floriverse-epsilon:fveXi", banner: true, title: "44 - 11", subtitle: "08:50" })}
                            ${internalCard({ href: "floriverse-epsilon:fveFloriecookies", banner: true, title: "45 - cookie cutter", subtitle: "04:44" })}
                            ${internalCard({ href: "floriverse-epsilon:fveNini", banner: true, title: "46 - ニニ", subtitle: "03:02" })}
                            ${internalCard({ href: "floriverse-epsilon:fveXyxiv", banner: true, title: "47 - dddddddddddddddddddddddd", subtitle: "02:20" })}
                            ${internalCard({ href: "floriverse-epsilon:fveNau", banner: true, title: "48 - sunrise SUNSET", subtitle: "03:07" })}
                        </div>
                        `
                    }
                ],
                image: 'images/fve-i.png'
            },
            {
                cardId: 'fveSolaris',
                title: 'Solaris',
                subtitle: '',
                isCharacter: true,
                species: 'Fire flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-solaris.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/24g0lFcsVNK02abD2QkNGV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-solaris.png'
            },
            {
                cardId: 'fveTrix',
                title: 'Trix',
                subtitle: '',
                isCharacter: true,
                species: 'Dandelion',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-trix.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4UEZLy5azpZDUXsSZ7kSd3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-trix.png'
            },
            {
                cardId: 'fveLux',
                title: 'Lux',
                subtitle: '',
                isCharacter: true,
                species: 'Exotic flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-lux.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6XQtpyrmZqOQ4vkryFebOd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-lux.png'
            },
            {
                cardId: 'fveGlitter',
                title: 'Glitter',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-glitter.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2XbQRw5LjZ0215KFoXygB5?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-glitter.png'
            },
            {
                cardId: 'fveFomfz',
                title: 'Fomfz',
                subtitle: '',
                isCharacter: true,
                species: 'Tree',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-fomfz.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3FLUx25H8AdvUQaqRSUDpj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-fomfz.png'
            },
            {
                cardId: 'fveBion',
                title: 'Bion',
                subtitle: '',
                isCharacter: true,
                species: 'Spirit flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-bion.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5ttGzQwPCn0N1MvkY8gmPR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-bion.png'
            },
            {
                cardId: 'fveZoey',
                title: 'Zoey',
                subtitle: '',
                isCharacter: true,
                species: 'Mushroom',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-zoey.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-delta:fvdTiram',
                        relation: 'Sibling'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0HAWMtwV7i8h5meDcGvEsY?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-zoey.png'
            },
            {
                cardId: 'fveHera',
                title: 'Hera',
                subtitle: '',
                isCharacter: true,
                species: 'Goddess of time',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-hera.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3ZSUH2r8pOG96MvybtzAA0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-hera.png'
            },
            {
                cardId: 'fveIsla',
                title: 'Isla',
                subtitle: '',
                isCharacter: true,
                species: 'Palm tree',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-isla.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2nD9OFVC0vSjzqQs6cdrjE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-isla.png'
            },
            {
                cardId: 'fveAzira',
                title: 'Azira',
                subtitle: '',
                isCharacter: true,
                species: 'Blueberry',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-azira.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0YSzGb5hP2mQjYNlEdnHYT?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-azira.png'
            },
            {
                cardId: 'fveMisty',
                title: 'Misty',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Catdelion',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: 'images/flories/fve-misty.png',
                gallery: [
                    'images/c/misty-c.png',
                ],
                relatives: [
                    {
                        cardId: 'floriverse-vanilla:fvvFurflow',
                        relation: 'Significant Other'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/54477floWI0ly0MSbqWPTi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],

                image: 'images/flories/fve-misty.png'
            },
            {
                cardId: 'fveNya',
                title: 'Nya',
                subtitle: '',
                isCharacter: true,
                species: 'Catdelion',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-nya.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6UoIaMC0x2Q28sgfmyE4Gw?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-nya.png'
            },
            {
                cardId: 'fveAtto',
                title: 'Atto',
                subtitle: '',
                isCharacter: true,
                species: 'Catdelion',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-atto.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/54VLAiBP3zAezPuN4iTsVz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-atto.png'
            },
            {
                cardId: 'fveClara',
                title: 'Clara',
                subtitle: '',
                isCharacter: true,
                species: 'Cottonbun',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-clara.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveLyra',
                        relation: 'Sibling'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1Kvkl60fp0gCjZhVHLFyDd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-clara.png'
            },
            {
                cardId: 'fveLyra',
                title: 'Lyra',
                subtitle: '',
                isCharacter: true,
                species: 'Cottonbun',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-lyra.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveClara',
                        relation: 'Sibling'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4IUh6x05XpQKvaVUIAQHSx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-lyra.png'
            },
            {
                cardId: 'fveStrawnilla',
                title: 'Strawnilla',
                subtitle: '',
                isCharacter: true,
                species: 'Poptart berry',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-strawnilla.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5sbhfCavUipotACA6gTE6K?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-strawnilla.png'
            },
            {
                cardId: 'fvePoppers',
                title: 'Poppers',
                subtitle: '',
                isCharacter: true,
                species: 'Berries',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fve-poppers.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6YCbIPAxhCXtfeyjCEsZZZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-poppers.png'
            },
            {
                cardId: 'fveAurelia',
                title: 'Aurelia',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Zinnia',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Lesbian',
                flags: ['floriewlw'],
                aliases: '',
                extra: '',
                detail: `
                    Aurelia is a green Zinnia with orange petals. She is an archaeologist and museum curator, exploring the ancient ruins of Klorofil and preserving ancient relics. She also enjoys drawing.<br>
                    <br>
                    She managed to find Hana through the multiversalnet, and was able to use one of her relics to open a wormhole to meet with her for a short period.
                `,
                refsheet: 'images/r/aurelia-r.png',
                gallery: [
                    'images/flories/fve-aurelia.png',
                    'images/c/aurelia-c.png',
                    'images/c/aurelia-c2.png',
                    'images/c/aurelia-c3.png',
                    'images/c/aurelia-c4.png',
                ],
                relatives: [
                    {
                        cardId: 'deltadim-chromasia:hana',
                        relation: 'Significant Other'
                    },
                    {
                        cardId: 'floriverse-epsilon:fveDysis',
                        relation: 'Older Sister'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3utG3VcCFG7wQWsQEM6NdV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],

                image: 'images/flories/fve-aurelia.png'
            },
            {
                cardId: 'fveDysis',
                title: 'Dysis',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-dysis.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-epsilon:fveAurelia',
                        relation: 'Younger Sister'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6CPjDuXknQCUUiUsPuVzsc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-dysis.png'
            },
            {
                cardId: 'fveButter',
                title: 'Butter',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-butter.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6pyJodnFGPhOBP06KQYcAM?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-butter.png'
            },
            {
                cardId: 'fveBell',
                title: 'Bell',
                subtitle: '',
                isCharacter: true,
                species: 'Mistletoe',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-bell.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0OKR8PyOmqjabP48YNFtaf?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-bell.png'
            },
            {
                cardId: 'fveNila',
                title: 'Nila',
                subtitle: '',
                isCharacter: true,
                species: 'Tulip',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-nila.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-delta:fvdYana',
                        relation: 'Significant Other'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/526q0c2QlCM4BBB8cuiZBl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-nila.png'
            },
            {
                cardId: 'fveZest',
                title: 'Zest',
                subtitle: '',
                isCharacter: true,
                species: 'Lemon',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-zest.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0WlPypkfkmPstkpnSV2jQ9?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-zest.png'
            },
            {
                cardId: 'fveCorrode',
                title: 'Corrode',
                subtitle: '',
                isCharacter: true,
                species: 'Charred tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-corrode.png'],
                detail: '',
                relatives: [
                    {
                        cardId: 'floriverse-delta:fvdWina',
                        relation: 'Cousin'
                    },
                ],
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6LUcAFz9TVoxWPeuaoDT7k?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-corrode.png'
            },
            {
                cardId: 'fveAmalgamapot',
                title: 'Amalgamapot',
                subtitle: '',
                isCharacter: true,
                species: 'Amalgamation',
                pronouns: 'They',
                gender: 'Multi-florie',
                gallery: ['images/flories/fve-amalgamapot.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4Oq6HngWlSqv2zcoMpOof7?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-amalgamapot.png'
            },
            {
                cardId: 'fvePosie',
                title: 'Posie',
                subtitle: '',
                isCharacter: true,
                species: 'Multi',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fve-posie.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0hbkLbvXqRjtPk5GpISMXX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-posie.png'
            },
            {
                cardId: 'fveNonsense',
                title: 'Nonsense',
                subtitle: '',
                isCharacter: true,
                species: 'Shapeshifter',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/fve-nonsense.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2X5FBlUAInQcPuk8z5Wkhc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-nonsense.png'
            },
            {
                cardId: 'fveTorq',
                title: 'Torq',
                subtitle: '',
                isCharacter: true,
                species: 'Mechanical flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-torq.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4dGOtceG8Uu4NlCpy5tYrz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-torq.png'
            },
            {
                cardId: 'fvePersen',
                title: 'Persen',
                subtitle: '',
                isCharacter: true,
                species: 'Exotic flower',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fve-persen.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/01IdMK2geYxOVNOeWyOPOr?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-persen.png'
            },
            {
                cardId: 'fveTerentia',
                title: 'Terentia',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-terentia.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/02pDEIJ4SkOpS26x2iAWR4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-terentia.png'
            },
            {
                cardId: 'fveLumina',
                title: 'Lumina',
                subtitle: '',
                isCharacter: true,
                species: 'Aquatic mushroom',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/fve-lumina.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/39ibN3aXuIScvHvsqjTd0V?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-lumina.png'
            },
            {
                cardId: 'fveTriplequestionmark',
                title: '???',
                subtitle: '',
                isCharacter: true,
                species: 'Unknown Florie',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fve-triplequestionmark.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7BiS2zKOVhXohUXaWPUByc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-triplequestionmark.png'
            },
            {
                cardId: 'fveUpsidedowntriplequestionmark',
                title: '¿¿¿',
                subtitle: '',
                isCharacter: true,
                species: 'Unknown Florie',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fve-upsidedowntriplequestionmark.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/1eb68kB5ZKJOGFwANnZyXk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-upsidedowntriplequestionmark.png'
            },
            {
                cardId: 'fveGhoargh',
                title: 'Ghoargh',
                subtitle: '',
                isCharacter: true,
                species: 'Prehistoric plant',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-ghoargh.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5hj0JXlSNvViO6Kxqxj1hL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-ghoargh.png'
            },
            {
                cardId: 'fveHYD124',
                title: 'HYD-124',
                subtitle: '',
                isCharacter: true,
                species: 'Black hole flower',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-hyd-124.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4ad4sRmfxHGtT49SZdaYqx?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-hyd-124.png'
            },
            {
                cardId: 'fveThorn',
                title: 'Thorn',
                subtitle: '',
                isCharacter: true,
                species: 'Wilted rose',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-thorn.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6jlzwHfY2mTdz5sSjxirlL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-thorn.png'
            },
            {
                cardId: 'fveReva',
                title: 'Reva',
                subtitle: '',
                isCharacter: true,
                species: 'Cactus',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-reva.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/48Soa2UoSNi07SMvUgeNNP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-reva.png'
            },
            {
                cardId: 'fveAsh',
                title: 'Ash',
                subtitle: '',
                isCharacter: true,
                species: 'Burning flower',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/fve-ash.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5LEJ2T6c55nc8IaAJAP2WQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-ash.png'
            },
            {
                cardId: 'fveFlailer',
                title: 'Flailer',
                subtitle: '',
                isCharacter: true,
                species: 'Femtanyl bootleg florie',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-flailer.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3oBsHcBbVNlAPSuw41P5xc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-flailer.png'
            },
            {
                cardId: 'fveMang',
                title: 'Mang',
                subtitle: '',
                isCharacter: true,
                species: 'Potted mango tree',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-mang.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5Gom9yi4U8hH4MaQTe3LsB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-mang.png'
            },
            {
                cardId: 'fveZappie',
                title: 'Zappie',
                subtitle: '',
                isCharacter: true,
                species: 'Bee tulip',
                pronouns: 'He',
                gender: 'Male',
                gallery: ['images/flories/fve-zappie.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5ZB7QxBEav9OPcd1mAePtd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-zappie.png'
            },
            {
                cardId: 'fveKai',
                title: 'Kai',
                subtitle: '',
                isCharacter: true,
                species: 'Clouds',
                pronouns: 'They',
                gender: 'Non-binary',
                gallery: ['images/flories/fve-kai.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3eQgHNwZRXOVsDHR9HPTub?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-kai.png'
            },
            {
                cardId: 'fveConsole',
                title: 'Console',
                subtitle: '',
                isCharacter: true,
                species: 'Robot bush',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fve-console.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2Fh8PrGc0Vy6heXPciofqh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-console.png'
            },
            {
                cardId: 'fveXi',
                title: 'Xi',
                subtitle: '',
                isCharacter: true,
                species: 'Angel',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fve-xi.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4SiPzpaunU63s6bcZxs00O?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-xi.png'
            },
            {
                cardId: 'fveFloriecookies',
                title: 'Floriecookies',
                subtitle: '',
                isCharacter: true,
                species: 'Cookies',
                pronouns: 'They',
                gender: 'Unknown',
                gallery: ['images/flories/fve-floriecookies.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/2VxAXrDKYocC8RLGnLNYEb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-floriecookies.png'
            },
            {
                cardId: 'fveNini',
                title: 'Nini',
                subtitle: '',
                isCharacter: true,
                species: 'Mystical lemon',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-nini.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5JHVefGyTwHCywi6c5svUS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-nini.png'
            },
            {
                cardId: 'fveXyxiv',
                title: 'Xyxiv',
                subtitle: '',
                isCharacter: true,
                species: 'Angel',
                pronouns: 'It',
                gender: 'Genderless',
                gallery: ['images/flories/fve-xyxiv.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3sdk7unVIWs5f8309C7jwa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-xyxiv.png'
            },
            {
                cardId: 'fveNau',
                title: 'Nau',
                subtitle: '',
                isCharacter: true,
                species: 'Flower',
                pronouns: 'She',
                gender: 'Female',
                gallery: ['images/flories/fve-nau.png'],
                detail: '',
                sections: [
                    {
                        title: 'Song',
                        detail: `
                            <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5xlRh2B4jXWwZsP2y1u64l?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        `
                    }
                ],
                image: 'images/flories/fve-nau.png'
            }
        ]
    },



    {
        // Digirel
        title: 'Digirel',
        menuId: 'digirel',
        subtitle: 'Digital Realm',
        image: 'icons/digirel.png',
        color: 'var(--color-3)',
        gridColor: 'var(--color-3)',
        gridColor2: 'var(--accent2)',
        gridOpacity: 0.1,
        orbit: 1,
        cards: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Digirel',
                banner: true,
                detail:
                    `This universe does not exist independently but is derived from other universes where computers and servers can exist. It’s the result of multiversal intercommunication. “Digitalias” wander throughout Digirel and can interact with other universes through hardware connections.<br>
                    <h4>What's in this page</h4>
                    This page list all characters in separate categories based on the Digirel album they associate with, as well as uncategorized ones.<br>`,
                image: 'icons/digirel.png'
            },
            {
                cardId: 'ruby',
                title: 'Ruby',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/ruby-r.png',
                gallery: [],

                image: 'images/i/ruby-i.png',
            },
            {
                cardId: 'soap',
                title: 'Soap',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat',
                pronouns: 'They/Any',
                gender: 'Non-binary',
                sexuality: 'Asexual',
                aliases: 'Foam',
                extra: '',
                refsheet: 'images/r/soap-r.png',
                gallery: [
                    'images/c/soap-c.png',
                    'images/c/soap-c2.png',
                    'images/c/soap-c3.png',
                    'images/c/soap-c4.png',
                ],

                image: 'images/i/soap-i.png',
            },
            {
                cardId: 'semyk',
                title: 'Semyk',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat',
                pronouns: 'Any Pronouns',
                gender: 'Any Gender',
                sexuality: 'who cares bro',
                aliases: 'CMYK, D43DK177Y.exe',
                extra: '',
                refsheet: 'images/r/semyk-r.png',
                gallery: [
                    'images/c/semyk-c4.png',
                    'images/c/semyk-c.png',
                    'images/c/semyk-c2.png',
                    'images/c/semyk-c3.png',
                ],

                image: 'images/i/semyk-i.png',
            },
            {
                cardId: 'artifolder',
                title: 'Artifolder',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Folder Bee',
                pronouns: 'Any Pronouns',
                gender: 'Female',
                sexuality: 'Pansexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artifolder-c.png',
                ],

                image: 'images/i/artifolder-i.png',
            },
            {
                cardId: 'byte',
                title: 'Byte',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Folder Cat',
                pronouns: 'He/They',
                gender: 'Demiboy',
                sexuality: 'Asexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/byte-c.png',
                    'images/c/byte-c2.png',
                ],

                image: 'images/i/byte-i.png',
            },
            {
                cardId: 'cherry',
                title: 'Cherry',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat',
                pronouns: 'She/They',
                gender: 'Demigirl',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/cherry-c.png',
                    'images/c/cherry-c2.png',
                ],

                image: 'images/i/cherry-i.png',
            },
            {
                cardId: 'blurplebun',
                title: 'Blurplebun',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Rabbit',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Asexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/blurplebun-c.png',
                    'images/c/blurplebun-c2.png',
                    'images/i/blurplebun-i.png',
                ],

                image: 'images/i/blurplebun-i.png',
            },
            {
                cardId: 'ebta',
                title: 'Ebta',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Slime Rabbit',
                pronouns: 'She/They/Any',
                gender: 'Pangender',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/ebta-r.png',
                gallery: [
                    'images/c/ebta-c3.png',
                    'images/c/ebta-c.png',
                    'images/c/ebta-c2.png',
                ],

                image: 'images/i/ebta-i.png',
            },
            {
                cardId: 'furryeah',
                title: 'Furryeah',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat',
                pronouns: 'Any',
                gender: 'Genderless',
                sexuality: '',
                aliases: 'Yeah!',
                extra: '',
                refsheet: 'images/r/furryeah-r.png',
                gallery: [
                    'images/c/furryeah-c.png',
                    'images/c/furryeah-c2.png',
                ],

                image: 'images/i/furryeah-i.png',
            },
            {
                cardId: 'placeholder',
                title: '&lt;placeholder&gt;',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cat',
                pronouns: 'Any Pronouns',
                gender: 'None',
                sexuality: 'None',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/placeholder-c.png',
                    'images/c/placeholder-c2.png',
                    'images/c/placeholder-c3.png',
                ],

                image: 'images/i/placeholder-i.png',
            },
            {
                cardId: 'kay',
                title: 'Kay',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Fennec',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Heterosexual',
                characterAttrs: {
                    "Design Origin": "<a href='https://x.com/Kaylaniakea' target='_blank'>Kaylaniakea</a>",
                },
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/kay-c.png',
                ],

                image: 'images/i/kay-i.png',
            },
            {
                cardId: 'usbun',
                title: 'USBun',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'USB-Rabbit',
                pronouns: 'He/She',
                gender: 'Intersex',
                sexuality: 'Pansexual',
                aliases: 'Universal Serial Bunny',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/usbun-c2.png',
                    'images/c/usbun-c.png',
                ],

                image: 'images/i/usbun-i.png',
            },
            {
                cardId: 'sakura',
                title: 'Sakura',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Digitalia',
                pronouns: 'She/They',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/sakura-c.png',
                ],

                image: 'images/i/sakura-i.png',
            },
            {
                cardId: 'quanta',
                title: 'Quanta',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Hologram Cat',
                pronouns: 'They',
                gender: 'Non-Binary',
                sexuality: 'Pansexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/quanta-r.png',
                gallery: [
                    'images/c/quanta-c.png',
                ],

                image: 'images/i/quanta-i.png',
            },
        ]
    },



    {
        // Nansenz
        title: 'Nansenz',
        menuId: 'nansenz',
        subtitle: 'World of Nonsense',
        image: 'icons/nansenz.png',
        color: 'var(--color-4)',
        gridColor: 'var(--color-4)',
        gridColor2: 'var(--accent2)',
        gridOpacity: 0.1,
        orbit: 1,
        cards: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Nansenz',
                banner: true,
                detail:
                    // <div class="ticker-bar"><div class="ticker-text"></div></div><br></br>
                    `<div class="ticker-bar"><div class="ticker-text"></div></div><br></br>
                    A world beyond logical limits where anything can exist. It’s like a fever dream. Anything you imagine or could be imagined, objects with limbs, cube-shaped planets, galaxies made of spaghetti, there are no boundaries in Nansenz. The entire purpose of this universe is to contain everything that defy all sense of logic.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nansenz. This include character information, reference art, and picture gallery of each character.<br>
                    <br>`,
                image: 'icons/nansenz.png'
            },
            {
                linkId: 'nansenz-thingamaland',
            },
            {
                cardId: 'mu',
                title: 'Mu',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: '"Cabbit"',
                pronouns: 'She/Any',
                gender: 'Genderless',
                sexuality: 'Aroace',
                aliases: 'μ',
                extra: '',
                refsheet: 'images/r/mu-r.png',
                gallery: [],
                relatives: [
                    {
                        cardId: 'floriverse-delta:fvdWina',
                        relation: 'Multiversal Friend'
                    },
                ],

                image: 'images/i/mu-i.png',
            },
            {
                cardId: 'cancerman',
                title: 'Cancerman',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cigarette',
                pronouns: 'He',
                gender: 'Male',
                sexuality: 'Gay',
                aliases: 'Cigarman, Cigar',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/cancerman-c.png',
                ],

                image: 'images/i/cancerman-i.png',
            },
            {
                cardId: 'furrophelix',
                title: 'Furrophelix',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Bacteria',
                pronouns: 'Any Pronouns',
                gender: 'Non-binary',
                sexuality: 'Asexual',
                aliases: 'Phelix',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/furrophelix-c.png',
                ],

                image: 'images/i/furrophelix-i.png',
            },
            {
                cardId: 'malit',
                title: 'Malit',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Polygons',
                pronouns: 'It',
                gender: 'Genderless',
                sexuality: 'Aroace',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/malit-c.png',
                ],

                image: 'images/i/malit-i.png',
            },
            {
                cardId: 'gomboc',
                title: 'THE GÖMBÖC',
                subtitle: '',
                detail: ``,

                isCharacter: true,
                species: '',
                pronouns: '',
                gender: '',
                sexuality: '',
                aliases: '',
                extra: ` `,
                html: `<H1 style="font-size:50px; font-family: Times, serif; color: #e1b89c; text-align: center;">THE GÖMBÖC SIMPLY WANTS MORE.</H1>`,
                refsheet: '',
                gallery: [],

                image: 'images/gomboc.gif',
            },
        ]
    },
    {
        title: 'Thingamaland',
        menuId: 'nansenz-thingamaland',
        subtitle: 'Object Island',
        image: 'images/nansenz-thingamaland.png',
        color: 'var(--color-19)',
        orbit: 1,
        hidden: true,
        parent: 'nansenz',
        cards: [
            {
                cardId: 'article',
                title: 'Article',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Article (Object)',
                pronouns: 'She/He/It',
                gender: 'Non-binary',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/article-c.png',
                ],

                image: 'images/i/article-i.png',
            },
            {
                cardId: 'meowcaroon',
                title: 'Meowcaroon',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Macaroon (Object)',
                pronouns: 'She/It',
                gender: 'Female',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/meowcaroon-c.png',
                    'images/c/meowcaroon-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'nansenz-thingamaland:oworeo',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/meowcaroon-i.png',
            },
            {
                cardId: 'oworeo',
                title: 'Oworeo',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Sandwich Cookie (Object)',
                pronouns: 'They',
                gender: 'Non-Binary',
                sexuality: 'Lesbian',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/oworeo-c.png',
                    'images/c/oworeo-c2.png',
                ],
                relatives: [
                    {
                        cardId: 'nansenz-thingamaland:meowcaroon',
                        relation: 'Significant Other'
                    },
                ],

                image: 'images/i/oworeo-i.png',
            },
            {
                cardId: 'treehee',
                title: 'Treehee',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Tree (Object)',
                pronouns: 'Any Pronouns',
                gender: 'Male',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: 'images/r/treehee-r.png',
                gallery: [],

                image: 'images/i/treehee-i.png',
            },
            {
                cardId: 'rexav',
                title: 'Rexav',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Excavator',
                pronouns: 'He (Bucket), They (Cabin)',
                gender: 'Male (Bucket), Non-binary (Cabin)',
                sexuality: 'Asexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/rexav-c.png',
                ],

                image: 'images/i/rexav-i.png',
            },
            {
                cardId: 'censored',
                title: '#@!?',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Curse Word (Object)',
                pronouns: 'He/It',
                gender: 'Male',
                sexuality: 'Pansexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/censored-c.png',
                ],

                image: 'images/i/censored-i.png',
            },
        ]
    },


    {
        // Hizen
        title: 'Hizen',
        menuId: 'hizen',
        subtitle: 'Hi-Zenith',
        image: 'icons/hizen.png',
        color: 'var(--color-5)',
        gridColor: 'var(--color-5)',
        gridColor2: 'var(--accent2)',
        gridOpacity: 0.1,
        orbit: 1,
        cards: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Hizen',
                banner: true,
                detail:
                    `While this universe may represent a sort of heaven, it’s not just an “afterlife” (in fact, there are many realms beyond heaven and hell in the Fyberverse). This is where entities considered angelic (or derived from such origins) were born. The universe is depicted as infinite layers of floating islands.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Hizen. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/hizen.png'
            },
            {
                cardId: 'nim',
                title: 'Nim',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cloud Rabbit',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Aroace',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/nim-c.png',
                    'images/c/nim-c2.png',
                    'images/c/nim-c3.png',
                    'images/c/nim-c4.png',
                ],

                image: 'images/i/nim-i.png',
            },
            {
                cardId: 'artimoth',
                title: 'Artimoth',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Moth',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Bisexual',
                aliases: 'Arti, Mothy',
                characterAttrs: {
                    'Realm Origin': '<a data-open-card="deltadim">Deltadim</a>',
                },
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artimoth-c2.png',
                    'images/c/artimoth-c.png',
                    'images/c/artimoth-c3.png',
                    'images/c/artimoth-c4.png',
                ],

                image: 'images/i/artimoth-i.png',
            },
            {
                cardId: 'awan',
                title: 'Awan',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Cloud Puppy',
                pronouns: 'He/They',
                gender: 'Male',
                sexuality: 'Gay',
                aliases: '',
                characterAttrs: {
                    'Realm Origin': '<a data-open-card="nansenz">Nansenz</a>',
                    'Design Origin': '<a href="https://x.com/yewm3w" target="_blank">yewm3w</a>',
                },
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/awan-c.png',
                    'images/c/awan-c2.png',
                ],

                image: 'images/i/awan-i.png',
            },
            {
                cardId: 'lyne',
                title: 'Lyne',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Polygon',
                pronouns: 'They',
                gender: 'Non-Binary',
                sexuality: 'Bisexual',
                aliases: 'Polyne',
                extra: '',
                refsheet: 'images/r/lyne-r.png',
                gallery: [
                    'images/c/lyne-c.png',
                    'images/c/lyne-c2.png',
                ],

                image: 'images/i/lyne-i.png',
            },
            {
                cardId: 'cupid',
                title: 'Cupid',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Polygon',
                pronouns: 'They',
                gender: 'Non-Binary',
                sexuality: 'Pansexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/cupid-c.png',
                ],

                image: 'images/i/cupid-i.png',
            },
            {
                cardId: 'kasi',
                title: 'Kasi',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Polygon',
                pronouns: 'They',
                gender: 'Non-Binary',
                sexuality: 'Bisexual',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/kasi-c.png',
                ],

                image: 'images/i/kasi-i.png',
            },
            {
                cardId: 'amari',
                title: 'Amari',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Goat',
                pronouns: 'She',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: '',
                characterAttrs: {
                    'Realm Origin': '<a data-open-card="deltadim">Deltadim</a>',
                },
                relatives: [
                    {
                        cardId: 'deltadim-teksui:artigoat',
                        relation: 'Brother'
                    }
                ],
                extra: '',
                refsheet: 'images/r/amari-r.png',
                gallery: [],

                image: 'images/i/amari-i.png',
            },
        ]
    },



    {
        // Nadir
        title: 'Nadir',
        menuId: 'nadir',
        subtitle: 'Void of Nadir',
        image: 'icons/nadir.png',
        color: 'var(--color-6)',
        gridColor: 'var(--color-6)',
        gridColor2: 'var(--accent2)',
        gridOpacity: 0.1,
        orbit: 1,
        cards: [
            {
                cardId: 'info',
                title: 'Info',
                subtitle: 'About Nadir',
                banner: true,
                detail:
                    `Nadir can be seen as the inverse of Hizen. While often portrayed as hell, it isn’t fiery or chaotic. Instead, it’s quiet, dark, and dreadfully still, as though watched by an omnipresent gaze. Anything that enters this void slowly desaturates and decays as its essence of life fades away.<br>
                    <h4>What's in this page</h4>
                    This page is a list of all Fyberverse characters located in Nadir. This include character information, reference art, and picture gallery of each character.<br>`,
                image: 'icons/nadir.png'
            },
            {
                cardId: 'artinihil',
                title: 'Artinihil',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Unknown',
                pronouns: 'She/It',
                gender: 'Female',
                sexuality: 'Bisexual',
                aliases: 'Nihil',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/artinihil-c2.png',
                    'images/c/artinihil-c.png',
                ],
                relatives: [
                ],

                image: 'images/i/artinihil-i.png',
            },
            {
                cardId: 'infineko',
                title: 'Infineko',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Infinity Symbol',
                pronouns: 'He/Any',
                gender: 'None',
                sexuality: 'None',
                aliases: '∞',
                extra: '',
                refsheet: 'images/r/infineko-r.png',
                gallery: [],

                image: 'images/i/infineko-i.png',
            },
            {
                cardId: 'ugo',
                title: 'Ugo',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: 'Vortex',
                pronouns: 'He',
                gender: 'Male',
                sexuality: 'Gay',
                aliases: '',
                extra: '',
                refsheet: 'images/r/ugo-r.png',
                gallery: [],
                relatives: [
                ],

                image: 'images/i/ugo-i.png',
            },
            {
                cardId: 'unknown',
                title: '???',
                subtitle: '',
                detail: '',

                isCharacter: true,
                species: '???',
                pronouns: '???',
                gender: '???',
                sexuality: '???',
                aliases: '',
                extra: '',
                refsheet: '',
                gallery: [
                    'images/c/Δ-c2.png',
                    'images/c/Δ-c.png',
                    'images/c/Δ-c3.png',
                ],

                image: 'images/i/Δ-i.png',
            },
        ]
    },



    {
        title: 'Daily Art+',
        showTitle: true,
        hidden: true,
        menuId: 'dailyartplus',
        subtitle: '',
        image: 'icons/dailyartplus.png',
        color: 'var(--color-8)',
        orbit: 3,
        scale: 1.5,
        html:
            `
            <div id=snapshotViewer></div>
            <!--
            <div id="instaCard">
                <iframe
                    src="https://cdn.lightwidget.com/widgets/ce1b2c5863eb58798710d296e980a26c.html"
                    scrolling="no"
                    allowtransparency="true"
                    class="lightwidget-widget"
                    style="width:100%;border:0;overflow:hidden;">
                </iframe>
            </div>
            -->
            `,
        noMargin: true,
    },


    {
        title: 'Converters',
        showTitle: true,
        hidden: true,
        menuId: 'converters',
        subtitle: '',
        image: 'icons/converters.png',
        color: 'var(--color-13)',
        orbit: 3,
        scale: 1.5,
        cards: [
            {
                cardId: 'genotheta',
                title: 'Genotheta',
                subtitle: 'Convert Latin to Genotheta',
                semibanner: true,
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/GENOTHETAEX.ttf" target="_blank">Download Genotheta Font</a><br>
                    <h2>Latin to Genotheta</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="genothetaInput" rows="2" style="width:100%;"></textarea>
                    </div>
                    <br>
                    Genotheta output
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutput" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    Genotheta output (Base-32 Numbering)
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutputEx" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyGenothetaBtn" type="button">Copy raw output</button> - for use with Genotheta font<br>
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutputRaw" rows="2" style="width:100%;"></textarea> 
                    </div>

                    <br><br><hr>
                    
                    <h2>Genotheta to Latin</h2>
                    Genotheta input
                    <div style="margin-top:10px;">
                        <textarea id="genothetaInputRev" class="genotheta" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyGenothetaRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="genothetaOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap genothetaKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap genothetaKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap genothetaKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="A">A</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="B">B</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="C">C</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="D">D</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="E">E</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="F">F</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="G">G</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="H">H</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="I">I</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="J">J</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="K">K</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="L">L</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="M">M</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="N">N</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="O">O</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="P">P</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="R">R</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="S">S</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="T">T</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="U">U</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="V">V</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="W">W</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="X">X</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="Z">Z</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="TH">TH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="SH">SH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="CH">CH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="PH">PH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="GH">GH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="NG">NG</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="CK">CK</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="QU">QU</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="WH">WH</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="WR">WR</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="KN">KN</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="NY">NY</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="TS">TS</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="PS">PS</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="!">!</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="?">?</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key=".">.</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key=",">,</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="(">(</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key=")">)</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="+">+</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="-">-</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="=">=</button>
                        <button type="button" class="keycap genotheta genothetaKeys" data-key="/">/</button>
                    </div>
                    `,
                image: 'icons/genotheta.png'
            },
            {
                cardId: 'starstroke',
                title: 'Starstroke',
                subtitle: 'Convert Latin to Starstroke',
                semibanner: true,
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/starstroke.ttf" target="_blank">Download Starstroke Font</a><br><br>
                    <h2>Latin to Starstroke</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeInput" rows="4" style="width:100%;"></textarea>
                    </div>
                    <br>
                    Starstroke output
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeOutput" rows="4" style="width:100%;" readonly></textarea>
                    </div>

                    <br><br><hr>
                    
                    <h2>Starstroke to Latin</h2>
                    Starstroke input
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeInputRev" class="starstroke" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyStarstrokeRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="starstrokeOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap starstrokeKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap starstrokeKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap starstrokeKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="A">A</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="B">B</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="C">C</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="D">D</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="E">E</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="F">F</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="G">G</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="H">H</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="I">I</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="J">J</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="K">K</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="L">L</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="M">M</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="N">N</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="O">O</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="P">P</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="R">R</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="S">S</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="T">T</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="U">U</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="V">V</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="W">W</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="X">X</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap starstroke starstrokeKeys" data-key="Z">Z</button>
                    </div>
                    `,
                image: 'icons/starstroke.png'
            },
            {
                cardId: 'nadirune',
                title: 'NADIRUNE',
                subtitle: 'Convert Latin to NADIRUNE',
                semibanner: true,
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/NADIRUNE.ttf" target="_blank">Download NADIRUNE Font</a><br><br>
                    <h2>Latin to NADIRUNE</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneInput" rows="4" style="width:100%;"></textarea>
                    </div>
                    <br>
                    NADIRUNE output
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneOutput" rows="4" style="width:100%;" readonly></textarea>
                    </div>

                    <br><br><hr>

                    <h2>NADIRUNE to Latin</h2>
                    NADIRUNE input
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneInputRev" class="nadirune" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyNadiruneRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="nadiruneOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap nadiruneKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap nadiruneKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap nadiruneKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="A">A</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="B">B</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="C">C</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="D">D</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="E">E</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="F">F</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="G">G</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="H">H</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="I">I</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="J">J</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="K">K</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="L">L</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="M">M</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="N">N</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="O">O</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="P">P</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="R">R</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="S">S</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="T">T</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="U">U</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="V">V</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="W">W</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="X">X</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap nadirune nadiruneKeys" data-key="Z">Z</button>
                    </div>
                    `,
                image: 'icons/nadirune.png'
            },
            {
                cardId: 'zenpen',
                title: 'Zenpen',
                subtitle: 'Convert Latin to Zenpen',
                semibanner: true,
                detail:
                    `
                    <a href="https://artifyber.xyz/fonts/zenpen.ttf" target="_blank">Download Zenpen Font</a><br><br>
                    <h2>Latin to Zenpen</h2>
                    Latin input
                    <div style="margin-top:10px;">
                        <textarea id="zenpenInput" rows="4" style="width:100%;"></textarea>
                    </div>
                    <br>
                    Zenpen output
                    <div style="margin-top:10px;">
                        <textarea id="zenpenOutput" rows="4" style="width:100%;" readonly></textarea>
                    </div>

                    <br><br><hr>

                    <h2>Zenpen to Latin</h2>
                    Zenpen input
                    <div style="margin-top:10px;">
                        <textarea id="zenpenInputRev" class="zenpen" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <button id="copyZenpenRevBtn" type="button">Copy</button> -  latin output<br>
                    <div style="margin-top:10px;">
                        <textarea id="zenpenOutputRev" rows="2" style="width:100%;" readonly></textarea>
                    </div>
                    <br>
                    <div class="keyboardLayout" style="margin-top:10px;">
                        <button type="button" class="keycap zenpenKeys" data-key="DEL">DEL</button>
                        <button type="button" class="keycap zenpenKeys" data-key="CLR">CLR</button>
                        <button type="button" class="keycap zenpenKeys" data-key=" ">SPACE</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="A">A</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="B">B</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="C">C</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="D">D</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="E">E</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="F">F</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="G">G</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="H">H</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="I">I</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="J">J</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="K">K</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="L">L</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="M">M</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="N">N</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="O">O</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="P">P</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="Q">Q</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="R">R</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="S">S</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="T">T</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="U">U</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="V">V</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="W">W</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="X">X</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="Y">Y</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="Z">Z</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="0">0</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="1">1</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="2">2</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="3">3</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="4">4</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="5">5</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="6">6</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="7">7</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="8">8</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key="9">9</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key=".">.</button>
                        <button type="button" class="keycap zenpen zenpenKeys" data-key=",">,</button>
                    </div>
                    `,
                image: 'icons/zenpen.png'
            },
        ]
    },


    {
        // Links
        title: 'Links',
        menuId: 'links',
        subtitle: 'All links to my social media',
        showTitle: true,
        hidden: true,
        image: 'icons/earth.png',
        color: 'var(--color-9)',
        orbit: 5,
        scale: 1,
        cards: [
            {
                cardId: 'twitter',
                title: 'Twitter',
                subtitle: '',
                url: 'https://twitter.com/artifyber',
                image: 'icons/l-twitter.png'
            },
            {
                cardId: 'bluesky',
                title: 'BlueSky',
                subtitle: '',
                url: 'https://bsky.app/profile/artifyber.xyz',
                image: 'icons/l-bluesky.png'
            },
            {
                cardId: 'discord',
                title: 'Discord Server',
                subtitle: '',
                url: 'https://discord.gg/mvZT3ANvSS',
                image: 'icons/l-discord.png'
            },
            {
                cardId: 'instagram',
                title: 'Instagram',
                subtitle: '',
                url: 'https://instagram.com/artifyber',
                image: 'icons/l-instagram.png'
            },
            {
                cardId: 'youtube',
                title: 'YouTube',
                subtitle: '',
                url: 'https://youtube.com/@artifyber',
                image: 'icons/l-youtube.png'
            },
            {
                cardId: 'soundcloud',
                title: 'SoundCloud',
                subtitle: '',
                url: 'https://on.soundcloud.com/3V5Uz',
                image: 'icons/l-soundcloud.png'
            },
            {
                cardId: 'newgrounds',
                title: 'Newgrounds',
                subtitle: '',
                url: 'https://artifyber.newgrounds.com/',
                image: 'icons/l-newgrounds.png'
            },
            {
                cardId: 'spotify',
                title: 'Spotify Artist',
                subtitle: '',
                url: 'https://open.spotify.com/intl-id/artist/41B16M5LFJKcwUW3L75PVh',
                image: 'icons/l-spotify.png'
            },
            {
                cardId: 'bandcamp',
                title: 'Bandcamp',
                subtitle: '',
                url: 'https://artifyber.bandcamp.com',
                image: 'icons/l-bandcamp.png'
            },
            {
                cardId: 'carrd',
                title: 'Carrd',
                subtitle: 'Old website used for commission purpose',
                url: 'https://artifyber.carrd.co/',
                image: 'icons/l-carrd.png'
            },
            {
                cardId: 'toyhouse',
                title: 'Toyhouse',
                subtitle: '',
                url: 'https://toyhou.se/artifyber',
                image: 'icons/l-toyhouse.png'
            },
            {
                cardId: 'alts',
                title: 'Alternates',
                subtitle: 'All of my alternative accounts on various platforms',
                detail:
                    `Floriverse:<br>
                <a href="https://x.com/Floriverse" target="_blank">Twitter</a><br>
                <a href="https://bsky.app/profile/floriverse.artifyber.xyz" target="_blank">BlueSky</a><br>
                <br>
                Artibun:<br>
                <a href="https://bsky.app/profile/bunny.artifyber.xyz" target="_blank">BlueSky</a><br>
                <br>
                Articat:<br>
                <a href="https://x.com/articatty" target="_blank">Twitter</a><br>
                <br>
                Artyfiber:<br>
                <a href="https://x.com/artyfiber" target="_blank">Twitter</a><br>
                <a href="https://www.youtube.com/@artyfiber" target="_blank">YouTube</a><br>
                <br>
                `,
                image: 'icons/l-others.png'
            },
        ]
    },

    {
        // Commissions
        title: 'Commissions',
        menuId: 'comms',
        subtitle: 'Information about art/music commissions',
        showTitle: true,
        image: 'icons/dollar.png',
        color: 'var(--color-11)',
        orbit: 4,
        scale: 1.5,
        hidden: true,
        cards: [
            {
                cardId: 'kofi',
                title: 'Ko-Fi',
                subtitle: 'For a method of payment',
                url: 'https://ko-fi.com/artifyber',
                image: 'icons/comm-kofi.png'
            },
            {
                cardId: 'tos',
                title: 'Information and ToS',
                subtitle: 'Rules and how to commission',
                detail:
                    `
                    <h2>Before You Commission:</h2>     
                    <ul>
                    <li>To limit the number of commissions, my commissions are only open to <a href="https://ko-fi.com/artifyber/tiers" target="_blank">Ko-Fi members</a>. You'll need to be a member of any tier before commissioning me.</li><br>
                    <li>Please read the Terms of Service listed below. By commissioning me you acknowledge that you agree to my Terms of Service.</li><br>
                    </ul>
                    <hr>
                    <h2>Art Commission T.O.S</h2>
                    <ul>
                    <li>The customer understands they are paying for a digital commission, and will receive a digital file (e.g. JPG, PNG) of the commissioned artwork. Artworks are made using Ibis Paint and the customer will not receive any raw project file after the commission is complete. The customer will not receive any physical item in the mail from this purchase either.</li><br>
                    <li>Payment is upfront via Ko-Fi.</li><br>
                    <li>There is no limitation on character request. But keep in mind that I'm a primarily furry artist and i am more comfortable drawing species i'm interested in (cats, rabbits, dogs and foxes).</li><br>
                    <li>Please provide details and references beforehand as i may sometime not provide sketches or WIPs during the process. You can provide minor revision to the final product later.</li><br>
                    <li>By default the artwork size for icon commissions will be in 2048x2048 (1:1) while thigh-ups and full-bodies will be in 2000x2500 (4:5). Please specify beforehand for custom canvas size.</li><br>
                    <li>The estimated turnaround time is a day to 3 weeks.</li><br>
                    <li>If the commission is private, please let me know in advance and the name will be anonymous or if you prefer it not being posted to my socials.</li><br>
                    <li>The illustration should only be used in personal case. No commercial use allowed.</li><br>
                    <li>I do not allow my artworks to be fed into AI art generators or being used in any AI-related services. A copyright strike will be issued if this is violated.</li><br>
                    <li>You have the right to ask for a full refund only if the commission has not been started yet.</li><br>
                    <li>If you are interested send a DM on my Discord, which i only accept DM requests from if you are a Ko-Fi member.</li><br>
                    </ul>
                    <h4>What I'm willing to draw:</h4>
                    <ul>
                    <li>Any species that isn't too complex (Furries, humanoid, a selection of scalies)</li><br>
                    <li>Plants and flowers</li><br>
                    <li>Background or interior</li><br>
                    <li>Cosmic or space theme</li><br>
                    <li>Simple icons or logo</li><br>
                    </ul>
                    <h4>What I'm NOT willing to draw:</h4>
                    <ul>
                    <li>Mechas or complicated designs</li><br>
                    <li>Images intended to promote hate or bigotry</li><br>
                    </ul>
                    <hr>
                    <h2>Music Commission T.O.S</h2>
                    <ul>
                    <li>The customer understands they are paying for a digital file (e.g. MP3, WAV, FLAC, OGG) of the commissioned track. Music is made using FL Studio Mobile and the customer will not receive any raw project file after the commission is complete. The customer will not receive any physical item in the mail from this purchase either.</li><br>
                    <li>Payment is upfront via Paypal invoice or Ko-Fi.</li><br>
                    <li>Please provide details regarding the music. Such as the theme, BPM, genre, time signature, etc. I have flexibility on song genres but keep in mind that i'm more capable on composing the following: Chiptune, Breakcore, Hardcore, Techno, and Trance.</li><br>
                    <li>You may provide additional samples ONLY if you have the full rights with it. Samples must be in MP3, WAV, FLAC, or DWP file format.</li><br>
                    <li>You can request individual stems export or make the song looped (no extra charge required!)</li><br>
                    <li>I do not make remix, cover, or bootleg of already existing songs without the artist's consent. However i'm open on remaking my own songs.</li><br>
                    <li>I do not provide lyrics or vocal recording. If you want vocals, please provide the vocal recording yourself.</li><br>
                    <li>The estimated turnaround time is a week to a month depending on the complexity of the request.</li><br>
                    <li>Commissioned music will be posted to my SoundCloud account unless private. If the commission is private or you wish to not publish it, please let me know in advance.</li><br>
                    <li>Commissioned music can be used for personal purpose. Commercial use can be discussed.</li><br>
                    <li>I do not allow my music to be feed into AI music generators or being used in any AI-related services. A copyright strike will be issued if this is violated.</li><br>
                    <li>You have the right to ask for a full refund only if the commission has not been started yet.</li><br>
                    <li>Only for this type of commission, you'll have to contact me through Discord. This is necessary to keep file sharing easier (e.g. WIPs and samples). Please DM my <a href="https://x.com/artifyber" target="_blank">Twitter</a> to ask for a Discord DM request approval.</li><br>
                    </ul>
                    `,
                image: 'icons/comm-tos.png'
            },
            {
                cardId: 'art',
                title: 'Art Pricing',
                subtitle: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:tos">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
                    <hr>
                    <h2>Full-body</h2>
                    70 USD per character<br>
                    <div class="container">
                    <img src="images/comms/cfb-1.png"><br>
                    <img src="images/comms/cfb-2.png"><br>
                    <img src="images/comms/cfb-3.png"><br>
                    <img src="images/comms/cfb-4.png"><br>
                    <img src="images/comms/cfb-5.png"><br>
                    <img src="images/comms/cfb-6.png"><br>
                    </div>
                    <hr>
                    <h2>Thigh-up</h2>
                    50 USD per character<br>
                    <div class="container">
                    <img src="images/comms/ctu-1.png"><br>
                    <img src="images/comms/ctu-2.png"><br>
                    <img src="images/comms/ctu-3.png"><br>
                    <img src="images/comms/ctu-4.png"><br>
                    <img src="images/comms/ctu-5.png"><br>
                    <img src="images/comms/ctu-6.png"><br>
                    </div>
                    <hr>
                    <h2>Icon</h2>
                    30 USD per character<br>
                    <div class="container">
                    <img src="images/comms/ci-1.png"><br>
                    <img src="images/comms/ci-2.png"><br>
                    <img src="images/comms/ci-3.png"><br>
                    <img src="images/comms/ci-4.png"><br>
                    <img src="images/comms/ci-5.png"><br>
                    <img src="images/comms/ci-6.png"><br>
                    <img src="images/comms/ci-7.png"><br>
                    <img src="images/comms/ci-8.png"><br>
                    <img src="images/comms/ci-9.png"><br>
                    </div>
                    <hr>
                    <h2>Background</h2>
                    <h4>Simple / Geometric</h4>
                    Can also be transparent<br>
                    <ul>
                        <li>Free if included with character commission</li><br>
                        <li>10 USD if requested separately</li>
                    </ul>
                    <div class="container">
                    <img src="images/c/artibun-c2.png"><br>
                    <img src="images/c/artigoat-c4.png"><br>
                    <img src="images/c/micro-c.png"><br>
                    </div>
                    <h4>Nature</h4>
                    This include clouds and space-themed background<br>
                    <ul>
                        <li>+10 USD with character commission</li><br>
                        <li>15 USD if requested separately</li>
                    </ul>
                    <div class="container">
                    <img src="images/c/artigoat-c2.png"><br>
                    <img src="images/c/skitty-c3.png"><br>
                    <img src="images/c/furfy-c.png"><br>
                    </div>
                    <h4>Many objects</h4>
                    Cityscapes, interior, etc.<br>
                    <ul>
                        <li>+30 USD with character commission</li><br>
                        <li>40 USD if requested separately</li>
                    </ul>
                    <div class="container">
                    <img src="images/c/artifox-c4.png"><br>
                    <img src="images/c/eros-c2.png"><br>
                    <img src="images/c/articat-c5.png"><br>
                    </div>
                    `,
                image: 'icons/comm-art.png'
            },
            {
                cardId: 'music',
                title: 'Music Pricing',
                subtitle: 'With examples',
                detail:
                    `
                    <h2><i>PLEASE READ MY <a data-open-card="comms:tos">T.O.S</a> BEFORE COMMISIONING ME.</i></h2>
                    <hr>
                    <h2>Range A = 50 USD per minute</h2>
                    Simple beat, minimal layers, genre examples: chiptune, elevator music, ambient, lo-fi, minimal techno.<br><br>
                    Examples can be found <a href="https://open.spotify.com/playlist/3wtxIb4LLp4Al9qo5Y7Qej?si=d25510f196a8434f" target="_blank">here</a>.<br>
                    <h2>Range B = 90 USD per minute</h2>
                    More complex beat, uplifting, more layers, genre examples: breakcore, hardcore, "FNF Song", speedjazz.<br><br>
                    Examples can be found <a href="https://open.spotify.com/playlist/6XvHXXXsP9xMYFx9TcW9WQ?si=b6e13dc2629646f7" target="_blank">here</a>.<br>
                    `,
                image: 'icons/comm-music.png'
            },
            {
                cardId: 'adult',
                title: '18+ Commissions',
                subtitle: '',
                detail:
                    `<br><h1 style="font-size: 120px; transform: rotate(-10deg); text-align: center;">NOPE!</h1><br><br>
                    Sorry! I don't do 18+ commissions. Were you expecting something? LOL
                    `,
                image: 'icons/comm-18.png'
            },
        ]
    },



    {
        // Random
        title: 'Random Character',
        menuId: 'random',
        hidden: true,
        showTitle: true,
        image: 'icons/oc-random.png',
        color: 'var(--color-12)',
        orbit: 3,
        scale: 1.5,
        invisible: true,
        cards: [
            {
                cardId: 'random',
            }
        ],
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
        cards: [
            {
                cardId: 'audioSettings',
                title: `Audio`,
                subtitle: `
                        <br>
                        <button type="button" id="toggleSFX">SFX: Off</button><br>
                        <button type="button" id="toggleMusic">Enable Music</button>
                `,
                unclickable: true,
                semibanner: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'modeSwitch',
                title: `Layout`,
                subtitle: `
                        <br>
                        <button type="button" id="modeSwitch">Switch Layout</button>
                `,
                unclickable: true,
                semibanner: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'keybinds',
                title: `Keyboard Shortcut`,
                subtitle: `
                        <br>
                        ESC = Go back<br>
                        SPACE = Open search<br>
                        C = Center view<br>
                `,
                unclickable: true,
                semibanner: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'webinfo',
                title: `Website Info`,
                subtitle: `
                        <br>
                        Updated: ${lastUpdated}<br>
                        Version: ${version}<br>
                        <br>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCardsCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalMenusCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCharacterCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalSplashCounter"></div>
                `,
                unclickable: true,
                semibanner: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'credits',
                title: `Credits`,
                subtitle: `
                        <br>
                        Developed by:<br>
                        Artifyber<br>
                        <br>
                        Special thanks:<br>
                        Azka "Artist" Zavian
                `,
                unclickable: true,
                banner: true,
                detail:
                    ``,
                image: ''
            },
            {
                title: 'Developer Section',
            },
            {
                linkId: 'menuTemplate',
                banner: true,
            },
        ]
    },

    // Misc
    {
        title: 'Whitespace',
        menuId: 'yolkspocketdimension',
        subtitle: '',
        image: '',
        color: 'var(--color-10)',
        orbit: 127,
        scale: 0.5,
        invisible: true,
        cards: [
            {
                cardId: 'blank',
                title: ' ',
                subtitle: '',
                detail:
                    ``,
                image: 'icons/whitespace.png',
            },
        ]
    },
];

// Beecat
if (Math.floor(Math.random() * 333) == 0) {
    menuItems.forEach(menu => {
        if (menu.menuId == "info") {
            menu.cards.push({
                cardId: 'beecat',
                title: 'Beecat!?',
                subtitle: 'Beecat',
                detail: `It's a bee!<br>It's a cat!<br>It's a beecat!<br>And it's spinning!<br>But why is it spinning?<br><br>
                Character by <a href="https://x.com/ZestyLemonss" target="_blank">ZestyLemonss</a><br><br>
                <img src="images/beecatspin.gif" data-caption="Beecat" data-subcaption="beecatspin.gif" style="width: 100%">`,
                image: 'images/beecatspin.gif',
                banner: true
            });
        }
    });
}



/*
 * Generate placeholder cards for testing
 * @param {number} n - Number of placeholder cards to generate
 * @param {string} prefix - Prefix for card titles
 * @returns {Array} Array of placeholder card objects
 */
function generateCards(n, prefix) {
    return Array.from({ length: n }).map((_, i) => ({
        id: i + 1,
        title: `${prefix} Item ${i + 1}`,
        subtitle: `This is a short placeholder excerpt for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }));
}

// Special search responses
specialSearch = [
    {
        query: 'nothing',
        title: 'Nothing found!',
        subtitle: ''
    },
    {
        query: 'something',
        title: 'Something found!',
        subtitle: `...It's just me LOL<br>
        My name is omniLens btw! You've probably met my brother omniTracer! He's such a powerful guy...<br>
        Lowkey i'm kinda jealous of him. I wish to be as powerful as him one day :(`
    },
    {
        query: 'content',
        title: 'Content found!',
        subtitle: `Yup, i am the content. You've found me heehee!<br>
        Aww you listened to what i said!<br>
        Good boy :)`
    },
    {
        query: 'help',
        title: 'help yourself bro LOLXD',
        subtitle: ''
    },
    {
        query: 'hi',
        title: 'HAII HIIII HELLLOOO!!!! :DD',
        subtitle: ''
    },
    {
        query: 'hello',
        title: 'HAII HIIII HELLLOOO!!!! :DD',
        subtitle: ''
    },
    {
        query: 'how are you',
        title: `I'M GOOD!!!!!! thx 4 asking!! <3<3<3`,
        subtitle: ''
    },
    {
        query: 'hru',
        title: `I'M GOOD!!!!!! thx 4 asking!! <3<3<3`,
        subtitle: ''
    },
];


const snapshots = [
    {
        num: 274,
        title: "Quick Articat drawing",
        embed: "images/snapshots/274.png"
    },
    {
        num: 273,
        title: "Articuber",
        embed: "images/snapshots/273.png"
    },
    {
        num: 272,
        title: "Earmuffs",
        embed: "images/snapshots/272.png"
    },
    {
        num: 271,
        title: "Warmers",
        embed: "images/snapshots/271.png"
    },
    {
        num: 270,
        title: "Kitty cookie",
        embed: "images/snapshots/270.png"
    },
    {
        num: 269,
        title: "Cardboard bun",
        embed: "images/snapshots/269.png"
    },
    {
        num: 268,
        title: "PATPATPATPATPATPATPAT",
        embed: "images/snapshots/268.png"
    },
    {
        num: 267,
        title: "Apple fritters",
        embed: "images/snapshots/267.png"
    },
    {
        num: 266,
        title: "Solitude",
        embed: "images/snapshots/266.png"
    },
    {
        num: 265,
        title: "Paw gloves",
        embed: "images/snapshots/265.png"
    },
    {
        num: 264,
        title: "📱",
        embed: "images/snapshots/264.png"
    },
    {
        num: 263,
        title: "emoticons",
        embed: "images/snapshots/263.mp4"
    },
    {
        num: 262,
        title: "This is fine...",
        embed: "images/snapshots/262.png"
    },
    {
        num: 261,
        title: "Fractures 💠",
        embed: "images/snapshots/261.png"
    },
    {
        num: 260,
        title: "Fluffier! ⬆️",
        embed: "images/snapshots/260.png"
    },
    {
        num: 259,
        title: "🥕🥕🥕",
        embed: "images/snapshots/259.png"
    },
    {
        num: 258,
        title: "Lemons",
        embed: "images/snapshots/258.png"
    },
    {
        num: 257,
        title: "Zesty",
        embed: "images/snapshots/257.png"
    },
    {
        num: 256,
        title: "Headshot",
        embed: "images/snapshots/256.png"
    },
    {
        num: 255,
        title: "Grassfield",
        embed: "images/snapshots/255.png"
    },
    {
        num: 254,
        title: "Petals",
        embed: "images/snapshots/254.png"
    },
    {
        num: 253,
        title: "Pawesome!",
        embed: "images/snapshots/253.png"
    },
    {
        num: 252,
        title: "Eyestrain chaos",
        embed: "images/snapshots/252.png"
    },
    {
        num: 251,
        title: "KATAMAR(T)I",
        embed: "images/snapshots/251.png"
    },
    {
        num: 250,
        title: "Cotton Candy Clouds",
        embed: "images/snapshots/250.png"
    },
    {
        num: 249,
        title: "Blocky buildings",
        embed: "images/snapshots/249.png"
    },
    {
        num: 248,
        title: "A(rti)rray",
        embed: "images/snapshots/248.png"
    },
    {
        num: 247,
        title: "Dreamer",
        embed: "images/snapshots/247.png"
    },
    {
        num: 246,
        title: "Interplanetary",
        embed: "images/snapshots/246.png"
    },
    {
        num: 245,
        title: "One really big hug",
        embed: "images/snapshots/245.png"
    },
    {
        num: 244,
        title: "Massive",
        embed: "images/snapshots/244.png"
    },
    {
        num: 243,
        title: "Tiny",
        embed: "images/snapshots/243.png"
    },
    {
        num: 242,
        title: "So queer, bunny",
        embed: "images/snapshots/242.png"
    },
    {
        num: 241,
        title: "Upside down",
        embed: "images/snapshots/241.png"
    },
    {
        num: 240,
        title: "Window",
        embed: "images/snapshots/240.png"
    },
    {
        num: 239,
        title: "doodles",
        embed: "images/snapshots/239.png"
    },
    {
        num: 238,
        title: "Magazine cover",
        embed: "images/snapshots/238.png"
    },
    {
        num: 237,
        title: "Grilled cheese",
        embed: "images/snapshots/237.png"
    },
    {
        num: 236,
        title: "Long scarf",
        embed: "images/snapshots/236.png"
    },
    {
        num: 235,
        title: "Looking at yourselves",
        embed: "images/snapshots/235.png"
    },
    {
        num: 234,
        title: "Ear shapes",
        embed: "images/snapshots/234.png"
    },
    {
        num: 233,
        title: "Wires and thingamajigs",
        embed: "images/snapshots/233.png"
    },
    {
        num: 232,
        title: "hey",
        embed: "images/snapshots/232.png"
    },
    {
        num: 231,
        title: "Sharp-textured stuff",
        embed: "images/snapshots/231.png"
    },
    {
        num: 230,
        title: "Ribbons",
        embed: "images/snapshots/230.png"
    },
    {
        num: 229,
        title: "Frames",
        embed: "images/snapshots/229.png"
    },
    {
        num: 228,
        title: "🌌🌳🟪",
        embed: "images/snapshots/228.png"
    },
    {
        num: 227,
        title: "background test",
        embed: "images/snapshots/227.png"
    },
    {
        num: 226,
        title: "Duet",
        embed: "images/snapshots/226.png"
    },
    {
        num: 225,
        title: "so snuggly",
        embed: "images/snapshots/225.png"
    },
    {
        num: 224,
        title: "Nyan-Arti!",
        embed: "images/snapshots/224.png"
    },
    {
        num: 223,
        title: "so soft",
        embed: "images/snapshots/223.png"
    },
    {
        num: 222,
        title: "0000FF",
        embed: "images/snapshots/222.png"
    },
    {
        num: 221,
        title: "00FF00",
        embed: "images/snapshots/221.png"
    },
    {
        num: 220,
        title: "FF0000",
        embed: "images/snapshots/220.png"
    },
    {
        num: 219,
        title: "doodle",
        embed: "images/snapshots/219.png"
    },
    {
        num: 218,
        title: "Learning each other's language",
        embed: "images/snapshots/218.png"
    },
    {
        num: 217,
        title: "Hue",
        embed: "images/snapshots/217.png"
    },
    {
        num: 216,
        title: "Trans drip",
        embed: "images/snapshots/216.png"
    },
    {
        num: 215,
        title: "Bigender drip",
        embed: "images/snapshots/215.png"
    },
    {
        num: 214,
        title: "Grab",
        embed: "images/snapshots/214.png"
    },
    {
        num: 213,
        title: "Feeling pink ^_^",
        embed: "images/snapshots/213.png"
    },
    {
        num: 212,
        title: "Frame 3",
        embed: "images/snapshots/212.png"
    },
    {
        num: 211,
        title: "Frame 2",
        embed: "images/snapshots/211.png"
    },
    {
        num: 210,
        title: "Frame",
        embed: "images/snapshots/210.png"
    },
    {
        num: 209,
        title: "Lost",
        embed: "images/snapshots/209.png"
    },
    {
        num: 208,
        title: "Phone call",
        embed: "images/snapshots/208.png"
    },
    {
        num: 207,
        title: "BRAIN FREEZE",
        embed: "images/snapshots/207.png"
    },
    {
        num: 206,
        title: "Ice cream",
        embed: "images/snapshots/206.png"
    },
    {
        num: 205,
        title: "Vertical sketchpage!",
        embed: "images/snapshots/205.png"
    },
    {
        num: 204,
        title: "doodle",
        embed: "images/snapshots/204.png"
    },
    {
        num: 203,
        title: "🌿",
        embed: "images/snapshots/203.png"
    },
    {
        num: 202,
        title: "🟪🟥🟧🟨🟩🟦",
        embed: "images/snapshots/202.png"
    },
    {
        num: 201,
        title: "Random",
        embed: "images/snapshots/201.png"
    },
    {
        num: 200,
        title: "/̊͆̋/͑͡͞/ͣͫ̀/ͬ̅ͯ҉̺̙͢/̈́̓̉/̏̈//",
        embed: "images/snapshots/200.png"
    },
    {
        num: 199,
        title: "this",
        embed: "images/snapshots/199.png"
    },
    {
        num: 198,
        title: "dots dots dots",
        embed: "images/snapshots/198.png"
    },
    {
        num: 197,
        title: "MELONS",
        embed: "images/snapshots/197.png"
    },
    {
        num: 196,
        title: "Rain",
        embed: "images/snapshots/196.mp4"
    },
    {
        num: 195,
        title: "Squish",
        embed: "images/snapshots/195.png"
    },
    {
        num: 194,
        title: "Funky colors",
        embed: "images/snapshots/194.png"
    },
    {
        num: 193,
        title: "stop thinking",
        embed: "images/snapshots/193.png"
    },
    {
        num: 192,
        title: "👁️👁️👁️",
        embed: "images/snapshots/192.png"
    },
    {
        num: 191,
        title: "RAWR!",
        embed: "images/snapshots/191.png"
    },
    {
        num: 190,
        title: "Keyboard",
        embed: "images/snapshots/190.png"
    },
    {
        num: 189,
        title: "Daydreamer",
        embed: "images/snapshots/189.png"
    },
    {
        num: 188,
        title: "Something simple",
        embed: "images/snapshots/188.png"
    },
    {
        num: 187,
        title: "I DON'T KNOW! I'M STUPID AND GAY!",
        embed: "images/snapshots/187.png"
    },
    {
        num: 186,
        title: "Icosahedron",
        embed: "images/snapshots/186.png"
    },
    {
        num: 185,
        title: "Calm down",
        embed: "images/snapshots/185.png"
    },
    {
        num: 184,
        title: "Tiny partner",
        embed: "images/snapshots/184.png"
    },
    {
        num: 183,
        title: "Ears",
        embed: "images/snapshots/183.png"
    },
    {
        num: 182,
        title: "💥",
        embed: "images/snapshots/182.png"
    },
    {
        num: 181,
        title: "🌹",
        embed: "images/snapshots/181.png"
    },
    {
        num: 180,
        title: "🤖",
        embed: "images/snapshots/180.png"
    },
    {
        num: 179,
        title: "☂️",
        embed: "images/snapshots/179.png"
    },
    {
        num: 178,
        title: "🩷",
        embed: "images/snapshots/178.png"
    },
    {
        num: 177,
        title: "🍃",
        embed: "images/snapshots/177.png"
    },
    {
        num: 176,
        title: "🌸",
        embed: "images/snapshots/176.png"
    },
    {
        num: 175,
        title: "🪐",
        embed: "images/snapshots/175.png"
    },
    {
        num: 174,
        title: "🔳",
        embed: "images/snapshots/174.png"
    },
    {
        num: 173,
        title: "🧡",
        embed: "images/snapshots/173.png"
    },
    {
        num: 172,
        title: "▶️",
        embed: "images/snapshots/172.png"
    },
    {
        num: 171,
        title: "🌟",
        embed: "images/snapshots/171.png"
    },
    {
        num: 170,
        title: "🌷",
        embed: "images/snapshots/170.png"
    },
    {
        num: 169,
        title: "🖥️",
        embed: "images/snapshots/169.png"
    },
    {
        num: 168,
        title: "📁",
        embed: "images/snapshots/168.png"
    },
    {
        num: 167,
        title: "🚶",
        embed: "images/snapshots/167.png"
    },
    {
        num: 166,
        title: "🌕",
        embed: "images/snapshots/166.png"
    },
    {
        num: 165,
        title: "💐",
        embed: "images/snapshots/165.png"
    },
    {
        num: 164,
        title: "🧋",
        embed: "images/snapshots/164.png"
    },
    {
        num: 163,
        title: "🌅",
        embed: "images/snapshots/163.png"
    },
    {
        num: 162,
        title: "🌐",
        embed: "images/snapshots/162.png"
    },
    {
        num: 161,
        title: "🔌",
        embed: "images/snapshots/161.png"
    },
    {
        num: 160,
        title: "☁️",
        embed: "images/snapshots/160.png"
    },
    {
        num: 159,
        title: "〰️",
        embed: "images/snapshots/159.png"
    },
    {
        num: 158,
        title: "📺",
        embed: "images/snapshots/158.png"
    },
    {
        num: 157,
        title: "🥤",
        embed: "images/snapshots/157.png"
    },
    {
        num: 156,
        title: "🏙️",
        embed: "images/snapshots/156.png"
    },
    {
        num: 155,
        title: "🌄",
        embed: "images/snapshots/155.png"
    },
    {
        num: 154,
        title: "⛸️",
        embed: "images/snapshots/154.png"
    },
    {
        num: 153,
        title: "🌈",
        embed: "images/snapshots/153.png"
    },
    {
        num: 152,
        title: "Circular",
        embed: "images/snapshots/152.png"
    },
    {
        num: 151,
        title: "Windy day",
        embed: "images/snapshots/151.png"
    },
    {
        num: 150,
        title: "Brown",
        embed: "images/snapshots/150.png"
    },
    {
        num: 149,
        title: "BLEED",
        embed: "images/snapshots/149.png"
    },
    {
        num: 148,
        title: "WHATEVER",
        embed: "images/snapshots/148.png"
    },
    {
        num: 147,
        title: "Unfused",
        embed: "images/snapshots/147.png"
    },
    {
        num: 146,
        title: "Sona stack",
        embed: "images/snapshots/146.png"
    },
    {
        num: 145,
        title: "i have no time to think of an interesting title for this one",
        embed: "images/snapshots/145.png"
    },
    {
        num: 144,
        title: "Egg curry",
        embed: "images/snapshots/144.png"
    },
    {
        num: 143,
        title: "What? Is there anything wrong?",
        embed: "images/snapshots/143.png"
    },
    {
        num: 142,
        title: "Just chilling",
        embed: "images/snapshots/142.png"
    },
    {
        num: 141,
        title: "Dark mode",
        embed: "images/snapshots/141.png"
    },
    {
        num: 140,
        title: "Glow",
        embed: "images/snapshots/140.png"
    },
    {
        num: 139,
        title: "✨🏳️‍⚧️🌤️",
        embed: "images/snapshots/139.png"
    },
    {
        num: 138,
        title: "Purple-flavored",
        embed: "images/snapshots/138.png"
    },
    {
        num: 137,
        title: "Neon",
        embed: "images/snapshots/137.png"
    },
    {
        num: 136,
        title: "plushies",
        embed: "images/snapshots/136.png"
    },
    {
        num: 135,
        title: "crazy in pink",
        embed: "images/snapshots/135.png"
    },
    {
        num: 134,
        title: "🟥🟩🟦",
        embed: "images/snapshots/134.png"
    },
    {
        num: 133,
        title: "meh",
        embed: "images/snapshots/133.png"
    },
    {
        num: 132,
        title: "ARTIBUN",
        embed: "images/snapshots/132.mp4"
    },
    {
        num: 131,
        title: "Precipice",
        embed: "images/snapshots/131.png"
    },
    {
        num: 130,
        title: ">ω<",
        embed: "images/snapshots/130.png"
    },
    {
        num: 129,
        title: "a little too small",
        embed: "images/snapshots/129.png"
    },
    {
        num: 128,
        title: "a little too big",
        embed: "images/snapshots/128.png"
    },
    {
        num: 127,
        title: "big tail",
        embed: "images/snapshots/127.png"
    },
    {
        num: 126,
        title: "Micro",
        embed: "images/snapshots/126.png"
    },
    {
        num: 125,
        title: "NICE CROPPING",
        embed: "images/snapshots/125.png"
    },
    {
        num: 124,
        title: "Pixel Sparkles ✨",
        embed: "images/snapshots/124.png"
    },
    {
        num: 123,
        title: "Laser Pointer",
        embed: "images/snapshots/123.png"
    },
    {
        num: 122,
        title: "Blurple",
        embed: "images/snapshots/122.png"
    },
    {
        num: 121,
        title: "no thoughts. head in the clouds.",
        embed: "images/snapshots/121.png"
    },
    {
        num: 120,
        title: "uughhhhshjdsiodzmxzkzl...,.,.,",
        embed: "images/snapshots/120.png"
    },
    {
        num: 119,
        title: "all & null",
        embed: "images/snapshots/119.png"
    },
    {
        num: 118,
        title: "Doodling around",
        embed: "images/snapshots/118.png"
    },
    {
        num: 117,
        title: "wheeeeeeee!!!",
        embed: "images/snapshots/117.png"
    },
    {
        num: 116,
        title: "ラグトレイン",
        embed: "images/snapshots/116.png"
    },
    {
        num: 115,
        title: "BOOT LOADER",
        embed: "images/snapshots/115.png"
    },
    {
        num: 114,
        title: "Funny Colors",
        embed: "images/snapshots/114.png"
    },
    {
        num: 113,
        title: "Artiproto",
        embed: "images/snapshots/113.png"
    },
    {
        num: 112,
        title: "Spaced Out",
        embed: "images/snapshots/112.png"
    },
    {
        num: 111,
        title: "Cornered",
        embed: "images/snapshots/111.png"
    },
    {
        num: 110,
        title: "Feral",
        embed: "images/snapshots/110.png"
    },
    {
        num: 109,
        title: "Bunny²",
        embed: "images/snapshots/109.png"
    },
    {
        num: 108,
        title: "Otherside",
        embed: "images/snapshots/108.png"
    },
    {
        num: 107,
        title: "Lollipop",
        embed: "images/snapshots/107.png"
    },
    {
        num: 106,
        title: "🎈",
        embed: "images/snapshots/106.png"
    },
    {
        num: 105,
        title: "Gray",
        embed: "images/snapshots/105.png"
    },
    {
        num: 104,
        title: "Pink",
        embed: "images/snapshots/104.png"
    },
    {
        num: 103,
        title: "Purple",
        embed: "images/snapshots/103.png"
    },
    {
        num: 102,
        title: "Blue",
        embed: "images/snapshots/102.png"
    },
    {
        num: 101,
        title: "Green",
        embed: "images/snapshots/101.png"
    },
]

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.cards?.length, 0);
totalCharacters = menuItems.reduce((sum, item) => sum + item.cards?.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;

if (typeof module !== "undefined") {
    module.exports = {
        lastUpdated,
        version,
        menuLogoRedirect,
        orbitData,
        menuItems,
        specialSearch,
    };
}

// Helper function to add internal cards
function internalCard({
    href,
    caption = "",
    banner = false,
    title,
    subtitle,
    unclickable = false,
}) {

    const attrs = [
        `class="card internal"`,
        `data-href="${href}"`
    ];

    if (caption) attrs.push(`data-caption="${caption}"`);
    if (banner) attrs.push(`data-is-banner="true"`);
    if (title) attrs.push(`data-override-title="${title}"`);
    if (subtitle) attrs.push(`data-override-subtitle="${subtitle}"`);
    if (unclickable) attrs.push(`data-is-unclickable="true"`);

    return `<div ${attrs.join(" ")}></div>`;
}


function exportJSON() {
    const masterjson = {};
    masterjson.lastUpdated = lastUpdated;
    masterjson.version = version;
    masterjson.menuLogoRedirect = menuLogoRedirect;
    masterjson.orbitData = orbitData;
    masterjson.menuItems = menuItems;
    masterjson.specialSearch = specialSearch;

    return JSON.stringify(masterjson);
}