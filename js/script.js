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
    var icon = '<i class="icon-chevron-right"></i>';

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




// animateValue('.preloader-counter', '.preloader-progress', 0, 100, 3000);
var container = document.querySelector('.dropdown-list-inner');
if (!container) {

} else {
    var ps = new PerfectScrollbar(container, {
        wheelSpeed: 0.225,
        wheelPropagation: false,
        minScrollbarLength: 3,
    });

}
document.querySelector('.custom-dropdown input').addEventListener('focus', function(e) {
    console.log('focus')
    e.preventDefault()
    document.querySelector('.custom-dropdown').classList.add('active');

})



for (var z = 0; z < document.querySelectorAll('.dropdown-list-el').length; z++) {
    var elem = document.querySelectorAll('.dropdown-list-el')[z];
    elem.onclick = function() {
        document.querySelector('.custom-dropdown input').value = this.textContent.replace(/(^\s*)|(\s*)$/g, '');
        if (document.querySelector('.selected')) {
            document.querySelector('.selected').classList.remove('selected')
        }
        this.classList.add('selected')
        document.querySelector('.custom-dropdown').classList.remove('active')
        document.querySelector('.custom-dropdown').classList.add('input-selected')
    };
}

for (var z = 0; z < document.querySelectorAll('.input-number-add').length; z++) {
    var elem = document.querySelectorAll('.input-number-add')[z];
    elem.onclick = function() {
        inputNumber = this.closest('.input-number').querySelector('input')
        inputNumber.value = parseInt(inputNumber.value) + 1
    };
}

for (var z = 0; z < document.querySelectorAll('.input-number-remove').length; z++) {
    var elem = document.querySelectorAll('.input-number-remove')[z];
    elem.onclick = function() {
        inputNumber = this.closest('.input-number').querySelector('input');
        if ((inputNumber.value) > inputNumber.getAttribute('min')) {
            inputNumber.value = parseInt(inputNumber.value) - 1
        }

    };
}
document.querySelector('#package').addEventListener('input', function(e) {
    if (this.checked == true) {
        document.querySelector('.packege-els').style.maxHeight = document.querySelector('.packege-els-outer').scrollHeight + 'px';
        document.querySelector('.packege-els-outer').classList.add('visible')
        setTimeout(function() {
            document.querySelector('.packege-els').style.maxHeight = 'inherit'
        }, 200)
    } else {
        document.querySelector('.packege-els').style.maxHeight = document.querySelector('.packege-els-outer').scrollHeight + 'px';
        document.querySelector('.packege-els-outer').classList.remove('visible');
        setTimeout(function() {
            document.querySelector('.packege-els').style.maxHeight = '0px'
        }, 10)

    }
})



document.querySelector('.add-packege').addEventListener('click', function(e) {
    document.querySelector('.adv-packege-el').innerHTML += '<div class="packege-el packege-new"> <div class="packege-el-inner"> <div class="row"> <div class="ms-2"> <div class="input-wrapper input-s"> <label for="Item1" class="custom-label">Items</label> <div class="input-number"> <button class="number-button input-number-add">+</button> <input id="Item1" type="number" autocomplete="off" aria-required="true" aria-invalid="false" min="1" value="1"> <button class="number-button input-number-remove">-</button> </div> </div> </div> <div class="col"> <div class="input-wrapper input-s"> <label><span class="custom-label">Item length</span><input placeholder="kg" type="text" autocomplete="off" aria-required="true" aria-invalid="false"></label> </div> </div> <div class="col"> <div class="input-wrapper input-s"> <label><span class="custom-label">Item width</span><input placeholder="kg" type="text" autocomplete="off" aria-required="true" aria-invalid="false"></label> </div> </div> <div class="col"> <div class="input-wrapper input-s"> <label><span class="custom-label">Item height</span><input placeholder="kg" type="text" autocomplete="off" aria-required="true" aria-invalid="false"></label> </div> </div> <div class="col"> <div class="input-wrapper input-s"> <label><span class="custom-label">Item weight</span><input placeholder="kg" type="text" autocomplete="off" aria-required="true" aria-invalid="false"></label> </div> </div> </div> </div> </div>'

})