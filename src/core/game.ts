import { App, Entity } from "../rendering";

export interface IGameConfig {
  name: string;
  size: [number, number];
}

export class Game extends Entity {
  protected stageSize: [number, number];
  protected application: App;

  protected stage: Entity;

  constructor(config: IGameConfig) {
    super();
    this.name = config.name;
    this.stageSize = config.size;
    this.application = new App({});

    this.stage = new Entity();

    this.application.stage.addChild(this.stage);
  }
}
