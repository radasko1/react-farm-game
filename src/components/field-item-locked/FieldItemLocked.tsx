// TODO: better name?
import React from "react";

import { GameField } from "../../models/game-field.interface";

export const FieldItemLocked = React.memo((props: GameField) => {
        function handleClick() {
            console.log('You can buy this field');
        }

        return (
            <div className="farm-field-tile bdrs-4px ov-h h-[80px] w-[80px] d-f pos-r cur-p ai-c jc-c ta-c c-white farm-field-tile--for-sale"
                 onClick={handleClick}>
                <span>$</span>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
);