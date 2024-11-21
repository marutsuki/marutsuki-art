import { FC } from "react";

type Point = {
  x: number;
  y: number;
};

type MenuOption = {
  label: string;
  callback: () => void;
};
type MenuProps = {
  location: Point;
  options: MenuOption[];
};

const Menu: FC<MenuProps> = ({ location, options }) => (
  <menu className="fixed" style={{ top: location.y, left: location.x }}>
    {options.map((opt, i) => (
      <>
        <div className="flex flex-row items-center">
          <svg
            className="w-3 m-2"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" />
          </svg>
          {opt.label}
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

export default Menu;
