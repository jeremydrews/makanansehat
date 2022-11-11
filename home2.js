let height = 590;
let width = 1440;

// slider
let slideItem = 5;
let sliderItemsWidth = width*slideItem;

$('#slider').css({
    height: height + 'px',
    width: width + 'px',
    overflow: 'hidden',
});

$('#slider-items').css({
    width: sliderItemsWidth + 'px',
    height: height + 'px',
    display: 'flex',
    position: 'relative',
})

$('.slider-img').css({
    height: height + 'px',
    width: width + 'px',
})

let index=0;

let slide = function(change){
    index += change;
    if(index<0) index = 4;
    else if(index>4) index = 0;

    $('#slider-items').animate(
        {
            left: -width * index,
        },
        500 //animation time
    );
}

$('#laquobtn').click(function(){
    slide(-1);
});

$('#raquobtn').click(function(){
    slide(1);
});