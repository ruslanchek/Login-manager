var Helpers = function(){
	this.price = function(str){
		return numeral(str).format('00,[00]') + ' <span class="rub">₽</span>';
	};

	this.date = function(str){
		return moment(str).format("MMM Do YY");
	};
};