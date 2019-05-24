const GAME = function(params) {
    _params = params;

    var _icon;
    var _cell;

    // get icon by random
    this.getIcon = function() {
        return Math.floor(Math.random(1, 100) * 100) <= 50 ? _icon = {user: 'x', ai: 'o'} : _icon = {user: 'o', ai: 'x'};
    };

    // restart
    this.clear = function() {
        _cell.forEach(c => c.removeAttribute('class'));
    };

    // begin
    this.start = function() {
        _cell = document.querySelectorAll(`${_params.app} main > div`);
        _icon = this.getIcon();
        this.clear();
    };

    // do a move
    this.move = function(e) {
        if (!e.target.hasAttribute('class')) e.target.setAttribute('class', _icon.user);
        this.ai();
    };

    this.aiChoice = function() {
    };

    this.ai = function() {
        var quota = Math.floor(Math.random(1, 9) * 10);

        
    };
}

const xo = new GAME({
    app: '#game'
});

// events
document.addEventListener('click', (e) => {
    if (e.target.type == 'button') xo.start();
    if (e.target.tagName == 'DIV') xo.move(e);
});

document.addEventListener('DOMContentLoaded', xo.start());