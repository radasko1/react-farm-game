import { memo } from "react";

import { GameField } from "../../models/game-field.interface";
import { APP_ROUTES } from "../../constants/app-routes";
import { updateFieldItem } from "../../reducers/field.reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchFn } from "../../functions/fetch-post.fn";

export const FieldItemGrown = memo((props: GameField) => {
        const dispatch = useAppDispatch();

        async function handleClick() {
            const harvestField = await fetchFn<GameField>(APP_ROUTES.FIELD_HARVEST, "PATCH", { id: props.id });
            if (!harvestField) {
                return;
            }
            dispatch(updateFieldItem(harvestField));
        }

        return (
            <div className="bgc-yellow bdw-2px bds-solid bdc-yellow ov-h w-full h-full pos-r cur-p d-f jc-c ai-c" onClick={handleClick}>
                <img src="/icons/pumpkin.png" alt="icon" className="w-[50px]"/>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
)