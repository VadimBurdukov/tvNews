jQuery(document).ready(function($) {
    var cur = 0;
    var $ajaxGet = $('.ajaxGet');
    var size = myAjax.size;
    var ajaxTimer;
    var defaultTimer = 2000;
    var timerFunc = setInterval(Ajaxfunc, defaultTimer);
    
    function Ajaxfunc() 
    {
        var data = {
            action: 'getId', 
            size: size,
            arr: myAjax.arr,
            cur: cur
        };     
        jQuery.get(myAjax.ajaxurl, data, function (response) 
        {   
            $ajaxGet
                .html(response);
            var check = $("h3").is(".wp-block-my-timer-timer");
            if (check != 0)
            {
                ajaxTimer = parseInt(document.getElementsByClassName('wp-block-my-timer-timer')[0].innerHTML, 10);
                defaultTimer = ajaxTimer * 1000;
            }
            else
            {
                defaultTimer = 7000;
   
            }               
            clearTimeout(timerFunc);
            timerFunc = setInterval(Ajaxfunc, defaultTimer);  
            var check2 = $("figure").is(".wp-block-video");
            if (check2)
            {
                $('video')[0].play();
            }
        });

        if (cur < size-1)
        {
            cur ++;
        }
        else
        {
            cur = 0;
        }
        
    };
});
