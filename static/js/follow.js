$(function(){


    $(".followButton").click(function(){

        console.log($(this).text().trim())
       
        var value = $(this).text().trim() 
        var pathname = window.location.pathname;
           
        if( value == "Follow"){
           
            // kullanıcı takıp edıcek 
            console.log("follow durumundaymıs ")

            from =$(this).data("from") ;
            to =$(this).data("to") ;

            var url = '/follow/'

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    'from': from,
                    'to': to,
                })

            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                console.log("data" ,data )
                 
                if(pathname.startsWith("/followers")) {
                    // followersPage sayfasındakı butonlar ıcın bu kısma gırıcek
                    $(this).text("Following")
                    $(this).css("color","rgb(172, 81, 208)")
                    $(this).css("background-color","white")
                }

                else if(window.location.pathname != "/") {

                    

                console.log("sayfadakı butonlar : " , $(".followButton"))

                $(".followButton").text("Following")
                if (pathname.startsWith('/stories')) {
                    $(".followButton").css("color","green")
                    $(".followButton").css("background-color","white")
                }

                else {
                    $(".followButton").css("color","rgb(172, 81, 208)")
                    $(".followButton").css("background-color","white")
                
                }
          

                var followersNum = $(".followers span").text() ; 

                $(".followers span").text( parseInt( followersNum ) +1 )

                }

                else {

                    // anasayafadakı who to follow alanında followbtn ler ıcın ayrı js yazılmalıydı 
                    //   anasayfadakı followbtn ler iiçin yazılıyor 


                    $(this).text("Following")
                    $(this).css("color","white")
                    $(this).css("background-color","black")

                }

            })




           
        }
        else {

            // demekki following durumundaymıs followa donucek yanı bu kullanıcıyı takıp etmekten cıkıcak 

           
            // kullanıcı takıpten cıkıcak  

            from =$(this).data("from") ;
            to =$(this).data("to") ;

            var url = '/unfollow/'

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify({
                    'from': from,
                    'to': to,
                })

            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log("data" ,data )


                if(pathname.startsWith("/followers")) {
                    // followersPage sayfasındakı butonlar ıcın bu kısma gırıcek
                    $(this).text("Follow")
                    $(this).css("color","white")
                    $(this).css("background-color","rgb(172, 81, 208)")
                }

                else if(window.location.pathname != "/") {

                console.log("sayfadakı butonlar : " , $(".followButton"))
                $(".followButton").text("Follow")

                if (pathname.startsWith('/stories')) {
                    $(".followButton").css("background-color","green")
                    $(".followButton").css("color","white")

                }

                else {
                    $(".followButton").css("color","white")
                    $(".followButton").css("background-color","rgb(172, 81, 208)")
                }


                
                var followersNum = $(".followers span").text() ; 

                $(".followers span").text( parseInt( followersNum ) -1 )

                }
                else {

                    $(this).text("Follow")
                    $(this).css("color","black")
                    $(this).css("background-color","white")
                }
            })








        }
        

    })


})