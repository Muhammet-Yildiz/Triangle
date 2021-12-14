$(function(){

    const dropdownWrap = $('.dropdownWrap')
    const userImage = $('.userImage')
    

    userImage.on("click",()=>{
        if( dropdownWrap.css("display") =='none') {
            $(dropdownWrap).css("display","flex") 
        }else {
            $(dropdownWrap).css("display","none") 
    
        }
    })
  
})