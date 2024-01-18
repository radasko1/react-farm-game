// TODO: better name?
import { memo } from "react";

import { GameField } from "../../models/game-field.interface";
import { fetchFn } from "../../functions/fetch-post.fn";
import { APP_ROUTES } from "../../constants/app-routes";
import { useAppDispatch } from "../../hooks/hooks";
import { updateFieldItem } from "../../reducers/field.reducer";

export const FieldItemLocked = memo((props: GameField) => {
        const dispatch = useAppDispatch();

        /** FOR-SALE field item click handler */
        async function handleClick() {
            const updatedField = await fetchFn<GameField>(APP_ROUTES.FIELD_BUY, "PATCH", { id: props.id });
            if (!updatedField) {
                return;
            }

            // TODO: show dialog if have enough money, otherwise show message about money

            dispatch(updateFieldItem(updatedField));
        }

        return (
            <div className="bds-dashed bdw-2px bdc-[green] ov-h w-full h-full d-f pos-r cur-p ai-c jc-c ta-c c-white" onClick={handleClick}>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.status === nextProps.status
);