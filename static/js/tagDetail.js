$(function(){
    var height =$(".section_two ").height() ;


    $(window).on("scroll" ,()=>{   
            
            if(height <1300 && height>1200) {
                $(".section_two ").css("top" ,"-500px")
            }
            if(height <1200 && height>1100) {
                $(".section_two ").css("top" ,"-425px")
            }
            if(height <1100 && height>1000) {
                $(".section_two ").css("top" ,"-400px")
            }
            else if(height <1000 && height>900) {
                $(".section_two ").css("top" ,"-220px")
            }
            else if(height <900 && height>800) {
                console.log("height 900 ile 850  arasında ")

                $(".section_two ").css("top" ,"-200px")
            }
            else if (height <700) {
                console.log("height 700 altında ")
                $(".section_two ").css("top" ,"100px")

            }
        })
})