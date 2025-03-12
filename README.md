# Custom Dialog Web Component

A lightweight, customizable dialog component built with Lit and TypeScript.

## Features

- 🎨 Customizable title and content
- 🖱️ Click outside to dismiss
- 🔄 Event support for dialog interactions
- 💻 Built with Lit for efficient rendering

## Installation

```bash
npm install
```

## Usage

### Basic Usage

Include the component in your HTML:

```html
<script type="module" src="/path/to/dialog.js"></script>

<custom-dialog id="myDialog" title="Dialog Title">
  This is the dialog content.
</custom-dialog>

<button id="openBtn">Open Dialog</button>

<script>
  const dialog = document.getElementById('myDialog');
  const openBtn = document.getElementById('openBtn');
  
  openBtn.addEventListener('click', () => {
    dialog.open = true;
  });
</script>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open`   | Boolean | `false` | Controls dialog visibility |
| `title`  | String | `''` | Dialog title text |

### Events

| Event | Description |
|-------|-------------|
| `dialog-closed` | Fired when the dialog is closed |

## Development

This project uses Vite for development and building.

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## License

[MIT License](LICENSE)

Copyright (c) 2025 Maciej Karasiński
