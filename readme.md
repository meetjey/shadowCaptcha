#ShadowCaptcha the invisible captcha

Use standard user interaction to detect human activity.

At this time, plugin is available with
- jQuery 1.8+


##For jQuery version
Simply include shadowCaptcha script, and call plugin before user submit

	<script src="/js/min/shadowCaptcha.min.js"></script>
	<script>
	jQuery(document).ready(function(){
		jQuery('.submit').click(function(){
			jQuery('form').shadowCaptcha();
		})
	})
	</script>