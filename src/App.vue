<script setup lang="ts">
import Entradas from './components/entradas.vue';
import Saidas from './components/saidas.vue';

</script>

<template>
            <h1 class="title">Calculadora de Gorjeta e Divisão</h1>
    <entradas/>
    <saidas/>
</template>

<style scoped>
h1 {
    font-size: 2vw;
    margin: 1vw 0;
    text-align: center;
    color: white;
    font-weight: 700;
}

@media (max-width: 600px) {
    h1 {
        font-size: 5vw;
        margin: 2vw 0;
    }
}
</style>