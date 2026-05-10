import ChartCard from "@/components/ChartCard";
import { consumerSpendingSeries } from "@/lib/mock-consumer-spending";

export default function ConsumerSpendingPage() {
  return (
    <main className="flex-1 bg-gray-50 p-8 overflow-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Consumer Spending</h1>
        <p className="text-gray-500 mt-1">Personal consumption, retail sales, and savings trends from the FRED system</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {consumerSpendingSeries.map((series) => (
          <ChartCard key={series.id} title={series.title} unit={series.unit} color={series.color} data={series.data} />
        ))}
      </div>
    </main>
  );
}
