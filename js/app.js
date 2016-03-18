/* 
 * Little snippets with elementary js-code 
 */
$(document).foundation();
$(document).on('ready', function(){
    var h = $('#gridics-menu').height();
    var status = Foundation.MediaQuery.current;
    if (Foundation.MediaQuery.atLeast('medium')){
        $('.title-bar-right > ul.menu.medium-horizontal > li').height(h).css('line-height',h);
    };
    if (status === 'small'){
        $('li.menu-text').hide();
    } else {
        $('li.menu-text').show();
    }
});
//
//$(window).scroll( function(){ 
//  var data = $('#gridics-menu').css('bottom');
//    if (data){
//        $('#gridics-menu').css('display', 'block');
//    }
//});

