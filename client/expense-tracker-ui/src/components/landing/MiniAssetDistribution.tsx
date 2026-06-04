import { Search, Download } from "lucide-react";

const assets = [
  {
    category: "Food",
    amount: 32,
    allocation: 75,
    value: "₹18k",
  },
  {
    category: "Travel",
    amount: 12,
    allocation: 45,
    value: "₹12k",
  },
  {
    category: "Shopping",
    amount: 24,
    allocation: 60,
    value: "₹9k",
  },
  {
    category: "Bills",
    amount: 18,
    allocation: 35,
    value: "₹6k",
  },
  {
    category: "Others",
    amount: 8,
    allocation: 20,
    value: "₹2k",
  },
];

export default function MiniAssetDistribution() {
  return (
    <div
      className="
      bg-white
      border
      border-[#ececec]
      rounded-3xl
      overflow-hidden
      flex
      flex-col
      h-full
      "
    >
      {/* Header */}

      <div className="border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">
            Asset Distribution
          </h4>

          <button className="text-[10px] text-gray-500">
            Download
          </button>
        </div>

        <div
          className="
          flex
          items-center
          gap-2
          bg-[#fafaf8]
          border
          border-[#ececec]
          rounded-lg
          px-3
          h-8
          mt-3
          "
        >
          <Search size={12} />

          <input
            placeholder="Search"
            className="
            bg-transparent
            text-[10px]
            outline-none
            w-full
            "
          />
        </div>
      </div>

      {/* Table */}

      <div className="flex-1 p-3">
        <table className="w-full">
          <thead>
            <tr className="text-[10px] text-gray-400">
              <th className="text-left pb-3">
                Asset
              </th>

              <th className="text-left pb-3">
                Amt
              </th>

              <th className="text-left pb-3">
                Allocation
              </th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => (
              <tr key={asset.category}>
                <td className="py-3 text-[11px]">
                  {asset.category}
                </td>

                <td className="py-3 text-[11px]">
                  {asset.amount}
                </td>

                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-[#eeeeea] rounded-full">
                      <div
                        className="
                        h-1.5
                        rounded-full
                        bg-[#bdbdb6]
                        "
                        style={{
                          width: `${asset.allocation}%`,
                        }}
                      />
                    </div>

                    <span className="text-[10px]">
                      {asset.value}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}