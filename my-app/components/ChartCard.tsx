import FredLineChart from "./FredLineChart";
import type { DataPoint } from "@/lib/mock-fred";

type ChartCardProps = {
  title: string;
  unit: string;
  color: string;
  data: DataPoint[];
};

export default function ChartCard({ title, unit, color, data }: ChartCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
      <div className="flex items-start justify-between mb-1">
        <p className="text-sm font-medium text-gray-700 leading-snug max-w-[80%]">
          {title}
        </p>
        <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2 mt-0.5">
          FRED
        </span>
      </div>
      <p className="text-[10px] text-gray-400 mb-3">{unit}</p>
      <FredLineChart data={data} color={color} unit={unit} />
    </div>
  );
}
