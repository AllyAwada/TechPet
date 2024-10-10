import React from 'react';

const Criadores = () => {
    return (
        <section className="text-justify bg-fundo">
            {/* Seção da imagem de fundo */}
            <div className="relative bg-center bg-cover w-full h-screen" style={{ backgroundImage: "url('/criadores/dog1.jpeg')" }}>
                {/* Conteúdo sobre a imagem */}
                <div className='flex flex-col items-center justify-center text-center absolute inset-0 z-10'>
                    <h2 className='text-titulo text-4xl xl:text-6xl font-bold xl:mb-5 uppercase'>Criadores</h2>
                    <img className='w-48' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
            </div>

            {/* Criadores abaixo da seção de imagem */}
            <div className='py-10 text-justify xl:mx-52 2xl:mx-96'>
                <h2 className='flex justify-center text-titulo text-2xl font-bold pb-6 xl:text-4xl xl:mt-8'>| Criadores</h2>
                <div className="flex flex-col items-center xl:flex-row">
                    <div className="flex flex-col items-center w-1/3">
                        <img className='w-28' src="/criadores/gu.png" alt="Imagem de um criador" />
                        <h3 className='text-background text-lg font-bold my-2'>GUSTAVO TRIGOLO</h3>
                        <a href="https://www.instagram.com/gutrigolo/" target="_blank" className='flex text-insta text-lg font-bold'><img src="/criadores/insta.png" alt="" />@gutrigolo</a>
                    </div>
                    <div className="flex flex-col items-center w-1/3 my-6">
                        <img src="/criadores/vini.png" alt="Imagem de um criador" />
                        <h3 className='text-background text-lg font-bold my-2'>VINICIUS VIERA</h3>
                        <a href="https://www.instagram.com/viniv._/" target="_blank" className='flex text-insta text-lg font-bold'><img src="/criadores/insta.png" alt="" />@viniv._</a>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img className='w-36' src="/criadores/ally.png" alt="Imagem de um criador" />
                        <h3 className='text-background text-lg font-bold my-2'>ALLY AWADA</h3>
                        <a href="https://www.instagram.com/allyawada/" target="_blank" className='flex text-insta text-lg font-bold'><img src="/criadores/insta.png" alt="" />@allyawada</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Criadores;
