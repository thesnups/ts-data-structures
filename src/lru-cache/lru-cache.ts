import { DoublyLinkedList, DoublyLinkedNode, Pair } from '..';

export class LruCache<T, U> {
    private cache: Map<T, Pair<U, DoublyLinkedNode<T>>> = new Map<T, Pair<U, DoublyLinkedNode<T>>>();
    private lru: DoublyLinkedList<T> = new DoublyLinkedList<T>();

    constructor(
        public capacity: number
    ) { ; }

    public get(key: T): U {
        const cached = this.cache.get(key);

        if (cached) {
            this.use(cached);
            return cached.first;
        }
    }

    public set(key: T, value: U): void {
        const cached = this.cache.get(key);

        if (cached) {
            cached.first = value;
            this.use(cached);
        } else {
            if (this.cache.size === this.capacity) {
                const evictKey = this.lru.popBack();
                this.cache.delete(evictKey);
            }

            this.lru.pushFront(key);
            this.cache.set(key, new Pair<U, DoublyLinkedNode<T>>(value, this.lru.front));
        }
    }

    public get size(): number {
        return this.cache.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    private use(cached: Pair<U, DoublyLinkedNode<T>>): void {
        const key = cached.second.data;

        this.lru.deleteNode(cached.second);
        this.lru.pushFront(key);

        cached.second = this.lru.front;
    }
}
