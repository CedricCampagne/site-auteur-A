export function timeAgo(dateString: string | Date) {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = {
        year: 365 * 24 * 60 * 60,
        month: 30 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1
    };

    for (const [unit, value] of Object.entries(intervals)) {
        const count = Math.floor(seconds / value);
        if (count >= 1) {
            if (unit === "second" && count < 30) return "à l’instant";
            return `il y a ${count} ${unit}${count > 1 ? "s" : ""}`;
        }
    }

    return "à l’instant";
}