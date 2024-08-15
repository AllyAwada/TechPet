import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-backgroundMenu800 text-frase text-sm pr-8 pl-8 pb-2 pt-4">
            <div className="flex items-center justify-center">
                <p className="mb-2">© 2024 TechPet. Todos os direitos reservados.</p>
            </div>
            <div className="flex justify-center mt-2">
                <a href="/qop"><h1 className="mx-4">Sobre nós</h1></a>
                <h1 className="mx-4">Contato</h1>
                <h1 className="mx-4">Política de Privacidade</h1>
            </div>
        </footer>
    );
};

export default Footer;
