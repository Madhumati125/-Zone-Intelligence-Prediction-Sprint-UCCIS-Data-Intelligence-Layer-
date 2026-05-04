const zoneData = require("./zoneData");
const { addNewData } = require("./dataSimulator");

function runPhase1() {
    console.log("\n📊 UCCIS PHASE 1 — DATA OVER TIME\n");

    console.log("INITIAL STATE:");
    console.log(JSON.stringify(zoneData, null, 2));

    // simulate new incoming cycle
    const updatedData = addNewData(zoneData);

    console.log("\nAFTER NEW CYCLE:");
    console.log(JSON.stringify(updatedData, null, 2));
}

runPhase1();