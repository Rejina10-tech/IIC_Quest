import React from "react";

import service1 from "../../assets/service1.png";

export default function Services() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              We have assembled a team of
              <br className="hidden lg:inline-block" />
              professionals and medical experts
            </h1>
            <p className="mb-8 leading-relaxed">
              More than 100 psychiatrist work in our center for the benefit of
              patients. Caring nurses also provide attention and comfort.
              Teamwork is a hallmark of our medical centers, it is an advantage
              that helps us achieve excellent results in treatment. We combine
              experience and knowledge in different fields of medicine to find
              the right solutions and help patients even in the most difficult
              cases.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-teal-300 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500  rounded text-lg">
                Our Services
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={service1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
