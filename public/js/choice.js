let inputResult = document.querySelector(`.form-result`);
let cards = document.querySelector(`.cards`);
let buttonNode = document.querySelector(`.button-div`);

let choice;

cards.addEventListener(`click`, (evt) => {
    let card = evt.target.closest(`.card`);

    if (!card.classList.contains(`card-active`)) {
        card.classList.add(`card-active`);
        choice = card.querySelector(`.card-title`).innerHTML;
        inputResult.value = choice;
        
    } else {
        card.classList.remove(`card-active`);
        choice = null;
        inputResult.value = null;
    }
});
