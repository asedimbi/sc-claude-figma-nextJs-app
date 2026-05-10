import ChartCard from "@/components/ChartCard";
import { exchangeRatesSeries } from "@/lib/mock-exchange-rates";

export default function ExchangeRatesPage() {
  return (
    <main className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Exchange Rates</h1>
        <p className="text-gray-500 mt-1">U.S. dollar exchange rates and trade-weighted index from the FRED system</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {exchangeRatesSeries.map((series) => (
          <ChartCard key={series.id} title={series.title} unit={series.unit} color={series.color} data={series.data} />
        ))}
      </div>
    </main>
  );
}
