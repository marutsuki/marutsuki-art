import { FC } from "react";

export type ArtworkProps = {
  src: string;
};

const Artwork: FC<ArtworkProps> = ({ src }) => (
  <div className="relative">
    <img className="w-64 h-96 object-cover" src={src} />
  </div>
);

export default Artwork;
