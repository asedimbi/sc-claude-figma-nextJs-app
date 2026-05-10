"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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

export default function FredLineChart({ data, color, unit }: Props) {
  const ticks = tickEvery6(data);
  const isIndex = unit.startsWith("Index");

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="date"
          ticks={ticks}
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickLine={false}
          axisLine={{ stroke: "#e5e7eb" }}
        />
        <YAxis
          tickFormatter={(v) => (isIndex ? v.toFixed(0) : `${v}%`)}
          tick={{ fontSize: 10, fill: "#6b7280" }}
          tickLine={false}
          axisLine={false}
          width={44}
        />
        <Tooltip
          formatter={(value: number) =>
            isIndex ? value.toFixed(2) : `${value.toFixed(2)}%`
          }
          labelStyle={{ fontSize: 11, color: "#374151" }}
          contentStyle={{
            fontSize: 11,
            border: "1px solid #e5e7eb",
            borderRadius: 6,
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
