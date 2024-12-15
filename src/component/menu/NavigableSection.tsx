import { FC, ReactNode, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Option, selectActiveOption, selectDirtyFlag } from "./menu.slice";

export type NavigableSectionProps = {
  id: Option;
  children: ReactNode | ReactNode[];
};

const yOffset = -100;

const NavigableSection: FC<NavigableSectionProps> = ({ id, children }) => {
  const section = useRef<HTMLDivElement>(null);
  const activeMenuOption = useSelector(selectActiveOption);
  const dirty = useSelector(selectDirtyFlag);

  useEffect(() => {
    if (id === activeMenuOption && section.current) {
      const y =
        section.current?.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [id, activeMenuOption, dirty]);

  return <div ref={section}>{children}</div>;
};

export default NavigableSection;
