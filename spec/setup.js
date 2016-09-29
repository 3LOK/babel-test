initBabelRegister();
initJsdom();

function initBabelRegister() {
    require("babel-register")({
        ignore: function(filename) {
            if (filename.indexOf("node_modules") !== -1)
                return true;
            return false;
        },
        "presets": ["react", "es2015", "stage-2"]
    });
}

//required for node testing.
function initJsdom() {
    var jsdom = require('jsdom').jsdom;

    global.document = jsdom('');
    global.window = document.defaultView;
    global['XMLHttpRequest'] = document.defaultView['XMLHttpRequest'];
}
