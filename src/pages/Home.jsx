import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="relative bg-center bg-cover w-full h-screen" style={{ backgroundImage: "url('/home/dog2.jpg')" }}>
        <section className="relative flex flex-col justify-center items-center pt-32 z-10 min-h-screen">
          <div className="flex flex-col items-center">
            <h2 className="text-titulo text-3xl text-center font-bold xl:text-4xl 2xl:text-5xl">
              A Tecnologia que Cuida do Seu Pet
            </h2>
            <p className="text-frase text-base text-center w-3/4 xl:text-xl xl:w-3/4 2xl:text-2xl">
              Sempre ao lado do seu pet, oferecendo praticidade  e bem-estar em todos os momentos.
            </p>
          </div>

          <div className="flex items-center justify-center mt-8">
            <Link to="/produto">
              <button className="bg-titulo py-2 px-4 rounded-full text-frase text-sm font-medium xl:text-1xl 2xl:text-xl hover:bg-subtitulo transition-colors duration-300">
                Saiba Mais
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Conteúdo abaixo: Apresentação da empresa TechPet */}
      <section className="bg-background p-1 text-base xl:bg-fundo xl:p-0">
        <div className="mx-9 py-8 text-justify xl:mx-52 2xl:mx-96 xl:bg-background xl:py-10 xl:px-44">
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
            <p className='text-paragrafo xl:text-lg'>Explore os dados científicos mais recentes e relevantes para o nosso projeto.</p>
            <Link to="/Referencias">
              <button className="flex bg-titulo py-2 px-4 mt-4 rounded-full text-frase text-sm font-medium xl:text-1xl 2xl:text-xl hover:bg-subtitulo transition-colors duration-300">
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
