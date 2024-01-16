import { useEffect, useState } from "react";
import moment from "moment";

import { FieldItem } from "../field-item/FieldItem";
import { GameField } from "../../models/game-field.interface";
import { GameFieldStatus } from "../../models/game-field-status.enum";
import { FieldItemLocked } from "../field-item-locked/FieldItemLocked";
import { FieldItemEmpty } from "../field-item-empty/FieldItemEmpty";
import { FieldItemGrown } from "../field-item-grown/FieldItemGrown";
import { KeyValue } from "../../models/key-value.interface";

import './FieldList.css';

interface FieldListProps {
    list: KeyValue<GameField>;
}

export function FieldList(props: FieldListProps) {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().unix());
        }, 500);
        // cleaning
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="farm-field__list d-g">
            { Object.entries(props.list).map(([key, field]) => {
                const commonProps={key, ...field};
                if (field.status === GameFieldStatus.FIELD_FOR_SALE) {
                    return <FieldItemLocked { ...commonProps } />;
                } else if (field.status === GameFieldStatus.FIELD_EMPTY) {
                    return <FieldItemEmpty { ...commonProps } />;
                } else if (field.status === GameFieldStatus.FIELD_GROWN) {
                    return <FieldItemGrown { ...commonProps } />;
                } else {
                    return <FieldItem { ...commonProps } time={ currentTime }/>;
                }
            }) }
        </div>
    );
}