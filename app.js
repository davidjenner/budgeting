import { useState } from "react";

export default function BudgetCalculator() {
  const [mainIncome, setMainIncome] = useState("");
  const [secondIncome, setSecondIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [rentCompany, setRentCompany] = useState("");
  const [mortgageCompany, setMortgageCompany] = useState("");
  const [utilitiesCompany, setUtilitiesCompany] = useState("");
  const [groceriesCompany, setGroceriesCompany] = useState("");
  const [transportationCompany, setTransportationCompany] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [rent, setRent] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [utilities, setUtilities] = useState("");
  const [groceries, setGroceries] = useState("");
  const [transportation, setTransportation] = useState("");
  const [insurance, setInsurance] = useState("");

  const currencySymbol = currency === "USD" ? "$" : currency === "EUR" ? "€" : "£";
  const totalIncome = Number(mainIncome) + Number(secondIncome) + Number(otherIncome);
  const totalNeedsBudget = (totalIncome * 50) / 100;
  const totalWantsBudget = (totalIncome * 30) / 100;
  const totalFutureBudget = (totalIncome * 20) / 100;
  const needsExpenses = Number(rent) + Number(mortgage) + Number(utilities) + Number(groceries) + Number(transportation) + Number(insurance);
  const needsRemaining = totalNeedsBudget - needsExpenses;
  const wantsRemaining = totalWantsBudget;
  const futureRemaining = totalFutureBudget;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="sticky top-0 bg-white p-4 shadow-md z-10">
        <h3 className="text-lg font-bold">Budget Breakdown:</h3>
        <p>Needs (50%): {currencySymbol}{totalNeedsBudget.toFixed(2)} (Remaining: {currencySymbol}{needsRemaining.toFixed(2)}) {needsRemaining < 0 ? "(Over Budget!)" : ""}</p>
        <p>Wants (30%): {currencySymbol}{totalWantsBudget.toFixed(2)} (Remaining: {currencySymbol}{wantsRemaining.toFixed(2)})</p>
        <p>Future (20%): {currencySymbol}{totalFutureBudget.toFixed(2)} (Remaining: {currencySymbol}{futureRemaining.toFixed(2)})</p>
      </div>
      <h2 className="text-xl font-bold">Budget Calculator</h2>
      <div className="space-y-2">
        <label>Main Currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full p-2 border rounded">
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>
      </div>
      <div className="space-y-2">
        <label>Main Income ({currencySymbol}):</label>
        <input type="number" value={mainIncome} onChange={(e) => setMainIncome(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter amount" />
      </div>
      <div className="space-y-2">
        <label>2nd Income ({currencySymbol}):</label>
        <input type="number" value={secondIncome} onChange={(e) => setSecondIncome(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter amount" />
      </div>
      <div className="space-y-2">
        <label>Other Income ({currencySymbol}):</label>
        <input type="number" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter amount" />
      </div>
      <h3 className="text-lg font-bold">Needs Expenses ({currencySymbol}):</h3>
      <div className="space-y-2">
        <label>Rent:</label>
        <input type="text" value={rentCompany} onChange={(e) => setRentCompany(e.target.value)} className="w-full p-2 border rounded" placeholder="Company/Supplier" />
        <div className="flex items-center"><span>{currencySymbol}</span><input type="number" value={rent} onChange={(e) => setRent(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter amount" /></div>
        <label>Mortgage:</label>
        <input type="text" value={mortgageCompany} onChange={(e) => setMortgageCompany(e.target.value)} className="w-full p-2 border rounded" placeholder="Company/Supplier" />
        <div className="flex items-center"><span>{currencySymbol}</span><input type="number" value={mortgage} onChange={(e) => setMortgage(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter amount" /></div>
        <label>Utility Bills:</label>
        <input type="text" value={utilitiesCompany} onChange={(e) => setUtilitiesCompany(e.target.value)} className="w-full p-2 border rounded" placeholder="Company/Supplier" />
        <div className="flex items-center"><span>{currencySymbol}</span><input type="number" value={utilities} onChange={(e) => setUtilities(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter amount" /></div>
      </div>
    </div>
  );
}
