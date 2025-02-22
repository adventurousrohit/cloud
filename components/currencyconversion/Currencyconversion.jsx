import React, { createContext, useState, useEffect } from "react";
import fx from "money";
import axios from "axios";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR"); // Default currency
  const [rates, setRates] = useState({ USD: 1 });

  // Function to detect user's country and set the default currency
  useEffect(() => {
    const fetchUserCurrency = async () => {
      try {
        // Get user IP and country
        const geoResponse = await axios.get("https://ipapi.co/json/");
        const countryCode = geoResponse.data.country_code; // Get country code (e.g., "IN", "US")

        // Map country codes to currencies
        const countryCurrencyMap = {
          IN: "INR",
          US: "USD",
          GB: "GBP",
          EU: "EUR",
          AU: "AUD",
          CA: "CAD",
          SG: "SGD",
        };

        // Set currency based on the user's country, default to USD if not listed
        setCurrency(countryCurrencyMap[countryCode] || "USD");
      } catch (error) {
        console.error("Error fetching user location", error);
      }
    };

    fetchUserCurrency();
  }, []);

  // Fetch exchange rates when component mounts
  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        fx.rates = response.data.rates;
        fx.base = "USD";
        setRates(response.data.rates);
      })
      .catch((error) => console.error("Error fetching exchange rates", error));
  }, []);

  // Convert currency function
  const convert = (amount, from = "USD", to = currency) => {
    if (!fx.rates[to]) return amount; // Prevent errors if rates not loaded
    return fx(amount).from(from).to(to).toFixed(2);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
