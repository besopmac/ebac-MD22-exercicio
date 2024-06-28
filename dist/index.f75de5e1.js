AOS.init();
const eventData = new Date("Sep, 1 2024 19:04:00");
const timestampEvent = eventData.getTime();
const countdown = setInterval(function() {
    const now = new Date();
    const currentTimestamp = now.getTime();
    const distance = timestampEvent - currentTimestamp;
    const daysInMs = 86400000;
    const hoursInMs = 3600000;
    const minutesInMs = 60000;
    const days = Math.floor(distance / daysInMs);
    const hours = Math.floor(distance % daysInMs / hoursInMs);
    const minutes = Math.floor(distance % hoursInMs / minutesInMs);
    const seconds = Math.floor(distance % minutesInMs / 1000);
    document.getElementById("counter").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("counter").innerHTML = "0d 0h 0m 0s";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
