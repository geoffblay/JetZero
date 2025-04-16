// content.js
import { estimateFlightCO2 } from "./co2.js";

(async () => {
  const from = "SFO";
  const to = "JFK";

  try {
    const { distance, co2 } = await estimateFlightCO2(from, to);
    console.log(`Flight from ${from} to ${to}`);
    console.log(`Distance: ${distance.toFixed(0)} km`);
    console.log(`CO₂ Estimate: ${co2.toFixed(2)} kg`);

    // store in chrome storage
    const data = {
      from,
      to,
      distance: distance.toFixed(0),
      co2: co2.toFixed(2),
    };
    chrome.storage.local.set({ flightData: data }, () => {
      console.log("Flight data saved:", data);
    });

  } catch (err) {
    console.error("CO₂ calc failed:", err);
  }
})();
