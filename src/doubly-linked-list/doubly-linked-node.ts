export class DoublyLinkedNode<T> {
    public prev: DoublyLinkedNode<T>;
    public next: DoublyLinkedNode<T>;

    constructor(
        public data: T,
    ) { ; }
}
