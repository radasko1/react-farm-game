export interface StatusState {
    type: string;
    /** Amount of seconds until status change */
    remainingTime: number;
    /** Amount of seconds for current status */
    totalTime: number;
    /** */
    startDate: Date;
    /** */
    finishDate: Date;
}