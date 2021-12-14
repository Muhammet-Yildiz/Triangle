
    $(function() {

        $("#id_title").attr("placeholder", "Title")



        $("#id_title").on("keyup change paste", function(e) {
            if (e.target.value.length > 0) {
                $(".publishBtn").prop("disabled", false)

                $(".publishBtn").removeClass("disable")
            } else {
                $(".publishBtn").addClass("disable")
                $(".publishBtn").prop("disabled", true)

            }
        })



        // hıkayenın tag larını belırlemek ıcın goruntude

        $(".tagsEmp li ").click(function(e) {

            value = $(this).text().trim()
            // console.log("value : " , value)
            options = $("#id_topic option ")
            if( $(e.target).hasClass("active")) {
                // demekki daha once actıve mıs ozaman onu selectın false yapalım 
                $(e.target).removeClass("active")
                for (let index = 0; index < options.length; index++) {
                    const element = options[index];
                    //  console.log($(element).prop("selected"))
                    txt =$(element).text()

                    if(value === txt ){

                        $(element).prop("selected",false)
                    }
                    
                }
            }
            else {
                $(e.target).addClass("active")
                
                 for (let index = 0; index < options.length; index++) {
                    const element = options[index];
                    //  console.log($(element).prop("selected"))
                    txt =$(element).text()

                    if(value === txt ){

                        $(element).prop("selected",true)
                    }
                    
                }
            }
            


           
            

        })


    // şimdi yeni bir makale ekleme işlemi yapıcaz bunu jquery ıle alıcaz degerlerı 
         $(".publishBtn").click(function() {

           
            $(".publish").trigger("click");


        })
        

        $(".StoryImageField").click(function() {
            // console.log("tıkladı amk ")
            $("#id_article_image").trigger("click");

        })
        
        $("#id_article_image").change(function(e){
            let selected = e.target.files[0]
            // console.log(selected)

            $(".StoryImageField .txt").text(selected.name)


        })




    })