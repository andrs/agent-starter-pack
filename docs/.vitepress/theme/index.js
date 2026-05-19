import DefaultTheme from 'vitepress/theme'
import MaintenanceBanner from './MaintenanceBanner.vue'
import HomeHeroBanner from './HomeHeroBanner.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeHeroBanner),
      'doc-before': () => h(MaintenanceBanner)
    })
  }
}
