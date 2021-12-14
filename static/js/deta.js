// ÖNCEKİ DETAİL SAYFASI OLUSTURULMUS DURUMA GORE SILINICEK SONRADAN  



// $('.textarea--auto-height').each(function() {
//     let $textarea = $(this);
//     var offset = this.offsetHeight - this.clientHeight;
//     var resizeTextarea = function() {
//         $textarea.css('height', '40px ')
//             .css('height', $textarea.prop('scrollHeight') + offset);
//     };
//     $textarea.on('keyup click input', resizeTextarea);
//     resizeTextarea();

// })

// $(".yorum-input ").on("keyup paste change", function() {

//     // console.log($(this).val())
//     if ($(this).val() == "") {
//         $(".comment-btn").attr("type", "button")
//         $(".comment-btn").prop("disabled", true)
//         $(".comment-btn").css("background-color", "rgb(236, 233, 233)")
//     } else {
//         $(".comment-btn").prop("disabled", false)
//         $(".comment-btn").attr("type", "submit")
//         $(".comment-btn").css("background-color", "#dc3545")

//     }

// })
// $(" .answer-input ").on("keyup paste change", function() {

//     console.log($(this).val())
//     if ($(this).val() == "") {
//         $(".yanıtla2").attr("type", "button")
//         $(".yanıtla2").css("background-color", "rgb(236, 233, 233)")
//     } else {
//         $(".yanıtla2").attr("type", "submit")
//         $(".yanıtla2").css("background-color", "#dc3545")

//     }

// })


// $(".görüntüle").click(function(el) {
//     var answer_field = el.target.parentElement.parentElement.parentElement.nextElementSibling

//     $(answer_field).animate({

//         "height": "toggle"

//     }, 200)
//     var text = $(this).text()
//     console.log(text)
//     if (text.indexOf("gizle") == -1) {

//         $(this).text(text.replace('görüntüle', 'gizle'));

//     } else {
//         $(this).text(text.replace('gizle', 'görüntüle'));

//     }
//     // console.log(text.indexOf("gizle"))
//     // YAPTIM 27 OCAK ADIM ADIM GİDİYORUZ İLERİ 

//     $(".fa-sort-up").toggleClass("rotate")

// })

// $(".yanıtla1").click(function(el) {

//     var yanıtlaform = el.target.parentElement.nextElementSibling
//     console.log(yanıtlaform)
//     $(yanıtlaform).slideDown(120)
// })


// $(".cancel").click(function(el) {
//     var yanıtlaform = el.target.parentElement.parentElement.parentElement.parentElement.parentElement

//     $(yanıtlaform).slideUp(250)

// })



// //comment   like tusuna bastıgında sayfa yenıletmicem 

// $(".likelink").click(function(e) {
//     e.preventDefault()
//     console.log("like tusuna basıldı ")
//     likeicon = $(this).find("i")

//     dislikeicon = $(this).siblings("a").find("i")

//     console.log(dislikeicon)

//     likespan = $(this).next()
//     dislikespan = $(this).siblings("span").slice(1)

//     console.log(dislikespan)
//     commentid = $(this).data("commentid")
//     $.ajax({

//         method: "GET",
//         url: "/articles/commentLike/" + commentid,
//         success: function(data) {
//             console.log("tamam engellendi like  bro ")
//                 // console.log(data.likesayı)
//             console.log(data)
//             likespan.text(data.likesayı)
//             dislikespan.text(data.dislikesayı)

//             // likespan.css("color", "orange")
//             // dislikespan.css("color", "black")

//             // likeicon.css("color", "orange")


//             // console.log(likeicon.css("color"))
//             if (likeicon.hasClass("orange")) {

//                 // burda sunu kontrol ettik sayfa yenılendıgınde orange yoksa ve hala renk ligtblue ise toggleclassı sıkıntı oluyordu bunu hallettik 
//                 likeicon.removeClass("orange")

//             } else {
//                 if (likeicon.css("color") == "rgb(0, 102, 255)") {
//                     likeicon.css("color", "black")

//                 } else {
//                     likeicon.addClass("orange")

//                 }


//             }


