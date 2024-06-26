import { useEffect } from "react";

import { GameField } from "../../models/game-field.interface";
import { formatTime } from "../../functions/time-formatter.fn";
import { updateFieldItem,  } from "../../reducers/field.reducer";
import { APP_ROUTES } from "../../constants/app-routes";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchFn } from "../../functions/fetch-post.fn";

import './FieldItem.css';

export function FieldItem(props: GameField) {
    const dispatch = useAppDispatch();

    // Check current time, and when field is READY, fetch for updates
    useEffect(() => {
        async function fetchData() {
            const field = await fetchFn<GameField>(`${APP_ROUTES.FIELD_ITEM}/${props.id}`, "GET");
            if (!field) {
                return;
            }
            dispatch(updateFieldItem(field));
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
        <div className="farm-field-tile bdc-brown bgc-brown bdw-2px bds-solid ov-h w-full h-full pos-r d-f fxd-c jc-sb ai-c">
            <img src="/icons/pumpkin.png" alt="icon" className="fxg-1"/>
            <div className="farm-field-tile__time bgc-primary c-white h-[14px] ta-c d-b w-full">{time()}</div>
        </div>
    );
}