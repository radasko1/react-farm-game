import { useEffect } from "react";

import { FarmFieldTile } from "../farm-field-tile/FarmFieldTile";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { API } from "../../constants/api";
import { updateList } from "../../reducers/farm-field.reducer";

import './farm-field.css';

export function FarmField() {
    const fieldList = useAppSelector(state => state.field.list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${API.server}/fields`);
            const data = await res.json();

            dispatch(updateList(data));
        }
        fetchData();
    }, []);

    // TODO: add useEffect with interval to re-render components (only with OCCUPIED status), but there's problem with that

    return (
        <div className="farm-field">
            {fieldList.map((field) => (<FarmFieldTile key={field.id} {...field} />))}
        </div>
    );
}