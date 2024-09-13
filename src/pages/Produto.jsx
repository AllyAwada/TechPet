import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Produto = () => {
  const slides = [
    {
      img: '2lo.png'
    },
    {
      img: 'o.jpg',
    },
    {
      img: '2lo.png',
    },
    {
      img: 'o.jpg',
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Troca de slide a cada 3 segundos

    return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
  }, [slides.length]);

  return (
    <section className="w-full relative bg-fundo">
      <div className="relative mt-16 z-0">
        <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
          <h2 className='text-subtitulo text-4xl font-bold '>TechPet</h2>
          <img className='w-36' src="2logo.png" alt="" />
          <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
        </div>
        <div>
          {/* Imagem para desktop */}
          <img
            src="/produto/dog1.jpg"
            alt="Imagem para Desktop"
            className="hidden md:block w-full h-auto"
          />

          {/* Imagem para mobile */}
          <img
            src="/produto/dog2.jpg"
            alt="Imagem para Mobile"
            className="block md:hidden w-full h-auto"
          />
        </div>

      </div>


      <h2 className='text-titulo text-2xl font-bold ml-10 my-6 xl:text-4xl xl:mb-10 xl:mx-52 2xl:mx-96'>| Produto</h2>
      <div className="relative w-full flex justify-center mx-auto overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <div className="w-1/2">
                <img src={slide.img} alt={slide.title} className="w-full h-auto object-cover rounded-lg mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Parte do Produto */}
      <div className='mx-4 p-6 xl:mx-60 text-justify xl:mx-52 2xl:mx-96'>
        <div className='bg-background my-10 xl:flex xl:items-center xl:justify-between'>
          <div className='xl:flex xl:justify-center pt-6 xl:pt-0'>
            <div className='xl:flex xl:flex-col xl:justify-center'>
              <h2 className='order-1 flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Guia de Utilização</h2>
              <p className='order-1 text-paragrafo xl:text-lg px-10 py-6'>Com a ultilização de um App disponivel do AppStore será usado para configurar e saber mais informações do seu pet. Segue um video mostrando como fazer a configuração e o funcionamento do nosso produto.</p>
              <div className='order-1 flex justify-center'>
                <Link to="/pecas" className="flex items-center text-titulo text-xl font-bold">
                  <button className=" bg-backgroundMenu800 rounded-full text-frase text-sm font-bold py-2 px-4 my-4 ">Veja as Peças</button>
                </Link>
              </div>
            </div>
            <img className='order-0 w-96' src="/produto/dog3.png" alt="" />
          </div>
        </div>

        <div className='bg-background xl:flex'>
          <img src="/produto/dog4.png" alt="" />
          <div className='flex justify-center  xl:items-center'>
            <iframe className='p-6' width="460" height="270" src="https://www.youtube.com/embed/EMiDYIVhpKA?si=0PemOD0xQqz6yvA9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Produto;
