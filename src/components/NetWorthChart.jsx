import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { value: 8500 },
  { value: 9200 },
  { value: 8900 },
  { value: 9800 },
  { value: 10100 },
  { value: 11200 },
  { value: 12453 },
];

export default function NetWorthChart() {
  return (
    <div className="graph">
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="netWorth"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#1D92E8"
                stopOpacity={0.35}
              />
              <stop
                offset="100%"
                stopColor="#1D92E8"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#1D92E8"
            strokeWidth={3}
            fill="url(#netWorth)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}