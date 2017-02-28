function Node(content) {
    var my = this;
    
    // --------------------------------------------------------------- Constants
    
    var X_MOVE_AMOUNT = 200;
    var Y_MOVE_AMOUNT = 100;

    // ------------------------------------------------------------------ Public

    my.appendTo = function (parentElement) {
        parentElement.append(el);
    };

    my.addAdjacent = function (node) {
        adjacentNodes.push(node);
    };

    my.moveTo = function (x, y) {
        elX = x;
        elY = y;
        UTILITIES.moveElement(el, x, y);
    };

    my.moveLeft = function () {
        my.moveTo(getLeftMoveAmount(), elY);
        moveAdjacentNodesLeft();
    };

    my.moveUp = function () {
        my.moveTo(elX, getUpMoveAmount());
        moveAdjacentNodesUp();
    };

    my.moveRight = function () {
        my.moveTo(getRightMoveAmount(), elY);
        moveAdjacentNodesRight();
    };

    my.moveDown = function () {
        my.moveTo(elX, getDownMoveAmount());
        moveAdjacentNodesDown();
    };

    my.getEdgeX = function () {
        return elX + (el.offsetWidth / 2);
    };

    my.getEdgeY = function () {
        return elY + (el.offsetHeight / 2);
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

    function moveAdjacentNodesLeft() {
        adjacentNodes.forEach(function (n) {
            n.moveLeft();
            EDGES.connect(my, n);
        });
    }

    function moveAdjacentNodesUp() {
        adjacentNodes.forEach(function (n) {
            n.moveUp();
            EDGES.connect(my, n);
        });
    }

    function moveAdjacentNodesRight() {
        adjacentNodes.forEach(function (n) {
            n.moveRight();
            EDGES.connect(my, n);
        });
    }

    function moveAdjacentNodesDown() {
        adjacentNodes.forEach(function (n) {
            n.moveDown();
            EDGES.connect(my, n);
        });
    }

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
