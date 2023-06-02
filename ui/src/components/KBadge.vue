<template>
  <q-badge :label="label" />
</template>

<script>
import { QBadge } from "quasar";
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  components: {
    QBadge,
  },
};
</script>
