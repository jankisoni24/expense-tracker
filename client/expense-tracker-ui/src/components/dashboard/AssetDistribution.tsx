import { AppCard } from "@/components/common/AppCard";
import { Search, Download } from "lucide-react";

const assets = [
  {
    category: "Food",
    amount: 32,
    allocation: 75,
    value: "₹18,000",
  },
  {
    category: "Travel",
    amount: 12,
    allocation: 45,
    value: "₹12,500",
  },
  {
    category: "Shopping",
    amount: 24,
    allocation: 60,
    value: "₹9,200",
  },
  {
    category: "Bills",
    amount: 18,
    allocation: 35,
    value: "₹6,500",
  },
  {
    category: "Others",
    amount: 8,
    allocation: 20,
    value: "₹2,000",
  },
];

export const AssetDistribution = () => {
  return (
    <AppCard className="p-0 overflow-hidden h-[475px]">
      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-[#ececec]">
        <h3 className="text-2xl font-medium">
          Asset distribution
        </h3>

        <div className="flex items-center gap-3">
          {/* Search */}

          <div
            className="
            flex
            items-center
            gap-2
            px-4
            h-11
            bg-[#fafaf8]
            border
            border-[#ececec]
            rounded-xl
            w-[180px]
            "
          >
            <Search
              size={16}
              className="text-gray-400"
            />

            <input
              placeholder="Search"
              className="
              bg-transparent
              outline-none
              text-sm
              w-full
              "
            />
          </div>

          {/* Download */}

          <button
            className="
            flex
            items-center
            gap-2
            h-11
            px-4
            border
            border-[#ececec]
            rounded-xl
            bg-white
            text-sm
            font-medium
            hover:bg-[#fafaf8]
            "
          >
            <Download size={16} />

            Download Data
          </button>
        </div>
      </div>

      {/* Table */}

      <div className="px-4 py-3">
        <table className="w-full">
          <thead>
            <tr
              className="
              text-left
              text-sm
              text-gray-500
              border-b
              "
            >
              <th className="pb-4 font-medium">
                Your Assets
              </th>

              <th className="pb-4 font-medium">
                Amount
              </th>

              <th className="pb-4 font-medium">
                Asset Allocation
              </th>

              <th className="pb-4 font-medium">
                Value
              </th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.category}
                className="border-b last:border-0"
              >
                <td className="py-5 font-medium">
                  {asset.category}
                </td>

                <td className="py-5">
                  {asset.amount}
                </td>

                <td className="py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                      h-2
                      w-[180px]
                      rounded-full
                      bg-[#eeeeea]
                      "
                    >
                      <div
                        className="
                        h-2
                        rounded-full
                        bg-[#bdbdb6]
                        "
                        style={{
                          width: `${asset.allocation}%`,
                        }}
                      />
                    </div>

                    <span className="text-sm text-gray-500">
                      {asset.allocation}%
                    </span>
                  </div>
                </td>

                <td className="py-5 font-semibold">
                  {asset.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppCard>
  );
};