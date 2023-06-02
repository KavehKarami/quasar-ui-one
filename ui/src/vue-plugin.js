import BaseBadge from "./components/BaseBadge.vue";

const version = __UI_VERSION__;

function install(app) {
  app.component("BaseBadge", BaseBadge);
}

export { version, BaseBadge, install };
