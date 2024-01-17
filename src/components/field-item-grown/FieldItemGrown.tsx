import React from "react";

import { GameField } from "../../models/game-field.interface";
import { APP_ROUTES } from "../../constants/app-routes";
import { updateFieldItem } from "../../reducers/field.reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchFn } from "../../functions/fetch-post.fn";

export const FieldItemGrown = React.memo((props: GameField) => {
        const dispatch = useAppDispatch();

        async function handleClick() {
            const harvestField = await fetchFn<GameField>(APP_ROUTES.FIELD_HARVEST, "PATCH", { id: props.id });
            if (!harvestField) {
                return;
            }
            dispatch(updateFieldItem(harvestField));
        }

        return (
            <div className="farm-field-tile bdrs-4px ov-h h-[80px] w-[80px] pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
                <img src="/icons/pumpkin.png" alt="icon" className="w-[50px]"/>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
)