import { testimonialList } from "../utils/stringConstants";
import Carousal from "./Carousal";
import TestimonialCard from "../Component/testimonialCards";

const Testimonials = () => {
  return <Carousal itemList={testimonialList} Component={TestimonialCard} />;
};

export default Testimonials;
