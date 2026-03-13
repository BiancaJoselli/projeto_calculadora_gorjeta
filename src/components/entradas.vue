<script setup>
import saidas from "./saidas.vue";
import { useItensStore } from "../store/itens";

const itensStore = useItensStore();
</script>
<template>
    <div class="panel">
        <h2>Entradas</h2>
        <input type="number" v-model="itensStore.bill" class="input" :class="{ erros: itensStore.billErro }"
            placeholder="Adicione o valor da conta" />
        <p class="erros-message" v-if="itensStore.billErro">
            {{ itensStore.billMessage }}
        </p>

        <input type="number" v-model="itensStore.tip" class="input" :class="{ erros: itensStore.tipErro }"
            placeholder="Adicione a porcentagem da gorjeta" />

        <p class="erros-message" v-if="itensStore.tipMessage">
            {{ itensStore.tipMessage }}
        </p>

        <input type="number" v-model="itensStore.people" class="input" :class="{ erros: itensStore.peopleErro }"
            placeholder="Adicione o número de pessoas" />

        <p class="erros-message" v-if="itensStore.peopleErro">
            {{ itensStore.peopleMessage }}
        </p>

        <button class="small-btn" @click="itensStore.calculate">Calcular</button>
        <button class="clear-btn" @click="itensStore.clear()">Limpar</button>
    </div>
</template>
<style scoped>
div {
    justify-items: center;
}

h2 {
    font-size: 2vw;
    color: #ff8d22;
}

input {
    display: flex;
    margin: 1vw;
    background-color: white;
    border: none;
    padding: 1vw;
    color: black;
    text-align: left;
    width: 30vw;
    font-size: 1.2vw;
    border-radius: 0.6vw;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #ffb547;
}

input.erros {
    border: 2px solid red;
    background-color: #ffe5e5;
}

.erros-message {
    color: red;
    font-size: 1vw;
    margin-top: -0.5vw;
}

@media (max-width: 768px) {
    .erros-message {
        font-size: 13px;
        margin-top: -4px;
    }
}

button {
    width: 31.8vw;
    display: block;
    background-color: #ff8d22;
    border-radius: 0.6vw;
    border: 1px solid transparent;
    padding: 0.8vw;
    font-size: 1.2vw;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    font-weight: 700;
    text-decoration: none;
    justify-content: center;
    align-items: center ;
    color: white;
}

button:hover {
    border: 1.5px solid #ffc46b;
}

button:focus,
button:focus-visible {
    outline: none;
}

.small-btn:hover {
    background-color: #ffb547;
    color: rgb(255, 255, 255);
}

.clear-btn {
    margin: 1vw 0 0 0;
    background: none;
    color: white;
}

button:active {
    background-color: #ff8d22;
    transform: scale(0.95);
}

@media (max-width: 600px) {
    h2 {
        font-size: 5vw;
    }

    input {
        padding: 2vw;
        font-size: 3vw;
        display: flex;
        margin: 1.5vw;
        width: 68vw;
    }

    button {
        width: 72vw;
        font-size: 3vw;
        font-size: 3.3vw;
        padding: 2vw;
        color: white;
    }
}
</style>
