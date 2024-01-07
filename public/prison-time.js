// INFO
// don't need to be 'well written'
// will be part of server

let status = undefined;

// control time each 100 ms
setInterval(() => {
    const minutes = new Date().getMinutes();
    const isBreakTime = (minutes % 3) === 0 || (minutes % 3) === 1;

    // If the current status is same, no need to update
    if (status === isBreakTime) {
        return;
    }

    // Update the status
    status = isBreakTime;

    // Structures of passed object
    var obj = calculateDateTime(minutes);

    // Notify break time
    if (isBreakTime) {
        const final = Object.assign({}, obj, { type: 'break' });
        postMessage(final);
    }
    // Notify cell time
    else {
        const final = Object.assign({}, obj, { type: 'cell' });
        postMessage(final);
    }
}, 100);

// event
onmessage = (e) => {
    // console.log(e);
}

function calculateDateTime(minutes) {
    const modulo = minutes % 3;
    let finishMinutes = 0, startMinutes = 0;

    if (modulo === 0) {
        finishMinutes = 2;
        // startMinutes = 0;
    } else if (modulo === 1) {
        finishMinutes = 1;
        startMinutes = -1;
    } else if (modulo === 2) {
        finishMinutes = 1;
        // startMinutes = 0;
    }

    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    const startDate = new Date();
    startDate.setHours(currentHours);
    startDate.setMinutes(currentMinutes + startMinutes);
    startDate.setSeconds(0);

    const finishDate = new Date();
    finishDate.setHours(currentHours);
    finishDate.setMinutes(currentMinutes + finishMinutes);
    finishDate.setSeconds(0);

    return { startDate, finishDate };
}