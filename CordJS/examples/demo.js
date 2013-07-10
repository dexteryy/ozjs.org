
require.config({
    baseUrl: '../../js/'
});

define('a', [
    "mo/lang", 
    "cord" 
], function(_, cord){

    var a = cord({
        v1: 10
    });

    a.observer.bind('change', function(){
        console.info('change a');
    }).bind('v1:new', function(changes){
        console.info('new a.v1', changes);
    }).bind('v1:update', function(changes){
        console.info('update a.v1', changes);
    }).bind('v1:delete', function(changes){
        console.info('delete a.v1', changes);
    }).bind('m1:new', function(changes){
        console.info('new a.m1', changes);
    }).bind('m1:update', function(changes){
        console.info('update a.m1', changes);
    }).bind('m1:delete', function(changes){
        console.info('delete a.m1', changes);
    });

    return a;

});

define('b', [
    "mo/lang", 
    "cord" 
], function(_, cord){

    var b = cord({
        v2: 10
    });

    b.observer.bind('change', function(){
        console.info('change b');
    }).bind('v2:new', function(changes){
        console.info('new b.v2', changes);
    }).bind('v2:update', function(changes){
        console.info('update b.v2', changes);
    }).bind('v2:delete', function(changes){
        console.info('delete b.v2', changes);
    }).bind('m2:new', function(changes){
        console.info('new b.m2', changes);
    }).bind('m2:update', function(changes){
        console.info('update b.m2', changes);
    }).bind('m2:delete', function(changes){
        console.info('delete b.m2', changes);
    });

    return b;

});

define('c', [
    "mo/lang", 
    "cord" 
], function(_, cord){

    var cModel = cord.model({

        defaults: {
            v3: 0,
            v4: 0
        },

        getValues: function(){
            var data = this.get();
            return Object.keys(data).map(function(k){
                return this[k];
            }, data);
        }
    
    });

    var c = cModel({
        v3: 10
    });

    c.observer.bind('change', function(){
        console.info('change c');
    }).bind('v3:new', function(changes){
        console.info('new c.v3', changes);
    }).bind('v3:update', function(changes){
        console.info('update c.v3', changes);
    }).bind('v3:delete', function(changes){
        console.info('delete c.v3', changes);
    });

    return c;

});

define('d', [
    "mo/lang", 
    "cord" 
], function(_, cord){

    var d = cord([1, 2]);

    d.observer.bind('change', function(){
        console.info('change d');
    });

    return d;

});

require([
    "mo/lang", 
    "cord", 
    "a",
    "b",
    "c",
    "d"
], function(_, cord, a, b, c, d){

    var HR = '---------------';

    a.set('v1', a.get('v1') + 1);

    console.info(HR);

    a.set('v1', function(old_value){
        return old_value + 10;
    });

    //a.set('o1', {});

    //a.set('o1', function(){
        //return {};
    //});

    console.info(HR);

    a.set('m1', cord());

    console.info(HR);

    a.set('m1', function(){
        return b;
    });

    console.info(HR);

    a.set('m1', function(b){
        b.set('v2', 1);
    });

    console.info(HR);

    a.set(function(dataA){
        dataA.v0 = 0;
    });

    console.info(HR);

    b.set(function(dataB){
        _.mix(dataB, {
            v2: 2,
            m2: c 
        });
    });

    console.info(HR);

    c.set('v3', 3);

    console.info(HR);

    d.add(0);

    console.info(HR);

    d.set(function(data){
        var i = d.find(0);
        data.splice(i, 1, a);
    });

    console.info(HR);

    d.set(function(data){
        data[data.length - 1].set('m1', function(b){
            b.set('v2', b.get('v2') * 10);
        });
    });

    console.info(HR);

    console.info('d:', d.get());

    console.info("c values:", c.getValues());

});
