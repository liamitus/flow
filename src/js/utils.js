var UTILITIES = (function (my) {

    // ----------------------------------------------------------------- Public

    // Retrieves an element in the DOM by ID or query selector.
    my.getElement = function (query) {
        return document.getElementById(query) || document.querySelector(query);
    };

    my.moveElement = function (el, x, y) {
        var styleStr = 'top:' + y + 'px;left:' + x + 'px;';
        el.setAttribute('style', styleStr);
    };

    // Converts all newlines found in the given string into breaklines.
    my.newlinesToBreaklines = function (text) {
        return text.replace(/\n/g, '<br />');
    };

    // Prints a debug message to console if global debugging is turned on.
    // Use an alias for this function in whatever module you need to.
    /* e.g.
    var d = UTILS.debug(SETTINGS.debugging);
    */
    my.debug = function (debugging) {
        if (debugging && console && console.debug) {
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] == 'object') {
                    console.dir(arguments[i]);
                } else {
                    console.debug(arguments[i]);
                }
            }
        }
    }



    return my;
})(UTILITIES || {});
