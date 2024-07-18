import Cards from "./Cards";
import { teamsList } from "../utils/stringConstants";
import Carousal from "./Carousal";

const Team = () => {
  return (
    <>
      <h2 className="text-black text-3xl lg:text-5xl font-bold  text-center">
        Our Team
      </h2>
      <Carousal itemList={teamsList} Component={Cards} />
    </>
  );
};

export default Team;
