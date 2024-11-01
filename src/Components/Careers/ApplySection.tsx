import React from "react";

type Props = {};

const Role: React.FC<{ role: string; location: string }> = ({
  role,
  location,
}) => {
  return (
    <div className="flex items-center justify-between bg-scoot-light px-12 py-8">
      <div className="flex flex-col gap-2 text-scoot-dark">
        <h1 className="font-primary text-2xl font-semibold">{role}</h1>
        <h2 className="font-secondary text-base font-normal">{location}</h2>
      </div>
      <div>
        <button className="bg-scoot-yellow px-12 py-4 font-primary">
          <span className="text-white">Apply</span>
        </button>
      </div>
    </div>
  );
};

const ApplySection = (props: Props) => {
  return (
    <section className="p-8">
      <ul className="flex flex-col gap-4">
        <li>
          <Role role="General Manager" location="Jakarta, Indonesia" />
        </li>
        <li>
          <Role role="UI/UX Designer" location="Yokohama, Japan" />
        </li>
        <li>
          <Role
            role="Blog Content Copywriter"
            location="New York, United States"
          />
        </li>
        <li>
          <Role role="Graphic Designer" location="New York, United States" />
        </li>
        <li>
          <Role role="Fleet Supervisor" location="Jakarta, Indonesia" />
        </li>
        <li>
          <Role role="UX Analyst" location="London, United Kingdom" />
        </li>
      </ul>
    </section>
  );
};

export default ApplySection;
