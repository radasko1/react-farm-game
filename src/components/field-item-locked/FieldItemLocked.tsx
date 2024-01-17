// TODO: better name?
import React from "react";

import { GameField } from "../../models/game-field.interface";
import { fetchFn } from "../../functions/fetch-post.fn";
import { APP_ROUTES } from "../../constants/app-routes";
import { useAppDispatch } from "../../hooks/hooks";
import { updateFieldItem } from "../../reducers/field.reducer";

export const FieldItemLocked = React.memo((props: GameField) => {
        const dispatch = useAppDispatch();

        async function handleClick() {
            const updatedField = await fetchFn<GameField>(APP_ROUTES.FIELD_BUY, "PATCH", { id: props.id });
            if (!updatedField) {
                return;
            }
            dispatch(updateFieldItem(updatedField));
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