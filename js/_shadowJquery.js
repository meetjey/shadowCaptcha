(function($){
	$.fn.shadowCaptcha=function(options)
	{
        var defauts=
        {
            "action": "data-shdcapt"
        };  
        var obj = this;
    	var params=$.extend(defauts, options); 
        shadowCaptcha.process(this.attr(params.action),function(a){
        	obj.attr('action',a);
        });
    	return this;		   
	};
})(jQuery);