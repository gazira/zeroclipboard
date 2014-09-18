var ZeroClipboard = require('../dist/ZeroClipboard.js');
var Tip = require('gazira/tip@master');

ZeroClipboard.config({
    swfPath: "../dist/ZeroClipboard.swf"
});

var btn = document.getElementById('btn');
var client = new ZeroClipboard(btn);

var t = new Tip({
    trigger: btn,
    triggerType: 'click',
    content: '已复制',
    arrowPosition: 11
});

client.on('ready', function (e) {
    client.on('aftercopy', function (e) {
        setTimeout(function() {
            t.hide();
        }, 2000);
    });
});
