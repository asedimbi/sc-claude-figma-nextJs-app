export type Chart = {
  id: string;
  title: string;
  embedUrl: string;
};

export const charts: Chart[] = [
  {
    id: "cpi",
    title: "CPI – last five years",
    embedUrl:
      "https://fred.stlouisfed.org/graph/graph-landing.php?g=1bN8w&width=670&height=475",
  },
  {
    id: "unemployment",
    title: "Infra-Annual Labor Statistics: Unemployment Rate Total",
    embedUrl:
      "https://fred.stlouisfed.org/graph/graph-landing.php?g=1bN8A&width=670&height=475",
  },
  {
    id: "bond-10yr",
    title: "Interest Rates: Long-Term Government Bond Yields: 10-Year",
    embedUrl:
      "https://fred.stlouisfed.org/graph/graph-landing.php?g=1bN8M&width=670&height=475",
  },
  {
    id: "rate-3mo",
    title: "Interest Rates: 3-Month or 90-Day Rates and Yields",
    embedUrl:
      "https://fred.stlouisfed.org/graph/graph-landing.php?g=1bN8Q&width=670&height=475",
  },
];
