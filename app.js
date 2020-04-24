document.addEventListener('DOMContentLoaded', () => {

    // 3. Scoring!
    // 4. cambio arquitectura?
    // 5. cardswon const?

    // https://opengameart.org/content/day-cards
    // https://opengameart.org/content/night-cards
    const cards = [
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
        }
    ];

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const msg = document.querySelector('.info-msg');
    let cardArray = [];
    let cardsChoosen = [];
    let cardsChoosenId = [];
    let cardsWon = [];

    const load = () => {
        // preload and create images
        cardArray = cards.map((value) => {
            const img = new Image();
            img.src = value.img;
            value.image = img;

            return value;
        });

        cardArray = [...cardArray, ...cardArray];
        cardArray.sort(() => 0.5 - Math.random());

        createBoard();
    };

    const createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/Day.svg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', e => flipCard(e), { once: true });
            grid.appendChild(card);
        }
    };

    const checkForMatch = () => {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];

        if (cardsChoosen[0] === cardsChoosen[1]) {
            msg.textContent = 'Match';
            msgShow();
            cards[optionOneId].classList.add('match');
            cards[optionTwoId].classList.add('match');
            cardsWon.push(cardsChoosen[0]);
        } else {
            cards[optionOneId].setAttribute('src', 'images/Day.svg');
            cards[optionOneId].addEventListener('click', e => flipCard(e), { once: true });
            cards[optionTwoId].setAttribute('src', 'images/Day.svg');
            cards[optionTwoId].addEventListener('click', e => flipCard(e), { once: true });
        }
        cardsChoosen = [];
        cardsChoosenId = [];
        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            msg.textContent = 'Congratulations! You found all!';
        } else {
            msgHide();
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

    const msgShow = () => {
        msg.classList.remove('hide');
        msg.classList.add('show')
    };

    const msgHide = () => {
        setTimeout(() => {
            msg.classList.remove('show');
            msg.classList.add('hide');
        }, 1000);
    };

    load();
});