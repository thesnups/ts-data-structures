import { DoublyLinkedNode } from '.';

export class DoublyLinkedList<T> {
    public size: number = 0;
    public front: DoublyLinkedNode<T>;
    public back: DoublyLinkedNode<T>;

    public pushFront(data: T): void {
        const node = new DoublyLinkedNode<T>(data);

        if (!this.front) {
            this.front = node;
            this.back = node;
            this.size = 1;
        } else {
            this.insertNodeBefore(this.front, node);
        }
    }

    public pushBack(data: T): void {
        if (!this.back) {
            this.pushFront(data);
        } else {
            this.insertAfter(this.back, data);
        }
    }

    public popFront(): T {
        if (this.isEmpty()) {
            throw new Error('Empty list');
        }

        const data = this.front.data;
        this.deleteNode(this.front);
        return data;
    }

    public popBack(): T {
        if (this.isEmpty()) {
            throw new Error('Empty list');
        }

        const data = this.back.data;
        this.deleteNode(this.back);
        return data;
    }

    public insertNodeBefore(node: DoublyLinkedNode<T>, newNode: DoublyLinkedNode<T>): void {
        newNode.next = node;

        if (!node.prev) {
            this.front = newNode;
        } else {
            newNode.prev = node.prev;
            node.prev.next = newNode;
        }

        node.prev = newNode;
        ++this.size;
    }

    public insertNodeAfter(node: DoublyLinkedNode<T>, newNode: DoublyLinkedNode<T>): void {
        newNode.prev = node;

        if (!node.next) {
            this.back = newNode;
        } else {
            newNode.next = node.next;
            node.next.prev = newNode;
        }

        node.next = newNode;
        ++this.size;
    }

    public insertBefore(node: DoublyLinkedNode<T>, data: T): void {
        this.insertNodeBefore(node, new DoublyLinkedNode<T>(data));
    }

    public insertAfter(node: DoublyLinkedNode<T>, data: T): void {
        this.insertNodeAfter(node, new DoublyLinkedNode<T>(data));
    }

    public deleteNode(node: DoublyLinkedNode<T>): void {
        if (!node.prev) {
            this.front = node.next;
        } else {
            node.prev.next = node.next;
        }

        if (!node.next) {
            this.back = node.prev;
        } else {
            node.next.prev = node.prev;
        }

        --this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }
}
