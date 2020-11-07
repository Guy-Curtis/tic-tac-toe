import { PlayerMove } from "./player-move";

export type GridPosition = {
  gridCoordinate: number,
  moveMade: PlayerMove,
  disabled: boolean
}
