<template>
  <q-badge :label="label" />
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
