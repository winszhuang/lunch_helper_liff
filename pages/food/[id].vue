<script setup lang="ts">
import { RouteParams } from '~/.nuxt/vue-router'

const route = useRoute()
const foodId = ref('')

watch(() => route.params, handleGetFood, { immediate: true })

async function handleGetFood (params: RouteParams) {
  console.log(params)
  if (!params.id) {
    return
  }

  console.log(params.id)

  foodId.value = params.id as string
}
</script>

<template>
    <div>
      當前食物id為
      <div>
        {{ foodId }}
      </div>
    </div>
</template>
