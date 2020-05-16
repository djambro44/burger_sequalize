$(document).ready(function(){

    $("#devourButton").on("click", function(){
        console.log($(this));
        var burgerId = $(this).data("burgerid");
        var devoured = true;
        $.ajax({
            url: "/api/burger/" + burgerId,
            type: "put",
            data: {
                devoured: devoured
            },
            success: function(result){
                console.log(result);
            }
        });
    })



});

