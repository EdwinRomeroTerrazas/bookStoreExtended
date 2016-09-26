(function(){
    var app = angular.module('bookStore', ['ui.router', 'starter.services']);
    
    app.controller('bookStoreController', function(){
        this.products = books;
        this.usuario = usuario;
    });
    
    
    
    app.controller("detalleController", function($scope, detallesfactory, $stateParams){
    //devolvemos una factoría con scope
            $scope.pedidos = detallesfactory.detalles[$stateParams.id];
        })
    
    
    app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('goIndex', {
      url: "/goIndex",
      templateUrl: "index.html"
    })
    
    .state('goDashboard', {
      url: "/goDashboard",
      templateUrl: "templates/dashboard.html"
    })
  
    .state('goDatos', {
      url: "/goDatos",
      templateUrl: "templates/datos.html"
    })
  
    .state('goPedidos', {
      url: "/goPedidos",
      templateUrl: "templates/pedidos.html"
    })
  
    .state('detalle', {
            url: "/pedidos/:id",
            templateUrl: "templates/detalle-pedido.html",
            controller: "detalleController",
            controllerAs:"detalleCtrl"
            })
  
  
  
    
    });
    
    
    var books = [
        
        {
            id:'1',
            title:'Divine Comedy',
            author:  'Dante Alighieri',
            editorial:'Cátedra Editorial',
            description: 'The Divine Comedy is an epic poem by Dante Alighieri. It is widely considered the preeminent work of Italian literature and is seen as one of the greatest works of world literature. The poems imaginative vision of the afterlife is representative of the medieval world-view as it had developed in the Western Church by the 14th century. It helped establish the Tuscan language, in which it is written, as the standardized Italian language. It is divided into three parts: Inferno, Purgatorio, and Paradiso.',
            images: [
				{id:0, url:'img/img01.jpg'}
            ],
        },
        {
            id:'2',
            title:'The Iliad',
            author: 'Homer',
            editorial:'Alianza Editorial',
            description: 'The Iliad; (sometimes referred to as the Song of Ilion or Song of Ilium) is an ancient Greek epic poem in dactylic hexameter, traditionally attributed to Homer. Set during the Trojan War, the ten-year siege of the city of Troy (Ilium) by a coalition of Greek states, it tells of the battles and events during the weeks of a quarrel between King Agamemnon and the warrior Achilles.',
            images: [
				{id:0, url:'img/img02.jpg'}
            ],
        },
        {
            id:'3',
            title:'The Odyssey',
            author:  'Homer',
            editorial:'Alianza Editorial',
            description: 'Is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work ascribed to Homer. The poem is fundamental to the modern Western canon, and is the second oldest extant work of Western literature, the Iliad being the oldest. Scholars believe it was composed near the end of the 8th century BC, somewhere in Ionia, the Greek coastal region of Anatolia.',
            images: [
				{id:0, url:'img/img03.jpg'}
            ],
        },
        {
            id:'4',
            title:'Twenty Thousand Leagues Under the Sea',
            author:  'Jules Verne',
            editorial:'Pierre-Jules Hetzel',
            description: ' is a classic science fiction novel by French writer Jules Verne published in 1870.The novel was originally serialized from March 1869 through June 1870 in Pierre-Jules Hetzels periodical, the Magasin dÉducation et de Récréation. The deluxe illustrated edition, published by Hetzel in November 1871, included 111 illustrations by Alphonse de Neuville and Édouard Riou.[1] The book was highly acclaimed when released and still is now; it is regarded as one of the premiere adventure novels and one of Vernes greatest works, along with Around the World in Eighty Days and Journey to the Center of the Earth. ',
            images: [
				{id:0, url:'img/img04.jpg'}
            ],
        },
        
    ]
    
    var usuario = {
            nombre:'Edwin Romero',
            email:'edwin@romero',
            password:'123',
            direccion:'Aqui',
            cp:'1111',
            pais:'Mexico',
            ciudad:'Chihuahua',
            pedidos:[
               {id:1, fecha:'21/9/2016',estado:'Pagado',resumen:'The Iliad', total:'13.99'},
                {id:2, fecha:'20/9/2016',estado:'Pagado',resumen:'The Odyssey', total:'13.99'},
				{id:3, fecha:'19/9/2016',estado:'No Pagado',resumen:'Divine Comedy', total:'15.50'}
            ],
    };
})();

