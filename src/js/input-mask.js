var Inputmask = require('inputmask');

var selector = document.querySelector(".js-zip-code");
var im = new Inputmask({
    mask: "NL-9999 AA",
    showMaskOnHover: false,
    oncomplete: function(){
        selector.className += ' valid';
        selector.classList.remove('invalid');
    },
    onincomplete: function(){
        selector.className += ' invalid';
        selector.classList.remove('valid');
    }
});

im.mask(selector);