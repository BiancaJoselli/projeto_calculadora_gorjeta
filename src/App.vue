<script setup lang="ts">
import Entradas from './components/entradas.vue';
import Saidas from './components/saidas.vue';

</script>

<template>    
    <h1 class="title">Calculadora de Gorjeta e Divisão</h1>

    <div class="layout">
    <entradas/>
    <saidas/>
    </div>

</template>

<style scoped>

.layout{ 
    display: flex;
    justify-content: center;
    gap: 2vw;
    align-items: flex-start;
}

.app {
    min-height: 100vh;
    overflow-x: hidden;
}

.layout {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2vw;
    flex-wrap: wrap;
}

h1 {
    font-size: 2vw;
    margin: 1vw 0 0 0; 
    color: white;
    font-weight: 700;
    text-align: center;
}

@media (max-width: 600px) {

    .layout{ 
    flex-direction: column;
    align-items: center;
}

    h1 {
        font-size: 5vw;
        margin: 2vw 0;
    }
}
</style>