<template>
  <i
    class="flex"
    :class="[
      `svg-icon--${color}`,
      `svg-icon--stroke-${stroke}`,
      {
        'cursor-pointer': to && Object.keys(to).length,
        'deep-color': colorRef,
        'deep-color__stroke': strokeRef,
        'icon-auto-width': autoWidth,
      },
    ]"
    @click="to && Object.keys(to).length && $router.push(to)"
  >
    <component :is="myComponent" v-if="myComponent" />
    <slot></slot>
  </i>
</template>

<script>
import { defineComponent, ref, shallowRef, computed, watch } from 'vue'

export default defineComponent({
  name: 'BaseIcon',

  props: {
    name: { type: String, required: true },
    size: { type: String, default: '24px' },
    color: { type: String, default: '' },
    stroke: { type: String, default: '' },
    autoWidth: { type: Boolean, default: false },
    to: { type: Object, default: () => ({}) },
  },

  setup(props) {
    const myComponent = shallowRef('')
    const sizeRef = ref('')
    const strokeRef = ref('')
    const colorRef = ref('')

    const importer = () => import(`../svg/${props.name}.vue`)
    const loader = computed(() => importer)

    const loadComponent = () => {
      loader.value().then((res) => {
        myComponent.value = res.default
      })
    }

    watch(
      () => [props.name, props.color],
      () => loadComponent(),
      { immediate: true }
    )

    watch(
      () => props.size,
      () => (sizeRef.value = props.size),
      { immediate: true }
    )

    watch(
      () => props.color,
      () => (colorRef.value = props.color),
      { immediate: true }
    )
    watch(
      () => props.stroke,
      () => (strokeRef.value = props.stroke),
      { immediate: true }
    )

    return { myComponent, sizeRef, colorRef, strokeRef }
  },
})
</script>

<style lang="sass" scoped>
i
  width: v-bind(sizeRef)
  height: auto
  svg
    width: v-bind(sizeRef)
    height: auto
.icon-auto-width
  width: auto
  height: v-bind(sizeRef)
  svg
    width: auto
    height: v-bind(sizeRef)

.deep-color
  :deep(path)
    fill: v-bind(colorRef)
.deep-color__stroke
  :deep(path)
    stroke: v-bind(strokeRef)
</style>
