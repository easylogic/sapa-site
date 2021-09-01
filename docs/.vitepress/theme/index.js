import DefaultTheme from 'vitepress/theme'
// import Layout from './MyLayout.vue'
import './custom.css';

export default {
  ...DefaultTheme,
  // Layout,
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/' },
    { text: 'External', link: 'https://google.com' }
  ],

  enhanceApp({ app }) {
    // register global components
    // app.component('MyGlobalComponent' /* ... */)
  }
}