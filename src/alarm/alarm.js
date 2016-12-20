var makeClock = function() {
    var date = new Date();

    function _getTime() {
        return [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
    }

    return {
        getTime: _getTime
    };
};

var store = function() {
    function _subscribe() {

    }

    function _publish() {

    }

    return {
        subscribe: _subscribe,
        publish: _publish,
    }
};


var clock = new makeClock();
console.log(clock.getTime());


if (module.hot) {
    module.hot.accept();
}
