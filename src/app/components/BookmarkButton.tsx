"use client";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";

interface BookmarkButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <FaRegBookmark
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <FaBookmark
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default BookmarkButton;
