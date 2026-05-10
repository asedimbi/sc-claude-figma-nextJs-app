export type DataPoint = { date: string; value: number };

export type SeriesData = {
  id: string;
  title: string;
  unit: string;
  color: string;
  data: DataPoint[];
};

const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

function pts(years: number[][], values: number[]): DataPoint[] {
  return years.flatMap(([year, startMonth], yi) => {
    const monthCount = yi < years.length - 1
      ? 12 - startMonth
      : values.length - years.slice(0, yi).reduce((s, [, sm], i) => s + (i < years.length - 1 ? 12 - sm : 0), 0);
    return Array.from({ length: monthCount }, (_, mi) => ({
      date: `${months[(startMonth + mi) % 12]} ${year + Math.floor((startMonth + mi) / 12)}`,
      value: values[yi === 0 ? mi : years.slice(0, yi).reduce((s, [, sm], i) => s + (i < years.length - 1 ? 12 - sm : 0), 0) + mi],
    }));
  });
}

// CPI – Consumer Price Index All Urban Consumers (CPIAUCSL), Index 1982-84=100
const cpiValues = [
  257.97,258.68,258.11,256.39,256.39,257.80,259.10,259.92,260.28,260.39,260.23,260.47,
  261.58,263.01,264.88,267.05,269.19,271.70,273.00,273.57,274.31,276.59,278.52,280.13,
  281.93,283.72,287.50,289.11,291.47,296.31,296.98,296.17,296.81,298.01,297.71,296.80,
  299.17,300.84,301.84,303.36,304.13,305.11,305.69,307.03,307.79,307.67,307.05,306.75,
  308.42,310.33,312.23,313.55,314.07,314.18,314.54,314.80,315.30,315.66,315.49,315.61,
];

// Unemployment Rate (UNRATE), Percent
const unrateValues = [
  3.5,3.5,4.4,14.7,13.3,11.1,10.2,8.4,7.9,6.9,6.7,6.7,
  6.4,6.2,6.0,6.0,5.8,5.9,5.4,5.2,4.8,4.6,4.2,3.9,
  4.0,3.8,3.6,3.6,3.6,3.6,3.5,3.7,3.5,3.7,3.7,3.5,
  3.4,3.6,3.5,3.4,3.7,3.6,3.5,3.8,3.8,3.9,3.7,3.7,
  3.7,3.9,3.8,3.9,4.0,4.1,4.3,4.2,4.1,4.1,4.2,4.2,
];

// 10-Year Treasury Constant Maturity Rate (GS10), Percent
const gs10Values = [
  1.76,1.50,0.87,0.64,0.70,0.73,0.62,0.72,0.68,0.83,0.89,0.93,
  1.07,1.31,1.62,1.64,1.60,1.45,1.24,1.30,1.44,1.56,1.57,1.48,
  1.76,1.94,2.14,2.86,2.94,3.15,2.89,3.05,3.67,4.01,3.87,3.88,
  3.54,3.74,3.65,3.57,3.57,3.84,3.97,4.25,4.57,4.93,4.47,3.97,
  4.03,4.28,4.20,4.60,4.48,4.37,4.26,3.91,3.73,4.13,4.36,4.58,
];

// 3-Month Treasury Bill Secondary Market Rate (TB3MS), Percent
const tb3msValues = [
  1.52,1.53,0.65,0.11,0.12,0.16,0.12,0.10,0.11,0.09,0.09,0.09,
  0.09,0.05,0.03,0.02,0.02,0.05,0.05,0.05,0.04,0.05,0.05,0.06,
  0.15,0.33,0.51,0.74,1.00,1.73,2.40,2.93,3.33,3.84,4.20,4.42,
  4.62,4.72,4.79,4.96,5.17,5.21,5.25,5.41,5.48,5.44,5.44,5.38,
  5.33,5.37,5.38,5.42,5.38,5.25,5.21,5.05,4.74,4.57,4.49,4.29,
];

function buildSeries(values: number[]): DataPoint[] {
  return values.map((value, i) => {
    const year = 2020 + Math.floor(i / 12);
    const month = i % 12;
    return { date: `${months[month]} ${year}`, value };
  });
}

export const fredSeries: SeriesData[] = [
  {
    id: "cpi",
    title: "CPI – last five years",
    unit: "Index (1982-84=100)",
    color: "#2563eb",
    data: buildSeries(cpiValues),
  },
  {
    id: "unemployment",
    title: "Infra-Annual Labor Statistics: Unemployment Rate Total",
    unit: "Percent",
    color: "#2563eb",
    data: buildSeries(unrateValues),
  },
  {
    id: "bond-10yr",
    title: "Interest Rates: Long-Term Government Bond Yields: 10-Year",
    unit: "Percent",
    color: "#2563eb",
    data: buildSeries(gs10Values),
  },
  {
    id: "rate-3mo",
    title: "Interest Rates: 3-Month or 90-Day Rates and Yields",
    unit: "Percent",
    color: "#2563eb",
    data: buildSeries(tb3msValues),
  },
];
