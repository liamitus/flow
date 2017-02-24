var SETTINGS = (function (my) {

    // Specifies whether debug logging is enabled or not.
    my.debugging = true;

    // Specifies the ID of the element which represents the command line.
    my.commandLineElement = 'command-line';

    // Specifies the ID of the element which represents the hidden mirror of the
    // command line (used for resizing the textarea element).
    my.phantomUserInputElement = 'phantom-user-input';

    // Specifies the ID of the element which is where output is sent.
    my.outputElement = 'out';

    return my;
})(SETTINGS || {});
