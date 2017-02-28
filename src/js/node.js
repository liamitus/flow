function Node(content) {
    var my = this;
    
    // --------------------------------------------------------------- Constants
    
    X_MOVE_AMOUNT = 200;
    Y_MOVE_AMOUNT = 100;

    // ------------------------------------------------------------------ Public

    my.appendTo = function (parentElement) {
        parentElement.append(el);
    };

    my.moveTo = function (x, y) {
        elX = x;
        elY = y;
        UTILITIES.moveElement(el, x, y);
    };

    my.moveLeft = function () {
        my.moveTo(getLeftMoveAmount(), elY);
    };

    my.moveUp = function () {
        my.moveTo(elX, getUpMoveAmount());
    };

    my.moveRight = function () {
        my.moveTo(getRightMoveAmount(), elY);
    };

    my.moveDown = function () {
        my.moveTo(elX, getDownMoveAmount());
    };

    my.getX = function () {
        return elX;
    };

    my.getY = function () {
        return elY;
    };

    // ----------------------------------------------------------------- Private

    var el;
    var elX;
    var elY;
    var adjacentNodes = [];

    // 'Constructor'
    el = document.createElement('div');
    el.innerHTML = content;
    el.setAttribute('class', 'node');

    function getLeftMoveAmount() {
        return elX - X_MOVE_AMOUNT;
    }

    function getUpMoveAmount() {
        return elY + Y_MOVE_AMOUNT;
    }

    function getRightMoveAmount() {
        return elX + X_MOVE_AMOUNT;
    }

    function getDownMoveAmount() {
        return elY - Y_MOVE_AMOUNT;
    }

}
