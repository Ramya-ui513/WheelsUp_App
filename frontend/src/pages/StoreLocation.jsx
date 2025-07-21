import React, { useState } from "react";
import locationIreland from "../assets/Location.jpg"; 

const storeDetails = {
  Ireland: {
    image: locationIreland,
    address: "Apartment 18, Belfry Manor, Citywest, Dublin D24 DC84",
    contact: "0874786869",
  },
  USA: {
    image: "", 
    address: "Coming Soon...",
    contact: "N/A",
  },
  India: {
    image: "", 
    address: "Coming Soon...",
    contact: "N/A",
  },
};

const StoreLocation = () => {
  const [selectedCountry, setSelectedCountry] = useState("Ireland");

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Select Store Location</h2>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        style={{ padding: "10px", fontSize: "1rem", marginBottom: "20px" }}
      >
        {Object.keys(storeDetails).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "20px", fontSize: "1.1rem" }}>
        <p><strong>Address:</strong> {storeDetails[selectedCountry].address}</p>
        <p><strong>Contact:</strong> {storeDetails[selectedCountry].contact}</p>
      </div>

      {storeDetails[selectedCountry].image && (
        <img
          src={storeDetails[selectedCountry].image}
          alt={`Store in ${selectedCountry}`}
          style={{
            width: "90%",
            maxWidth: "600px",
            borderRadius: "12px",
            marginTop: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        />
      )}
    </div>
  );
};

export default StoreLocation;
