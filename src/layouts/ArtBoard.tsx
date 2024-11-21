import { forwardRef, ReactNode } from "react";

export type ArtBoardProps = {
  label?: string;
  children?: ReactNode | ReactNode[];
};

const ArtBoard = forwardRef<HTMLHeadingElement, ArtBoardProps>(
  ({ label, children }: ArtBoardProps, ref) => (
    <section className="flex flex-row gap-12 items-start m-8">
      <h2 ref={ref} className="text-2xl">
        {label}
      </h2>
      <div className="grid grid-cols-3 gap-3">{children}</div>
    </section>
  )
);

export default ArtBoard;
