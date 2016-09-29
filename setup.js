initBabelRegister();

function initBabelRegister() {
    require("babel-register")({
        ignore: function(filename) {
        },
        "presets": ["es2015"]
    });
}

