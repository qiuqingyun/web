/*返回顶部代码*/
// var sdelay=0;
// function returnTop() {
//  window.scrollBy(0,-400);//Only for y vertical-axis
//  if(document.body.scrollTop>0) { 
//   sdelay= setTimeout('returnTop()',50);
//  }
// }
jQuery(document).ready(function($) {  
      if($("meta[name=up]").attr("content")=="true"){
        if($(this).scrollTop()==0){
            $("#up").hide("normal");
          }
        $(window).scroll(function(event) {
          /* Act on the event */
          if($(this).scrollTop()==0){
            $("#up").hide("normal");
          }
          if($(this).scrollTop()!=0){
            $("#up").show("normal");
          }
        }); 
          $("#up").click(function(event) {
                /* Act on the event */
                $("html,body").animate({
                  scrollTop:"0px"},
                  666
                  )
              });
        }
    });
//下面是底部二维码显示代码
$(document).ready(function () {
    $("#wb").mouseover(function () {
        $("#qqm").hide("normal");
        $("#wxm").hide("normal");
    });
    $("#zh").mouseover(function () {
        $("#qqm").hide("normal");
        $("#wxm").hide("normal");
    });
    $("#yx").mouseover(function () {
        $("#qqm").hide("normal");
        $("#wxm").hide("normal");
    });
    $("#content").mouseover(function () {
        $("#qqm").hide("normal");
        $("#wxm").hide("normal");
    });
})
$(document).ready(function () {
    $("#wx").mouseover(function () {
        $("#wxm").show("normal");
        $("#qqm").hide("normal");
    });
    $("#wxm").mouseout(function () {
        $("#wxm").hide("normal");
    });
})
$(document).ready(function () {
    $("#qq").mouseover(function () {
        $("#qqm").show("normal");
        $("#wxm").hide("normal");
    });
    $("#qqm").mouseout(function () {
        $("#qqm").hide("normal");
    });
})
//下面是百度统计代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?5064b1480571aed0eed31b4e8be713a9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
// 下面是顶部菜单栏代码
$(document).ready(function() {
  $("#menu2 li a").wrapInner( '<span class="out"></span>' );
  $("#menu2 li a").each(function() {
    $( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
  });
  $("#menu2 li a").hover(function() {
    $(".out", this).stop().animate({'top':  '45px'},  300); // move down - hide
    $(".over",  this).stop().animate({'top':  '0px'},   300); // move down - show
  }, function() {
    $(".out", this).stop().animate({'top':  '0px'},   300); // move up - show
    $(".over",  this).stop().animate({'top':  '-45px'}, 300); // move up - hide
  });
});

