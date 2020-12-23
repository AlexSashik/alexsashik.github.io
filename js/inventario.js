$('#icons-nav').click(function (ev) {
    idItems = ['engranaje', 'cartas', 'caballo', 'comida', 'armas'];
    if(idItems.includes(ev.target.id)) {
        $('#icons-nav .active').removeClass('active');
        $('#'+ev.target.id).addClass('active');
        clearBluringOnItem();

        let firstTitleBlock = $('#equipo-block .first>p'),
            secondTitleBlock = $('#equipo-block .second>p'),
            thirdTitleBlock = $('#equipo-block .third>p');

        switch (ev.target.id) {
            case 'engranaje':
                firstTitleBlock.text('Ремесло');
                secondTitleBlock.text('Алхимия');
                $('#equipo-block .items').css('display', 'none');
                break;
            case 'cartas':
                firstTitleBlock.text('Вещи для заданий');
                secondTitleBlock.text('Прочее');
                $('#equipo-block .items').css('display', 'flex');
                break;
            case 'caballo':
                firstTitleBlock.text('Еда');
                secondTitleBlock.text('Плотва');
                $('#equipo-block .items').css('display', 'none');
                break;
            case 'comida':
                firstTitleBlock.text('Масла');
                secondTitleBlock.text('Эликсиры');
                $('#equipo-block .items').css('display', 'none');
                break;
            case 'armas':
                firstTitleBlock.text('Оружие');
                secondTitleBlock.text('Доспехи');
                $('#equipo-block .items').css('display', 'none');
                break;
        }
    }
});

$('.item').click(function () {

    if ($(this).children().length) {
        let period = 3000,
            reloadTime = 50,
            t0 = performance.now(),
            t, $this = $(this);

        clearBluringOnItem();

        $('body .double-border-active').removeClass('double-border-active');
        $($(this).parents()[1]).addClass('double-border-active');

        bluringFrameId = setTimeout(function run() {
            t = performance.now() - t0;
            $this.css('borderColor', 'rgb(255, 255, 255,' + (0.7*Math.pow(Math.cos(2*3.14*t/period), 2)+0.3) + ')');
            bluringFrameId = setTimeout(run, reloadTime);
        }, reloadTime);
    }
}).dblclick(function() {
    if ($(this).children().length && $(this).children()[0].className === 'carta icon') {
        clearBluringOnItem();
        $('#background').addClass('visible');
    }
});

$('#close').click(() => window.location.href = './index.html');

$('#equipo-block').css('height', document.documentElement.clientHeight - 172 - 100);

window.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
        $('#background').removeClass('visible');
    }
});

$('#carta-esc').click(() => $('#background').removeClass('visible'));

function clearBluringOnItem () {
    if (typeof(bluringFrameId) !== "undefined" && bluringFrameId !== null)
        clearTimeout(bluringFrameId);
    $('.item').css('borderColor', 'transparent');
}
