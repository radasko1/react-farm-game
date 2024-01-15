import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { InventoryList } from "../inventory-list/InventoryList";
import { API } from "../../constants/api";
import { updateInventoryList } from "../../reducers/inventory.reducer";

import './inventory.css';

export function InventoryContainer() {
    const { list, isVisible} = useAppSelector(state => state.inventory);
    const dispatch = useAppDispatch();

    // Get all game inventory items from server
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${API.server}/inventory`);
            const data = await res.json();

            dispatch(updateInventoryList(data));
        }
        fetchData();
    }, []);

    // Don't render component whether is not supposed to be visible
    if (!isVisible) {
        return null;
    }

    return (<InventoryList list={list} />);
}