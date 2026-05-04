function addNewData(zoneData) {
    Object.keys(zoneData).forEach(zone => {
        const zoneInfo = zoneData[zone];

        const lastTraffic = zoneInfo.traffic_history.slice(-1)[0];
        const lastViolations = zoneInfo.violations_history.slice(-1)[0];

        // simulate slight increase
        const newTraffic = lastTraffic + Math.floor(Math.random() * 10);
        const newViolations = lastViolations + Math.floor(Math.random() * 2);

        zoneInfo.traffic_history.push(newTraffic);
        zoneInfo.violations_history.push(newViolations);
    });

    return zoneData;
}

module.exports = { addNewData };