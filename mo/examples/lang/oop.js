require.config({
    baseUrl: '/js/'
});

require(['mo/lang'], function(_){

    console.group('mo/lang/oop');

    function A(i){
        this.d1 = i + 100;
        this.d2 = i;
    }

    A.prototype = {
        m1: function(i){ console.info('A', i); }
    };

    function B(){
        this.d1 = {};
    }

    B.prototype = {
        m2: function(i){ console.info('B', i); }
    };

    var A1 = _.construct(A, [B.prototype], function(i){
        this.superConstructor(i);
        this.d1 = -1;
        this.d3 = this.superClass.d1;
    });

    A1.prototype.m1 = function(i){
        this.superClass.m1.call(this, i);
        console.info('A1', i, this.superClass.d1);
    };

    var a = new A1(10);

    A.prototype.m1 = function(i){ console.info('A+', i); };
    A1.prototype.m2 = function(i){ console.info('A2', i); };
    A.prototype.m3 = function(i){ console.info('A3', i); };

    a.m1(1);
    a.m2(2);
    a.m3(3);

    console.info(a.constructor === A1, a);

    console.groupEnd('mo/lang/oop');

    //var A = _.construct(overlay.Overlay, function(opt){
        //this.superConstructor(opt);
        //this.a = 1;
        //this.b = 2;
    //});
    //A.prototype.m1 = function(){console.info('A')};
    //A.prototype.m2 = function(){console.info('A')};
    //var A1 = _.construct(A, function(opt){
        //this.superConstructor(opt);
        //this.b = 20;
        //this.c = 30;
    //});
    //A1.prototype.m2 = function(){console.info('A1')};
    //A1.prototype.m3 = function(){console.info('A1')};
    //var a1 = new A1({});
    //a1.m1();
    //a1.m2();
    //a1.m3();
    //console.info(a1)

});
