import { memo } from "react";

import { GameField } from "../../models/game-field.interface";
import { useAppDispatch } from "../../hooks/hooks";
import { showInventory } from "../../reducers/inventory.reducer";
import { updateField } from "../../reducers/selection.reducer";

export const FieldItemEmpty = memo((props: GameField) => {
        const dispatch = useAppDispatch();

        /** Select field to plant crop */
        function handleClick() {
            dispatch(updateField(props.id));
            dispatch(showInventory());
        }

        return (
            <div className="farm-field-tile bdc-brown bgc-brown bdw-2px bds-solid ov-h fft w-full h-full pos-r cur-p" onClick={handleClick}></div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
);