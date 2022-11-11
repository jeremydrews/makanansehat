let height = 300;
let width = 300;

// slider
let slideItem = 4;
let sliderItemsWidth = width*slideItem;

$('#slider').css({
    height: height + 'px',
    width: width + 'px',
    overflow: 'hidden',
    // backgroundColor: 'red',
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
    if(index<0) index = 3;
    else if(index>3) index = 0;

    $('#slider-items').animate(
        {
            left: -width * index,
        },
        750
    );
}

$('#login').click(function(){
    slide(-1);
});

$('#register').click(function(){
    slide(1);
});

$('#profile').click(function(){
    slide(1);
});