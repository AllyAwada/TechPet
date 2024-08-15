import React, { useState, useEffect, useRef } from 'react';

const Produto = () => {
  const slides = [
    {
      img: 'dog.png',
    },
    {
      img: 'o.jpg',
    },
    {
      img: 'dog.png',
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
    <section className="w-full relative mt-20 ">
      <div className='flex flex-col items-center justify-center text-center my-8'>
        <h2 className='text-titulo text-4xl font-bold my-4'>TechPet</h2>
        <img className='w-36' src="2logo.png" alt="" />
        <p className='text-paragrafo xl:text-lg mx-10'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
      </div>
      <h2 className='text-titulo text-2xl font-bold  mx-10 xl:text-4xl xl:mb-10 xl:mx-52 2xl:mx-96'>| Produto</h2>

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
      <h2 className='text-titulo text-2xl font-bold mt-4 mx-10 xl:text-4xl xl:mx-52 2xl:mx-96'>| Guia de Utilização</h2>
      <p className='text-base text-paragrafo my-2 mx-10 xl:mx-52 2xl:mx-96'>
        Com a ultilização de um App disponivel do AppStore será usado para configurar e saber mais informações do seu pet. Segue um video mostrando como fazer a configuração e o funcionamento do nosso produto.
      </p>
      <div className='flex justify-center'>
        <iframe className='mt-4' width="370" height="225" src="https://www.youtube.com/embed/EMiDYIVhpKA?si=0PemOD0xQqz6yvA9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className='flex justify-center'>
        <a href="/pecas" className=" bg-backgroundMenu800 rounded-full text-frase text-sm font-bold py-2 px-4 my-4 ">Veja as Peças</a>
      </div>
    </section>
  );
};

export default Produto;
