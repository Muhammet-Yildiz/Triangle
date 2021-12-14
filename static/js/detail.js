$(function(){

    const fixedUserInfo =$(".fixedUserInfo2") ;

    const body = $("body");
    // console.log("body height : " , body.height())

    $(window).on("scroll" ,()=>{


        if( $(window).scrollTop()  > 283 && body.height() -800 >$(window).scrollTop()  ) {
            fixedUserInfo.css("opacity","1")

        }
        else {
            fixedUserInfo.css("opacity","0")

        }
      
    })
    

// -----------------------------------------------------------
    // detay safasındakı bookmarklar fazla bırıne tıkladıgımızda dıgerlerıde etkılenmelı eger readlıste eklendıyse hepsının classı degısmelı 

     const addBookmarkIcon = $(".addBookmarkIcon")

    addBookmarkIcon.click(function(e){

        tıklanan = e.target ; 
        if ($(tıklanan).hasClass("bi-bookmark-plus")) {
            $(tıklanan).addClass("bi-bookmark-fill").removeClass("bi-bookmark-plus")
        }
        else {
            $(tıklanan).removeClass("bi-bookmark-fill").addClass("bi-bookmark-plus")
        }
        for(var  i =0 ; i<3 ;i++) {
            element =$(addBookmarkIcon)[i]
            // console.log("element -" , i , " : ", element)
            if ($(element).hasClass("bi-bookmark-plus")) {

                $(element).addClass("bi-bookmark-fill").removeClass("bi-bookmark-plus")
            }
            else {
                $(element).removeClass("bi-bookmark-fill").addClass("bi-bookmark-plus")
            }
        }
    })
  

    // ------------------------------------------------------
    // ÖNEMLİ BİR BOLUM MAKALELERIN ALKISLAMA DURUMU HEM BACKENDDE HALLEDILMELI HEMDE GORUNTUDE 

    
    $(".clapBtn").click(function(e) {
        e.preventDefault();
    
        $(this).html(`<svg width="25" height="25" aria-label="clap"><g fill-rule="evenodd"><path d="M11.74 0l.76 2.97.76-2.97zM16.63 1.22L15.2.75l-.4 3.03zM9.79.75l-1.43.47 1.84 2.56zM22.47 13.3L19.45 8c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M12.58 9.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"></path><path d="M15.81 9.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.72.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L7.2 6.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L3.8 7.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L2.58 14.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"></path></g></svg>`)


        id = $(this).data("id")

        $.ajax({
                url: "/addClapToStory/" + id,
                method: "GET",
                success: function(data) {
                  
                    console.log("data : " , data  )
                   
                    $(".followNumber").text( `${data.clapNumber}`)
                }
        })

    })

    



        // TABI SILMEK ICIN O REMOVE İTEM YERI ACILMALI
        $(".storyDot").click(function() {
                const itemOptions = $(this).next()

                if (itemOptions.css("display") == 'none') {
                    $(itemOptions).css("display", "block")
                } else {
                    $(itemOptions).css("display", "none")
                }

            })
            // GIRIS YAPAN KULLANICI YAZDIGI HIKAYEYI SILICEK 

        $(".deleteItem").click(function(e) {
            e.preventDefault();

            storyId = $(this).data("id")
            currentUser = $(this).data("user")
            console.log(storyId)

            $.ajax({
                url: "/deleteStory/" + storyId,
                method: "GET",
                success: function(data) {

                    console.log("data : ", data)
                    // user = `{{request.user}}`
                    console.log("currentUser : ", currentUser)

                    window.location.pathname =  `/stories/@${currentUser}`


                    // BURAYA BIR BASARIYLA STORY SILINDI ALERTI GONDERMEK LAZIM 
                    
                }
            })

        })

})