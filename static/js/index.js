$(function(){

    // bu kısımda okuyucunun okuyacagı lıste ıcın readlıst olusturucaz yanı bookmark ıconuna basıldıgında backend post gonderıcez o artıcle ıdsını duruma gore eklıcek 

    const addBookmarkIcon = $(".addBookmarkIcon")


    // öncelikle toggle durumu yapalım yanı goruntuyu halledelım 


    addBookmarkIcon.on("click",function(){
    //   <i class="bi bi-bookmark-fill"></i>
    // bi-bookmark-plus 
        
        // console.log($(this).attr("class"))

        if ($(this).hasClass("bi-bookmark-plus")) {

            $(this).removeClass("bi-bookmark-plus").addClass("bi-bookmark-fill")
        }
        else {
            $(this).removeClass("bi-bookmark-fill").addClass("bi-bookmark-plus")

        }
        id =$(this).data("id") ;
        console.log( id) ;

         var url = '/articles/checkReadList/'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                'articleId': id,
            })

        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log("data" ,data )
        })





      
      
      
      
      
      
      
    })



    // ----------------------------------------------

    // suggest alanının scroll a gore konum ayarlaması yapıcaz absolute mu yoksa fıxed mı duruma gore 
  
    var height =$(".SuggestUser_s ").height() ;


    $(window).on("scroll" ,()=>{   
        
        if(height <1300 && height>1200) {
            $(".SuggestUser_s ").css("top" ,"-500px")
        }
        if(height <1200 && height>1100) {
            $(".SuggestUser_s ").css("top" ,"-425px")
        }
        if(height <1100 && height>1000) {
            $(".SuggestUser_s ").css("top" ,"-400px")
        }
        else if(height <1000 && height>900) {
            $(".SuggestUser_s ").css("top" ,"-220px")
        }
        else if(height <900 && height>800) {
            console.log("height 900 ile 850  arasında ")

            $(".SuggestUser_s ").css("top" ,"-200px")
        }
        else if (height <700) {
            console.log("height 700 altında ")
            $(".SuggestUser_s ").css("top" ,"100px")

        }
    })
    
})