function Node(content) {
    var my = this;

    var el = document.createElement('div');

    el.innerHTML = content;
    el.setAttribute('class', 'node');

    my.appendTo = function (parentElement) {
        parentElement.append(el);
    };

}
