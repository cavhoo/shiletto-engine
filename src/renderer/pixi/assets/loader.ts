import {
  IResourceAsset,
  IResourceBundle,
  IResourceManifest,
  Loader,
} from "../../../core/assets/loader";

import { Assets } from "pixi.js";

export class PixiLoader extends Loader {
  protected _loadProgress: number = 0;

  constructor() {
    super();
  }

  /** @inheritdoc */
  public addResourceManifest(manifest: IResourceManifest): Promise<void> {
    return Assets.init({
      manifest,
    });
  }

  /** @inheritdoc */
  public addResourceBundle(resourceBundle: IResourceBundle): void {
    Assets.addBundle(resourceBundle.name, {
      ...resourceBundle.assets.reduce((bundle, asset) => {
        bundle[asset.name] = asset.srcs;
        return bundle;
      }, {} as { [key: string]: string }),
    });
  }

  /** @inheritdoc */
  public addResource(resource: IResourceAsset): void {
    Assets.add(resource.name, resource.srcs);
  }

  /** @inheritdoc */
  public get loadProgress(): number {
    return this._loadProgress;
  }

  /** @inheritdoc */
  public load(bundle: string): Promise<void | Record<string, void>> {
    return Assets.load(
      bundle,
      (loadProgress) => (this._loadProgress = loadProgress)
    );
  }
}
