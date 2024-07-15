import Cards from "../Component/Cards";
import { teamsList } from "../utils/stringConstants";
import Carousal from "../Component/Carousal";

const Teams = () => {
  return (
    <>
      <h2 className="text-black text-3xl lg:text-5xl font-bold font-opensans text-center">
        Teams
      </h2>
      <Carousal itemList={teamsList} Component={Cards} />
    </>
  );
};

export default Teams;
