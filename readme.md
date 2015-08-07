#ShadowCaptcha the invisible captcha

Use standard user interaction to detect human activity. Encode your action path to prevent robot to read and send spam to it. Use honeypot to trap robot, if an extra field is completed, form not submitted.

At this time, plugin is available with
- jQuery 1.8+

Current encode available
- base64

Compatible with
- IE7+
- Chrome
- Firefox
Most of common recent browsers

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
		jQuery('form').shadowCaptcha({rollingCodeSalt:"JFHGInrjg!LIGGENjg"});
	})
	</script>

###Parameters
- action (default : "data-shdcapt") : attribute with encoded path
- rollingCodeSalt (default : false) : Salt used to generate input value sent with form
- rollingCodeName (default : "sc-rolling-code") : name of field sent with form
- honeyName (default : "sc-honey-code") : name of honeyPot field
- rollingCodeCypher (default : function) : function used to generate uniq rolling code, by default return rollingCodeSalt

##Todo
- add javascript only plugin to be jquery free
- add encoding with key
- add ajax code generation for server check after submit
