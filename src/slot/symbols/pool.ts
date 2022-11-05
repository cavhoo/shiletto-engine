import { Entity } from "../../rendering";

export class Pool<T extends Entity> {
  protected pool: Map<string, T[]> = new Map([]);

  constructor() {}

  /** Returns the given entity back to the pool. */
  returnToPool(id: string, entity: T): void {
    if (this.pool.has(id)) {
      this.pool.get(id)?.push(entity);
    } else {
      this.pool.set(id, [entity]);
    }
  }

  /** Gets the entity from the pool. */
  getFromPool(id: string): T {
    const entityPool = this.pool.get(id);
    if (!entityPool || entityPool.length === 0) {
      throw `No entity with ID: ${id} registered to pool.`;
    }

    return entityPool.pop()!;
  }
}

export const SymbolPool = new Pool();
