$(document).ready(function(){
    $("#nb-home").on("click",function(){
        $("#infoRow").fadeToggle();
        $("#whatIDo").fadeToggle();
        $("#whatTheySay").fadeToggle();
    });
});

$(document).ready(function(){
    $("#nb-about").on("click",function(){
        $("#bioRow").fadeToggle();
        $("#education").fadeToggle();
        $("#experience").fadeToggle();
        $("#languages").fadeToggle();
        $("#loveTo").fadeToggle();
    });
});

$(document).ready(function(){
    $("#nb-contact").on("click",function(){
        $("#contact").fadeToggle();
    });
});

