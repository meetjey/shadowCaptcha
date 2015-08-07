(function($){
	$.fn.shadowCaptcha=function(options)
	{
        var defauts=
        {
            "action": "data-shdcapt",
						"rollingCodeSalt":false,
						"rollingCodeName":"sc-rolling-code",
						"honeyName":"sc-honey-code",
						"rollingCodeCypher":function(key){
							return key;
						}
        };
        var obj = this;
    	var params=$.extend(defauts, options);
			this.append(['<input type="text" name="',params.honeyName,'" style="display:none;" value="" />'].join(''));
			this.submit(function(e){
				if($(['input[name="',params.honeyName,'"]'].join('')).val()!=''){
					e.preventDefault();
					return false;
				}
        shadowCaptcha.process(obj.attr(params.action),function(a){
        	obj.attr('action',a);
					if(params.rollingCodeSalt){
						var rollingCode = shadowCaptcha.getRollingCode(params.rollingCodeSalt,params.rollingCodeCypher);
						obj.append(['<input type="hidden" name="',params.rollingCodeName,'" value="',rollingCode,'" />'].join(''));
					}
					return false;
        });
			});
    	return this;
	};
})(jQuery);
