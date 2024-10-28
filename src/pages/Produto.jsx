import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Produto = () => {
  const slides = [
    {
      img: 'o.jpg',
    },
    {
      img: '/produto/dog2.jpg', // Imagem para Desktop
    },
    {
      img: 'o.jpg',
    },
    {
      img: '/produto/dog2.jpg', // Imagem para Mobile
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
      {/* Seção da imagem de fundo */}
      <div className="relative bg-center bg-cover w-full h-screen" style={{ backgroundImage: "url('/produto/dog1.jpg')" }}>
        {/* Conteúdo sobre a imagem */}
        <div className='flex flex-col items-center justify-center text-center absolute inset-0 z-10'>
          <h2 className='text-titulo text-4xl xl:text-6xl font-bold xl:mb-5 uppercase'>Produto</h2>
          <img className='w-48' src="2logo.png" alt="" />
          <p className='text-titulo font-semibold mx-10 xl:text-lg'>Transformando inovação em soluções criativas para um mundo moderno.</p>
        </div>
      </div>

      {/* Conteúdo abaixo da imagem */}
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
      <div className='mx-4 p-6 xl:mx-60 text-justify 2xl:mx-96'>
        <div className='bg-background my-10 xl:flex xl:items-center xl:justify-between'>
          <div className='xl:flex xl:justify-center pt-6 xl:pt-0'>
            <div className='xl:flex xl:flex-col xl:justify-center'>
              <h2 className='order-1 flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Componentes</h2>
              <p className='order-1 text-paragrafo xl:text-lg px-10 py-6'>
                Descubra os componentes essenciais e como eles se integram para criar projetos incríveis. Clique no botão abaixo para explorar nosso guia detalhado sobre cada peça e seu papel no sistema Arduino.
              </p>
              <div className='order-1 flex justify-center'>
                <Link to="/Pecas" className="flex items-center text-titulo text-xl font-bold">
                  <button className="flex justify-center bg-titulo rounded-full text-frase text-xl font-bold py-2 mt-4 mb-2 xl:w-32 hover:bg-subtitulo transition-colors duration-300">
                    Peças
                  </button>
                </Link>
              </div>
            </div>
            <img className='order-0 w-96' src="/produto/dog3.png" alt="Imagem do Produto" />
          </div>
        </div>

        <div className='bg-background xl:flex'>
          <img src="/produto/dog4.png" alt="Guia de Utilização" />
          <div className='flex flex-col justify-center items-center xl:w-screen'>
            <h2 className='flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Guia de Utilização</h2>
            <p className='text-paragrafo xl:text-lg px-10 py-6'>
              Segue um vídeo mostrando como fazer a configuração e o funcionamento do nosso produto.
            </p>
            <iframe className="p-6" width="500" height="320" src="https://www.youtube.com/embed/EMiDYIVhpKA?si=0PemOD0xQqz6yvA9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className='bg-background my-10 xl:flex xl:items-center xl:justify-between'>
          <div className='xl:flex xl:justify-center pt-6 xl:pt-0'>
            <div className='xl:flex xl:flex-col xl:justify-center'>
              <h2 className='order-1 flex justify-center text-titulo text-3xl font-bold xl:text-4xl 2xl:text-5xl xl:mt-8'>| Jogue e divirta-se!
              </h2>
              <p className='order-1 text-paragrafo xl:text-lg px-10 py-6'>Assista a uma breve gameplay de um jogo desenvolvido por nossa equipe.
              </p>
              <iframe className="order-1 mx-auto pb-8" width="500" height="320" src="https://www.youtube.com/embed/RNHrcgtAneU?si=rrY8dksTLT8PKn1H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <img className='order-0 w-96 h-auto' src="/produto/dog5.png" alt="Imagem decorativa" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Produto;
