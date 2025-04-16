console.log("JetZero content script loaded 🚀");

setTimeout(async () => {
    const route = extractAirportCodesFromExpedia();
    if (!route) return console.log("Could not extract airport codes.");
  
    const { from, to } = route;
    const { distance, co2 } = await estimateFlightCO2(from, to);
  
    chrome.storage.local.set({
      flightData: {
        from,
        to,
        distance: distance.toFixed(0),
        co2: co2.toFixed(2),
      },
    });
  
    console.log(`Expedia flight CO₂ saved from ${from} → ${to}: ${distance} km, ${co2} kg`);
  }, 3000);  


function extractAirportCodesFromExpedia() {
    const elements = Array.from(
      document.querySelectorAll("p.uitk-subheading")
    );
  
    const codes = elements
      .map(el => {
        const match = el.textContent.match(/\((\w{3})\)$/); // match (XXX) at end
        return match ? match[1] : null;
      })
      .filter(Boolean);
  
    if (codes.length >= 2) {
      return {
        from: codes[0],
        to: codes[1],
      };
    }
  
    return null;
  }

// function extractAirportCodesFromKayak() {

// }
  