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

/** Base class for an asset loader. */
export abstract class Loader {
  /** Adds a resource manifest to the loader. */
  public abstract addResourceManifest(
    manifest: IResourceManifest
  ): Promise<void>;

  /** Adds a single resource bundle to the loader. */
  public abstract addResourceBundle(resourceBundle: IResourceBundle): void;

  /** Adds a single resource asset to the loader. */
  public abstract addResource(resource: IResourceAsset): void;

  /** Get the current loading progress. */
  public abstract get loadProgress(): number;

  /** Starts the loading of all registered assets. */
  public abstract load(bundle: string): Promise<void | Record<string, void>>;
}
