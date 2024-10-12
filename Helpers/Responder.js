function Responder(){
    this.sendFailureMessage = function (res, message, code) {
    	var result = {};
    	res.setHeader('content-type','application/json');
    	result.success = false;
    	result.message = message;
    	result.code = code != null ? code : "failure";
    	res.end(JSON.stringify(result));
    }
    this.sendSuccessMessage = function (res, message) {
    	var result = {};
    	res.setHeader('content-type','application/json');
    	result.success = true;
    	result.message = message;
    	res.end(JSON.stringify(result));
    }
    this.sendSuccessData = function (res, message, data){
    	var result = {};
    	res.setHeader('content-type','application/json');
    	result.success = true;
    	result.message = message;
    	result.data = data;
    	res.end(JSON.stringify(result));
    }
}
module.exports = new Responder();