# Task Plan: FRED Economic Indicators Dashboard

## Overview
Build a Next.js dashboard that replicates the FRED Economic Indicators Dashboard layout observed in `dashboard.jpg`. The dashboard displays real-time economic data from the Federal Reserve Economic Data (FRED) system using embedded FRED chart iframes.

---

## Layout Analysis (from dashboard.jpg)

### Left Sidebar
- App title: **FRED Indicators**
- Subtitle: **Economic Data Dashboard**
- Navigation items (with icons and chevrons):
  - **Key Indicators** (active state — highlighted in blue)
  - Inflation
  - Employment
  - Interest Rates
  - Economic Growth
  - Exchange Rates
  - Housing
  - Consumer Spending
- Footer text: *Data provided by Federal Reserve Economic Data (FRED)*

### Main Content Area
- Page heading: **Economic Indicators Dashboard**
- Subheading: *Real-time economic data from the Federal Reserve Economic Data (FRED) system*
- 2×2 grid of FRED chart iframes:
  | Position | Chart Title |
  |----------|-------------|
  | Top-left | CPI – last five years |
  | Top-right | Infra-Annual Labor Statistics: Unemployment Rate Total |
  | Bottom-left | Interest Rates: Long-Term Government Bond Yields: 10-Year |
  | Bottom-right | Interest Rates: 3-Month or 90-Day Rates and Yields |

---

## File Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout — add sidebar wrapper
│   ├── page.tsx            # Redirect or root landing
│   ├── dashboard/
│   │   └── page.tsx        # Main dashboard page (2×2 chart grid)
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Left nav with icon links
│   ├── NavItem.tsx         # Individual sidebar nav item
│   ├── ChartCard.tsx       # Wrapper card for each FRED iframe
│   └── DashboardGrid.tsx   # 2×2 chart grid layout
├── data/
│   └── charts.ts           # Chart config: title + FRED embed URL per chart
└── plans/
    └── task_fred_dashboard_plan.md
```

---

## Implementation Tasks

### 1. Layout & Sidebar
- [ ] Update `app/layout.tsx` to use a two-column layout (sidebar + main)
- [ ] Build `Sidebar.tsx` with:
  - App branding (title + subtitle)
  - `NavItem` list with icons (use `lucide-react`)
  - Active state highlight (blue background)
  - Footer attribution text
- [ ] Build `NavItem.tsx` — accepts `icon`, `label`, `href`, `active` props

### 2. Chart Data Config
- [ ] Create `data/charts.ts` exporting an array of chart objects:
  ```ts
  { id, title, fredEmbedUrl }
  ```
- [ ] FRED embed URLs needed (from FRED embed builder):
  - CPI (5-year): `https://fred.stlouisfed.org/graph/graph-landing.php?g=...`
  - Unemployment Rate: FRED series `UNRATE`
  - 10-Year Bond Yield: FRED series `GS10`
  - 3-Month T-Bill: FRED series `TB3MS`

### 3. Dashboard Page
- [ ] Create `app/dashboard/page.tsx`
- [ ] Render heading + subheading
- [ ] Import and render `DashboardGrid` with chart config

### 4. Chart Components
- [ ] Build `ChartCard.tsx`:
  - Displays chart title
  - Renders FRED `<iframe>` embed
  - White card with subtle border/shadow
- [ ] Build `DashboardGrid.tsx`:
  - Responsive 2-column CSS grid
  - Maps chart config → `ChartCard`

### 5. Styling
- [ ] Sidebar: fixed width ~260px, white background, left border
- [ ] Active nav item: blue background (`#0066cc` or Tailwind `blue-600`)
- [ ] Main content: light grey background (`#f5f5f5`)
- [ ] Chart cards: white background, `rounded-lg`, `shadow-sm`, padding
- [ ] Typography: match screenshot (large bold heading, grey subheading)

---

## Tech Stack
- **Framework**: Next.js (App Router) — read `node_modules/next/dist/docs/` before implementation
- **Styling**: Tailwind CSS (already configured via `postcss.config.mjs`)
- **Icons**: `lucide-react`
- **Charts**: FRED embed iframes (no API key required for embeds)
- **Language**: TypeScript

---

## FRED Embed URLs

FRED provides embeddable iframes. Base pattern:
```
https://fred.stlouisfed.org/graph/graph-landing.php?g=<GRAPH_ID>&width=670&height=475
```

Alternatively use the series-specific embed:
```
https://fred.stlouisfed.org/graph/fredgraph.png?id=CPIAUCSL
```

For interactive charts use the full embed page URL from each FRED chart's "Share" → "Embed in website" option.

---

## Notes
- The `/mcp` Figma server needs auth — design reference is the `dashboard.jpg` image only
- Sidebar nav items are not yet wired to sub-routes; active state is hardcoded to "Key Indicators" for now
- FRED iframes may show a FRED header bar inside the card — this matches the screenshot
