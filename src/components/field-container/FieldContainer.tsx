import { useEffect } from "react";

import { FieldList } from "../field-list/FieldList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { APP_ROUTES } from "../../constants/app-routes";
import { updateFieldItem, updateFieldList } from "../../reducers/field.reducer";
import { resetSelection } from "../../reducers/selection.reducer";
import { fetchFn } from "../../functions/fetch-post.fn";
import { GameField } from "../../models/game-field.interface";
import { KeyValue } from "../../models/key-value.interface";

export function FieldContainer() {
    const { selectedFieldId, selectedPlantId } = useAppSelector(state => state.selection);
    const fieldList = useAppSelector(state => state.field.list);
    const dispatch = useAppDispatch();

    // Get all game fields from server
    useEffect(() => {
        async function fetchData() {
            const list = await fetchFn<KeyValue<GameField>>(APP_ROUTES.FIELD_LIST, "GET");
            if (!list) {
                return;
            }
            dispatch(updateFieldList(list));
        }
        fetchData();
    }, []);

    // Send request to the server to change field
    useEffect(() => {
        async function updateField() {
            const updatedField = await fetchFn<GameField>(APP_ROUTES.FIELD_PLANT, "PATCH", { fieldId: selectedFieldId, plantId: selectedPlantId });
            if (!updatedField) {
                return;
            }
            dispatch(updateFieldItem(updatedField));
            dispatch(resetSelection());
        }

        if (selectedPlantId && selectedFieldId) {
            updateField();
        }
    }, [selectedFieldId, selectedPlantId]);

    return (<FieldList list={fieldList} />);
}