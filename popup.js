// popup.js
document.addEventListener("DOMContentLoaded", () => {
    const flightInfo = document.getElementById("flightInfo");
  
    chrome.storage.local.get("flightData", (result) => {
      if (result.flightData) {
        const { from, to, distance, co2 } = result.flightData;
        flightInfo.innerHTML = `
          <div>✈️ ${from} → ${to}</div>
          <div>🛫 Distance: ${distance} km</div>
          <div class="co2">🌱 CO₂: ${co2} kg</div>
        `;
      } else {
        flightInfo.textContent = "No flight data available.";
      }
    });
  });
  