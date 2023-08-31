"use client";

type MenuItemprops = {
  onClick: () => void;
  label: string;
};

const MenuItem: React.FC<MenuItemprops> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </div>
  );
};

export default MenuItem;
