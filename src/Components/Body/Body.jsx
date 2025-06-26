import React from "react";

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full">
        <div className="flex justify-between items-start py-[64px] px-[24px] max-md:items-center max-md:justify-center max-md:!flex-col gap-11">
          <div className="flex flex-col gap-7">
            <h2 className="font-semibold text-xl">Branding | Image Making</h2>
            <h1 className="font-bold text-6xl">Visual Designer</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </p>
            <button className="p-4 text-white bg-[#2D2D2D] w-[150px] h-[55px] flex items-center cursor-pointer justify-center">
              Contact
            </button>
          </div>
          <div className="flex w-full">
            <img src="/1.png" alt="hero" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full">
        <div className="flex justify-between items-start py-[64px] px-[24px] max-md:items-center max-md:justify-center max-md:!flex-col gap-11">
          <div className="flex w-full justify-start max-md:justify-center max-md:items-center">
            <img className="w-[200px]" src="/2.png" alt="hero" />
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="font-semibold text-xl text-center">
              Branding | Image Making
            </h2>
            <h1 className="font-bold text-7xl text-center w-full">
              Visual Designer
            </h1>
            <p className="text-sm w-full text-gray-700 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem distinctio sint blanditiis ipsum totam obcaecati dicta
              error facere, explicabo qui atque rerum, nobis eos! Aliquid quo
              distinctio accusantium quidem voluptatem.
            </p>
            <button className="p-4 text-white bg-[#2D2D2D] w-[150px] h-[55px] flex items-center cursor-pointer justify-center">
              Contact
            </button>
          </div>
          <div className="flex w-full justify-end max-md:justify-center max-md:items-center">
            <img className="w-[200px]" src="/3.png" alt="hero" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="w-full">
        <div className="flex justify-between items-center py-[42px] px-[24px]">
          <div className="flex gap-7 max-md:flex-col max-md:justify-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/4.png" alt="" className="w-30" />
              <h2 className="font-semibold text-xl text-black">
                Product Design
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/5.png" alt="" className="w-30" />
              <h2 className="font-semibold text-xl text-black">
                Visual Design
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/6.png" alt="" className="w-30" />
              <h2 className="font-semibold text-xl text-black">
                Art Direction
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem distinctio sint blanditiis ipsum totam obcaecati
                dicta error facere, explicabo qui atque rerum, nobis eos!
                Aliquid quo distinctio accusantium quidem voluptatem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      
    </>
  );
};

export default Body;
