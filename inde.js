$(".my-nav").click(function () {
    $(".nav-list").slideToggle("slow");
});

var vissibleDiv = 0;
function showDiv() {
    $(".room-content").hide();
    $(".room-content:eq(" + vissibleDiv + ")").show();
    
}
showDiv();

$(".angle-right").click(function () {
    if (vissibleDiv == $(".room-content").length - 1) {
        vissibleDiv = 0;
    } else {
        vissibleDiv++;
    }

    showDiv();
});


$(".angle-left").click(function () {
    if (vissibleDiv == 0 ){
        vissibleDiv = $(".room-content").length - 1;
    } else {
        vissibleDiv--;
    }

    showDiv();
})


