import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  title: 'My Portfolio',
  description: 'Welcome to my VuePress portfolio',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects.md' },
      { text: 'Contact', link: '/contact.md' },
    ],
  }),
  bundler: viteBundler(),
})
