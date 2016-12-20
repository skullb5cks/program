var clock = function() {
    var date = new Date();

    function _getTime() {
        return [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()].join(':');
    }

    return {
        getTime: _getTime
    };
};

var timer = function(interval, func) {
    function _setTimeout() {

    }

    function _getCurrentInterval() {

    }

    return {
        setTimeout: _setTimeout,
        getCurrentInterval: _getCurrentInterval
    }
};

var reservation = function(hour, minutes) {
    var time = {};

    function _setTime() {

    }

    function _getTimeTable() {

    }

    return {
        setTime: _setTime,
        getTimeTable: _getTimeTable
    }
};


// var co = new clock();






if (module.hot) {
    module.hot.accept();
}
