import { FC, MouseEvent } from "react";
import { useAppDispatch } from "../store";
import { openModal } from "./modal/modal.slice";

export type ArtworkProps = {
  src: string;
};

const Artwork: FC<ArtworkProps> = ({ src }) => {
  const dispatch = useAppDispatch();
  const onClick = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    dispatch(openModal(src));
  };
  return (
    <div className="relative">
      <img
        className="w-64 h-96 object-cover cursor-pointer"
        src={src}
        alt={src}
        onClick={onClick}
      />
    </div>
  );
};

export default Artwork;
