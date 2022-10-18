import { Game } from "../core";

export class SlotGame extends Game {
  constructor() {
    super({
      name: "slot",
      size: [1920, 1080],
    });
  }
}
