import { estimateFlightCO2 } from "./co2.js";

console.log("JetZero content script loaded 🚀");

setTimeout(async () => {
    // const route = extractAirportCodesFromExpedia();
    const hostname = window.location.hostname;
    let route = null;

    if (hostname.includes("expedia.com")) {
        route = extractExpediaCodes();
    } else if (hostname.includes("booking.com")) {
        route = extractBookingCodes();
    } else if (hostname.includes("kayak.com")) {
        route = extractKayakCodes();
    } else {
        console.log("No matching scraper for this site.");
    }

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

    console.log(`Flight CO₂ saved from ${from} → ${to}: ${distance} km, ${co2} kg`);
}, 3000);


function extractExpediaCodes() {
    const elements = Array.from(
        document.querySelectorAll("p.uitk-subheading")
    );
    if (!elements.length) {
        console.log("Expedia element not found");
        return;
    }

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
    } else {
        console.log("Could not extract two airport codes from:", codes);
        return null;
    }
}

const extractBookingCodes = () => {
    const el = document.querySelector('[data-testid="flight_segment_card_cityAndCode"]');
    if (!el) {
        console.log("Booking.com element not found");
        return;
    }

    const text = el.textContent;
    const codes = text.match(/\((\w{3})\)/g); // Matches all 3-letter codes in parentheses

    if (codes && codes.length >= 2) {
        const from = codes[0].replace(/[()]/g, "");
        const to = codes[1].replace(/[()]/g, "");
        return {
            from: from,
            to: to,
        };
    } else {
        console.log("Could not extract two airport codes from:", text);
        return null;
    }
};


