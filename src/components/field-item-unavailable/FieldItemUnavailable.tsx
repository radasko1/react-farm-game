import { memo } from "react";

import { GameField } from "../../models/game-field.interface";

export const FieldItemUnavailable = memo((props: GameField) => {
        return (
            <div className="bds-dashed bdw-2px bdc-[green] ov-h w-full h-full d-f pos-r cur-p ai-c jc-c ta-c c-white" onClick={props.onClick}>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
);