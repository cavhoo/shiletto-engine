import {
  IResourceAsset,
  IResourceBundle,
  IResourceManifest,
} from "./resourceManifest";

import { Assets } from "pixi.js";

export class PixiLoader {
  protected _loadProgress: number = 0;

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
  public load(asset: string): Promise<void | Record<string, void>> {
    return Assets.load(
      asset,
      (loadProgress) => (this._loadProgress = loadProgress)
    );
  }

  /** @inheritdoc */
  public loadBundle(bundle: string): Promise<void | Record<string, void>> {
    return Assets.loadBundle(
      bundle,
      (loadProgress) => (this._loadProgress = loadProgress)
    );
  }

  public getAsset(assetId: string): void | Record<string, void> {
    const asset = Assets.get(assetId);
    if (!asset) {
      throw `Could not retrieve asset with id ${assetId}. Did you load it?`;
    }
    return asset;
  }
}
