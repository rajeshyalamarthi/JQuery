$(document).ready(Iamready);


function Iamready() {

        $("#hai").click(function () {
            $("p").hide();

        });
    
        $("#hello").click(function () {
            $("p").show();
        });
    
}

 //using * selector
var elementcount = $("#test").find("*").length;
$("body").prepend("<h2>" + elementcount + "Elements found </h3>");

 //fading

$(document).ready(fadein);
$(document).ready(fadeout);

function fadein() {
    $(".b1").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(2000);
    });

}

function fadeout() {
    $(".b2").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(2000);
    });

}
// sum of all

$(document).ready(sum);


function sum() {

    $("#myTable").on('input', '.txtCal', function () {
        var calculatedTotalsum = 0;
        $("#myTable .txtCal").each(function () {
            var gettextboxvalue = $(this).val();
            if ($.isNumeric(gettextboxvalue)) {
                calculatedTotalsum = calculatedTotalsum + parseFloat(gettextboxvalue);
            }
        });
        $("#total_sum_value").html(calculatedTotalsum);
    });
}





     




