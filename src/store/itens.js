import { defineStore } from "pinia";
import { ref } from "vue";

export const useItensStore = defineStore("itens", () => {
  const bill = ref("");
  const tip = ref("");
  const people = ref("");

  const total = ref(0);
  const tipValue = ref(0);
  const perPerson = ref(0);
  const message = ref("");

  const billErro = ref(false);
  const tipErro = ref(false);
  const peopleErro = ref(false);

  const billMessage = ref("");
  const tipMessage = ref("");
  const peopleMessage = ref("");

  function clear() {
    bill.value = "";
    tip.value = "";
    people.value = "";

    total.value = 0;
    tipValue.value = 0;
    perPerson.value = 0;
    message.value = "";

    billErro.value = false;
    tipErro.value = false;
    peopleErro.value = false;

    billMessage.value = "";
    tipMessage.value = "";
    peopleMessage.value = "";
  }

  function calculate() {
    billErro.value = false;
    tipErro.value = false;
    peopleErro.value = false;

    billMessage.value = "";
    tipMessage.value = "";
    peopleMessage.value = "";

    console.log(bill.value);
    const billValue = Number(bill.value);
    const tipPercent = Number(tip.value);
    const peopleCount = Number(people.value);

    let erros = [];

    if (bill.value == "") {
      const alerta = "Ops! Você não informou o valor da conta.";
      erros.push(alerta);
      billErro.value = true;
      billMessage.value = alerta;
    }

    if (tip.value == "") {
      const alerta = "Ops! Você não informou a porcentagem da gorjeta.";
      erros.push(alerta);
      tipErro.value = true;
      tipMessage.value = alerta;
    }

    if (people.value == "") {
      const alerta = "Ops! Você não informou o número de pessoas.";
      erros.push(alerta);
      peopleErro.value = true;
      peopleMessage.value = alerta;
    }
    if (people.value !== "" && peopleCount <= 0) {
      const alerta = "Ops! O número de pessoas deve ser maior que 0";
      erros.push(alerta);
      peopleErro.value = true;
      peopleMessage.value = alerta;
    }

    if (erros.length > 0) {
      message.value = erros.join(" | ");
      return;
    }

    // if (!billValue || !tipPercent || !peopleCount) {
    //       alert('Preencha os dados');
    //   erros.push = 'Algo deu errado.';
    //   return;
    //   }

    tipValue.value = (billValue * tipPercent) / 100;
    total.value = billValue + tipValue.value;
    perPerson.value = total.value / peopleCount;
    message.value = "Gorjeta Calculada!";
  }

  return {
    bill,
    tip,
    people,
    total,
    tipValue,
    perPerson,
    message,
    billErro,
    tipErro,
    peopleErro,
    billMessage,
    tipMessage,
    peopleMessage,
    calculate,
    clear,
  };
});
