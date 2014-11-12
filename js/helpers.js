var Helpers = function(){
	function initNumeral(){
		numeral.language('ru', {
			delimiters: {
				thousands: ' ',
				decimal: ','
			},
			abbreviations: {
				thousand: 'тыс',
				million: 'млн',
				billion: 'млд',
				trillion: 'трн'
			},
			currency: {
				symbol: '<span class="rub">₽</span>'
			}
		});

		numeral.language('ru');
	}

	function initMoment(){
		moment.locale('ru');
	}

	initNumeral();
	initMoment();


	this.price = function(float){
		return numeral(float).format('0,0.[00] $');
	};

	this.date = function(date){
		return moment(date).format('d MMMM YYYY', 'accusative');
	};

	this.dateFrom = function(date){
		return moment(date).fromNow();
	};

	this.companyType = function(id){
		switch (id){
			case 1 : {
				return 'ООО';
			} break;

			case 2 : {
				return 'ИП';
			} break;

			case 3 : {
				return 'ОАО';
			} break;

			default : {
				return '';
			}
		}
	};

	this.plural = function(i, str1, str2, str5){
		function plural (a){
			if ( a % 10 == 1 && a % 100 != 11 ) return 0
			else if ( a % 10 >= 2 && a % 10 <= 4 && ( a % 100 < 10 || a % 100 >= 20)) return 1
			else return 2;
		}

		switch (plural(i)) {
			case 0: return str1;
			case 1: return str2;
			default: return str5;
		}
	}
};