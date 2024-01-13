import { GameFieldInfo } from "../models/game-field-info.interface";
import { GameFieldStatus } from "../models/game-field-status.enum";

export const GAME_OBJECT_FARM_FIELD: GameFieldInfo[] = Array.from({ length: 36 }, (_, index) => ({
    id: `farm_field_${index + 1}`,
    crop: undefined,
    status: GameFieldStatus.FIELD_EMPTY,
    time: 0, // You can set a default value or adjust it as needed
    from: 0,
    to: 0,
}));