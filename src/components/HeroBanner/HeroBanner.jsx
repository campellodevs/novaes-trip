import React from 'react';
import BannerImage from "../../assets/images/herobanner.png";

const HeroBanner = () => {
  return (
    <section 
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay escuro */}

      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-secundaria drop-shadow-lg">
          Explore o Mundo com a NovaesTrip
        </h1>
        <p className="mt-4 text-lg md:text-xl font-principal max-w-2xl mx-auto drop-shadow-md">
          Viagens inesquecíveis, destinos paradisíacos e experiências que você nunca vai esquecer.
        </p>
        <a 
          href="#destinos"
          className="mt-8 inline-block bg-verao-medio hover:bg-verao-claro text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Descubra Seu Próximo Destino
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;