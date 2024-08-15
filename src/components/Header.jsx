import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-backgroundMenu800 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-start">
                        <Link to="/" className="flex items-center text-titulo text-xl font-bold">
                            <img className='mr-2' src="/LOGO.png" alt="logo do tcc" />TechPet
                        </Link>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Botão de menu móvel */}
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="p-2 rounded-md text-titulo"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link
                                to="/"
                                className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Início
                            </Link>
                            <Link
                                to="/qop"
                                className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Quem Somos
                            </Link>
                            <Link
                                to="/criadores"
                                className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Criadores
                            </Link>
                            <Link
                                to="/Produto"
                                className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Produto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu móvel */}
            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo block px-3 py-2 rounded-md text-base font-medium"
                            onClick={closeMenu} // Fecha o menu quando o link é clicado
                        >
                            Início
                        </Link>
                        <Link
                            to="/qop"
                            className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo block px-3 py-2 rounded-md text-base font-medium"
                            onClick={closeMenu} // Fecha o menu quando o link é clicado
                        >
                            Quem Somos
                        </Link>
                        <Link
                            to="/criadores"
                            className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo block px-3 py-2 rounded-md text-base font-medium"
                            onClick={closeMenu} // Fecha o menu quando o link é clicado
                        >
                            Criadores
                        </Link>
                        <Link
                            to="/Produto"
                            className="text-titulo hover:bg-backgroundMenu700 hover:text-hoverTitulo block px-3 py-2 rounded-md text-base font-medium"
                            onClick={closeMenu} // Fecha o menu quando o link é clicado
                        >
                            Produto
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
