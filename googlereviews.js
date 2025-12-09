fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews&key=YOUR_API_KEY`
)
.then(res => res.json())
.then(data => {
    console.log(data.result.reviews);
});

const track = document.querySelector('.reviews-track');
const cards = document.querySelectorAll('.review-card');
const left = document.querySelector('.arrow.left');
const right = document.querySelector('.arrow.right');

let index = 0;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 30; // width + gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

right.onclick = () => {
    if (index < cards.length - 1) index++;
    updateSlider();
};

left.onclick = () => {
    if (index > 0) index--;
    updateSlider();
};