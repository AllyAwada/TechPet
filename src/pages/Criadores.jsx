import React, { useState } from 'react';

const Criadores = () => {
    return (
        <section className="pb-2 mt-20 text-justify">
            <div className='flex flex-col items-center justify-center text-center my-8'>
                <h2 className='text-titulo text-4xl font-bold my-4'>TechPet</h2>
                <img className='w-36' src="2logo.png" alt="" />
                <p className='text-paragrafo xl:text-lg mx-10'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
            </div>
            <div className='xl:mx-52 xl:my-8 2xl:mx-96 mx-10'>
                <h2 className='text-titulo text-2xl font-bold mb-2 xl:text-4xl xl:mb-20'>| Criadores</h2>
                <div className="flex flex-col items-center xl:flex-row">
                    <div className="flex flex-col items-center w-1/3">
                        <img className='xl:w-1/2' src="Criadores.png" alt="Imagem de um criador" />
                        <h3 className='text-paragrafo text-sm font-bold my-2'>Vinicius Viera</h3>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img className='xl:w-1/2' src="Criadores.png" alt="Imagem de um criador" />
                        <h3 className='text-paragrafo text-sm font-bold my-2'>Gustavo Trigolo</h3>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img className='xl:w-1/2' src="Criadores.png" alt="Imagem de um criador" />
                        <h3 className='text-paragrafo text-sm font-bold my-2'>Ally Awada</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Criadores;
