import { Toast } from 'vant'
export const Error = function(text){
	this.text = text;
}
Error.prototype.show = function(){
	Toast(this.text)
}