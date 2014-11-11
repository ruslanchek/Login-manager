var Table = function(options){
    var _this = this,
        rows = [];

    this.options = $.extend({
        el: '#outlet',
        template: '#template-table'
    }, options);

    var ractive = new Ractive({
        el: this.options.el,
        template: this.options.template,
        data: {
            rows: rows,
            convertPrice: function(str){
                return numeral(str).format('00,[00]') + ' <span class="rub">&#8399;</span>';
            },
            convertDate: function(str){
                moment.locale('ru');
                return moment(str).format("MMM Do YY");
            }
        }
    });

    this.setContentData = function(rows){
        ractive.set('rows', rows);
    };
};

var t = new Table({
    el: '#outlet',
    template: '#template-table'
});

t.setContentData([
    {
        payed: true,
        title: '002345',
        date: new Date(),
        payDate: new Date(),
        price: 1000000.00,
        contragent: {
            name: 'Хуй',
            id: 1
        }
    },
    {
        payed: false,
        title: '002345',
        date: new Date(),
        payDate: new Date(),
        price: 1000000,
        contragent: {
            name: 'Хуй',
            id: 1
        }
    }
]);