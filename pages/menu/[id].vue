<script setup lang="ts">
import { RouteParams } from '~/.nuxt/vue-router'

const route = useRoute()
const restaurantId = ref('')

watch(() => route.params, handleGetFoods, { immediate: true })

async function handleGetFoods (params: RouteParams) {
  console.log(params)
  if (!params.id) {
    return
  }

  console.log(params.id)

  restaurantId.value = params.id as string
}
</script>

<template>
    <div>
      當前餐廳id為
      <div>
        {{ restaurantId }}
      </div>
    </div>
</template>
