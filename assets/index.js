document.addEventListener("DOMContentLoaded", function () {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const totalCards = symbols.length * 2;

    const shuffledSymbols = shuffleArray(symbols.concat(symbols));
    const gameBoard = document.getElementById('game-board');
    let flippedCards = [];

    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const symbol = document.createElement('span');
        symbol.classList.add('symbol');
        symbol.textContent = shuffledSymbols[i];
        
        card.appendChild(symbol);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }

    function flipCard() {
        if (flippedCards.length < 2) {
            this.classList.add('flipped');
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.symbol').textContent;
        const symbol2 = card2.querySelector('.symbol').textContent;

        if (symbol1 === symbol2) {
            // Match found
            flippedCards = [];
        } else {
            // No match, flip the cards back
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});