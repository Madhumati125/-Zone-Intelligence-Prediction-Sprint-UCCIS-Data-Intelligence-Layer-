const zoneData = require("./zoneData");
const { predictNext } = require("./predictor");
const { classify } = require("./classifier");

// run full analysis
function runUCCISPhase3() {
    const results = {};

    Object.keys(zoneData).forEach(zone => {
        const data = zoneData[zone];

        const prediction = predictNext(data);
        const level = classify(prediction.predicted);

        results[zone] = {
            input: data,
            ...prediction,
            classification: level
        };
    });

    console.log("🚀 UCCIS PHASE 3 OUTPUT\n");
    console.log(JSON.stringify(results, null, 2));

    return results;
}

runUCCISPhase3();