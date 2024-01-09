import React, { useEffect, useState } from 'react';
import { ProgressBar } from "../progress-bar/ProgressBar";
import { API } from "../../constants/api";
import { fetchFrom } from "../../functions/fetch-from.function";
import { StatusTime } from "../../models/status.interface";

export function Status() {
    // after init fetch status and get info about current status
    // render new data in component
    // check if current timestamp insist to current status or next status - [from, to, type]
    // calibrate date from response date
    // if 'time' between >= <= 'from' and 'to', render this current status
    // otherwise check for next status

    // TODO: needs complex analysis and refactor

    const [remainingTime, setRemainingTime] = useState<number>(0); // changes very often
    const [type, setType] = useState<string>('');
    const [totalTime, setTotalTime] = useState<number>(100);

    // type and maxValue needs to be changed when migrate from one type to another

    useEffect(() => {
        const intervalFunction = async () => {
            const response = await fetchFrom<StatusTime>(`${API.server}/time/status`);
            updateTime(response);
        };

        // set up interval
        const intervalId = setInterval(intervalFunction, 1000);

        // cleanup interval
        return () => clearInterval(intervalId);
    });

    function updateTime(status: StatusTime) {
        //
        if (status.now >= status.currentStatus.from && status.now <= status.currentStatus.to) {
            setTotalTime(status.currentStatus.to - status.currentStatus.from);
            setRemainingTime(status.currentStatus.to - status.now);
            setType(status.currentStatus.type);
        } else if (status.now >= status.nextStatus.from && status.now <= status.nextStatus.to) {
            setTotalTime(status.nextStatus.to - status.nextStatus.from);
            setRemainingTime(status.nextStatus.to - status.now);
            setType(status.nextStatus.type);
        }
    }

    return (
        <ProgressBar
            title={type}
            value={remainingTime}
            maxValue={totalTime}
            showValue={false}
        />
    );
}