//             dislikeicon.removeClass("orange")


//             dislikeicon.css("color", "black")


//         }

//     })





// })


// $(".dislikelink").click(function(e) {
//     e.preventDefault()
//     dislikeicon = $(this).find("i")

//     likeicon = $(this).siblings("a").find("i")

//     console.log(likeicon)

//     dislikespan = $(this).next()

//     likespan = $(this).siblings(".xa")


//     commentid = $(this).data("commentid")
//     $.ajax({

//         method: "GET",
//         url: "/articles/commentdisLike/" + commentid,
//         success: function(data) {
//             console.log("tamam engellendi disslike bro ")
//                 // console.log(data.dislikesayı)
//             console.log(data)
//             dislikespan.text(data.dislikesayı)

//             likespan.text(data.likesayı)

//             // dislikespan.css("color", "orange")
//             // likespan.css("color", "black")

//             // dislikeicon.css("color", "orange")
//             // ---

//             if (dislikeicon.hasClass("orange")) {

//                 // burda sunu kontrol ettik sayfa yenılendıgınde orange yoksa ve hala renk ligtblue ise toggleclassı sıkıntı oluyordu bunu hallettik 
//                 dislikeicon.removeClass("orange")

//             } else {
//                 if (dislikeicon.css("color") == "rgb(0, 102, 255)") {
//                     dislikeicon.css("color", "black")

//                 } else {
//                     dislikeicon.addClass("orange")

//                 }


//             }

//             likeicon.removeClass("orange")

//             likeicon.css("color", "black")

//         }

//     })


// })







// // şimdi yorum ekleme inputu en yukardakı butona tıkladıgımızda 
// // yorumu alıp durdurucaz backend e gondericez ve
// //onyuzdede sayfa yenılenmeden gostericez 

// $(".comment-btn").click(function(e) {

//     e.preventDefault()

//     _articleid = $(".comment-btn").data("articleid")

//     likesayısı = $(".xa").data("likeNumber")

//     // console.log(likesayısı)
//     içerik = $(this).prev().val()

//     all_comments = $(".ALL")

//     _usercomment = $(this).data('user')

//     _userphoto = $(this).data('photo')

//     console.log("tıklandı...")
//     console.log(_articleid, içerik)
//     $.ajax({

//         method: "POST",
//         url: "/articles/addComment/" + _articleid,
//         data: {
//             "içerik": içerik,
//             csrfmiddlewaretoken: $("input[name = csrfmiddlewaretoken]").val()

//         },
//         beforeSend: function() {
//             $(".comment-btn").text('Saving ...')
//             $(".comment-btn").attr("type", "button")
//             $(".comment-btn").prop("disabled", true)
//             $(".comment-btn").css("background-color", "rgb(236, 233, 233)")

//         },
//         success: function(data) {

//             console.log(data)
//             console.log("idmiz : ", data.commentid)

//             if (data.bool == true) {
//                 $(".yorum-input").val('')
//                     // element ekleyelim simdi 
//                 var _html = '<div class= "Comment-emp  animate__animated animate__zoomInDown" >\
//                 <div class="user-image">\
//                  <img  style="border-radius: 50%;" class="user-img" width="50px" height="50px"      src=' + _userphoto + '   alt="Card image">  \
//                  </div>\
//                  \
//                  <div class= "Comment-content">\
//                  <div class="Comment-author">\
//                     <h6>' + _usercomment + '  </h6>\
//                      <small>bir saniye önce</small>\
//                 </div>\
//                 \
//                 <pre>' + içerik + '</pre>\
//                 <div class="Comment-vote">\
//                 <a data-commentid=' + data.commentid + ' class="likelink">\
//                     <i style="color:black " class="fas fa-thumbs-up "></i>\
//                 </a>\
//                 <span class="xa" style="padding-right: 1rem;padding-left : 0.5rem "> ' + data.commentlike + '</span>\
//                 <a data-commentid=' + data.commentid + ' class="dislikelink">\
//                     <i style="color: black; " class="fas fa-thumbs-down "></i>\
//                 </a>\
//                 <span style="padding-left: 0.5rem;">' + data.commentdislike + '</span>\
//                 <button class="yanıtla1">YANITLA</button><br>\
//                 <br>\
//                 \
//                 </div>\
//                 \
//                 \
//                 <div class="Yanıtla-form">\
//                 <div class="yanıtla-emp">\
//                     <div class="user-image">\
//                         <img style="border-radius: 50%;" class="user-img" width="45px" height="45px" src="{{user.profile.profile_image.url}}" alt="Card image">\
//                     </div>\
//                     <div class="cevapla-input">\
//                         <form method="post">\
//                             \
//                             <textarea name="answer_content" class="textarea--auto-height answer-input" placeholder="Cevabınız .."></textarea>\
//                             <br><br>\
//                             <div class="btn-twice">\
//                                 <button class="cancel" type="button">İptal   </button>\
//                                 <button class="yanıtla2" type="button">YANITLA</button>\
//                             </div>\
//                         </form>\
//                         \
//                         \
//                     </div>\
//                 </div>\
//             </div>\
//                 '
//                 setTimeout(function() {
//                     $(".ALL").prepend(_html)

