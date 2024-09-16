import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Conteúdo acima: Imagem de fundo do cachorro e frase */}
      <section className="relative pt-16 z-0">
        <div className="absolute inset-0 flex items-center">
          <p className="text-frase text-sm  w-1/2  ml-6 font-bold // xl:text-2xl xl:ml-28 xl:w-1/3 2xl:text-3xl">Venha conhecer a inovação da TechPet para a saúde e bem-estar do seu pet!</p>
        </div>
        <div className="absolute inset-0 flex items-center">
          <Link to="/produto" className="flex items-center text-titulo text-xl font-bold">
            <button className="bg-titulo py-2 px-4 rounded-full text-frase text-sm ml-6 mt-28 font-bold xl:text-1xl xl:ml-28 2xl:text-xl 2xl:-mb-8 hover:bg-subtitulo transition-colors duration-300">
              Saiba Mais
            </button>
          </Link>

        </div>
        <div>
          {/* Imagem para desktop */}
          <img
            src="/home/dog2.png"
            alt="Imagem de um cachorro bebendo agua"
            className="hidden md:block w-full h-auto"
          />

          {/* Imagem para mobile */}
          <img
            src="/home/dog1.png"
            alt="Imagem de um cachorro bebendo agua"
            className="block md:hidden w-full h-auto"
          />
        </div>

      </section>

      {/* Conteúdo abaixo: Apresentação da empresa TechPet */}
      <section className="bg-background p-1 text-base xl:bg-fundo xl:p-0">
        <div className="mx-9 pb-2 text-justify xl:mx-52 2xl:mx-96 xl:bg-background xl:p-12">
          <div>
            <h2 className='text-titulo text-2xl font-bold my-4 xl:text-4xl'>| TechPet</h2>
            <p className='text-paragrafo xl:text-lg'>
              O Tech Pet é uma solução inovadora para alimentação e hidratação automatizada de animais de estimação. Com dispositivos que permitem programar e controlar a quantidade de ração e água, o Tech Pet garante cuidados consistentes e convenientes, mesmo quando você não está em casa. Ideal para quem busca praticidade e eficiência no cuidado com seu pet.
            </p>
          </div>
          <div className='flex justify-center my-2 xl:my-6'>
            <img className='w-36 xl:w-48' src="2logo.png" alt="logo tech pet" />
          </div>
          <div>
            <p className='text-paragrafo xl:text-lg' >Explore os dados científicos mais recentes e relevantes para o nosso projeto.</p>
            <Link to="/Referencias" className="flex items-center text-titulo text-xl font-bold">
              <button className="flex justify-center bg-titulo rounded-full text-frase text-xl font-bold py-2 mt-4 mb-2 xl:w-32 hover:bg-subtitulo transition-colors duration-300">
                Referências
              </button>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
