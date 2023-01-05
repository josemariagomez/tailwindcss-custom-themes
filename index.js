const plugin = require('tailwindcss/plugin');

const customThemes = plugin(
  function ({addVariant, e, theme}) {
    const classes = theme('themeClasses');
    classes.forEach((themeClass) => {
      addVariant(themeClass, ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          return `.${themeClass} .${e(`${themeClass}${separator}${className}`)}`;
        });
      });
    });
  },
  {
    theme: {
      themeClasses: [],
    },
  }
);

module.exports = customThemes;
