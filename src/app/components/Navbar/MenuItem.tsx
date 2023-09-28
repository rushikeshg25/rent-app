"use client";

type MenuItemprops = {
  onClick: () => void;
  label: string;
};

const MenuItem: React.FC<MenuItemprops> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-gray-950 hover:text-white transition font-semibold dark:hover:bg-red-600"
    >
      {label}
    </div>
  );
};

export default MenuItem;
