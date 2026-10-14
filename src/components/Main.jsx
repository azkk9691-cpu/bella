import React from "react";
import eats from "../assets/Eats.jpg";
import phones from "../assets/mobile.png";
import phone from "../assets/tele.png";

const features = [
  {
    tag: "Create an account",
    title: "Create/login to an existing account to get started",
    desc: "An account is created with your email and a desired password",
    phoneAlt: "Create an account screen",
  },
  {
    tag: "Discover meals",
    title: "Shop for your favorite meal on a cozy day",
    desc: "Explore a variety of meals from your favorite restaurants and order what you love",
    phoneAlt: "Shopping for meals screen",
  },
  {
    tag: "Fast delivery",
    title: "When you decide to check out and get it delivered",
    desc: "Pay safely and track your order until it gets delivered right to your doorstep",
    phoneAlt: "Checkout and delivery screen",
  },
];

const Main = () => {
  return (
    <main className="w-full">
      <section className="relative overflow-hidden">
        <img
          src={eats}
          alt="Delicious food spread"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-14 text-center text-white sm:pt-28">
          <p className="text-lg font-semibold tracking-wide text-white sm:text-xl">
            Food app
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl">
            Why stay hungry when
            <br className="hidden sm:block" /> you can order form Bella Onojie
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium text-white/90 sm:text-xl">
            Download the bella onoje&apos;s food app now on
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <button className="w-52 rounded-full bg-[#FA4A0C] py-4 text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition hover:brightness-105 sm:w-48">
              Playstore
            </button>
            <button className="w-52 rounded-full bg-[#737373] py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 sm:w-48">
              App store
            </button>
          </div>

          <div className="mt-14 flex w-full justify-center">
            <div className="phone-frame phone-frame--duo">
              <img
                src={phones}
                alt="Bella Onojie food app on two phones"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 h-px w-full max-w-3xl bg-[#E4E4E4]" />

          <h2 className="text-center text-4xl font-bold text-[#252B42] sm:text-5xl">
            How the app works
          </h2>

          <div className="mt-20 flex flex-col gap-24 sm:gap-28">
            {features.map((feature, index) => (
              <div
                key={feature.tag}
                className={`flex flex-col items-center gap-10 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="w-full flex-1 text-center lg:text-left">
                  <p className="text-lg font-bold text-[#FA4A0C]">
                    {feature.tag}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold leading-snug text-[#252B42] sm:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="mx-auto mt-5 max-w-md text-lg font-medium leading-relaxed text-[#737373] lg:mx-0">
                    {feature.desc}
                  </p>
                </div>

                <div className="flex w-full flex-1 justify-center">
                  <div className="phone-frame phone-frame--solo">
                    <img src={phone} alt={feature.phoneAlt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={eats}
          alt="Food platter"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center text-white sm:py-28">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Download the app now
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium text-white/90 sm:text-xl">
            Available on your favorite store. Start your premium experience now
          </p>
          <button className="mt-10 w-56 rounded-full bg-[#FA4A0C] py-4 text-base font-semibold text-white shadow-lg shadow-orange-900/40 transition hover:brightness-105 sm:w-52">
            Buy now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
