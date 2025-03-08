<template>
  <div class="min-h-screen bg-[var(--color-gray)] flex justify-center">
    <router-view></router-view>
    <Loader />
  </div>
</template>

<script setup lang="ts">
import Loader from '@/components/Loader.vue';
</script>