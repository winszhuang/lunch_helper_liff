<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { $liffInit, $liff } = useNuxtApp()

onMounted(() => {
  $liffInit()
    .then(() => {
      console.log('近來瞜');
      console.log("當前版本是: ", $liff().getVersion());
    })
})

</script>
