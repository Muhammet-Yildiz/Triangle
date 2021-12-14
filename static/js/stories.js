 $(function() {
       

       

        //-------------------------------------------------------

        const fixedUserInfo = $(".fixedUserInfo2");

        $(window).on("scroll", () => {

            if ($(window).scrollTop() > 55) {
                $(".fixedUserInfo").css({
                    "position": "fixed",
                    "left": "150px",
                    "top": "130px",
                })
            } else {
                $(".fixedUserInfo").css({
                    "position": "absolute",
                    "left": "150px",
                    "top": "180px",

                })
            }

        })




        
            // GIRIS YAPAN KULLANICI YAZDIGI HIKAYEYI SILICEK 

        $(".deleteItem").click(function(e) {
            e.preventDefault();

            storyId = $(this).data("id")
            console.log(storyId)

            $.ajax({
                url: "/deleteStory/" + storyId,
                method: "GET",
                success: function(data) {

                    console.log("data : ", data)
                    user = `{{request.user}}`
                    console.log("user : ", user)

                    window.location.pathname = "/stories/@{{user}}"

                }
            })

        })



    })