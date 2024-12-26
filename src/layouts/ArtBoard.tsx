import { forwardRef, ReactNode } from "react";

export type ArtBoardProps = {
  label?: string;
  children?: ReactNode | ReactNode[];
};

const ArtBoard = forwardRef<HTMLHeadingElement, ArtBoardProps>(
  ({ label, children }: ArtBoardProps, ref) => (
    <section className="flex flex-col lg:flex-row gap-1 lg:gap-12 items-start ml-16 m-8">
      <h2 ref={ref} className="text-2xl">
        {label}
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  )
);

export default ArtBoard;
