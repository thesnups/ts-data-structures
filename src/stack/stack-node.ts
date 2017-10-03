export class StackNode<T> {
    constructor(
        public data: T,
        public next: StackNode<T>,
    ) { ; }
}
