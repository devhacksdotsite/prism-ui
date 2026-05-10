import { addons } from 'storybook/manager-api'

addons.setConfig({
  enableShortcuts: true,
  showPanel: true,
  controlsSave: false,
  theme: {
    base: 'light',
    brandTitle: '<span style="font-weight:700"><span style="color:#FF6B9D">P</span><span style="color:#C084FC">r</span><span style="color:#67D4FF">i</span><span style="color:#6EECD4">s</span><span style="color:#FF8A80">m</span> UI</span>',
    brandUrl: 'https://github.com/devhacksdotsite/prism-ui',

    colorPrimary: '#C084FC',
    colorSecondary: '#FF6B9D',

    appBg: '#FAFAFE',
    appContentBg: '#FFFFFF',
    appBorderColor: '#EDE6FF',
    appBorderRadius: 12,

    textColor: '#2D1B4E',
    textMutedColor: '#7C6B9E',
    textInverseColor: '#FFFFFF',

    barTextColor: '#7C6B9E',
    barSelectedColor: '#C084FC',
    barHoverColor: '#FF6B9D',
    barBg: '#FAFAFE',

    inputBg: '#FFFFFF',
    inputBorder: '#EDE6FF',
    inputTextColor: '#2D1B4E',
    inputBorderRadius: 8,
  },
})
