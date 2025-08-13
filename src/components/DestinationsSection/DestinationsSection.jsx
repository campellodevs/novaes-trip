import React from 'react';
import Card from '../Card/Card'; // Importando o componente Card
import destinos from '../../utils/data'; // Importando a lista de destinos (que vamos criar a seguir)

const DestinationsSection = () => {
  return (
    <section id="destinos" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold font-secundaria text-center text-gray-800 mb-4">
        Descubra Destinos de Verão
      </h2>
      <p className="text-center text-gray-600 mb-10 font-principal max-w-2xl mx-auto">
        De praias paradisíacas a cidades vibrantes, encontre a sua próxima aventura com a NovaesTrip.
      </p>
      
      {/* Aqui usamos a grade do Tailwind para organizar os cartões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Usamos o método .map() para renderizar um Card para cada destino */}
        {destinos.map((destino) => (
          <Card key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;