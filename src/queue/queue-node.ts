export class QueueNode<T> {
    public next: QueueNode<T>;

    constructor(
        public data: T,
    ) { ; }
}
