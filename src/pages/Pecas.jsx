import React, { useState } from 'react';

const Pecas = () => {
    const components = [
        {
            image: 'arduino.png',
            name: 'Arduino Uno',
            description: 'O Arduino Uno é a placa mais popular da família Arduino, ideal para projetos de automação e robótica.'
        },
        {
            image: 'SERVO MOTOR.png',
            name: 'Servo Motor',
            description: 'O Servo Motor é utilizado para controle preciso de movimento em eixos, ideal para projetos de robótica.'
        },
        {
            image: 'celula.png',
            name: 'Célula de Carga',
            description: 'A Célula de Carga mede força ou peso em um sistema, convertendo em sinal elétrico, amplamente utilizada em balanças eletrônicas.'
        },
        {
            image: 'bomba.png',
            name: 'Bomba de Água',
            description: 'A Bomba de Água é usada para mover líquidos de um lugar para outro em sistemas automatizados.'
        },
        {
            image: 'peltier.png',
            name: 'Pastilha Peltier',
            description: 'A Pastilha Peltier é usada para criar uma diferença de temperatura entre suas faces, ideal para projetos de refrigeração.'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    };

    return (
        <div className="justify-center max-w-xs mx-auto mt-20 ">
            <div className='flex flex-col items-center justify-center text-center my-8'>
                <h2 className='text-titulo text-4xl font-bold my-4'>TechPet</h2>
                <img className='w-36' src="2logo.png" alt="" />
                <p className='text-paragrafo '>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
            </div>
            <h2 className='text-titulo text-2xl font-bold mb-4'>| Peças</h2>
            <div className="relative flex flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                    src={components[currentIndex].image}
                    alt={components[currentIndex].name}
                    className="w-full h-52 object-contain"
                />
                <div className="p-4 w-full text-center text-paragrafo">
                    <h2 className="text-xl font-bold mb-2">{components[currentIndex].name}</h2>
                    <p className="text-sm">{components[currentIndex].description}</p>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevSlide}
                    className="p-2 bg-background rounded-full mb-6"
                >
                    <svg
                        className="w-6 h-6 text-titulo"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 bg-background rounded-full mb-6"
                >
                    <svg
                        className="w-6 h-6 text-titulo"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pecas;
