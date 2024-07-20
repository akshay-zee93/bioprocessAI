import Cards from "./Cards";
import { teamsList } from "../utils/stringConstants";
import Carousal from "./Carousal";

const Team = () => {
  return (
    <>
      <h2 className="text-black text-xl lg:text-3xl font-semibold  text-center">
        Leadership
      </h2>
      <Carousal itemList={teamsList} Component={Cards} />
    </>
  );
};

export default Team;
