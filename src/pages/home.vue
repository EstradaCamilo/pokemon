<template>
    <div class="w-full flex items-center p-8 mx-auto sm:max-w-xl">
        <div class="text-center space-y-4">
            <img src="/images/pikachu.png" alt="pikachu" class="h-50 mx-auto">
            <h1>
                Welcome to Pokédex
            </h1>
            <p>
                The digital encyclopedia created by Professor Oak is an invaluable tool to
                Trainers in the Pokémon world.
            </p>
            <Button @click="toSearch()">Get started</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';

const router = useRouter();

const toSearch = () => {
    router.push('/search');
}
</script>