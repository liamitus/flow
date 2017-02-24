var FLOW = (function (SETTINGS, UTILS, KEYCODE, my) {

    // ------------------------------------------------------------------ Public

    // The constructor.
    my.start = function () {
        bodyElement = UTILS.getElement('body');

        bind('click', handleClickInDocument);

        bind('keydown', handleArrowKeys);

    };

    // ----------------------------------------------------------------- Private

    var bodyElement;
    var inputElement;

    function handleClickInDocument(event) {
        if (!inputElement) {
            createTextArea();
        }
        var adjustedX = event.x - 5;
        var adjustedY = event.y - 10;
        UTILS.moveElement(inputElement, adjustedX, adjustedY);
        inputElement.focus();
    }

    function convertToNode() {
        console.dir(inputElement);
        var value = inputElement.value;
        var node = createNode(value);
        node.moveTo(inputElement.offsetLeft, inputElement.offsetTop);
        bodyElement.removeChild(inputElement);
        inputElement = null;
    }

    function handleArrowKeys(event) {
        switch (event.keyCode) {
            case KEYCODE.ARROW_LEFT:
                console.log('left');
                break;
            case KEYCODE.ARROW_UP:
                console.log('up');
                convertToNode();
                break;
            case KEYCODE.ARROW_RIGHT:
                console.log('right');
                break;
            case KEYCODE.ARROW_DOWN:
                console.log('down');
                break;
        }
    }

    function createTextArea() {
        inputElement = document.createElement('textarea');
        inputElement.setAttribute('class', 'new-input');
        bodyElement.append(inputElement);
    }

    function createNode(content) {
        var node = new Node(content);
        node.appendTo(bodyElement);
        return node;
    }

    // ------------------------------------------------------------------ Events

    // Called when the enter/return key is pressed.
    function enterKeyWasPressed() {
        console.log('enter key was pressed');
        return false;
    }

    // Attach a given function to all typing events.
    function bindToTypingEvents(func) {
        bind('input', func);
        bind('keydown', func);
        bind('keyup', func);
    }

    // Event handling for sane browsers.
    function bind(event, func) {
        if (document.addEventListener) {
            bindInSaneBrowser(event, func);
        } else if (document.attachEvent) {
            if (event == 'input') {
                event = 'onpropertychange';
            }
            bindInShittyBrowser(event, func);
        }
    }

    // Bind an event listener in a sane browser.
    function bindInSaneBrowser(event, func) {
        document.addEventListener(event, function (e) {
            func(e);
        }, false);
    }

    // IE-specific event handling.
    function bindInShittyBrowser(event, func) {
        if (document.attachEvent) {
            document.attachEvent(event, function(e) {
                func(e);
            }, false);
        }
    }

    return my;
})(SETTINGS, UTILITIES, KEYCODE, FLOW || {});
