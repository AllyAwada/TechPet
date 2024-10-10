import React from 'react';

const Qop = () => {
    return (
        <section>
            {/* Seção da imagem de fundo */}
            <div className="relative bg-center bg-cover w-full h-screen" style={{ backgroundImage: "url('/qop/gato1.png')" }}>
                {/* Conteúdo sobre a imagem */}
                <div className='flex flex-col items-center justify-center text-center absolute inset-0 z-10'>
                    <h2 className='text-titulo text-4xl xl:text-6xl font-bold xl:mb-5 uppercase'>Quem Somos</h2>
                    <img className='w-48' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold mx-10 xl:text-lg'>Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
            </div>

            {/* Conteúdo abaixo: Descrição da equipe e objetivos */}
            <section className='bg-fundo'>
                <div className='mx-4 xl:py-14 p-6 xl:mx-60 text-justify xl:mx-52 2xl:mx-96'>
                    <div className='bg-background xl:flex'>
                        <img src="/qop/gato2.png" alt="" />
                        <div className='xl:flex xl:flex-col xl:justify-center py-6'>
                            <h2 className='flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Quem Somos</h2>
                            <p className='text-paragrafo p-10 xl:text-lg 2xl:px-32'>Somos um trio de alunos do terceiro ano do curso Técnico em Informática Integrado ao Ensino Médio. Nossa formação nos proporciona uma base sólida para seguir uma carreira profissional na área da tecnologia.</p>
                        </div>
                    </div>
                    <div className='bg-background my-10 xl:flex xl:items-center xl:justify-between'>
                        <img className='order-1' src="/qop/gato3.png" alt="" />
                        <div className='xl:flex xl:flex-col xl:justify-center py-6'>
                            <h2 className='order-0 flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| O que fazemos</h2>
                            <p className='order-0 text-paragrafo p-10 xl:text-lg 2xl:px-32'>Nosso objetivo é utilizar a tecnologia para cuidar da saúde dos animais domésticos, facilitando a alimentação e hidratação deles.</p>
                        </div>
                    </div>
                    <div className='bg-background xl:flex'>
                        <img src="/qop/gato4.png" alt="" />
                        <div className='xl:flex xl:flex-col xl:justify-center py-6'>
                            <h2 className='flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Porque fizemos</h2>
                            <p className='text-paragrafo p-10 xl:text-lg 2xl:px-32'>Inspirados pelo nosso trabalho de conclusão de curso, decidimos criar um projeto focado no cuidado da saúde dos animais domésticos usando tecnologia. Identificamos a dificuldade que muitos donos têm em deixar seus animais sozinhos em casa, especialmente no que diz respeito à alimentação. Para resolver esse problema, começamos a desenvolver o TechPet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Qop;
