$(document).ready(function () {
    $('.search-btn').click(()=>{
        // console.log('clicked');
        $('.search-form').show(1000);
    })
    $('.close-search-form').click(()=>{
        $('.search-form').hide(1000);
    })
});