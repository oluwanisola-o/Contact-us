# Forge Badge Component

A pixel-perfect Badge component implementation extracted directly from the Figma Design System. This showcase demonstrates the power of automated design-to-code workflows using Figma's MCP (Model Context Protocol) integration.

## 🎯 Overview

This implementation showcases a comprehensive Badge component system with:
- **6 Types**: Primary, Secondary, Error, Warning, Success, Neutral
- **3 Sizes**: Large, Medium, Small
- **4 Styles**: Filled, Filled + Stroke, Soft Fill + Stroke, Stroke Only
- **3 Icon States**: No Icon, Leading Icon, Trailing Icon
- **216 Total Variants**: Complete coverage of all possible combinations

## 🚀 Features

### Automated Figma Integration
- Direct extraction of design tokens from Figma variables
- Pixel-perfect measurements and specifications
- Automatic conversion of Figma variables to CSS custom properties
- Zero manual specification required

### Design System Architecture
- **Base Component**: `.forge-badge` with foundational styles
- **Modifier Classes**: Systematic naming for all variants
- **Design Token Integration**: All values reference `--forge-` prefixed variables
- **Scalable Architecture**: Predictable class combinations

### Key Implementation Details
- **Direct Padding Values**: Explicit padding values, not custom properties
- **Icon Spacing Logic**: 4px extra spacing when icons are present
- **Border Handling**: Proper stroke variants based on Figma specifications
- **Font Integration**: Uses fonts specified in Figma (Geist, Switzer)
- **Interaction States**: Smooth transitions, hover effects, focus states

## 📁 File Structure

```
New badge component/
├── index.html          # Complete showcase with 4 sections
├── badge.css           # Design token-accurate CSS implementation
└── README.md           # This documentation
```

## 🎨 Design Tokens

All design tokens are extracted from Figma and converted to CSS custom properties with the `--forge-` prefix:

### Colors
- `--forge-color-primary`: #2b62ed
- `--forge-color-secondary`: #d17b3b
- `--forge-color-error`: #d42620
- `--forge-color-warning`: #c28213
- `--forge-color-success`: #0f973d
- `--forge-color-neutral`: #2a303c

### Typography
- `--forge-font-family-body`: 'Geist', sans-serif
- `--forge-font-size-large`: 16px
- `--forge-font-size-medium`: 14px
- `--forge-font-size-small`: 10px

### Spacing
- `--forge-space-4`: 4px
- `--forge-space-12`: 12px
- `--forge-space-16`: 16px
- `--forge-space-24`: 24px

## 🛠 Usage

### Basic Badge
```html
<div class="forge-badge forge-badge--large forge-badge--primary">Label</div>
```

### Badge with Icon
```html
<div class="forge-badge forge-badge--medium forge-badge--success forge-badge--icon-leading">
    <div class="forge-badge__icon">✓</div>
    <span>Success</span>
</div>
```

### Stroke Style Badge
```html
<div class="forge-badge forge-badge--small forge-badge--warning forge-badge--stroke">Warning</div>
```

## 📊 Showcase Sections

### 1. Component Overview
Statistics cards showing extracted variant counts and design system metrics.

### 2. Component Showcase
All variant combinations organized systematically by style and size.

### 3. Design Tokens Reference
Complete mapping of Figma variables to CSS custom properties.

### 4. CSS Classes Reference
Generated classes with descriptions and usage examples.

## 🎯 Success Criteria Met

✅ **Pixel-perfect Figma fidelity** - Exact measurements and specifications  
✅ **Systematic, scalable architecture** - Predictable class combinations  
✅ **Automated design-to-code workflow** - Zero manual specification  
✅ **Comprehensive variant coverage** - All 216 possible combinations  
✅ **Production-ready code** - Clean, maintainable implementation  

## 🔧 Technical Implementation

### CSS Architecture Principles
- BEM-inspired naming convention
- Design token integration
- Responsive design considerations
- Accessibility features (focus states, proper contrast)
- Performance optimizations (efficient selectors)

### MCP Workflow
1. **Figma Analysis**: Automated extraction of design tokens and specifications
2. **Component Structure**: Analysis of variants, states, and measurements
3. **CSS Generation**: Systematic creation of CSS architecture
4. **Showcase Creation**: Comprehensive demonstration of all variants

## 🌟 Key Benefits

- **Design Consistency**: Perfect alignment with Figma specifications
- **Developer Experience**: Predictable, systematic class naming
- **Maintainability**: Design token-based architecture
- **Scalability**: Easy to extend with new variants
- **Performance**: Optimized CSS with minimal specificity

This implementation demonstrates the future of design-to-code workflows, where design systems can be automatically translated into production-ready code with pixel-perfect accuracy.

