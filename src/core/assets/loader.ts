/** A single Resource asset. */
export interface IResourceAsset {
  name: string;
  src: string;
}

/** A collection of resources. */
export interface IResourceBundle {
  name: string;
  assets: IResourceAsset[];
}

/** All resources that should be loaded. */
export interface IResourceManifest {
  bundles: IResourceBundle[];
}

/** Base class for an asset loader. */
export abstract class Loader {}