//                 }, 1200)
//             }
//             setTimeout(function() {

//                 $(".comment-btn").text('Yorum Yap')

//             }, 2100)

//             // $(".yorum-input").val(" ")

//         }

//     })



// })





// // ANSWER LİKE TUSUNA BASTIGIMIZDA AJAX İLE DEGER ALICAZ 



// $(".answerlikelink").click(function(e) {
//     e.preventDefault()
//     likeicon = $(this).find("i")

//     dislikeicon = $(this).siblings("a").find("i")

//     // console.log(dislikeicon)

//     likespan = $(this).next()
//     dislikespan = $(this).siblings("span").slice(1)


//     console.log("dislikespan =", dislikespan)
//     console.log("likespan =", likespan)
//     answerid = $(this).data("answerid")
//     $.ajax({

//         method: "GET",
//         url: "/articles/addAnswerLike/" + answerid,
//         success: function(data) {
//             console.log("tamam engellendi  answer like  bro ")
//                 // console.log(data.likesayı)
//             console.log(data)
//             likespan.text(data.answerlikesayısı)
//             dislikespan.text(data.answerdislikesayısı)

//             if (likeicon.hasClass("orange")) {
//                 // burda sunu kontrol ettik sayfa yenılendıgınde orange yoksa ve hala renk ligtblue ise toggleclassı sıkıntı oluyordu bunu hallettik 
//                 likeicon.removeClass("orange")

//             } else {
//                 if (likeicon.css("color") == "rgb(0, 102, 255)") {
//                     likeicon.css("color", "black")

//                 } else {
//                     likeicon.addClass("orange")

//                 }

//             }

//             dislikeicon.removeClass("orange")


//             dislikeicon.css("color", "black")


//         }

//     })





// })





// $(".answerdislikelink").click(function(e) {
//     e.preventDefault()
//     dislikeicon = $(this).find("i")

//     likeicon = $(this).siblings("a").find("i")

//     console.log(likeicon)

//     dislikespan = $(this).next()

//     likespan = $(this).siblings(".ta")


//     answerid = $(this).data("answerid")
//     $.ajax({

//         method: "GET",
//         url: "/articles/addAnswerdisLike/" + answerid,
//         success: function(data) {
//             console.log("tamam engellendi answer disslike bro ")
//                 // console.log(data.dislikesayı)
//             console.log(data)
//             dislikespan.text(data.answerdislikesayısı)

//             likespan.text(data.answerlikesayısı)

//             if (dislikeicon.hasClass("orange")) {

//                 // burda sunu kontrol ettik sayfa yenılendıgınde orange yoksa ve hala renk ligtblue ise toggleclassı sıkıntı oluyordu bunu hallettik 
//                 dislikeicon.removeClass("orange")

//             } else {
//                 if (dislikeicon.css("color") == "rgb(0, 102, 255)") {
//                     dislikeicon.css("color", "black")

//                 } else {
//                     dislikeicon.addClass("orange")

//                 }


//             }

//             likeicon.removeClass("orange")

//             likeicon.css("color", "black")

//         }

//     })


// })

