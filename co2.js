export async function loadAirportData() {
    const res = await fetch(chrome.runtime.getURL("data/airports.json"));
    return res.json();
  }
  
  export function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  
  export function estimateCO2(distanceKm) {
    let factor = 0.12;
    if (distanceKm < 1500) factor = 0.15;
    else if (distanceKm > 4000) factor = 0.09;
    return distanceKm * factor;
  }
  
  export async function estimateFlightCO2(fromCode, toCode) {
    const airports = await loadAirportData();
    const origin = airports[fromCode.toUpperCase()];
    const dest = airports[toCode.toUpperCase()];
  
    if (!origin || !dest) throw new Error("Airport code not found");
  
    const distance = haversineDistance(origin.lat, origin.lon, dest.lat, dest.lon);
    const co2 = estimateCO2(distance);
    return { distance, co2 };
  }
  