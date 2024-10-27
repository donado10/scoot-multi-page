import React from "react";

const TitlePage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex aspect-[1/0.4] w-full items-center justify-center bg-[url('/assets/images/about-hero-mobile.jpg')] bg-cover bg-no-repeat">
      <h1 className="text-center font-primary text-6xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};

export default TitlePage;
