import React, { useState } from 'react';

// Componente para exibir no desktop
const DesktopPecas = () => (
    <div className="hidden lg:flex lg:flex-col lg:gap-8 lg:p-8">
        <div className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white flex-1">
            <img
                src="https://example.com/arduino-board.jpg"
                alt="Placa Arduino"
                className="w-full sm:w-48 h-auto rounded-md"
            />
            <h2 className="text-xl font-semibold">Placa Arduino Uno</h2>
            <p className="text-base text-gray-600 text-center">
                Placa de desenvolvimento Arduino Uno com microcontrolador ATmega328. Ideal para projetos de eletrônica e prototipagem.
            </p>
            <p className="text-lg font-bold">R$ 150,00</p>
        </div>
        <div className="flex flex-col items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white flex-1">
            <img
                src="https://example.com/arduino-sensor.jpg"
                alt="Sensor Arduino"
                className="w-full sm:w-48 h-auto rounded-md"
            />
            <h2 className="text-xl font-semibold">Sensor de Temperatura</h2>
            <p className="text-base text-gray-600 text-center">
                Sensor de temperatura para Arduino, com alta precisão e fácil integração em projetos.
            </p>
            <p className="text-lg font-bold">R$ 60,00</p>
        </div>
    </div>
);

// Componente para exibir no celular
const MobilePecas = () => {
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
        <div className="lg:hidden p-4">
            <div className='flex flex-col items-center justify-center text-center my-8'>
                <h2 className='text-4xl font-bold my-4'>TechPet</h2>
                <img className='w-36' src="2logo.png" alt="" />
                <p className='text-base'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
            </div>
            <h2 className='text-2xl font-bold mb-4'>| Peças</h2>
            <div className="relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={components[currentIndex].image}
                    alt={components[currentIndex].name}
                    className="w-full h-52 object-contain"
                />
                <div className="p-4 w-full text-center">
                    <h2 className="text-xl font-bold mb-2">{components[currentIndex].name}</h2>
                    <p className="text-sm">{components[currentIndex].description}</p>
                </div>
                <div className="flex justify-between absolute inset-x-0 bottom-4 px-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 bg-gray-200 rounded-full"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
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
                        className="p-2 bg-gray-200 rounded-full"
                    >
                        <svg
                            className="w-6 h-6 text-gray-700"
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
        </div>
    );
};

const Pecas = () => (
    <>
        <DesktopPecas />
        <MobilePecas />
    </>
);

export default Pecas;
