import { StackNode } from '.';

export class Stack<T> {
    public top: StackNode<T>;
    public size: number = 0;

    public push(data: T): void {
        this.top = new StackNode(data, this.top);
        ++this.size;
    }

    public pop(): T {
        if (this.isEmpty()) {
            throw new Error('Empty stack');
        }

        const data = this.top.data;
        this.top = this.top.next;

        --this.size;

        return data;
    }

    public peek(): T {
        if (this.isEmpty()) {
            throw new Error('Empty stack');
        }

        return this.top.data;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }
}
