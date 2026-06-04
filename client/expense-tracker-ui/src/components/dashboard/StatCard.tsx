interface Props {
  title: string;
  amount: string;
  color?: string;
}

export const StatCard = ({
  title,
  amount,
  color,
}: Props) => {
  return (
    <div
      className="
      bg-white
      rounded-[20px]
      border
      border-[#ececec]
      p-6
      "
    >
      <div className="flex justify-between">
        <p className="text-gray-500">
          {title}
        </p>

        <div
          className="w-3 h-3 rounded-[20px]"
          style={{
            backgroundColor: color,
          }}
        />
      </div>

      <h2 className="text-4xl font-bold mt-5">
        {amount}
      </h2>

      <p className="text-sm text-green-600 mt-4">
        +12.5% this month
      </p>
    </div>
  );
}