  $(function() {
        $(".publishBtn").removeClass("disable")
        $(".publishBtn").prop("disabled", false)
        $(".publishBtn").text("Edit Story")


        a = $(".django-ckeditor-widget").next().next()

        // formun altındakı textlerı bu sekılde sıldık 
        $("form")
            .contents()
            .filter(function() {
                if (this.nodeType == 3) {
                    this.remove()
                }
            });

        $(a).css("display", "none")
        path = $(a).attr("href")

        $(".currentlyImage img ").attr("src", `${path}`)

        $("#text").css("color ", "red ")

        $("#id_article_image").change(function(e){
            console.log("calıstı ")

            $(".currentlyImage img ").css("filter" ,"blur(5px)")
        })



        




    })