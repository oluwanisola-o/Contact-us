# Contact Waitlist Popup

A modern waitlist popup with Style Dictionary design token management.

## Features

- Clean, modern design
- Responsive layout
- Style Dictionary for design token management
- CSS custom properties for theming

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build design tokens:**
   ```bash
   npm run build-tokens
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```bash
   npm start
   ```

## Design Tokens

This project uses [Style Dictionary](https://amzn.github.io/style-dictionary/) for design token management.

### Token Structure

Tokens are defined in JSON files in the `tokens/` directory:

- `tokens/colors.json` - Color definitions
- `tokens/spacing.json` - Spacing and border radius values

### Available Commands

- `npm run build-tokens` - Build tokens once
- `npm run build-tokens:watch` - Build tokens and watch for changes
- `npm run dev` - Start development server
- `npm start` - Open in browser

### Token Usage

The generated CSS variables follow this naming convention:

```css
/* Colors */
--color-brand-primary: #2b62ed;
--color-text-primary: #080a0c;
--color-background-primary: #ffffff;

/* Spacing */
--size-radius-pill: 999rem;
--size-radius-xxl: 24rem;
```

## File Structure

```
├── tokens/                 # Design token definitions
│   ├── colors.json        # Color tokens
│   └── spacing.json       # Spacing tokens
├── src/
│   └── tokens.css         # Generated CSS variables
├── styles.css             # Main stylesheet
├── index.html             # HTML file
├── script.js              # JavaScript functionality
└── style-dictionary.json  # Style Dictionary config
```

## Customization

To modify design tokens:

1. Edit the JSON files in `tokens/`
2. Run `npm run build-tokens`
3. Refresh your browser

## Browser Support

- Modern browsers with CSS custom properties support
- IE11+ (with CSS custom properties polyfill if needed)