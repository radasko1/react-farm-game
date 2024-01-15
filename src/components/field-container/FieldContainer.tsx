import { useEffect } from "react";

import { FieldList } from "../field-list/FieldList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { API } from "../../constants/api";
import { updateItem, updateFieldList } from "../../reducers/field.reducer";
import { resetSelection } from "../../reducers/selection.reducer";
import { fetchPost } from "../../functions/fetch-post.fn";

// TODO: add useEffect with interval to re-render components (only with OCCUPIED status), but there's problem with that
// pass actual timestamp via props to components with OCCUPIED status?

export function FieldContainer() {
    const { selectedFieldId, selectedPlantId } = useAppSelector(state => state.selection);
    const fieldList = useAppSelector(state => state.field.list);
    const dispatch = useAppDispatch();

    // Get all game fields from server
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${API.server}/fields`);
            const data = await res.json();

            // update Redux
            dispatch(updateFieldList(data));
        }
        fetchData();
    }, []);

    // Send request to the server to change field
    useEffect(() => {
        async function updateField() {
            const updatedField = await fetchPost(`${API.server}/fields/plant`, { id: selectedFieldId, plantId: selectedPlantId });
            dispatch(updateItem(updatedField));
            dispatch(resetSelection()); // reset selection
        }

        if (selectedPlantId && selectedFieldId) {
            updateField();
        }
    }, [selectedFieldId, selectedPlantId]);

    return (<FieldList list={fieldList} />);
}