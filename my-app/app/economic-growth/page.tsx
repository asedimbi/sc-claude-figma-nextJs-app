import ChartCard from "@/components/ChartCard";
import { economicGrowthSeries } from "@/lib/mock-economic-growth";

export default function EconomicGrowthPage() {
  return (
    <main className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Economic Growth</h1>
        <p className="text-gray-500 mt-1">GDP, industrial output, and business activity indicators from the FRED system</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {economicGrowthSeries.map((series) => (
          <ChartCard key={series.id} title={series.title} unit={series.unit} color={series.color} data={series.data} />
        ))}
      </div>
    </main>
  );
}
