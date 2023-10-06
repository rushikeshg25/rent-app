import { SafeUser } from "@/app/types";
import MenuItem from "../Navbar/MenuItem";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";

interface UsermenuModalProps {
  currentUser?: SafeUser | null;
}

const UserMenuModal = ({ currentUser }: UsermenuModalProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  return (
    <div
      className="
      shadow-lg
    absolute 
    rounded-xl 
    w-[40vw]
    md:w-3/4 
    bg-white 
    overflow-hidden 
    right-0 
    top-12 
    text-sm
  "
    >
      <div className="flex flex-col cursor-pointer dark:bg-[#1E293B] select-none">
        {currentUser ? (
          <>
            <MenuItem label="My trips" onClick={() => router.push("/trips")} />
            <MenuItem
              label="My favorites"
              onClick={() => router.push("/favorites")}
            />
            <MenuItem
              label="My reservations"
              onClick={() => router.push("/reservations")}
            />
            <MenuItem
              label="My properties"
              onClick={() => router.push("/properties")}
            />
            <MenuItem label="List Your Space" onClick={rentModal.onOpen} />
            <hr />
            <MenuItem label="Logout" onClick={() => signOut()} />
          </>
        ) : (
          <>
            <MenuItem label="Login" onClick={loginModal.onOpen} />
            <MenuItem label="Sign up" onClick={registerModal.onOpen} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserMenuModal;
