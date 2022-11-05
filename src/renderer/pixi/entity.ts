import { Container } from "pixi.js";
import { Vector2 } from "../../core";
import { ICoreEntity } from "../../core/rendering/entity";

export class Entity extends Container implements ICoreEntity<Entity> {
  addEntity(child: Entity): void {
    this.addChild(child);
  }

  addEntityAt(child: Entity, index: number): void {
    this.addChildAt(child, index);
  }

  getPosition(): Vector2 {
    return new Vector2(this.position.x, this.position.y);
  }

  setPosition(position: Vector2): void {
    this.position.set(position.x, position.y);
  }
}
