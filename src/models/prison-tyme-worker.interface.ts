export interface PrisonTimeWorker {
    type: "break" | "cell";
    finishDate: Date;
    startDate: Date;
}