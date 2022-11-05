import {
  IResourceAsset,
  IResourceBundle,
  IResourceManifest,
  Loader,
} from "../../../core/assets/loader";

import { Assets } from "pixi.js";

export class PixiLoader extends Loader {
  constructor() {
    super();
  }

  /** @inheritdoc */
  public addResourceManifest(manifest: IResourceManifest): void {}

  /** @inheritdoc */
  public addResourceBundle(resourceBundle: IResourceBundle): void {
    throw new Error("Method not implemented.");
  }

  /** @inheritdoc */
  public addResource(resource: IResourceAsset): void {
    throw new Error("Method not implemented.");
  }
}
