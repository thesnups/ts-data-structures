export class UnionFind {
    private parent: number[];
    private rank: number[];
    public numSets: number;

    constructor(
        private N: number
    ) {
        this.parent = new Array(N).fill(-1);
        this.rank = new Array(N).fill(0);
        this.numSets = N;
    }

    public find(u: number): number {
        if (this.parent[u] < 0) {
            return u;
        }
        return this.parent[u] = this.find(this.parent[u]);
    }

    public union(u: number, v: number): boolean {
        u = this.find(u);
        v = this.find(v);

        if (u === v) {
            return false;
        }

        if (this.rank[u] > this.rank[v]) {
            this.makeParentOf(v, u);
        } else if (this.rank[v] > this.rank[u]) {
            this.makeParentOf(u, v);
        } else {
            this.makeParentOf(v, u);
            ++this.rank[u];
        }

        --this.numSets;

        return true;
    }

    public getSetSize(u: number): number {
        return -this.parent[this.find(u)];
    }

    public areUnioned(u: number, v: number): boolean {
        return this.find(u) === this.find(v);
    }

    private makeParentOf(u: number, v: number) : void {
        this.parent[v] += this.parent[u];
        this.parent[u] = v;
    }
}
