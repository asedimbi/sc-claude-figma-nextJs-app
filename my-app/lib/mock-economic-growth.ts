export type DataPoint = { date: string; value: number };
export type SeriesData = { id: string; title: string; unit: string; color: string; data: DataPoint[] };

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function buildSeries(values: number[]): DataPoint[] {
  return values.map((value, i) => ({
    date: `${months[i % 12]} ${2020 + Math.floor(i / 12)}`,
    value,
  }));
}

// Repeat each quarterly GDP value 3x for monthly representation
const gdpQuarterly = [
  -4.6,-31.2,33.8,4.5,   // 2020
  6.3,6.7,2.3,7.0,       // 2021
  -1.6,-0.6,3.2,2.6,     // 2022
  2.2,2.1,4.9,3.4,       // 2023
  1.6,3.0,2.8,2.4,       // 2024
];
const gdpMonthly = gdpQuarterly.flatMap((v) => [v, v, v]);

export const economicGrowthSeries: SeriesData[] = [
  {
    id: "gdp-growth",
    title: "Real GDP Growth Rate (QoQ, Annualized)",
    unit: "Percent",
    color: "#2563eb",
    data: buildSeries(gdpMonthly),
  },
  {
    id: "industrial-production",
    title: "Industrial Production Index",
    unit: "Index (2017=100)",
    color: "#2563eb",
    data: buildSeries([
      109.5,109.2,106.5,88.0,90.5,94.8,96.9,97.8,99.1,100.3,100.3,100.2,
      100.8,101.8,102.2,102.6,102.8,103.1,102.7,102.4,102.9,103.4,103.5,103.8,
      104.2,104.6,104.4,104.0,103.6,103.7,103.8,103.9,103.5,103.4,103.4,103.2,
      103.6,103.1,103.0,102.9,103.5,103.0,103.2,103.4,103.5,103.1,102.6,102.5,
      102.8,103.2,103.5,103.1,102.9,102.8,103.1,102.8,102.5,102.7,103.3,103.5,
    ]),
  },
  {
    id: "consumer-sentiment",
    title: "Consumer Sentiment Index (UMich)",
    unit: "Index (1966 Q1=100)",
    color: "#2563eb",
    data: buildSeries([
      99.8,101.0,89.1,71.8,72.3,78.1,72.5,74.1,79.2,81.8,76.9,80.7,
      79.0,76.8,80.7,88.3,82.9,85.5,81.2,70.3,72.8,71.7,67.4,70.6,
      67.2,62.8,59.4,65.2,58.4,50.0,51.5,55.1,58.6,59.9,56.8,59.7,
      64.9,67.0,62.0,63.5,59.2,64.4,71.6,69.0,67.7,60.4,61.3,69.4,
      78.8,79.6,77.2,77.9,69.1,65.6,66.4,70.1,70.1,68.9,71.8,74.0,
    ]),
  },
  {
    id: "pmi",
    title: "ISM Manufacturing PMI",
    unit: "Index (>50 = Expansion)",
    color: "#2563eb",
    data: buildSeries([
      50.9,50.1,49.1,41.5,43.1,52.6,54.2,56.0,55.4,59.3,57.5,60.7,
      58.7,60.8,64.7,60.7,61.2,60.6,59.5,59.9,61.1,60.8,61.1,58.7,
      57.6,58.6,57.1,55.4,56.1,53.0,52.8,51.5,50.9,50.2,49.0,48.4,
      47.4,47.7,46.3,47.1,46.9,46.0,46.4,47.6,49.0,46.7,46.2,47.4,
      49.1,50.3,50.3,49.2,51.3,48.5,46.8,47.2,47.3,46.5,48.4,49.3,
    ]),
  },
];
