var Stack = /** @class */ (function () {
    function Stack() {
        this.items = {};
        this.count = 0;
    }
    Stack.prototype.push = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var value = this.items[this.count];
        delete this.items[this.count];
        return value;
    };
    Stack.prototype.peek = function () {
        if (this.count === 0) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    return Stack;
}());
// Пример использования:
var stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
