import { Vector2 } from "../types";

/** Base Class for all entities. */
export interface ICoreEntity<T> {
  /** Adds a child to the entity. */
  addEntity(child: T): void;

  /** Adds a child at the given index to the entity. */
  addEntityAt(child: T, index: number): void;

  /** Returns the current entity position. */
  getPosition(): Vector2;

  /** Sets the entities position. */
  setPosition(position: Vector2): void;
}
