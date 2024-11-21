import { FC, useRef } from "react";
import Artwork from "../component/Artwork";
import ArtBoard from "./ArtBoard";
import Menu from "../component/Menu";

const Main: FC = () => {
  const yearLabels = useRef<HTMLHeadingElement[]>([]);
  return (
    <main>
      <Menu
        location={{ x: 0, y: 200 }}
        options={[
          { label: "2024", callback: () => {} },
          { label: "2023", callback: () => {} },
          { label: "2022", callback: () => {} },
          { label: "2021", callback: () => {} },
        ]}
      />
      <ArtBoard ref={(el) => el && (yearLabels.current[0] = el)} label="2024">
        <Artwork src="/art/21.png" />
        <Artwork src="/art/22.png" />
      </ArtBoard>
      <ArtBoard ref={(el) => el && (yearLabels.current[1] = el)} label="2023">
        <Artwork src="/art/1.png" />
        <Artwork src="/art/2.png" />
        <Artwork src="/art/3.png" />
        <Artwork src="/art/4.png" />
        <Artwork src="/art/5.png" />
        <Artwork src="/art/6.png" />
        <Artwork src="/art/7.png" />
        <Artwork src="/art/8.png" />
      </ArtBoard>
      <ArtBoard ref={(el) => el && (yearLabels.current[2] = el)} label="2022">
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
      <ArtBoard ref={(el) => el && (yearLabels.current[3] = el)} label="2021">
        <Artwork src="/art/23.png" />
        <Artwork src="/art/24.png" />
        <Artwork src="/art/25.png" />
        <Artwork src="/art/26.png" />
        <Artwork src="/art/27.png" />
        <Artwork src="/art/28.png" />
      </ArtBoard>
    </main>
  );
};

export default Main;
