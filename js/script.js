const mortalCombat = [
    {
        id: "novice",
        bg: ["_bg-novice"],
        listClass: ["_novice-level"],
        image: [
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "SubZero",
                fihter: "img/fihters/Sub-Zero.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "Kung_Lao",
                fihter: "img/fihters/Kung_Lao.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "LiuKang",
                fihter: "img/fihters/Liu_Kang.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "Scorpion",
                fihter: "img/fihters/Scorpion.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "Sektor",
                fihter: "img/fihters/Sektor.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "Sheeva",
                fihter: "img/fihters/Sheeva.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "Sonya",
                fihter: "img/fihters/Sonya.png",
            },
            {
                frontColor: "_grey",
                backColor: "_light-violet",
                match: "ShangTsung",
                fihter: "img/fihters/Shang_Tsung.png",
            },
        ],
    },
    {
        id: "warrior",
        bg: ["_bg-warrior"],
        listClass: ["_warrior-level"],
        image: [
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Unmasked_Sub-Zero",
                fihter: "img/fihters/Unmasked_Sub-Zero.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Jax",
                fihter: "img/fihters/Jax.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "LiuKang",
                fihter: "img/fihters/Liu_Kang.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Scorpion",
                fihter: "img/fihters/Scorpion.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Sektor",
                fihter: "img/fihters/Sektor.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Sheeva",
                fihter: "img/fihters/Sheeva.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Sonya",
                fihter: "img/fihters/Sonya.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "ShangTsung",
                fihter: "img/fihters/Shang_Tsung.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Kano",
                fihter: "img/fihters/Kano.png",
            },
            {
                frontColor: "_green",
                backColor: "_light-blue",
                match: "Kabal",
                fihter: "img/fihters/Kabal.png",
            },
        ],
    },
    {
        id: "master",
        bg: ["_bg-master"],
        listClass: ["_master-level"],
        image: [
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "SubZero",
                fihter: "img/fihters/Sub-Zero.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Jax",
                fihter: "img/fihters/Jax.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "LiuKang",
                fihter: "img/fihters/Liu_Kang.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Scorpion",
                fihter: "img/fihters/Scorpion.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Sektor",
                fihter: "img/fihters/Sektor.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Sheeva",
                fihter: "img/fihters/Sheeva.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Sonya",
                fihter: "img/fihters/Sonya.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "ShangTsung",
                fihter: "img/fihters/Shang_Tsung.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Kitana",
                fihter: "img/fihters/Kitana.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Stryker",
                fihter: "img/fihters/Stryker.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Jade",
                fihter: "img/fihters/Jade.png",
            },
            {
                frontColor: "_blue",
                backColor: "_light-green",
                match: "Sindel",
                fihter: "img/fihters/Sindel.png",
            },
        ],
    },
];

const mainBlock = document.querySelector(".main");
const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const list = document.querySelector(".list");

function chosenLevel({ bg, listClass, image }) {
    const dubbleImage = [...image, ...image];

    bg.map((item) => wrapper.classList.add(item));
    listClass.map((item) => list.classList.add(item));

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(dubbleImage);

    return dubbleImage
        .map(
            (item) =>
                `<li class="list__item" data-match="${item.match}"> 
                    <div class="list__item-front ${item.frontColor}">
                        <img src="img/logo/dragon_trans.png" alt="#" class="list__img list__img--front" />
                    </div>
                    <div class="list__item-back ${item.backColor}">
                        <img src="${item.fihter}" alt="#" class="list__img list__img--back" />
                    </div>
                </li>  `
        )
        .join("");
}

const navList = document.querySelector(".nav__list");

navList.addEventListener("click", ({ target }) => {
    const buttonId = target.parentElement.id;

    if (target.parentElement.closest(".button")) {
        target.parentElement.classList.add("_active");
        setTimeout(() => {
            header.classList.add("_hidden");
            mainBlock.classList.add("_visible");
            list.innerHTML = chosenLevel(mortalCombat.find((item) => item.id === buttonId));
        }, 1100);
    }
});

const mainTitle = document.querySelector(".main__title");
const mainText = document.querySelector(".main__text");
const mainImg = document.querySelector(".main__img");
const rowFirst = document.querySelector(".main__row-line--first");
const rowSecond = document.querySelector(".main__row-line--second");
const timer = document.querySelector(".main__timer");

let cardsLocked = false;
let card;
let chosenCards = [];
let numOfMatch = 0;
let playerHealth = 100;
let iaHealth = 100;
let playerDamage;
let iaDamage = 6.25;
let startCount = false;
let count;
let seconds = 60;
let resultGame = ["YOU WIN", "YOU LOSE", "BORING"];
[youWin, youLose, boring] = resultGame;

