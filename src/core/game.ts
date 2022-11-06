import { IResourceManifest, PixiLoader } from "./assets";
import { App, Entity } from "./rendering";

export interface IGameConfig {
  name: string;
  size: [number, number];
  resourceManifest: IResourceManifest;
}

export class Game extends Entity {
  protected application: App;

  constructor(config: IGameConfig) {
    super();
    this.name = config.name;
    this.application = new App({
      resolution: config.size,
      resourceManifest: config.resourceManifest,
    });
  }

  /** Get the Game Stage Entity. */
  public get stage(): Entity {
    return this.application.root;
  }

  /** Returns the asset loader instance to retrieve assets. */
  public get loader(): PixiLoader {
    return this.application.loader;
  }
}
