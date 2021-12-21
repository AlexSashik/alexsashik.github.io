/**
 * Restriction of the input data
 */

function maxLengthCheck(object) {
    if (object.value.length > object.max.length)
        object.value = object.value.slice(0, object.max.length)
}

function isNumeric (evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    let regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

/**
 * Password logic
 */

let pass = ['6942', '4269'];
let i = 1;

$('#submit').click(function () {
    if (pass.includes($('#pass').val())) {
        $('.guard').css('display', 'none');
        $('.pista').css('display', 'block');
        $("#tiama").css('display', 'inline-block').attr("src","img/secret/contento.jpg");
    } else {
        $('#pass').css('border', '2px solid red');
        $('#tiama').css('display', 'inline-block').attr("src","img/secret/sramo" + i + ".jpg");
        i = i === 1 ? 2 : 1;
    }
});
