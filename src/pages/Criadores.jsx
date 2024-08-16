import React, { useState } from 'react';

const Criadores = () => {
    return (
        <section className="pb-2 text-justify">
            <div className="relative mt-16 z-0">
                <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
                    <h2 className='text-subtitulo text-4xl font-bold '>TechPet</h2>
                    <img className='w-36' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
                <div>
                    {/* Imagem para desktop */}
                    <img
                        src="cachorro.jpeg"
                        alt="Imagem para Desktop"
                        className="hidden md:block w-full h-auto"
                    />

                    {/* Imagem para mobile */}
                    <img
                        src="dog2.jpg"
                        alt="Imagem para Mobile"
                        className="block md:hidden w-full h-auto"
                    />
                </div>

            </div>
            <div className='mx-10 mt-6 mb-6 xl:mx-60 text-justify xl:mx-52 2xl:mx-96'>
                <h2 className='text-titulo text-2xl font-bold mb-6 xl:text-4xl xl:mt-8'>| Criadores</h2>
                <div className="flex flex-col items-center xl:flex-row">
                    <div className="flex flex-col items-center w-1/3">
                        <img className='xl:w-1/2' src="Criadores.png" alt="Imagem de um criador" />
                        <h3 className='text-paragrafo text-sm font-bold my-2'>Vinicius Viera</h3>
                    </div>
                    <div className="flex flex-col items-center w-1/3 my-6">
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
