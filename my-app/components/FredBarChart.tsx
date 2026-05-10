"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { DataPoint } from "@/lib/mock-fred";

type Props = {
  data: DataPoint[];
  color: string;
  unit: string;
};

function tickEvery6(data: DataPoint[]) {
  return data
    .map((d, i) => ({ ...d, i }))
    .filter(({ i }) => i % 6 === 0)
    .map(({ date }) => date);
}

export default function FredBarChart({ data, color, unit }: Props) {
  const ticks = tickEvery6(data);
  const isPercent = unit.toLowerCase().includes("percent") || unit.includes("%");

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis
          dataKey="date"
          ticks={ticks}
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickLine={false}
          axisLine={{ stroke: "#e5e7eb" }}
        />
        <YAxis
          tickFormatter={(v) => (isPercent ? `${v}%` : v.toLocaleString())}
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickLine={false}
          axisLine={false}
          width={44}
        />
        <ReferenceLine y={0} stroke="#e5e7eb" />
        <Tooltip
          formatter={(value: number) =>
            isPercent ? `${value.toFixed(2)}%` : value.toLocaleString()
          }
          labelStyle={{ fontSize: 11, color: "#374151" }}
          contentStyle={{
            fontSize: 11,
            border: "1px solid #e5e7eb",
            borderRadius: 6,
          }}
        />
        <Bar dataKey="value" fill={color} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
