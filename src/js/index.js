const b = document.body;

document.getElementById('button').onclick = function() {
    document.getElementById('languages').classList.remove('languages_none');

    b.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
    b.classList.add('noscroll');

}

document.getElementById('buttonX').onclick = function() {
    document.getElementById('languages').classList.add('languages_none');

    b.style.setProperty('--st', -(document.documentElement.scrollTop) + "px");
    b.classList.remove('noscroll');

}