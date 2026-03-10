<script setup>
import Entradas from './entradas.vue'
import { useItensStore } from '../store/itens'
const itensStore = useItensStore()
</script>

<template>
    <div class="app">
        <div class="layout">
            <div class="panel">
                <h2>Resultado</h2>
                <div class="result">Total: {{ itensStore.total }}</div>
                <div class="result">Gorjeta: {{ itensStore.tipValue }}</div>
                <div class="result">Por pessoa: {{ itensStore.perPerson }}</div>
                <div class="result">{{ itensStore.message }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.panel {
    justify-items: center;
    margin-left: 3vw;
}

h2 {
    font-size: 2vw;
    color: #ff8d22;
}

.result {
    display: flex;
    margin: 1vw;
    background-color: #1e1e1e;
    border-left: 0.4vw solid #ff8d22;
    padding: 0.8vw;
    color: white;
    width: 30vw;
    font-size: 1.2vw;
    border-radius: 0.6vw;
}

.result:hover {
    border-left: 0.4vw solid #ffb547;
}

@media (max-width: 600px) {

    h2 {
        font-size: 3vw;
    }

    .result {
        padding: 1.5vw;
        font-size: 3vw;
        margin: 1.5vw;
        width: 55vw;
    }

}
</style>

