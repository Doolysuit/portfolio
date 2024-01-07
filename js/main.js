// alert('aaa')

$(function(){
    // top 버튼
    $(window).scroll(function(){
        if($(this).scrollTop() <= 2500){
            $('.gotop').fadeOut()
        }else{
            $('.gotop').fadeIn()
        }
    })

    $('.gotop, .name').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : '0'
        },500)
    })

    // 메뉴 클릭 위치 이동 이벤트
        $('.menu > a').click(function(e){
            e.preventDefault();
            $('html , body').animate({
                scrollTop : $(this.hash).offset().top
            },500)
        })

})





// 시간
function Time() {
    const date = new Date(); 
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";
  
    if (hour > 12) {
      session = "PM";
    }
  
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    second = (second < 10) ? "0" + second : second;
  
    const time = hour + ":" + min + ":" + second + " " + session;
  
    document.getElementById("clock").innerText = time;
  
    setTimeout(() => Time(), 1000);
  }
  
  Time();
