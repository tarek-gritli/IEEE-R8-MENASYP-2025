"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { currencies } from "@/constants";
import ActionButton from "../ActionButton";
import Image from "next/image";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TND");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [error, setError] = useState("");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );
  const [isFromInputFocused, setIsFromInputFocused] = useState(false);
  const [isToInputFocused, setIsToInputFocused] = useState(false);
  const [direction, setDirection] = useState("from"); // "from" means converting from selected currency to TND, "to" means the opposite

  // Refs for click outside functionality
  const fromDropdownRef = useRef<HTMLDivElement>(null);
  const toDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchConversion = async () => {
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
      }
    };

    fetchConversion();
  }, []);

  useEffect(() => {
    if (Object.keys(exchangeRates).length === 0) return;
    try {
      if (direction === "from") {
        const usdToFromRate =
          fromCurrency === "USD" ? 1 : 1 / exchangeRates[fromCurrency];
        const usdToTndRate = exchangeRates["TND"];
        const finalRate = usdToFromRate * usdToTndRate;

        setConvertedAmount(parseFloat((amount * finalRate).toFixed(2)));
      } else {
        const tndToUsdRate = 1 / exchangeRates["TND"];
        const usdToToCurrencyRate =
          toCurrency === "USD" ? 1 : exchangeRates[toCurrency];
        const finalRate = tndToUsdRate * usdToToCurrencyRate;

        setConvertedAmount(parseFloat((amount * finalRate).toFixed(2)));
      }
    } catch (err) {
      console.error("Conversion error:", err);
      setError("Currency conversion failed. Please try again.");
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates, direction]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        fromDropdownRef.current &&
        !fromDropdownRef.current.contains(event.target as Node) &&
        showFromDropdown
      ) {
        setShowFromDropdown(false);
      }

      if (
        toDropdownRef.current &&
        !toDropdownRef.current.contains(event.target as Node) &&
        showToDropdown
      ) {
        setShowToDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFromDropdown, showToDropdown]);

  const handleFromCurrencyChange = (currency: string) => {
    setFromCurrency(currency);
    setShowFromDropdown(false);
  };

  const handleToCurrencyChange = (currency: string) => {
    setToCurrency(currency);
    setShowToDropdown(false);
  };

  const swapDirection = () => {
    setDirection(direction === "from" ? "to" : "from");
  };

  return (
    <section className="bg-dark h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold">
            Say Hi to the Tunisian Dinar 👋
          </h2>

          <p className="text-lg font-medium">
            The national currency is the Tunisian dinar, denoted by the symbol
            "دينار" or "DT" (ISO code: TND).
          </p>
          <h2 className="text-2xl font-bold">Convert your currency</h2>
          {error && (
            <div className="bg-red-500/20 text-white p-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full" ref={fromDropdownRef}>
              <div
                className={`bg-transparent border rounded-lg flex items-center overflow-hidden ${
                  isFromInputFocused
                    ? "border-2 border-primary100"
                    : "border border-[#4E3E5A]"
                }`}
              >
                <input
                  type="number"
                  min={0}
                  value={direction === "from" ? amount : convertedAmount}
                  onChange={(e) =>
                    direction === "from" &&
                    setAmount(Number.parseFloat(e.target.value) || 0)
                  }
                  onFocus={() => setIsFromInputFocused(true)}
                  onBlur={() => setIsFromInputFocused(false)}
                  readOnly={direction !== "from"}
                  className="w-1/2 py-3 px-5 text-center text-white font-medium bg-transparent outline-none"
                />
                <div
                  className="w-1/2 py-3 px-5 text-center text-white font-medium cursor-pointer flex items-center justify-center"
                  onClick={() => {
                    if (direction === "from") {
                      setShowFromDropdown(!showFromDropdown);
                      setShowToDropdown(false);
                    } else {
                      setShowToDropdown(!showToDropdown);
                      setShowFromDropdown(false);
                    }
                  }}
                >
                  {direction === "from" ? fromCurrency : toCurrency}{" "}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </div>

              {showFromDropdown && direction === "from" && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {currencies.map((currency) => (
                    <div
                      key={currency.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                      onClick={() => handleFromCurrencyChange(currency.code)}
                    >
                      {currency.code} - {currency.name}
                    </div>
                  ))}
                </div>
              )}

              {showToDropdown && direction === "to" && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {currencies.map((currency) => (
                    <div
                      key={currency.code}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                      onClick={() => handleToCurrencyChange(currency.code)}
                    >
                      {currency.code} - {currency.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className="cursor-pointer p-2 hover:bg-gray-800 rounded-full"
              onClick={swapDirection}
            >
              {direction === "from" ? (
                <ArrowRight className="text-primary100 font-bold w-6 h-6" />
              ) : (
                <ArrowLeft className="text-primary100 font-bold w-6 h-6" />
              )}
            </div>

            <div className="relative w-full" ref={toDropdownRef}>
              <div
                className={`bg-transparent rounded-lg flex items-center overflow-hidden ${
                  isToInputFocused
                    ? "border-2 border-primary100"
                    : "border border-[#4E3E5A]"
                }`}
              >
                <input
                  type="number"
                  min={0}
                  value={direction === "from" ? convertedAmount : amount}
                  onChange={(e) =>
                    direction === "to" &&
                    setAmount(Number.parseFloat(e.target.value) || 0)
                  }
                  onFocus={() => setIsToInputFocused(true)}
                  onBlur={() => setIsToInputFocused(false)}
                  readOnly={direction === "from"}
                  className="w-1/2 py-3 px-5 text-center text-white font-medium bg-transparent outline-none"
                />
                <div className="w-1/2 py-3 px-5 text-center text-white font-medium cursor-pointer flex items-center justify-center">
                  {direction === "from" ? "TND" : "TND"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center max-h-100">
          <Image
            src="/images/tunisian-dinar-pattern.png"
            alt="Tunisian Dinar Pattern"
            width={600}
            height={400}
            className="object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
