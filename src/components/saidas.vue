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

