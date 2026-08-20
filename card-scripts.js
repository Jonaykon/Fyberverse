/* --------------------------
    Settings
    -------------------------- */

// toggle sounds
async function toggleSFXVol() {
    if (!sfxIsMute) {
        toggleSFX.textContent = "SFX: Off";
        disableSfx();
    } else {
        toggleSFX.textContent = "SFX: On";
        enableSfx();
    }
}

function toggleBGM() {
    if (bgmEnabled) {
        if (!bgmStop) {
            toggleMusic.textContent = "Music: Off";
            muteBgm();
        } else {
            toggleMusic.textContent = "Music: On";
            unmuteBgm();
        }
    } else {
        toggleMusic.textContent = "Music: On";
        startAllBgm();
    }
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'toggleSFX') {
        e.preventDefault();
        toggleSFXVol();
    }

    if (e.target.id === 'toggleMusic') {
        e.preventDefault();
        toggleBGM();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'modeSwitch') {
        e.preventDefault();
        console.log('Mode Switch clicked');
        toggleViewMode();
    }

    if (e.target.id === 'transitionsSwitch') {
        e.preventDefault();
        console.log('Transitions Switch clicked');
        toggleTransitionsMode();
    }
});


// Helper function to update button text in menuItems
function updateSettingsButtonText(buttonId, newText) {
    const settingsMenu = menuItems.find(m => m.menuId === 'settings');
    if (!settingsMenu) return;
    
    const audioSettingsLabel = settingsMenu.cards.find(l => l.cardId === 'audioSettings');
    if (!audioSettingsLabel) return;
    
    if (buttonId === 'toggleSFX') {
        audioSettingsLabel.subtitle = audioSettingsLabel.subtitle.replace(
            /<button[^>]*id="toggleSFX"[^>]*>.*?<\/button>/,
            `<button type="button" id="toggleSFX">${newText}</button>`
        );
    } else if (buttonId === 'toggleMusic') {
        audioSettingsLabel.subtitle = audioSettingsLabel.subtitle.replace(
            /<button[^>]*id="toggleMusic"[^>]*>.*?<\/button>/,
            `<button type="button" id="toggleMusic">${newText}</button>`
        );
    }
}


// init card scripts
function cardScriptHandler(menu, label) {
}