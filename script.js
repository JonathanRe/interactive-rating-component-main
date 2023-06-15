console.log('script start');

// cache the rating container DOM element
const ratingWrapper = document.getElementById('rating-wrapper');

function selectRating() {
    // find and remove "selected" class on all buttons
    if (ratingWrapper.getElementsByClassName('selected')) {
        for (let elem of ratingWrapper.getElementsByClassName('selected')) {
            elem.classList.remove('selected');
        }
    }

    // add "selected" class to clicked button
    this.classList.add('selected');
}


function submitRating() {
    // hide rating container
    document.getElementById('rating-wrapper').classList.add('hidden');

    // unhide thank-you container
    document.getElementById('thank-you-wrapper').classList.remove('hidden');
}


console.log('script end');