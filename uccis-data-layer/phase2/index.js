const zoneData = require("./zoneData");
const { analyzeZone } = require("./analyzer");

function runPhase2() {
    const output = {};

    Object.keys(zoneData).forEach(zone => {
        const data = zoneData[zone];

        const analysis = analyzeZone(data);

        output[zone] = {
            ...data,
            features: analysis
        };
    });

    console.log("\n📊 UCCIS PHASE 2 — FEATURE EXTRACTION OUTPUT\n");
    console.log(JSON.stringify(output, null, 2));
}

runPhase2();