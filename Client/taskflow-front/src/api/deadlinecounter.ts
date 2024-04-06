

export default function calculateEndDate(startTimestamp: number, workDays: number) {
    let startDate = new Date(startTimestamp * 1000);

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