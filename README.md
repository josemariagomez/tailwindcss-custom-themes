# Apply themes to Tailwind CSS 💅🏻

This Tailwind CSS plugin can be used to create custom themes and apply styles just like native dark mode.
Just use your theme as an usual Tailwind CSS variant.

### Installation

First, you need to have [Tailwind CSS](https://tailwindcss.com/) installed. Then, install the plugin by running this command:

```bash
npm install tailwindcss-themes
```

### Configuration

Set your theme names in your `tailwind.config.js` file and register the plugin

```js
module.exports = {
  theme: {
    themeClasses: ['retro', 'minimal'], // All themes you want to use
  },
  plugins: [require('tailwindcss-themes')],
};
```

### Usage

The plugin will add a new variant for each theme class that you configured before, so using it is as easy as using the default dark mode variant.

**Remember that you need to set a class in your HTML, maybe in the `<html>`, or simply wrap your code in a tag with the class you want.**

```html
<html>
  <!-- Just switch this class to change your website/app theme -->
  <body class="retro">
    <h1 class="text-3xl font-serif retro:font-mono minimal:font-sans">Hello World</h1>
  </body>
</html>
```
