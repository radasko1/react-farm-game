import { useEffect } from "react";

import { GameField } from "../../models/game-field.interface";
import { formatTime } from "../../functions/time-formatter.fn";
import { updateFieldItem,  } from "../../reducers/field.reducer";
import { API } from "../../constants/api";
import { useAppDispatch } from "../../hooks/hooks";

import './FieldItem.css';

export function FieldItem(props: GameField) {
    const dispatch = useAppDispatch();

    // Check current time, and when field is READY, fetch for updates
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${API.server}/fields/${props.id}`);
            const data = await res.json();

            dispatch(updateFieldItem(data));
        }

        if (props.time && props.to && props.time >= props.to) { // maybe just greater
            fetchData();
        }
    }, [props.time]);

    // Return time for field
    function time(): string {
        const seconds = props.to && props.time ? (props.to - props.time) : 0;
        return formatTime(seconds);
    }

    return (
        <div className="farm-field-tile ov-h h-[80px] w-[80px] pos-r d-f fxd-c jc-sb ai-c">
            <img src="/icons/pumpkin.png" alt="icon" className="fxg-1"/>
            <div className="farm-field-tile__time c-white h-[14px] ta-c d-b w-full">{time()}</div>
        </div>
    );
}