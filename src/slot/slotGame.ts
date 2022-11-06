import { Game, Entity, IGameConfig } from "../core";

export abstract class SlotGame extends Game {
  protected reelContainer!: Entity;
  protected background!: Entity;

  constructor(config: IGameConfig) {
    super(config);
  }

  protected abstract createReelContainer(): void;

  protected abstract createLineMarkers(): void;

  protected abstract createPaylines(): void;

  protected abstract createBackground(): void;

  protected abstract createSymbols(): void;
}
