import { FC } from "react";
import { Option, selectActiveOption } from "./menu.slice";
import { useSelector } from "react-redux";

type Point = {
  x: number;
  y: number;
};

type MenuOption = {
  label: Option;
  callback: () => void;
};
type MenuProps = {
  location: Point;
  options: MenuOption[];
};

const Menu: FC<MenuProps> = ({ location, options }) => {
  const activeMenuOption = useSelector(selectActiveOption);
  return (
    <menu className="fixed" style={{ top: location.y, left: location.x }}>
      {options.map((opt, i) => (
        <>
          <div key={i} className="flex flex-row items-center">
            <svg
              className="w-3 m-2"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <h2
              className={
                "cursor-pointer transition border-b-0 " +
                (activeMenuOption === opt.label ? "!border-b border-black" : "")
              }
              onClick={opt.callback}
            >
              {opt.label}
            </h2>
          </div>
          {i !== options.length - 1 && (
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <line x1={20} x2={20} y1={0} y2={100} stroke="black" />
            </svg>
          )}
        </>
      ))}
    </menu>
  );
};

export default Menu;
