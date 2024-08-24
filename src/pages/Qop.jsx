import React, { useState } from 'react';

const Qop = () => {
    return (
        <section>
            <div className="relative mt-16 z-0">
                <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
                    <h2 className='text-subtitulo text-4xl font-bold '>TechPet</h2>
                    <img className='w-36' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
                <div>
                    {/* Imagem para desktop */}
                    <img
                        src="/qop/gato1.png"
                        alt="Imagem para Desktop"
                        className="hidden md:block w-full h-auto"
                    />

                    {/* Imagem para mobile */}
                    <img
                        src="/qop/cat1.png"
                        alt="Imagem para Mobile"
                        className="block md:hidden w-full h-auto"
                    />
                </div>

            </div>
            <section className='bg-fundo'>
                <div className='mx-4 p-6 xl:mx-60 text-justify xl:mx-52 2xl:mx-96'>
                    <div className='bg-background  xl:flex'>
                        <img src="/qop/gato2.png" alt="" />
                        <div className='xl:flex xl:flex-col xl:justify-center py-6'>
                            <h2 className='flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Quem Somos</h2>
                            <p className='text-paragrafo xl:text-lg p-10'>Somos um trio de alunos do terceiro ano do curso Técnico em Informática Integrado ao Ensino Médio. Nossa formação nos proporciona uma base sólida para seguir uma carreira profissional na área da tecnologia.</p>
                        </div>
                    </div>
                    <div className='bg-background my-10 xl:flex xl:items-center xl:justify-between'>
                        <img className='order-1' src="/qop/gato3.png" alt="" />
                        <div className='xl:flex xl:flex-col xl:justify-center py-6'>
                            <h2 className='order-0 flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| O que fazemos</h2>
                            <p className='order-0 text-paragrafo xl:text-lg p-10'>Nosso objetivo é utilizar a tecnologia para cuidar da saúde dos animais domésticos, facilitando a alimentação e hidratação deles.</p>
                        </div>
                    </div>
                    <div className='bg-background xl:flex '>
                        <img src="/qop/gato4.png" alt="" />
                        <div className='xl:flex xl:flex-col xl:justify-center py-6'>
                            <h2 className='flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Porque fizemos</h2>
                            <p className='text-paragrafo xl:text-lg p-10'>Inspirados pelo nosso trabalho de conclusão de curso, decidimos criar um projeto focado no cuidado da saúde dos animais domésticos usando tecnologia. Identificamos a dificuldade que muitos donos têm em deixar seus animais sozinhos em casa, especialmente no que diz respeito à alimentação. Para resolver esse problema, começamos a desenvolver o TechPet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Qop;