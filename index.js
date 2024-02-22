const numeroCard = document.getElementById("advice")
const descricaoCard = document.getElementById("advice-description")
const botaoConselho = document.getElementById("btn")


async function dadosConselhosApi(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await response.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    numeroCard.innerHTML = adviceId;
    descricaoCard.innerHTML = adviceText;
    
}

botaoConselho.addEventListener("click", dadosConselhosApi);

dadosConselhosApi()
