import React from 'react';


const Header = () => {
  return (
    <header className="bg-verao-medio text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-secundaria">
          <a href="/" className="hover:text-verao-claro transition-colors duration-300">NovaesTrip</a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-principal">
            <li><a href="#destinos" className="hover:text-verao-claro transition-colors duration-300">Destinos</a></li>
            <li><a href="#pacotes" className="hover:text-verao-claro transition-colors duration-300">Pacotes</a></li>
            <li><a href="#contato" className="hover:text-verao-claro transition-colors duration-300">Contato</a></li>
          </ul>
        </nav>
        {/* Futuro botão de menu mobile aqui */}
      </div>
    </header>
  );
};

export default Header;