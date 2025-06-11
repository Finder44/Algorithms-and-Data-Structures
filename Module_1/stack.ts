class Stack<T> {
    private items: { [key: number]: T } = {};
    private count: number = 0;

    push(element: T): void {
        this.items[this.count] = element;
        this.count++;
    }

    pop(): T | undefined {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const value = this.items[this.count];
        delete this.items[this.count];
        return value;
    }

    peek(): T | undefined {
        if (this.count === 0) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }
}

// Пример использования:
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.peek()); // 10
