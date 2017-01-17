

function createState(data) {
    if (typeof data !== 'object' || data.constructor !== Object) {
        throw new TypeError('cannot have a object');
    }

    var state = {};

    return {
        init: function() {
            assign(state, data);
        },
        set: function(obj) {
            assign(state, assign({}, obj));
            // console.log(state, obj)
        },
        get: function(prop, value) {
            if (state.hasOwnProperty(prop)) {
                if (value) {
                    return state[prop][value];
                }
                return state[prop];
            }
        }
    }
}

function assign(target) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    var output = Object(target);

    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg !== undefined && arg !== null) {
            for (var key in arg) {
                if (arg.hasOwnProperty(key)) {
                    output[key] = arg[key];
                }
            }
        }
    }
    return output;
}


var state = createState({
    order: {
        selected: 'price',
        isOpen: false
    },
    attributes: []
});

state.init();
// state.set({
//     order: {
//         isOpen: true
//     }
// });

console.log(
    state.get('order'),
    state.get('order', 'isOpen')
)


var a = createState({
    test: 1
});
a.init()

console.log(
    a.get('test')
)




if (module.hot) {
    module.hot.accept();
}
