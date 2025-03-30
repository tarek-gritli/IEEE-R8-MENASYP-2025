"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { currencies } from "@/constants";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );

  useEffect(() => {
    const fetchConversion = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch("/api/currency-convert");

        if (!response.ok) {
          throw new Error("Conversion failed");
        }

        const data = await response.json();
        if (!data?.rates) {
          throw new Error("Invalid response format");
        }

        setExchangeRates(data.rates);
      } catch (err) {
        console.error("Failed to fetch exchange rates:", err);
        setError("Failed to load exchange rates. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversion();
  }, []);

  useEffect(() => {
    if (Object.keys(exchangeRates).length === 0) return;
    try {
      const usdToFromRate =
        fromCurrency === "USD" ? 1 : 1 / exchangeRates[fromCurrency];
      const usdToTndRate = exchangeRates["TND"];
      const finalRate = usdToFromRate * usdToTndRate;

      setConvertedAmount(parseFloat((amount * finalRate).toFixed(2)));
    } catch (err) {
      console.error("Conversion error:", err);
      setError("Currency conversion failed. Please try again.");
    }
  }, [amount, fromCurrency, exchangeRates]);

  // Handle currency change
  const handleFromCurrencyChange = (currency: string) => {
    setFromCurrency(currency);
    setShowFromDropdown(false);
  };

  return (
    <section className="bg-dark p-12 flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold mb-3">Currency</h2>
      <p className="text-white font-bold mb-8">
        The national currency is the Tunisian dinar, denoted by the symbol
        "دينار" or "DT" (ISO code: TND).
      </p>

      {error && (
        <div className="bg-red-500/20 text-white p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        {/* From Currency */}
        <div className="relative w-full">
          <div className="bg-white rounded-full flex items-center overflow-hidden">
            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(Number.parseFloat(e.target.value) || 0)
              }
              className="w-1/2 py-3 px-5 text-center text-[#1e1433] font-medium outline-none"
            />
            <div
              className="w-1/2 py-3 px-5 text-center text-[#1e1433] font-medium cursor-pointer flex items-center justify-center"
              onClick={() => setShowFromDropdown(!showFromDropdown)}
            >
              {fromCurrency} <ChevronDown className="ml-1 h-4 w-4" />
            </div>
          </div>

          {showFromDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              {currencies.map((currency) => (
                <div
                  key={currency.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFromCurrencyChange(currency.code)}
                >
                  {currency.code} - {currency.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Arrow */}
        <ArrowRight className="text-primary100 font-bold w-40 h-40" />

        {/* To Currency */}
        <div className="relative w-full">
          <div className="bg-white rounded-full flex items-center overflow-hidden">
            <input
              type="number"
              value={isLoading ? "..." : convertedAmount}
              readOnly
              className="w-1/2 py-3 px-5 text-center text-[#1e1433] font-medium outline-none"
            />
            <div className="w-1/2 py-3 px-5 text-center text-[#1e1433] font-medium cursor-pointer flex items-center justify-center">
              TND
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="mt-4 text-white/60 text-center text-sm">
          Loading exchange rates...
        </div>
      ) : (
        !error &&
        exchangeRates["TND"] && (
          <div className="mt-4 text-white/60 text-center text-sm">
            1 {fromCurrency} ={" "}
            {(fromCurrency === "USD"
              ? exchangeRates["TND"]
              : (1 / exchangeRates[fromCurrency]) * exchangeRates["TND"]
            ).toFixed(6)}{" "}
            TND
          </div>
        )
      )}
    </section>
  );
};

export default CurrencyConverter;
