type StatusType = 'break' | 'cell';

export interface StatusTime {
    currentStatus: {
        start: string;
        finish: string;
        from: number;
        to: number;
        type: StatusType;
    };
    nextStatus: {
        start: string;
        finish: string;
        from: number;
        to: number;
        type: StatusType;
    };
    time: string;
    now: number;
}