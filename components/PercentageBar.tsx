interface PercentageBarProps {
  label: string;
  percentage: number;
}

const PercentageBar = ({ label, percentage }: PercentageBarProps) => {
  return (
    <div className="flex flex-col">
      <div className="row-space-between text-sm">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="flex border-2 border-green-500 h-2 p-1 items-center rounded-full">
        <div style={{ width: `${percentage}%` }} className={`bg-green-500 h-full p-0.5 rounded-full`} />
      </div>
    </div>
  );
}

export { PercentageBar };