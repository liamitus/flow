var EDGES = (function () {
    var my = this;
    
    // --------------------------------------------------------------- Constants

    var EDGE_WIDTH = '3';
    var EDGE_COLOR = 'white';

    // ------------------------------------------------------------------ Public

    my.connect = function (fromNode, toNode) {
        ctx.beginPath(); 
        ctx.lineWidth = EDGE_WIDTH;
        ctx.strokeStyle = EDGE_COLOR; 
        ctx.moveTo(fromNode.getEdgeX(), fromNode.getEdgeY());
        ctx.lineTo(toNode.getEdgeX(), toNode.getEdgeY());
        ctx.stroke();
    };

    // ----------------------------------------------------------------- Private

    var canvas = document.getElementById('edges');
    var ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    return my;
})();
