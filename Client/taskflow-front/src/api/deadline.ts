export function calculateEndDate(startTimestamp: number, workDays: number) {
    let startDate = new Date(startTimestamp);

    let currentDate = new Date(startDate);
    let daysWorked = 0;

    while (daysWorked < workDays) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            daysWorked++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return currentDate;
}