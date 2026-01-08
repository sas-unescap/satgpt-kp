# SatGPT Knowledge Portal

**Transforming Data into Decisions, Innovation to Impact**

SatGPT is an innovative solution that integrates Large Language Models (LLMs), cloud computing platforms, and Earth observation data for flood hotspot mapping. SatGPT represents a fully functional, next-generation spatial decision support system designed for rapid deployment, particularly in resource-limited contexts.

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Fork or clone this repository**
   ```bash
   git clone https://github.com/yourusername/satgpt-hub.git
   cd satgpt-hub
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click Save

3. **Access your site**
   - Your site will be available at `https://yourusername.github.io/satgpt-hub/`

### Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

## 📁 Project Structure

```
satgpt-hub/
├── index.html              # Landing page
├── css/
│   └── main.css            # Global styles
├── js/
│   └── main.js             # JavaScript functionality
├── pages/
│   ├── case-studies.html   # Interactive map + case studies
│   ├── elearning.html      # Learning modules
│   ├── resources.html      # Quick Start & Tutorials
│   ├── publications.html   # Papers, working papers, blogs
│   ├── about.html          # ESCAP, Partners, Contributors
│   ├── disclaimer.html     # Legal notices
│   └── contact.html        # Contact form
└── assets/                 # Images and media
```

## ✨ Features

- **Interactive GIS Map** - Leaflet.js powered map showcasing case studies across Asia-Pacific
- **Responsive Design** - Fully mobile-friendly layout
- **Dark Theme** - Modern space-inspired aesthetic
- **Tab Navigation** - Organized content with smooth transitions
- **Dropdown Menus** - Nested navigation structure
- **Animated Counters** - Statistics with scroll-triggered animations
- **Contact Form** - Ready for backend integration

## 🗺️ Navigation Structure

```
├── SatGPT (Home)
├── Case Studies
├── eLearning
├── Resources
│   ├── Quick Start
│   └── Tutorials
├── Publications
│   ├── Peer-reviewed Papers
│   ├── ESCAP Working Papers
│   └── Blogs
├── About
│   ├── ESCAP
│   ├── Partners
│   └── Contributors
├── Disclaimer
└── Contact
```

## 🛠️ Customization

### Branding

Update colors in `css/main.css`:

```css
:root {
    --color-accent-primary: #00d4aa;    /* Main accent color */
    --color-accent-secondary: #0099ff;  /* Secondary accent */
    --color-bg-primary: #0a0e17;        /* Background */
}
```

### Adding Case Studies

Edit the case studies array in `pages/case-studies.html`:

```javascript
const caseStudies = [
    {
        coords: [latitude, longitude],
        title: 'Your Case Study',
        category: 'agriculture', // or 'water', 'disaster', 'urban'
        description: 'Description text'
    }
];
```

### Map Tiles

Change the map style in `js/main.js`:

```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    // Options
}).addTo(map);
```

## 📦 Dependencies

- [Leaflet.js](https://leafletjs.com/) v1.9.4 - Interactive maps (CDN)
- [Google Fonts](https://fonts.google.com/) - DM Sans & Space Mono fonts (CDN)

No build step required - pure HTML/CSS/JS.

## 🔧 Future Enhancements

- [ ] Backend integration for contact form
- [ ] User authentication
- [ ] Dashboard with data visualization
- [ ] Google Earth Engine API integration
- [ ] Course progress tracking
- [ ] Multi-language support

## 📄 License

© 2025 United Nations ESCAP. See [Disclaimer](pages/disclaimer.html) for terms.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

---

**SatGPT Hub** - Empowering Asia-Pacific nations with satellite intelligence for sustainable development.