const flipCard = ({ target }) => {
    if (cardsLocked) return;

    if (!startCount) {
        countdown();
        startCount = true;
    }

    if (target.parentElement.closest(".list__item")) {
        card = target.parentElement.closest(".list__item");
        card.classList.add("_opened");
    } else {
        return;
    }

    chosenCards.push(card);
    [firstCard, secondCard] = chosenCards;

    if (secondCard === firstCard) {
        chosenCards.pop(secondCard);
    }

    if (chosenCards.length === 2) {
        matchCheck();
    }
};

const matchCheck = () => {
    if (firstCard.dataset.match === secondCard.dataset.match) {
        thereIsMatch();
    } else {
        noMatch();
    }

    chosenCards = [];
};

const thereIsMatch = () => {
    cardsLocked = true;
    numOfMatch++;
    damageMessage();

    setTimeout(() => {
        firstCard.classList.add("_match");
        secondCard.classList.add("_match");
        cardsLocked = false;
    }, 700);
    setTimeout(() => {
        mainText.classList.remove("_move");
    }, 1100);

    iaHealthLine();
    resetWin();
};

const noMatch = () => {
    cardsLocked = true;

    setTimeout(() => {
        firstCard.classList.remove("_opened");
        secondCard.classList.remove("_opened");
        cardsLocked = false;
    }, 1000);

    playerHealthLine();
    numOfMatch = 0;
};

const playerHealthLine = () => {
    playerHealth -= iaDamage;
    rowFirst.style.width = `${playerHealth}%`;
    resetLose();
};

const iaHealthLine = () => {
    damagePercentage();
    iaHealth -= playerDamage;
    rowSecond.style.width = `${iaHealth}%`;
};

const damageMessage = () => {
    damagePercentage();

    switch (numOfMatch) {
        case 2:
            mainText.classList.add("_move");
            mainText.innerHTML = `2 Match </br> ${Math.floor(playerDamage * 2)}% DAMAGE`;
            break;
        case 3:
            mainText.classList.add("_move");
            mainText.innerHTML = `3 Match </br> ${Math.floor(playerDamage * 3)}% DAMAGE`;
            break;
        case 4:
            mainText.classList.add("_move");
            mainText.innerHTML = `4 Match </br> ${Math.floor(playerDamage * 4)}% DAMAGE`;
            break;
        case 5:
            mainText.classList.add("_move");
            mainText.innerHTML = `5 Match </br> ${Math.floor(playerDamage * 5)}% DAMAGE`;
            break;
        case 6:
            mainText.classList.add("_move");
            mainText.innerHTML = `6 Match </br> ${Math.floor(playerDamage * 6)}% DAMAGE`;
            break;
        case 7:
            mainText.classList.add("_move");
            mainText.innerHTML = `7 Match </br> ${Math.floor(playerDamage * 7)}% DAMAGE`;
            break;
    }
};

const damagePercentage = () => {
    let level;
    switch (list.classList.contains(level)) {
        case level === "_novice-level":
            playerDamage = 12.5;
            break;
        case level === "_warrior-level":
            playerDamage = 10;
            break;
        case level === "_master-level":
            playerDamage = 8.333;
            break;
    }
};

const countdown = () => {
    timer.textContent = `${seconds}`;
    seconds--;

    if (seconds < 0) {
        resetBoring();
    } else {
        count = setTimeout(countdown, 1000);
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
};

const resetWin = () => {
    let soundeffect = new Audio("media/toasty.mp3");

    if (Math.floor(iaHealth) === 0) {
        mainImg.classList.add("_toasty");
        soundeffect.play();

        setTimeout(() => {
            mainImg.classList.remove("_toasty");
        }, 1000);
        gameOver(youWin);
        reloadPage();
    }
};

const resetLose = () => {
    if (playerHealth === 0) {
        gameOver(youLose);
        reloadPage();
    }
};

const resetBoring = () => {
    cardsLocked = true;
    gameOver(boring);
    reloadPage();
};

const gameOver = (result) => {
    clearTimeout(count);
    setTimeout(() => {
        cardsLocked = true;
        mainTitle.textContent = `${result}`;
        mainTitle.classList.add("_game-over");
    }, 1200);
};

const reloadPage = () => {
    setTimeout(() => {
        document.location.reload();
    }, 5000);
};

list.addEventListener("click", flipCard);
