import KBadge from "./components/KBadge.vue";

const version = __UI_VERSION__;

function install(app) {
  app.component("KBadge", KBadge);
}

export { version, KBadge, install };
