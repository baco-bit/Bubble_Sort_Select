let btnCreate = document.getElementById("btnCreate");
let btnOrder = document.getElementById("btnOrder");
let saveCard = [];

btnCreate.addEventListener("click", createCards);
btnOrder.addEventListener("click", orderCards);

function createCards() {

    saveCard = [];
    document.getElementById("row1").innerHTML = "";

    let numberOfCards = document.getElementById("numberOfCards").value;
    let cards = ["heart", "crown", "gem", "spa"];
    let simbolCard;
    let randomCard;
    let randomNumber;

    for (let counter = 1; counter <= numberOfCards; counter++) {

        randomCard = Math.floor(Math.random() * cards.length);
        simbolCard = cards[randomCard];
        randomNumber = Math.floor(Math.random() * 14);

        if (randomNumber == 0) {
            randomNumber = Math.floor(Math.random() * 14);
        } else if (randomNumber == 1) {
            randomNumber = "A";
        } else if (randomNumber == 11) {
            randomNumber = "J";
        } else if (randomNumber == 12) {
            randomNumber = "Q";
        } else if (randomNumber == 13) {
            randomNumber = "K";
        }

        saveCard.push({
            number: randomNumber,
            simbol: simbolCard,
        });
        console.log(saveCard);


        document.getElementById("row1").innerHTML += `
    <div class="card">
    <div class="containerCard">
        <div id="containerIconUp" class="fillCards">
            <i class="fas fa-${simbolCard}"></i>
        </div>
        <div id="containerNumber" class="fillCards">
            <p>${randomNumber}</p>
        </div>
        <div id="containerIconDown" class="fillCards">
            <i class="fas fa-${simbolCard}"></i>
        </div>
    </div>
</div>`;
    }

}

function orderCards() {
    document.getElementById("row2").innerHTML = "";

    saveCard.forEach(function (item) {
        if (item.number == "A") {
            item.number = 1;
        } else if (item.number == "J") {
            item.number = 11;
        } else if (item.number == "Q") {
            item.number = 12;
        } else if (item.number == "K") {
            item.number = 13;
        }
    });

    let min = 0;
    while (min < saveCard.length - 1) {
        for (let i = min + 1; i < saveCard.length; i++) {
            if (saveCard[min].number > saveCard[i].number) {
                let aux = saveCard[min];
                saveCard[min] = saveCard[i];
                saveCard[i] = aux;
                printOrderCards(saveCard);
            }
        }
        min++;
    }
}

function printOrderCards(arr) {
    let numberAux = 0;
    let div1 = document.createElement("div");
    let row2 = document.getElementById("row2");

    arr.forEach(function (item) {
        if (item.number == 1) {
            numberAux = "A";
        } else if (item.number == 11) {
            numberAux = "J";
        } else if (item.number == 12) {
            numberAux = "Q";
        } else if (item.number == 13) {
            numberAux = "K";
        } else {
            numberAux = item.number;
        }

        let div2 = document.createElement("div");
        div2.classList.add("card");
        let div3 = document.createElement("div");
        div3.classList.add("containerCard");
        let div4 = document.createElement("div");
        div4.classList.add("fillCards");

        div4.id = "containerIconUp";
        let div5 = document.createElement("div");
        div5.classList.add("fillCards");

        div5.id = "containerNumber";
        let div6 = document.createElement("div");
        div6.classList.add("fillCards");

        div6.id = "containerIconDown";

        let iUp = document.createElement("i");
        iUp.classList.add("fas", `fa-${item.simbol}`);
        let iDown = document.createElement("i");
        iDown.classList.add("fas", `fa-${item.simbol}`);
        let p = document.createElement("p");
        p.innerHTML = numberAux;


        div6.appendChild(iDown);
        div5.appendChild(p);
        div4.appendChild(iUp);
        div3.appendChild(div4);
        div3.appendChild(div5);
        div3.appendChild(div6);
        div2.appendChild(div3);
        div1.appendChild(div2);
        row2.appendChild(div1);
    });
    
}