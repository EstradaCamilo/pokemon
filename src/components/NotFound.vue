<template>
    <div class="not-found">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
        <Button @click="toHome()">Go back home</Button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';

const router = useRouter();

const toHome = () => {
    router.push('/');
}
</script>

<style scoped>
@import "tailwindcss";

.not-found {
    @apply text-center space-y-4 p-4;
}
</style>