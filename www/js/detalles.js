angular.module('starter.services', [])


.factory('detallesfactory', function(){
    return {
        detalles: [{},
            {
            id: 1,
            fecha:'21/9/2016',
            resumen: [
				{titulo:'The Iliad'},
				{autor:'Homer'},
				{editorial:'Alianza Editorial'},
                {precio:'13.99'},
                {img:'img/img02.1.jpg'},
                {cantidad:'2'},
                {total:'27.98'}
            ],
            estado:'Pagado',
            total:'13.99',
            usuario:'edwin@romero.com',
            direccion:'La Española #2418, Mamol I'
            }, 
            {
            id: 2,
            fecha:'20/9/2016',
            resumen: [
				{titulo:'The Odyssey'},
				{autor:'Homer'},
				{editorial:'Alianza Editorial'},
                {precio:'13.99'},
                {img:'img/img03.1.jpg'},
                {cantidad:'1'},
                {total:'13.99'}
            ],
            estado:'No pagado',
            total:'15.50',
            usuario:'edwin@romero.com',
            direccion:'La Española #2418, Mamol I'
            },
                   {
            id: 3,
            fecha:'19/9/2016',
            resumen: [
				{titulo:'The Divine Comedy'},
				{autor:'Dante Alighieri'},
				{editorial:'Cátedra Editorial'},
                {precio:'15.50'},
                {img:'img/img01.1.jpg'},
                {cantidad:'2'},
                {total:'46.50'}
            ],
            estado:'No pagado',
            total:'15.50',
            usuario:'edwin@romero.com',
            direccion:'La Española #2418, Mamol I'
            }
        ]
    };
});