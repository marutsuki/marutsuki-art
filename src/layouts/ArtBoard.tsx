import { FC, ReactNode } from "react";

export type ArtBoardProps = {
  children?: ReactNode | ReactNode[];
};

const ArtBoard: FC<ArtBoardProps> = ({ children }) => (
  <section className="grid grid-cols-3 gap-3">{children}</section>
);

export default ArtBoard;
