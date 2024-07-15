"use client";
const TestimonialCard = ({ data }) => {
  const { text = "", name = "" } = data;

  if (!text) return null;

  return (
    <div className="card bg-white h-full text-primary-content w-80 md:w-96">
      <div className="card-body gap-6">
        <p className="text-xs lg:text-sm text-neutral-500 font-medium">
          {text}
        </p>
        <div className="card-actions flex-nowrap">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-12 text-xl rounded-full">
              <span>{name.charAt(0)}</span>
            </div>
          </div>
          <p className="text-neutral-700 text-sm lg:text-base font-semibold">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
