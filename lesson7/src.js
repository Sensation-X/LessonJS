function main() {
'use strict';
    function zero(a) {
        if (a < 10) {
            a = '0' + a;
        }
        return a;
    }
    setInterval(function () {
        let now = new Date();
        document.querySelector('body #timer').textContent = zero(now.getHours()) + ':' + zero(now.getMinutes()) +
            ':' + zero(now.getSeconds()) ;
    }, 1000);
}
main();