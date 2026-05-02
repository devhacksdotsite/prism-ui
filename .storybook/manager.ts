import { addons } from 'storybook/manager-api'

addons.setConfig({
  theme: {
    base: 'light',
    brandTitle: '🔮 Prism UI',
    brandUrl: 'https://github.com/devhacksdotsite/prism-ui',

    // Colors
    colorPrimary: '#C084FC',
    colorSecondary: '#FF6B9D',

    // UI
    appBg: '#FAFAFE',
    appContentBg: '#FFFFFF',
    appBorderColor: '#EDE6FF',
    appBorderRadius: 12,

    // Text
    textColor: '#2D1B4E',
    textMutedColor: '#7C6B9E',
    textInverseColor: '#FFFFFF',

    // Toolbar
    barTextColor: '#7C6B9E',
    barSelectedColor: '#C084FC',
    barHoverColor: '#FF6B9D',
    barBg: '#FAFAFE',

    // Form
    inputBg: '#FFFFFF',
    inputBorder: '#EDE6FF',
    inputTextColor: '#2D1B4E',
    inputBorderRadius: 8,
  },
})
