// DOM Elements
const colorButtons = document.querySelectorAll('.color-btn');
const customColorInput = document.getElementById('customColor');
const colorValueDisplay = document.getElementById('colorValue');
const applyCustomBtn = document.getElementById('applyCustom');
const resetBtn = document.getElementById('reset');

// Update color value display
customColorInput.addEventListener('input', () => {
    colorValueDisplay.textContent = customColorInput.value.toUpperCase();
});

// Function to change background color
function changeBackgroundColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: setBackgroundColor,
            args: [color]
        });
    });
}

// Function that runs in the tab's context
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.body.style.transition = 'background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
}

// Add click listeners to preset color buttons
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        changeBackgroundColor(color);
        
        // Visual feedback
        button.style.borderColor = '#58A6FF';
        setTimeout(() => {
            button.style.borderColor = '';
        }, 500);
    });
});

// Apply custom color
applyCustomBtn.addEventListener('click', () => {
    const customColor = customColorInput.value;
    changeBackgroundColor(customColor);
});

// Reset to white
resetBtn.addEventListener('click', () => {
    changeBackgroundColor('#FFFFFF');
    customColorInput.value = '#1A1A2E';
    colorValueDisplay.textContent = '#1A1A2E';
});

// Allow pressing Enter in custom color input
customColorInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        applyCustomBtn.click();
    }
});
