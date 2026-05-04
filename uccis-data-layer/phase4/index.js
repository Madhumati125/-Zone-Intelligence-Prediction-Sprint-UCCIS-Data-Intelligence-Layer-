const zoneData = require("./zoneData");
const { predictNext } = require("./predictor");
const { classify } = require("./classifier");
const { generateReason } = require("./reasoner");

function runPhase4() {
    const output = {};

    Object.keys(zoneData).forEach(zone => {
        const data = zoneData[zone];

        const prediction = predictNext(data);
        const classification = classify(prediction.predicted);

        const reasoning = generateReason(zone, data, prediction);

        output[zone] = {
            input: data,
            prediction,
            classification,
            explanation: {
                prediction: reasoning.predictionText,
                reasons: reasoning.reasons
            }
        };
    });

    console.log("\n🧠 UCCIS PHASE 4 — REASONING OUTPUT\n");
    console.log(JSON.stringify(output, null, 2));

    return output;
}

runPhase4();