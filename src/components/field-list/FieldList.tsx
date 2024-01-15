import { FieldItem } from "../field-item/FieldItem";
import { GameField } from "../../models/game-field.interface";

import './FieldList.css';

interface FieldListProps {
    list: GameField[];
}

export function FieldList(props: FieldListProps) {
    return (
        <div className="farm-field__list d-g">
            {props.list.map((field) => (
                <FieldItem key={field.id} {...field} />
            ))}
        </div>
    );
}