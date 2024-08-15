import React, { useState } from 'react';

const Qop = () => {
    return (
        <section>
            <div className="relative mt-16 z-0">
                <div className='flex flex-col items-center justify-center text-center my-8 absolute inset-0'>
                    <h2 className='text-subtitulo text-4xl font-bold '>TechPet</h2>
                    <img className='w-36' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
                <img className="block w-full h-auto" src="img.png" alt="Imagem de cachorro" />
            </div>
            <div className='mx-10 mt-6 mb-6 xl:mx-60 text-justify xl:mx-52 2xl:mx-96'>
                <h2 className='text-titulo text-2xl font-bold mb-2  xl:text-4xl xl:mt-8'>| Quem Somos</h2>
                <p className='text-paragrafo xl:text-lg'>Somos um trio de alunos do terceiro ano do curso Técnico em Informática Integrado ao Ensino Médio. Nossa formação nos proporciona uma base sólida para seguir uma carreira profissional na área da tecnologia.</p>
                <h2 className='text-titulo text-2xl font-bold mb-2  xl:text-4xl xl:mt-10'>| O que fazemos</h2>
                <p className='text-paragrafo xl:text-lg'>Nosso objetivo é utilizar a tecnologia para cuidar da saúde dos animais domésticos, facilitando a alimentação e hidratação deles.</p>
                <h2 className='text-titulo text-2xl font-bold mb-2  xl:text-4xl xl:mt-10'>| Porque fizemos</h2>
                <p className='text-paragrafo xl:text-lg'>Inspirados pelo nosso trabalho de conclusão de curso, decidimos criar um projeto focado no cuidado da saúde dos animais domésticos usando tecnologia. Identificamos a dificuldade que muitos donos têm em deixar seus animais sozinhos em casa, especialmente no que diz respeito à alimentação. Para resolver esse problema, começamos a desenvolver o TechPet.</p>
            </div>
        </section>
    );
};

export default Qop;