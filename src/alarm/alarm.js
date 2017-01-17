var time = function(newDate) {
    var date = (!newDate) ? new Date : newDate;

    function _getTime() {
        return [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
    }

    function _getDate() {
        return date;
    }

    function _getDelay() {
            return date.getSeconds();
    }

    return {
        getTime: _getTime,
        getDate: _getDate,
        getDelay: _getDelay
    };
};

var schedule = function(data) {
    var timetable = (!data) ? {} : data;

    function _getData(time) {
        return timetable[time];
    }

    function _setOff(time) {
        timetable[time].status = false;
    }

    return {
        getData: _getData,
        setOff: _setOff
    }
};

var alarm = function() {
    var clock = time(new Date);
    var timetable = schedule({
        '22:49': {
            status: true,
            message: 'wakeup!'
        },
        '22:50': {
            status: true,
            message: 'hi!'
        }
    });
    var intervalId;

    function _init() {
        intervalId =setInterval(function(){
            notify(time(new Date).getTime());
        }, 1000);
    }

    function notify(data) {
        var time = [data[0], data[1]].join(':');
        var timeData = timetable.getData(time);

        if (timeData && timeData.status) {
            if(clock.getDelay() <= data[2]) {
                render(timeData.message);
                timetable.setOff(time);
            }
        }

        display(data);
    }

    function render(data) {
        console.log(data);
    }

    function display(time) {
        document.body.innerHTML = [time[0], time[1], time[2], time[3]].join(':');;
    }

    return {
        init: _init
    };
};

var alarmClock = alarm();
alarmClock.init();

if (module.hot) {
    module.hot.accept();
}
