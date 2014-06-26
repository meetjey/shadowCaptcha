var shadowCaptcha = {
	actionEncoded:"",
	actionDecoded:"",
	crypt:Base64,
    setAction: function (c) {
        c(this.actionDecoded);
    },
    getAction:function(c){
    	this.actionEncoded = c;
    },
    decode:function(){
    	this.actionDecoded = this.crypt.decode(this.actionEncoded);
    },
    process:function(a,b){
    	this.getAction(a);
    	this.decode();
    	this.setAction(b);
    }
};