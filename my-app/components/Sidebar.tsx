import {
  TrendingUp,
  Briefcase,
  LineChart,
  Globe,
  Home,
  ShoppingCart,
  BarChart2,
} from "lucide-react";
import NavItem from "./NavItem";

const navItems = [
  { icon: TrendingUp, label: "Inflation" },
  { icon: Briefcase, label: "Employment" },
  { icon: LineChart, label: "Interest Rates" },
  { icon: BarChart2, label: "Economic Growth" },
  { icon: Globe, label: "Exchange Rates" },
  { icon: Home, label: "Housing" },
  { icon: ShoppingCart, label: "Consumer Spending" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="px-4 py-5 border-b border-gray-100">
        <h1 className="text-lg font-bold text-gray-900">FRED Indicators</h1>
        <p className="text-xs text-gray-500 mt-0.5">Economic Data Dashboard</p>
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          <NavItem icon={TrendingUp} label="Key Indicators" active />
          {navItems.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 leading-relaxed">
          Data provided by Federal Reserve Economic Data (FRED)
        </p>
      </div>
    </aside>
  );
}
