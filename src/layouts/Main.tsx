import { FC } from "react";
import Artwork from "../component/Artwork";
import ArtBoard from "./ArtBoard";

const Main: FC = () => (
  <main>
    <ArtBoard label="2024">
      <Artwork src="/art/21.png" />
      <Artwork src="/art/22.png" />
    </ArtBoard>
    <ArtBoard label="2023">
      <Artwork src="/art/1.png" />
      <Artwork src="/art/2.png" />
      <Artwork src="/art/3.png" />
      <Artwork src="/art/4.png" />
      <Artwork src="/art/5.png" />
      <Artwork src="/art/6.png" />
      <Artwork src="/art/7.png" />
      <Artwork src="/art/8.png" />
    </ArtBoard>
    <ArtBoard label="2022">
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
    <ArtBoard label="2021">
      <Artwork src="/art/23.png" />
      <Artwork src="/art/24.png" />
      <Artwork src="/art/25.png" />
      <Artwork src="/art/26.png" />
      <Artwork src="/art/27.png" />
      <Artwork src="/art/28.png" />
    </ArtBoard>
  </main>
);

export default Main;
