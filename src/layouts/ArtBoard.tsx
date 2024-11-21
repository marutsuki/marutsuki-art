import { FC, ReactNode } from "react";

export type ArtBoardProps = {
  label?: string;
  children?: ReactNode | ReactNode[];
};

const ArtBoard: FC<ArtBoardProps> = ({ label, children }) => (
  <section className="flex flex-row gap-12">
    <h2 className="text-2xl">{label}</h2>
    <div className="grid grid-cols-3 gap-3">{children}</div>
  </section>
);

export default ArtBoard;
