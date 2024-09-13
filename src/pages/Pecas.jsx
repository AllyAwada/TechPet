import React, { useState } from 'react';

// Componente de Exibição de Peças
const Peça = ({ image, name, description, price }) => (
    <div className="group cursor-default bg-gray-800 w-72 h-40 hover:h-auto shadow-md rounded-md overflow-hidden">
        <div className="h-40 relative overflow-hidden">
            <img src={image} alt={name} className="absolute top-0 left-0 h-full w-full object-cover" />
        </div>
        <div className="p-5 opacity-0 group-hover:opacity-100 duration-[1s] -translate-y-6 group-hover:translate-y-0">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-base pb-3">{description}</p>
            <p className="text-lg font-bold">{price}</p>
        </div>
    </div>
);

// Componente para exibir no desktop
const DesktopPecas = () => (
    <section>
        <div className="relative mt-16 z-0">
            <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
                <h2 className='text-subtitulo text-4xl font-bold'>TechPet</h2>
                <img className='w-36' src="2logo.png" alt="Logo" />
                <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
            </div>
            <div>
                <img
                    src="/Pecas/2pecas.png"
                    alt="Imagem para Desktop"
                    className="hidden md:block w-full h-auto"
                />
                <img
                    src="/Pecas/1pecas.png"
                    alt="Imagem para Mobile"
                    className="block md:hidden w-full h-auto"
                />
            </div>
        </div>
        <div className="mt-24 hidden lg:flex lg-items-center lg:flex-col lg:gap-8 lg:p-8">
            <h2 className='flex justify-center text-2xl text-titulo font-bold mb-4'>| Peças</h2>
            <div className="mt-24 pb-36 flex items-center justify-center flex-wrap gap-10 mx-5">

                <Peça
                    image="/Pecas/arduino.png"
                    name="Placa Arduino Uno"
                    description="Placa de desenvolvimento Arduino Uno com microcontrolador ATmega328. Ideal para projetos de eletrônica e prototipagem."
                    price="R$ 150,00"
                />
                <Peça
                    image="/Pecas/peltier.png"
                    name="Sensor de Temperatura"
                    description="Sensor de temperatura para Arduino, com alta precisão e fácil integração em projetos."
                    price="R$ 60,00"
                />
                <Peça
                    image="/Pecas/bomba.png"
                    name="Bomba D'agua"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    price="R$100,00"
                />
                <Peça
                    image="/Pecas/celula.png"
                    name="Celula de carga"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    price="R$100,00"
                />
                <Peça
                    image="/Pecas/JUMPER.png"
                    name="Cabos jumper"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    price="R$100,00"
                />
                <Peça
                    image="/Pecas/PROTOBOARD.png"
                    name="Protoboard"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    price="R$100,00"
                />
                <Peça
                    image="/Pecas/SERVO MOTOR.png"
                    name="Servo Motor"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    price="R$100,00"
                />
            </div>
        </div>
    </section>
);

// Componente para exibir no celular
const MobilePecas = () => {
    const components = [
        {
            image: '/Pecas/arduino.png',
            name: 'Arduino Uno',
            description: 'O Arduino Uno é a placa mais popular da família Arduino, ideal para projetos de automação e robótica.',
        },
        {
            image: '/Pecas/SERVO MOTOR.png',
            name: 'Servo Motor',
            description: 'O Servo Motor é utilizado para controle preciso de movimento em eixos, ideal para projetos de robótica.',
        },
        {
            image: '/Pecas/celula.png',
            name: 'Célula de Carga',
            description: 'A Célula de Carga mede força ou peso em um sistema, convertendo em sinal elétrico, amplamente utilizada em balanças eletrônicas.',
        },
        {
            image: '/Pecas/bomba.png',
            name: 'Bomba de Água',
            description: 'A Bomba de Água é usada para mover líquidos de um lugar para outro em sistemas automatizados.',
        },
        {
            image: '/Pecas/peltier.png',
            name: 'Pastilha Peltier',
            description: 'A Pastilha Peltier é usada para criar uma diferença de temperatura entre suas faces, ideal para projetos de refrigeração.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);

    return (
        <div className="bg-frase lg:hidden p-4">
            <h2 className='text-2xl text-titulo font-bold mb-4'>| Peças</h2>
            <div className="relative flex flex-col items-center bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                    src={components[currentIndex].image}
                    alt={components[currentIndex].name}
                    className="w-full h-52 object-contain p-2"
                />
                <div className="p-4 w-full text-center">
                    <h2 className="text-xl font-bold mb-2">{components[currentIndex].name}</h2>
                    <p className="text-sm text-paragrafo p-2">{components[currentIndex].description}</p>
                </div>
            </div>
            <div className="flex justify-between inset-x-0 mt-5 px-4">
                <button onClick={prevSlide} className="p-2 bg-background shadow-lg rounded-full">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={nextSlide} className="p-2 bg-background shadow-lg rounded-full">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
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
