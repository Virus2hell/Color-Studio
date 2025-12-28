# Color Studio 🎨

A sleek Chrome extension that instantly changes any webpage's background color with a professional dark-mode UI.

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Chrome](https://img.shields.io/badge/Chrome-MV3-orange.svg)

## ✨ Features

- 🎨 **8 Color Presets** - Navy, Deep Blue, Ocean, Purple, Charcoal, Royal Blue, Forest Green, Graphite
- 🖌️ **Custom Color Picker** - Choose any color with live hex display
- 🌙 **Dark Mode UI** - Modern, minimal design with smooth animations
- ⚡ **Instant Application** - Changes apply instantly to any webpage
- 🔄 **One-Click Reset** - Revert to white background anytime

 ## 🚀 Quick Start

1. **Clone repository**
   ```bash
   git clone https://github.com/Virus2hell/Color-Studio.git
   cd color-studio
   ```

2. **Load in Chrome**
   - Go to `chrome://extensions/`
   - Enable **Developer mode** (top-right)
   - Click **Load unpacked** → Select folder
   - Pin extension to toolbar

3. **Use It**
   - Click extension icon
   - Select a color or use custom picker
   - Done! 🎨

## 📁 Files

| File | Purpose |
|------|---------|
| `manifest.json` | Extension config |
| `popup.html` | UI layout |
| `popup.css` | Styling & animations |
| `popup.js` | Color change logic |
| `icon.png` | Extension icon (128×128) |

## 🛠️ Tech Stack

- HTML5, CSS3 (Custom properties, Grid, Flexbox)
- JavaScript ES6+ (Chrome Extension APIs)
- Chrome Manifest V3

## 📋 Requirements

- Chrome 88+
- Developer mode enabled

## 🔧 Customize

**Add color presets** in `popup.html`:
```html
<button class="color-btn" data-color="#HEX" style="background-color: #HEX;">
    <span class="color-label">Name</span>
</button>
```

**Change theme colors** in `popup.css`:
```css
:root {
    --bg-primary: #0F1117;
    --accent-primary: #58A6FF;
}
```

## 📝 License

MIT License - Free to use and modify

## 💡 How It Works

1. User clicks extension → Popup opens
2. User selects color → JavaScript captures click
3. Extension queries active tab with `chrome.tabs.query()`
4. Injects script with `chrome.scripting.executeScript()`
5. Script modifies `document.body.style.backgroundColor`
6. Color applies with smooth transition

## 📚 Resources

- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Guide](https://developer.chrome.com/docs/extensions/migrating/what-is-mv3/)
- [Chrome APIs](https://developer.chrome.com/docs/extensions/reference/)

---
