/**
 * Created by Ashish Goyal on 6/13/2017.
 */
$(document).on("scroll", function(){
    if
    ($(document).scrollTop() > 50){
        $(".navbar").addClass("shrink");
    }
    else
    {
        $(".navbar").removeClass("shrink");

    }
});