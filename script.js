const ratingWrapper = document.getElementById('rating-wrapper');
const thankYouWrapper = document.getElementById('thank-you-wrapper');

const ratingSpan = document.getElementById('rating-value');

const button = document.getElementById('button_submit');

let ratingValue;

function selectRating(event) {
    previouslySelectedItem = document.querySelector('.selected');
    if (previouslySelectedItem) {
        previouslySelectedItem.classList.remove('selected');
    }

    clickedItem = event.srcElement;
    clickedItem.classList.add('selected');
    ratingValue = clickedItem.getAttribute('data-value');
}


function submitRating() {
    if (!ratingValue) {
        alert('Please select a rating before submitting!');
    }
    else {
        ratingSpan.textContent = ratingValue;

        ratingWrapper.classList.add('hidden');
        thankYouWrapper.classList.remove('hidden');
    }
}

button.addEventListener('click', submitRating);

options = document.querySelectorAll('.rating-option');
options.forEach(element => {
    element.addEventListener('click', selectRating);
});