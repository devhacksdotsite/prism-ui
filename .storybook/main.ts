import type { StorybookConfig } from '@storybook/vue3-vite'

const isProd = process.env.NODE_ENV === 'production'

const devAddons = [
  '@chromatic-com/storybook',
  '@storybook/addon-vitest',
  '@storybook/addon-onboarding',
]

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    ...isProd ? [] : devAddons,
  ],
  framework: '@storybook/vue3-vite',
}

export default config
