#ShadowCaptcha the invisible captcha

Use standard user interaction to detect human activity. Encode your action path to prevent robot to read and send spam to it.

At this time, plugin is available with
- jQuery 1.8+

current encode available
- base64

##Base 
Edit your form element, empty action parameter, and set new parameter with your action path encoded

In php

	<form role="form" method="get" action="" data-shdcapt="<?php echo base64_encode("/form/test/demo.php"); ?>">

Render

	<form role="form" method="get" action="" data-shdcapt="L2Zvcm0vdGVzdC9kZW1vLnBocA==">

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