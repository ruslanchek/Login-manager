var Table = function(options){
    var _this = this,
        rows = [];

    this.options = $.extend({
        el: '#outlet',
        template: '#template-table-invoices'
    }, options);

    var ractive = new Ractive({
        el: this.options.el,
        template: this.options.template,
        data: {
            rows: rows,
            helpers: new Helpers()
        }
    });

    this.setContentData = function(rows){
        ractive.set('rows', rows);
    };
};

var t = new Table({
    el: '#outlet',
    template: '#template-table-invoices'
});

t.setContentData([
    {
        payed: true,
        title: '002345',
        date: new Date(),
        payDate: new Date(),
        price: 10000020.01,
        items: 101,
        contragent: {
            name: 'Хуй',
            id: 1,
            type: 2
        }
    },
    {
        payed: false,
        title: '002345',
        date: new Date(),
        payDate: new Date(),
        price: 100000010,
        items: 103,
        contragent: {
            name: 'Нааа',
            id: 1,
            type: 1
        }
    }
]);