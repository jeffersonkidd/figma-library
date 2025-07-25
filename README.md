# Figma Component Library

This is a static component library exported from Figma for public-facing embeds in Wix. It includes design tokens and lightweight styling with zero frameworks.

## Structure
- `/tokens`: Design tokens in CSS/JSON
- `/ButtonPrimary`: Each component has its own folder
- `/css`: Shared global styles

## Usage
Deploy to GitHub Pages or Netlify.
Embed individual components in Wix via iframe.

## Folder Structre
```
figma-library/  
├── ButtonPrimary/    
│   ├── index.html  
│   └── style.css  
├── CardDefault/  
│   ├── index.html  
│   └── style.css  
├── NavbarMain/  
│   ├── index.html  
│   └── style.css  
├── WebinarFlyer/  
│   ├── index.html  
│   └── style.css   
├── index.html 
├── tokens/ # (Optional) Design tokens as CSS/JSON  
└── css/  # (Optional) Shared/global styles
```