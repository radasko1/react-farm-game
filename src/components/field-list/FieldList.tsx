import { useEffect, useState } from "react";
import moment from "moment";

import { FieldItem } from "../field-item/FieldItem";
import { FieldItemUnavailable } from "../field-item-unavailable/FieldItemUnavailable";
import { FieldItemEmpty } from "../field-item-empty/FieldItemEmpty";
import { FieldItemGrown } from "../field-item-grown/FieldItemGrown";
import { GameField } from "../../models/game-field.interface";
import { GameFieldStatus } from "../../models/game-field-status.enum";
import { KeyValue } from "../../models/key-value.interface";
import { fetchFn } from "../../functions/fetch-post.fn";
import { APP_ROUTES } from "../../constants/app-routes";
import { updateFieldItem } from "../../reducers/field.reducer";
import { useAppDispatch } from "../../hooks/hooks";
import { ConfirmDialog } from "../confirm-dialog/ConfirmDialog";

import './FieldList.css';

interface FieldListProps {
    list: KeyValue<GameField>;
}

export function FieldList(props: FieldListProps) {
    const dispatch = useAppDispatch();
    const [currentTime, setCurrentTime] = useState(0);
    const [showBuyModal, setBuyModal] = useState(false);
    const [fieldToBuy, setFieldToBuy] = useState<undefined | string>();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().unix());
        }, 500);

        // cleaning
        return () => clearInterval(interval);
    }, []);

    /** Send request to buy field */
    async function buyField() {
        if (!fieldToBuy) return;

        const boughtField = await fetchFn<GameField>(APP_ROUTES.FIELD_BUY, "PATCH", { id: fieldToBuy });
        if (!boughtField) return;

        dispatch(updateFieldItem(boughtField));
        setFieldToBuy(undefined);
    }

    /** Show buy dialog for each unavailable field */
    const showBuyDialog = (id: string) => {
        setBuyModal(true);

        setFieldToBuy(id);
    }

    return (
        <>
        <div className="farm-field__list d-g">
            { Object.entries(props.list).map(([key, field]) => {
                const commonProps={key, ...field};
                if (field.status === GameFieldStatus.FIELD_FOR_SALE) {
                    return <FieldItemUnavailable { ...commonProps } onClick={() => showBuyDialog(field.id)} />;
                } else if (field.status === GameFieldStatus.FIELD_EMPTY) {
                    return <FieldItemEmpty { ...commonProps } />;
                } else if (field.status === GameFieldStatus.FIELD_GROWN) {
                    return <FieldItemGrown { ...commonProps } />;
                } else {
                    return <FieldItem { ...commonProps } time={ currentTime }/>;
                }
            }) }
        </div>
        <ConfirmDialog
            isOpen={showBuyModal}
            title="Koupit"
            text="Chceš si koupit pole?"
            accept={buyField}
            onClose={() => setBuyModal(false)}
        />
        </>
    );
}