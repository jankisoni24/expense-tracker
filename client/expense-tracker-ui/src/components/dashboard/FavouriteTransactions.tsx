import { AppCard } from "@/components/common/AppCard";
import { MoreHorizontal } from "lucide-react";
import { SiNetflix, SiSwiggy } from "react-icons/si";

const transactions = [
  {
    brand: "Swiggy",
    title: "Swiggy",
    amount: "₹9,000",
    icon: <SiSwiggy size={24} color="#FC8019" />,
  },
  {
    brand: "Netflix",
    title: "Netflix",
    amount: "₹1,499",
    icon: <SiNetflix size={24} color="#E50914" />,
  },
];

export const FavouriteTransactions = () => {
  return (
    <AppCard className="p-5">
      {/* Header */}

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[28px] font-medium">
          Favourite transaction
        </h3>

        <button
          className="
          h-10
          w-10
          rounded-xl
          border
          border-[#ececec]
          flex
          items-center
          justify-center
          "
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-4">
        {transactions.map((item) => (
          <div
            key={item.brand}
            className="
            border
            border-[#ececec]
            rounded-2xl
            p-5
            "
          >
            {/* Logo */}

            <div className="text-3xl">
              {item.icon}
            </div>

            {/* Brand */}

            <p className="mt-5 text-sm text-[#6b7280]">
              {item.title}
            </p>

            {/* Amount */}

            <h4 className="mt-2 text-4xl font-semibold">
              {item.amount}
            </h4>

            <p className="mt-2 text-sm text-[#9ca3af]">
              Per month
            </p>
          </div>
        ))}
      </div>
    </AppCard>
  );
};