
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
                
                var check = $("nav").is(".timerClass");
                if (check != 0)
                {
                    ajaxTimer = parseInt(document.getElementsByTagName('nav')[0].innerHTML, 10);
                    defaultTimer = ajaxTimer;
                }
                else
                    defaultTimer = 2000;
                clearTimeout(timerFunc);
                timerFunc = setInterval(Ajaxfunc, defaultTimer);
               
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
