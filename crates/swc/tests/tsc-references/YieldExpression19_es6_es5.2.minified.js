import regeneratorRuntime from "regenerator-runtime";
var _marked = regeneratorRuntime.mark(foo);
function foo() {
    var bar;
    return regeneratorRuntime.wrap(function(_ctx1) {
        for(;;)switch(_ctx1.prev = _ctx1.next){
            case 0:
                bar = function() {
                    var _marked1 = regeneratorRuntime.mark(quux);
                    function quux() {
                        return regeneratorRuntime.wrap(function(_ctx) {
                            for(;;)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    return _ctx.next = 2, foo;
                                case 2:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _marked1);
                    }
                };
            case 1:
            case "end":
                return _ctx1.stop();
        }
    }, _marked);
}
