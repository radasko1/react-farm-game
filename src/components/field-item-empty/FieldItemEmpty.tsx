import React from "react";

import { GameField } from "../../models/game-field.interface";
import { useAppDispatch } from "../../hooks/hooks";
import { showInventory } from "../../reducers/inventory.reducer";
import { updateField } from "../../reducers/selection.reducer";

export const FieldItemEmpty = React.memo((props: GameField) => {
        const dispatch = useAppDispatch();

        /** Select field to plant crop */
        function handleClick() {
            console.log('handle click');
            dispatch(updateField(props.id));
            dispatch(showInventory());
        }

        return (
            <div className="farm-field-tile ov-h fft h-[80px] w-[80px] pos-r cur-p" onClick={handleClick}></div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
);