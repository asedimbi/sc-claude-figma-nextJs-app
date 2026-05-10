# FRED Economic Indicators Dashboard

A Next.js demo dashboard displaying U.S. macroeconomic data across 8 themed tabs, built with mock data modeled on the [Federal Reserve Economic Data (FRED)](https://fred.stlouisfed.org/) database.

## What This Dashboard Showcases

The dashboard demonstrates how to build a data-rich, multi-tab analytics UI in Next.js using the App Router. It covers:

- **React Server Components** — page and layout components render on the server by default
- **Client Components** — interactive charts and the active-state sidebar use `"use client"`
- **recharts** — line charts render 60 months of time-series data with custom tick formatters
- **Tailwind CSS v4** — utility-first styling throughout
- **lucide-react** — icon set for sidebar navigation
- **Git worktrees** — each of the 7 feature tabs was developed on its own branch in a parallel worktree, then merged to `main`

### The 8 Tabs

| Tab | Metrics |
|-----|---------|
| Key Indicators | CPI, Unemployment Rate, 10-Year Treasury, 3-Month T-Bill |
| Inflation | CPI YoY %, Core CPI %, PPI Index, PCE YoY % |
| Employment | Unemployment Rate, Nonfarm Payrolls, Labor Force Participation, JOLTS Openings |
| Interest Rates | Fed Funds Rate, 10-Year Treasury, 30-Year Mortgage Rate, Yield Spread (10yr–2yr) |
| Economic Growth | Real GDP Growth, Industrial Production Index, UMich Consumer Sentiment, ISM PMI |
| Exchange Rates | USD/EUR, USD/GBP, USD/JPY, Trade-Weighted Dollar Index |
| Housing | Housing Starts, Case-Shiller Index, 30-Year Mortgage Rate, Existing Home Sales |
| Consumer Spending | PCE (billions SAAR), Retail Sales YoY %, Consumer Confidence, Personal Savings Rate |

## About the Mock Data

**No FRED API key is required.** All data is hardcoded in `my-app/lib/mock-*.ts` files.

Each series contains **60 monthly data points spanning January 2020 through December 2024**, generated to reflect actual economic patterns from that period:

- The COVID-19 shock in early 2020 (GDP collapse, unemployment spike, savings surge)
- The 2021–2022 inflation surge (CPI peak ~9% YoY, PPI index highs)
- The Federal Reserve rate hike cycle from March 2022 through mid-2023 (fed funds from ~0% to 5.33%)
- The yield curve inversion (10yr–2yr spread going deeply negative in 2022–2023)
- The housing market slowdown as mortgage rates climbed above 7%
- The gradual disinflation and rate cuts beginning in late 2024

The values are plausible approximations — not official FRED data — intended purely for UI demonstration purposes.

### Mock Data Files

```
my-app/lib/
├── mock-fred.ts              # Key Indicators tab (CPI, Unemployment, Treasuries)
├── mock-inflation.ts         # Inflation tab
├── mock-employment.ts        # Employment tab
├── mock-interest-rates.ts    # Interest Rates tab
├── mock-economic-growth.ts   # Economic Growth tab
├── mock-exchange-rates.ts    # Exchange Rates tab
├── mock-housing.ts           # Housing tab
└── mock-consumer-spending.ts # Consumer Spending tab
```

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16.2.6 |
| React | 19.2.4 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| recharts | 3 |
| lucide-react | 1 |

## Running Locally

**Prerequisites:** Node.js 18 or later, npm

```bash
# 1. Clone the repo
git clone https://github.com/asedimbi/sc-claude-figma-nextJs-app.git
cd sc-claude-figma-nextJs-app

# 2. Install dependencies
cd my-app
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The root route redirects automatically to `/dashboard`.

### Other Scripts

```bash
npm run build   # Production build
npm run start   # Start production server (after build)
npm run lint    # Run ESLint
```

## Project Structure

```
my-app/
├── app/
│   ├── layout.tsx              # Root layout — Sidebar + page content
│   ├── page.tsx                # Redirects / → /dashboard
│   ├── dashboard/page.tsx      # Key Indicators tab
│   ├── inflation/page.tsx
│   ├── employment/page.tsx
│   ├── interest-rates/page.tsx
│   ├── economic-growth/page.tsx
│   ├── exchange-rates/page.tsx
│   ├── housing/page.tsx
│   └── consumer-spending/page.tsx
├── components/
│   ├── Sidebar.tsx             # Navigation sidebar (client component)
│   ├── NavItem.tsx             # Single nav link with active state
│   ├── ChartCard.tsx           # Card wrapper for each metric
│   ├── FredLineChart.tsx       # recharts line chart (client component)
│   └── FredBarChart.tsx        # recharts bar chart (client component)
└── lib/
    └── mock-*.ts               # Mock time-series data
```
