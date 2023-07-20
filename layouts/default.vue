<script setup lang="ts">
import '~/assets/css/index.css'

const { pointerType } = usePointer()

useHead({
  titleTemplate: '%s - ilko.me',
  bodyAttrs: {
    class: () => {
      const cls = ['font-gilroy text-primary bg-prime']
      if (!pointerType.value || pointerType.value === 'mouse')
        cls.push('mouse')
      if (pointerType.value === 'touch')
        cls.push('touch')

      return cls
    },
  },
})
</script>

<template lang="pug">
NuxtPage
</template>
