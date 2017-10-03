import { QueueNode } from '.';

export class Queue<T> {
    public front: QueueNode<T>;
    public back: QueueNode<T>;
    public size: number = 0;

    public enqueue(data: T): void {
        const newNode = new QueueNode<T>(data);

        if (!this.front && !this.back) {
            this.front = this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        ++this.size;
    }

    public dequeue(): T {
        if (this.isEmpty()) {
            throw new Error('Empty queue');
        }

        const removed = this.front;
        this.front = this.front.next;

        if (!this.front) {
            this.back = undefined;
        }

        --this.size;

        return removed.data;
    }

    public peek(): T {
        if (this.isEmpty()) {
            throw new Error('Empty queue');
        }

        return this.front.data;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }
}
