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
            helpers: new Helpers(),
            sort: function ( array, column ) {
                array = array.slice();

                return array.sort( function ( a, b ) {
                    return a[ column ] < b[ column ] ? -1 : 1;
                });
            },
            sortColumn: 'name'
        }
    });

    ractive.on( 'sort', function ( event, column ) {
        this.set( 'sortColumn', column );
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
        date: new Date(2012, 1, 13, 1, 22, 0, 0),
        payTill: new Date(),
        payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
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
        date: new Date(2012, 2, 13, 1, 22, 0, 0),
        payTill: new Date(),
        payDate: new Date(),
        price: 100000010,
        items: 103,
        contragent: {
            name: 'Нааа',
            id: 1,
            type: 1
        }
    },
    {
        payed: true,
        title: '002345',
        date: new Date(2012, 9, 13, 1, 22, 0, 0),
        payTill: new Date(),
        payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
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
        date: new Date(2002, 1, 13, 1, 22, 0, 0),
        payTill: new Date(),
        payDate: new Date(),
        price: 100000010,
        items: 103,
        contragent: {
            name: 'Нааа',
            id: 1,
            type: 1
        }
    },
    {
        payed: true,
        title: '002345',
        date: new Date(2012, 9, 13, 1, 22, 0, 0),
        payTill: new Date(),
        payDate: new Date(2012, 9, 13, 1, 22, 0, 0),
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
        payTill: new Date(),
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