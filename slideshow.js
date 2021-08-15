const slides = [
    "https://cdn.wallpapersafari.com/12/29/UQhMIt.jpg",
    "https://cdn.wallpapersafari.com/16/17/Y6vdnJ.jpg",
    "https://cdn.wallpapersafari.com/25/54/ex8Nr1.jpg",
    "https://cdn.wallpapersafari.com/61/34/tCZg7X.jpg"
];

const no_of_slide = slides.length;

let current_slide = 0;
let start;
let dummy1 = 0;
let dummy2 = 0;
let img_cycles = () => {
    document.getElementById("image").src = slides[current_slide];
    console.log(current_slide);
    if (current_slide < 3) {
        current_slide++;
    } else {
        current_slide = 0;
    }
    dummy1 = 0;
    dummy2 = 0;
};
start = setInterval(img_cycles, 1000);

function pause() {
    clearInterval(start);
}

function resume() {
    start = setInterval(img_cycles, 1000);
}

function previous_turn() {
    clearInterval(start);
    if (dummy1 === 0) {
        current_slide--;
    }
    if (current_slide > 0) {
        current_slide = current_slide - 1;
        console.log(current_slide);
        document.getElementById("image").src = slides[current_slide];
    } else {
        current_slide = 3;
        console.log(current_slide);
        document.getElementById("image").src = slides[current_slide];
    }
    dummy1++;
    dummy2++;
}

function next_turn() {
    if (dummy2 == 0) {
        current_slide--;
    }
    if (current_slide < 3) {
        ++current_slide;
        document.getElementById("image").src = slides[current_slide];
    } else current_slide = 0; {
        document.getElementById("image").src = slides[current_slide];
    }
    dummy1++;
    dummy2++;
}