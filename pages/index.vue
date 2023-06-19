<template>
  <div>
    index
  </div>
</template>

<script setup lang="ts">
const { $liffInit, $liff } = useNuxtApp()

onMounted(() => {
  $liffInit()
    .then(() => {
      console.log('近來瞜')
      console.log('當前版本是: ', $liff().getVersion())
      console.log('getLineVersion', $liff().getLineVersion())
      console.log('getProfile', $liff().getProfile())
    })
})

</script>
