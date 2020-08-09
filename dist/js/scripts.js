// Navigation
//function expression to select elements
const selectElement = (s) => document.querySelector(s);

//open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//close the menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

// Count section
jQuery(document).ready(function ($) {
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
})

//Call carousel manually 
$('.carousel').carousel()

// // extension
// var link = 'http://127.0.0.1:5500/about.html';
// link.split('.html')[0];
// window.history.replaceState(null, null, link);