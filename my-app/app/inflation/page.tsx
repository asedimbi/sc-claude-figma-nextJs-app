import ChartCard from "@/components/ChartCard";
import { inflationSeries } from "@/lib/mock-inflation";

export default function InflationPage() {
  return (
    <main className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Inflation</h1>
        <p className="text-gray-500 mt-1">Consumer and producer price trends from the FRED system</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {inflationSeries.map((series) => (
          <ChartCard key={series.id} title={series.title} unit={series.unit} color={series.color} data={series.data} />
        ))}
      </div>
    </main>
  );
}
