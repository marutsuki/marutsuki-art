import { FC, ReactNode, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Option, selectActiveMenuOption } from "./menu.slice";

export type NavigableSectionProps = {
  id: Option;
  children: ReactNode | ReactNode[];
};

const NavigableSection: FC<NavigableSectionProps> = ({ id, children }) => {
  const section = useRef<HTMLDivElement>(null);
  const activeMenuOption = useSelector(selectActiveMenuOption);

  useEffect(() => {
    if (id === activeMenuOption) {
      section.current?.scrollIntoView();
    }
  }, [id, activeMenuOption]);

  return <div ref={section}>{children}</div>;
};

export default NavigableSection;
