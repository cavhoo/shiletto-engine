import { Application, Graphics } from "pixi.js";
import { PixiLoader } from "../assets/loader";
import { IResourceManifest } from "../assets/resourceManifest";
import { Entity } from "./entity";

export interface IAppOptions {
  resolution: [number, number];
  resourceManifest?: IResourceManifest;
}

/** Shiletto Application wrapper based on PIXI.js */
export class App extends Application {
  /** The root element of the scenegraph. */
  protected _root: Entity;
  /** The background of the game. */
  protected _background!: Entity;

  protected options: IAppOptions;

  protected _loader: PixiLoader;

  constructor(options: IAppOptions) {
    const [width, height] = options.resolution;

    super({
      resizeTo: document.body, // Always make the canvas as large as the body element.
      width,
      height,
      autoDensity: true,
      resolution: window.devicePixelRatio || 1, // Use window DPR or just 1
    });
    this.options = options;
    this._root = new Entity();
    this._loader = new PixiLoader();
    if (options.resourceManifest) {
      this.loader.addResourceManifest(options.resourceManifest);
    }
    this.setupStage();

    void this.loader
      .loadBundle("loading-screen")
      .then(() => console.log("Loaded."));
  }

  /** Setup the stage. */
  protected setupStage(): void {
    const [width, height] = this.options.resolution;

    // This locks the stage at the provided resolution.
    // While the canvas itself can be much larger.
    const staticSizeGraphics = new Graphics();
    staticSizeGraphics.beginFill(0xffffff);
    staticSizeGraphics.alpha = 0;
    staticSizeGraphics.drawRect(0, 0, width, height);
    staticSizeGraphics.pivot.set(0.5, 0.5);
    this.root.addChildAt(staticSizeGraphics, 0);

    this.renderer.on("resize", () => this.handleResize());
    this.stage.addChild(this.root);
    document.body.appendChild(this.view as any);
    this.handleResize();
  }

  protected handleResize(): void {
    const [width] = this.options.resolution;
    let rootScale = Math.min(this.screen.width / width, 1); // Calculate ratio between the size of the canvas and the stage.
    this.root.scale.set(rootScale, rootScale);
    this.root.position.set(
      (this.screen.width - this.root.width) / 2,
      (this.screen.height - this.root.height) / 2
    );
  }

  /** Get the root element of the scene graph. */
  public get root(): Entity {
    return this._root;
  }

  public set background(background: Entity) {
    this._background = background;
    // Alawys add the background at the bottom
    this.stage.addChildAt(background, 0);
  }

  /** Returns the active loader class. Use it to add an load assets. */
  public get loader(): PixiLoader {
    return this._loader;
  }
}
