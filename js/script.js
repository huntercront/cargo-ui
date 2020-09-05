document.querySelector('#point-from input').addEventListener('input', function(e) {
    var curentControl = document.querySelector('#point-from');
    var options = this.closest('.point-peaker').querySelector('.airports-list');
    var optionInner = this.closest('.point-peaker').querySelector('.airports-list-inner');
    var innerElements = this.closest('.point-peaker').querySelector('.airports-elements');
    if (this.value.length > 0) {
        curentControl.classList.add('active');
    } else {
        curentControl.classList.remove('active');
    }
    if (this.value.length > 1) {
        optionInner.style.maxHeight = innerElements.offsetHeight + 'px';
        options.classList.add('show');
        setTimeout(function() {
            innerElements.innerHTML = '<div class="airport-el"><div class="airport-el-inner c-s"><div class="airport-icon c-c"><i class="icon-air-terminal"></i></div><div class="airport-name">Erfurt<span class="airport-coutry">Germany</span></div><div class="airport-code">ERF</div></div></div><div class="airport-el"><div class="airport-el-inner c-s"><div class="airport-icon c-c"><i class="icon-air-terminal"></i></div><div class="airport-name">Billund<span class="airport-coutry">Danmark</span></div><div class="airport-code">BLL</div></div></div><div class="airport-el"><div class="airport-el-inner c-s"><div class="airport-icon c-c"><i class="icon-air-terminal"></i></div><div class="airport-name">Alta, Finnmark<span class="airport-coutry">Norge</span></div><div class="airport-code">ALF</div></div></div><div class="airport-el"><div class="airport-el-inner c-s"><div class="airport-icon c-c"><i class="icon-air-terminal"></i></div><div class="airport-name">Alta, Finnmark<span class="airport-coutry">Norge</span></div><div class="airport-code">ALF</div></div></div>'
        }, 1500)
    } else {
        optionInner.style.maxHeight = '0px';
        options.classList.remove('show');

        setTimeout(function() {
            innerElements.innerHTML = '<div class="airport-el loading"> <div class="airport-el-inner c-s"> <div class="airport-icon c-c"> <div class="placeholder-load"></div></div><div class="airport-name"> <div class="placeholder-load"></div></div><div class="airport-code"> <div class="placeholder-load"></div></div></div></div> <div class="airport-el loading"> <div class="airport-el-inner c-s"> <div class="airport-icon c-c"> <div class="placeholder-load"></div></div><div class="airport-name"> <div class="placeholder-load"></div></div><div class="airport-code"> <div class="placeholder-load"></div></div></div></div> <div class="airport-el loading"> <div class="airport-el-inner c-s"> <div class="airport-icon c-c"> <div class="placeholder-load"></div></div><div class="airport-name"> <div class="placeholder-load"></div></div><div class="airport-code"> <div class="placeholder-load"></div></div></div></div> <div class="airport-el loading"> <div class="airport-el-inner c-s"> <div class="airport-icon c-c"> <div class="placeholder-load"></div></div><div class="airport-name"> <div class="placeholder-load"></div></div><div class="airport-code"> <div class="placeholder-load"></div></div></div></div>'
        }, 100)
    }
})

document.querySelector('.app-menu-icon').addEventListener('click', function(e) {
    this.classList.toggle('adv-setings-show');
    document.querySelector('.as-container').classList.toggle('menu-open')
})


var nextMenuButton = document.querySelectorAll('[data-next]');
var mainMenu = document.querySelector('.as-inner');
var heightMenu = document.querySelector('.as-outer')
var backButton = document.querySelectorAll('.back-to-menu');

for (var z = 0; z < nextMenuButton.length; z++) {
    console.log(nextMenuButton[z])
    var elem = nextMenuButton[z];
    elem.onclick = function() {
        var nextMenu = document.querySelector('[data-menu="' + this.getAttribute('data-next') + '"]');
        nextMenu.classList.add('active-menu');
        mainMenu.classList.remove('active-menu');
        heightMenu.style.maxHeight = nextMenu.offsetHeight + 'px';
    };
}

for (var z = 0; z < backButton.length; z++) {
    console.log(backButton[z])
    var elem = backButton[z];
    elem.onclick = function() {

        this.closest('.as-hiden').classList.remove('active-menu');
        mainMenu.classList.add('active-menu');
        heightMenu.style.maxHeight = mainMenu.offsetHeight + 'px';
    };
}


// date

(function() {

    'use strict';

    var dayNamesShort = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var icon = '<svg viewBox="0 0 512 512"><polygon points="268.395,256 134.559,121.521 206.422,50 411.441,256 206.422,462 134.559,390.477 "/></svg>';

    var root = document.getElementById('picker');
    var dateInput = document.getElementById('date');
    var altInput = document.getElementById('alt');
    var doc = document.documentElement;

    function format(dt) {
        return Picker.prototype.pad(dt.getDate()) + ' ' + monthNames[dt.getMonth()].slice(0, 3) + ' ' + dt.getFullYear();
    }

    function show() {
        root.classList.add('active');
    }

    function hide() {
        root.classList.remove('active');
        doc.removeEventListener('click', hide);
    }

    function onSelectHandler() {

        var value = this.get();

        if (value.start) {
            dateInput.value = value.start.Ymd();
            altInput.value = format(value.start);
            hide();
        }
    }

    var picker = new Picker(root, {
        min: new Date(dateInput.min),
        max: new Date(dateInput.max),
        icon: icon,
        twoCalendars: false,
        dayNamesShort: dayNamesShort,
        monthNames: monthNames,
        onSelect: onSelectHandler
    });

    root.parentElement.addEventListener('click', function(e) { e.stopPropagation(); });

    dateInput.addEventListener('change', function() {

        if (dateInput.value) {
            picker.select(new Date(dateInput.value));
        } else {
            picker.clear();
        }
    });

    altInput.addEventListener('focus', function() {
        altInput.blur();
        show();
        doc.addEventListener('click', hide, false);
    });

}());