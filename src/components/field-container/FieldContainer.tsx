import { useEffect } from "react";

import { FieldList } from "../field-list/FieldList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { APP_ROUTES } from "../../constants/app-routes";
import { updateFieldItem, updateFieldList } from "../../reducers/field.reducer";
import { resetSelection } from "../../reducers/selection.reducer";
import { fetchFn } from "../../functions/fetch-post.fn";
import { GameField } from "../../models/game-field.interface";

export function FieldContainer() {
    const { selectedFieldId, selectedPlantId } = useAppSelector(state => state.selection);
    const fieldList = useAppSelector(state => state.field.list);
    const dispatch = useAppDispatch();

    // Get all game fields from server
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(APP_ROUTES.FIELD_LIST);
            const data = await res.json();

            // update Redux
            dispatch(updateFieldList(data));
        }
        fetchData();
    }, []);

    // Send request to the server to change field
    useEffect(() => {
        async function updateField() {
            const updatedField = await fetchFn<GameField>(APP_ROUTES.FIELD_PLANT, "PATCH", { fieldId: selectedFieldId, plantId: selectedPlantId });
            dispatch(updateFieldItem(updatedField));
            dispatch(resetSelection());
        }

        if (selectedPlantId && selectedFieldId) {
            updateField();
        }
    }, [selectedFieldId, selectedPlantId]);

    return (<FieldList list={fieldList} />);
}