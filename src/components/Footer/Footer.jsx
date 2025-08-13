import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-verao-escuro text-white p-8 mt-10 font-principal">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 font-secundaria">NovaesTrip</h3>
          <p className="text-sm">Explore o mundo com a gente! Descubra novos lugares e viva experiências inesquecíveis.</p>
        </div>
        <div className="border-t border-verao-claro pt-4">
          <p className="text-xs">&copy; 2025 NovaesTrip. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;