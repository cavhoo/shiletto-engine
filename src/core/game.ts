import { App, Entity } from "../rendering";

export interface IGameConfig {
  name: string;
  size: [number, number];
}

export class Game extends Entity {
  protected application: App;

  constructor(config: IGameConfig) {
    super();
    this.name = config.name;
    this.application = new App({
      resolution: config.size,
    });
  }

  /** Get the Game Stage Entity. */
  public get stage(): Entity {
    return this.application.root;
  }
}
