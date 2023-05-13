// download function
function download(){
    alert("Belum ada CV yang dapat didownload");
};

// submit message function
var submit = document.querySelector('.submit');
submit.addEventListener('click', function(){
    alert("Fitur ini belum tersedia!")
});

// toggle dark mode
var checkbox = document.querySelector('#toggle');
var html = document.querySelector('html');
checkbox.addEventListener('click', function() {
    checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
});

// alert
function first(){
    var nav = document.querySelector('nav');
    nav.classList.remove('hidden');
    nav.classList.add('flex');

    var project = document.querySelector('#project');
    project.classList.remove('hidden');

    var x = document.querySelector('.testing');
    x.classList.remove('fixed');
    x.classList.add('hidden');
}