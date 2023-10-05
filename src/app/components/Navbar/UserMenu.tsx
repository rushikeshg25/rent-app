"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

import { SafeUser } from "@/app/types";
import Avatar from "../Avatar";
import useRentModal from "@/app/hooks/useRentModal";
import ThemeToggleButton from "../Theme/ThemeToggleButton";
import UserMenuModal from "../Modals/UserMenuModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative bg-[#FDFEFE] dark:bg-[#0E1629]">
      <div className="flex flex-row items-center gap-3 ">
        <div className="active:outline-[#8E9DB2]">
          <ThemeToggleButton />
        </div>
        <div
          onClick={rentModal.onOpen}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            dark:text-[#d8dce1]
            dark:hover:bg-slate-700
            select-none
          "
        >
          List your Space
        </div>
        <div
          onClick={toggleOpen}
          onDoubleClick={(e) => e.preventDefault()}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          dark:text-[#8E9DB2]
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && <UserMenuModal currentUser={currentUser} />}
    </div>
  );
};

export default UserMenu;
