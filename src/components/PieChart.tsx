interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  size?: number;
}

export const PieChart = ({ data, size = 200 }: PieChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const createSlicePath = (percentage: number, startPercentage: number) => {
    const startAngle = startPercentage * 3.6; // Convert to degrees
    const endAngle = (startPercentage + percentage) * 3.6;
    const largeArcFlag = percentage > 50 ? 1 : 0;
    
    const startX = 100 + 95 * Math.cos((startAngle - 90) * Math.PI / 180);
    const startY = 100 + 95 * Math.sin((startAngle - 90) * Math.PI / 180);
    const endX = 100 + 95 * Math.cos((endAngle - 90) * Math.PI / 180);
    const endY = 100 + 95 * Math.sin((endAngle - 90) * Math.PI / 180);
    
    return `M 100 100 L ${startX} ${startY} A 95 95 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <svg width={size} height={size} viewBox="0 0 200 200" className="transform -rotate-90">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const path = createSlicePath(percentage, cumulativePercentage);
          const result = (
            <path
              key={index}
              d={path}
              fill={item.color}
              stroke="hsl(var(--background))"
              strokeWidth="2"
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          );
          cumulativePercentage += percentage;
          return result;
        })}
      </svg>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-foreground">{item.name}: {item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};