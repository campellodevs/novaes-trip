import React from 'react';
const Card = ({ destino }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={destino.imagem} alt={destino.titulo} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold font-secundaria text-gray-900">{destino.titulo}</h3>
        <p className="mt-2 text-gray-600 font-principal text-sm">{destino.descricao}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-verao-escuro">{destino.preco}</span>
          <a href="#" className="bg-verao-medio text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-verao-claro transition-colors duration-300">
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;