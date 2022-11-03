import { Game } from "../core";
import { Entity } from "../rendering";

export abstract class SlotGame extends Game {
  protected reelContainer!: Entity;
  protected background!: Entity;

  constructor() {
    super({
      name: "slot",
      size: [1920, 1080],
    });
  }

  protected abstract createReelContainer(): void;

  protected abstract createLineMarkers(): void;

  protected abstract createPaylines(): void;

  protected abstract createBackground(): void;

  protected abstract createSymbols(): void;
}
