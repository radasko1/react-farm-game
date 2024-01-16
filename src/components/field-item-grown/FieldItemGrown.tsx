import React from "react";

import { GameField } from "../../models/game-field.interface";
import { API } from "../../constants/api";
import { updateFieldItem } from "../../reducers/field.reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchPost } from "../../functions/fetch-post.fn";

export const FieldItemGrown = React.memo((props: GameField) => {
        const dispatch = useAppDispatch();

        async function handleClick() {
            const harvestField = await fetchPost(`${API.server}/fields/harvest`, { id: props.id });

            dispatch(updateFieldItem(harvestField));
        }

        return (
            <div className="farm-field-tile ov-h h-[80px] w-[80px] pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
                <img src="/icons/pumpkin.png" alt="icon" className="w-[50px]"/>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
)