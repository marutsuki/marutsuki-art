import { FC, useRef } from "react";
import Artwork from "../component/Artwork";
import ArtBoard from "./ArtBoard";
import Menu from "../component/menu/Menu";
import NavigableSection from "../component/menu/NavigableSection";
import { resetAndNavigate } from "../component/menu/menu.thunk";
import { useAppDispatch } from "../store";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectTheme, toggleMode } from "../theme.slice";
import {
  DarkModeIcon,
  InstaIcon,
  PixivIcon,
  TwitterIcon,
} from "../component/icons/icons";

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);
  const yearLabels = useRef<HTMLHeadingElement[]>([]);
  return (
    <main
      className={clsx("w-full", {
        "dark bg-darkBg text-darkFg": theme === "dark",
        "light bg-lightBg text-lightFg": theme === "light",
      })}
    >
      <Menu
        location={{ x: 0, y: 200 }}
        options={[
          {
            label: "2024",
            callback: () => dispatch(resetAndNavigate("2024")),
          },
          {
            label: "2023",
            callback: () => dispatch(resetAndNavigate("2023")),
          },
          {
            label: "2022",
            callback: () => dispatch(resetAndNavigate("2022")),
          },
          {
            label: "2021",
            callback: () => dispatch(resetAndNavigate("2021")),
          },
        ]}
      />
      <div className="mr-48">
        <div className="text-left top-0 sticky z-50 drop-shadow-lg mb-48 flex justify-between">
          <div className="flex items-center">
            <img src="/marutsuki.png" className="w-16 dark:invert" />
            <div>
              <h1 className="font-display dark:text-darkFg">marutsuki</h1>
              <h2 className="dark:text-darkFg">Digital artist</h2>
            </div>
          </div>
          <section className="flex flex-col justify-center">
            <div className="my-2 flex gap-2 justify-end">
              <PixivIcon
                className="cursor-pointer duration-100 hover:fill-active active:scale-110 dark:invert"
                onClick={() =>
                  window.open("https://www.pixiv.net/en/users/39281985")
                }
              />
              <TwitterIcon
                className="cursor-pointer duration-100 hover:fill-active active:scale-110 dark:invert"
                onClick={() => window.open("https://twitter.com/marutsuki_")}
              />
              <InstaIcon
                className="cursor-pointer duration-100 hover:fill-active active:scale-110 dark:invert"
                onClick={() =>
                  window.open("https://www.instagram.com/marutsuki_/")
                }
              />
              <DarkModeIcon
                className="cursor-pointer duration-100 hover:fill-active active:scale-110 dark:invert"
                onClick={() => dispatch(toggleMode())}
              />
            </div>
            <div className="flex gap-2 justify-end [&_*]:dark:text-darkFg">
              <h2 className="">Email:</h2>
              <p>lucien.7789@gmail.com</p>
            </div>
            <div className="flex gap-2 justify-end [&_*]:dark:text-darkFg">
              <h2 className="">Phone:</h2>
              <p>+61 468 435 818</p>
            </div>
          </section>
        </div>

        <NavigableSection id="2024">
          <ArtBoard
            ref={(el) => el && (yearLabels.current[0] = el)}
            label="2024"
          >
            <Artwork src="/art/21.png" />
            <Artwork src="/art/22.png" />
          </ArtBoard>
        </NavigableSection>

        <NavigableSection id="2023">
          <ArtBoard
            ref={(el) => el && (yearLabels.current[1] = el)}
            label="2023"
          >
            <Artwork src="/art/1.png" />
            <Artwork src="/art/2.png" />
            <Artwork src="/art/3.png" />
            <Artwork src="/art/4.png" />
            <Artwork src="/art/5.png" />
            <Artwork src="/art/6.png" />
            <Artwork src="/art/7.png" />
            <Artwork src="/art/8.png" />
          </ArtBoard>
        </NavigableSection>

        <NavigableSection id="2022">
          <ArtBoard
            ref={(el) => el && (yearLabels.current[2] = el)}
            label="2022"
          >
            <Artwork src="/art/9.png" />
            <Artwork src="/art/10.png" />
            <Artwork src="/art/11.png" />
            <Artwork src="/art/12.png" />
            <Artwork src="/art/13.png" />
            <Artwork src="/art/14.png" />
            <Artwork src="/art/15.png" />
            <Artwork src="/art/16.png" />
            <Artwork src="/art/17.png" />
            <Artwork src="/art/18.png" />
            <Artwork src="/art/19.png" />
            <Artwork src="/art/20.png" />
          </ArtBoard>
        </NavigableSection>

        <NavigableSection id="2021">
          <ArtBoard
            ref={(el) => el && (yearLabels.current[3] = el)}
            label="2021"
          >
            <Artwork src="/art/23.png" />
            <Artwork src="/art/24.png" />
            <Artwork src="/art/25.png" />
            <Artwork src="/art/26.png" />
            <Artwork src="/art/27.png" />
            <Artwork src="/art/28.png" />
          </ArtBoard>
        </NavigableSection>
      </div>
    </main>
  );
};

export default Main;
