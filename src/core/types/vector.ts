export class Vector2 {
  protected _x: number = 0;
  protected _y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public get x(): number {
    return this.x;
  }

  public set x(val: number) {
    this._x = val;
  }

  public get y(): number {
    return this._y;
  }

  public set y(val: number) {
    this._y = val;
  }
}
