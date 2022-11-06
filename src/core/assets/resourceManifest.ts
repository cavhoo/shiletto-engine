/** A single Resource asset. */
export interface IResourceAsset {
  name: string;
  srcs: string;
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
