<template>
  <q-badge class="bg-extra-deep-mb q-my-40" :label="label" />
</template>

<script>
import { QBadge } from 'quasar'
export default {
  components: {
    QBadge,
  },

  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
