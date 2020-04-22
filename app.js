document.addEventListener('DOMContentLoaded', () => {

    // https://opengameart.org/content/day-cards
    // https://opengameart.org/content/night-cards
    const cardArray = [
        {
            name: 'siren',
            img: 'images/Siren.svg'
        },
        {
            name: 'reddaydragon',
            img: 'images/RedDayDragon.svg'
        },
        {
            name: 'ratwarrior',
            img: 'images/RatWarrior.svg'
        },
        {
            name: 'cupidlancer',
            img: 'images/CupidLancer.svg'
        },
        {
            name: 'cupidarcher',
            img: 'images/CupidArcher.svg'
        },
        {
            name: 'babyrednightdragon',
            img: 'images/BabyRedNightDragon.svg'
        },
        {
            name: 'siren',
            img: 'images/Siren.svg'
        },
        {
            name: 'reddaydragon',
            img: 'images/RedDayDragon.svg'
        },
        {
            name: 'ratwarrior',
            img: 'images/RatWarrior.svg'
        },
        {
            name: 'cupidlancer',
            img: 'images/CupidLancer.svg'
        },
        {
            name: 'cupidarcher',
            img: 'images/CupidArcher.svg'
        },
        {
            name: 'babyrednightdragon',
            img: 'images/BabyRedNightDragon.svg'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChoosen = [];
    let cardsChoosenId = [];
    let cardsWon = [];

    const createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/Day.svg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', e => flipCard(e));
            grid.appendChild(card);
        }
    };

    const checkForMatch = () => {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];

        if (cardsChoosen[0] === cardsChoosen[1]) {
            alert('Match');
            cards[optionOneId].setAttribute('src', 'images/Night.svg');
            cards[optionTwoId].setAttribute('src', 'images/Night.svg');
            cardsWon.push(cardsChoosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/Day.svg');
            cards[optionTwoId].setAttribute('src', 'images/Day.svg');
            alert('Try again');
        }
        cardsChoosen = [];
        cardsChoosenId = [];
        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all!';
        }
    };

    const flipCard = (evt) => {
        const cardId = evt.target.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId);
        evt.target.setAttribute('src', cardArray[cardId].img);
        if (cardsChoosenId.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    };

    createBoard();
});