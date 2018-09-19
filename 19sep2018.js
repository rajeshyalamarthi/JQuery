
//siblings

$(document).ready(function () {
    siblings1();
    rajesh();
    catt();
    filters();
    newoperation();
    Childern();

    function siblings1() {

        //console.log($(".check .rajesh").siblings.css({ "color": "red", "border": "2px solid red" }));
        $(".check .rajesh").siblings().css({ "color": "red", "border": "2px solid red" });
    }

    function rajesh() {
      
        $("#att").click(alert1)
        $("#BtnID").click(alert2)
    

        function alert1() {
            alert("Dont touch Me")
        }
        function alert2() {
            empty();
            remove();
            detach();
            unwrap();
            alert("Go Away")


            function empty() {

                var a = $(".dol").empty();
                console.log(a);

            }

            function remove() {
                var b = $(".dol2").remove();
                console.log(b);
            }

            function detach() {
              var c=  $(".dol3").detach();
                console.log(c);
            }


            function unwrap() {
                var c = $(".dol4").unwrap();
                console.log(c);
            }
          
           
        }   }


    function catt() {
        $("#ca").attr("Id", "cattribute")

        $("#Toggle").click(checktoggle)

        //toggle
        function checktoggle() {
            $("#Toggle1Check").toggle("slow", "swing")
        }
    }
    // filters plus chaining
    function filters() {
        $("#Filters").click(checkfilter)
        function checkfilter() {
            $("div").first().css({ "background-color": "yellow" }).slideUp(2000).slideDown(2000);
        }
    }
    //using this and on
    function newoperation() {
       
     
        $("#no4").on("click", function () {
            var a = $("#no1").val();
            var b = $("#no2").val();
            var c = a + b;
            $("#no3").val(c); 
        })
       
    }

    function Childern() {
        $("#child").children().css({ "color": "red", "border": "2px solid red" })
    }



});



