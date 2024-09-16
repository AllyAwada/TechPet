import React, { useState } from 'react';

const Criadores = () => {
    return (
        <section className="text-justify bg-fundo">
            <div className="relative mt-16 z-0">
                <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
                    <h2 className='text-subtitulo text-4xl xl:text-6xl font-bold xl:mb-5 uppercase'>Criadores</h2>
                    <img className='w-36' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
                <div>
                    {/* Imagem para desktop */}
                    <img
                        src="/criadores/dog1.jpeg"
                        alt="Imagem para Desktop"
                        className="hidden md:block w-full h-auto"
                    />

                    {/* Imagem para mobile */}
                    <img
                        src="/criadores/dog2.jpg"
                        alt="Imagem para Mobile"
                        className="block md:hidden w-full h-auto"
                    />
                </div>

            </div>
            <div className='py-10 text-justify xl:mx-52 2xl:mx-96'>
                <h2 className='flex justify-center text-titulo text-2xl font-bold pb-6 xl:text-4xl xl:mt-8'>| Criadores</h2>
                <div className="flex flex-col items-center xl:flex-row">
                    <div className="flex flex-col items-center w-1/3">
                        <img src="/criadores/vini.png" alt="Imagem de um criador" />
                        <h3 className='text-background text-lg font-bold my-2'>VINICIUS VIERA</h3>
                        <h3 className='flex text-insta text-lg font-bold'><img src="/criadores/insta.png" alt="" />@VINIV._</h3>
                    </div>
                    <div className="flex flex-col items-center w-1/3 my-6">
                        <img src="/criadores/vini.png" alt="Imagem de um criador" />
                        <h3 className='text-background text-lg font-bold my-2'>VINICIUS VIERA</h3>
                        <h3 className='flex text-insta text-lg font-bold'><img src="/criadores/insta.png" alt="" />@VINIV._</h3>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img src="/criadores/vini.png" alt="Imagem de um criador" />
                        <h3 className='text-background text-lg font-bold my-2'>VINICIUS VIERA</h3>
                        <h3 className='flex text-insta text-lg font-bold'><img src="/criadores/insta.png" alt="" />@VINIV._</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Criadores;
