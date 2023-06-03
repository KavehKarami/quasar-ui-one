import KBadge from './components/KBadge.vue'
import KIcon from './components/KIcon.vue'

const version = __UI_VERSION__

function install(app) {
  app.component('KBadge', KBadge)
  app.component('KIcon', KIcon)
}

export { version, KBadge, KIcon, install }
