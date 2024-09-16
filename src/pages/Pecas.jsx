import React, { useState, useEffect } from 'react';

// Componente de Exibição de Peças
const Peça = ({ image, name, description, price }) => (
    <div className="group cursor-default bg-gray-800 w-72 h-80 shadow-md rounded-md overflow-hidden">
        <div className="h-40 relative overflow-hidden">
            <img src={image} alt={name} className="absolute top-0 left-0 h-full w-full object-cover" />
        </div>
        <div className="p-5 text-white">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-base pb-3">{description}</p>
            <p className="text-lg font-bold">{price}</p>
        </div>
    </div>
);

// Componente para exibir no desktop
const DesktopPecas = () => {
    const products = [
        { image: "/Pecas/ServoMotor.png", name: "Servo Motor Metálico", description: "Servo motor metálico ideal para projetos de robótica e automação.", price: "R$ 80,00" },
        { image: "/Pecas/Celula.png", name: "Célula de Carga", description: "Sensor de peso altamente preciso para medições.", price: "R$ 120,00" },
        { image: "/Pecas/Modulo.png", name: "Módulo HX711", description: "Conversor A/D para sensores de peso.", price: "R$ 35,00" },
        { image: "/Pecas/Arduino.png", name: "Arduino Uno R3", description: "Placa de desenvolvimento com microcontrolador ATmega328.", price: "R$ 150,00" },
        { image: "/Pecas/Bluetooth.png", name: "Módulo Bluetooth HC 05", description: "Módulo Bluetooth para comunicação sem fio.", price: "R$ 60,00" },
        { image: "/Pecas/Rele.png", name: "Módulo Relé", description: "Módulo para controle de dispositivos de alta potência.", price: "R$ 25,00" },
        { image: "/Pecas/Bateria.png", name: "Bateria 9V", description: "Fonte de energia compacta e portátil.", price: "R$ 15,00" },
        { image: "/Pecas/Protoboard.png", name: "Protoboard", description: "Placa de prototipagem para montagem de circuitos.", price: "R$ 20,00" },
        { image: "/Pecas/Jumper.png", name: "Jumpers", description: "Fios para conexões em protoboards.", price: "R$ 10,00" },
        { image: "/Pecas/Resisitores.png", name: "Resistores", description: "Componentes elétricos para controle de corrente.", price: "R$ 5,00" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleProducts = 3;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - visibleProducts + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section>
            <div className="relative mt-16 z-0">
                <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
                <h2 className='text-subtitulo text-4xl xl:text-6xl font-bold xl:mb-5 uppercase'>Peças</h2>
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
            <div className="mx-10 mt-10 mb-14 hidden lg:flex lg-items-center lg:flex-col lg:gap-8 lg:p-8">
                <h2 className='flex justify-center text-2xl text-titulo font-bold mb-20'>| Peças</h2>
                <div className="relative flex items-center justify-center">
                    <button onClick={prevSlide} className="bg-textMenu400 text-primary px-4 py-2 rounded-full flex items-center justify-center relative z-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <div className="flex overflow-hidden space-x-4 gap-5">
                        {products.slice(currentIndex, currentIndex + visibleProducts).map((product, index) => (
                            <Peça
                                key={index}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="bg-textMenu400 text-primary px-4 py-2 rounded-full flex items-center justify-center relative z-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>

        </section>
    );
};

// Componente para exibir no celular
const MobilePecas = () => {
    const components = [
        { image: "/Pecas/ServoMotor.png", name: "Servo Motor Metálico", description: "Servo motor metálico ideal para projetos de robótica e automação." },
        { image: "/Pecas/Celula.png", name: "Célula de Carga", description: "Sensor de peso altamente preciso para medições." },
        { image: "/Pecas/Modulo.png", name: "Módulo HX711", description: "Conversor A/D para sensores de peso." },
        { image: "/Pecas/Arduino.png", name: "Arduino Uno R3", description: "Placa de desenvolvimento com microcontrolador ATmega328." },
        { image: "/Pecas/Bluetooth.png", name: "Módulo Bluetooth HC 05", description: "Módulo Bluetooth para comunicação sem fio." },
        { image: "/Pecas/Rele.png", name: "Módulo Relé", description: "Módulo para controle de dispositivos de alta potência." },
        { image: "/Pecas/Bateria.png", name: "Bateria 9V", description: "Fonte de energia compacta e portátil." },
        { image: "/Pecas/Protoboard.png", name: "Protoboard", description: "Placa de prototipagem para montagem de circuitos." },
        { image: "/Pecas/Jumper.png", name: "Jumpers", description: "Fios para conexões em protoboards." },
        { image: "/Pecas/Resisitores.png", name: "Resistores", description: "Componentes elétricos para controle de corrente." }
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
        </div>
    );
};

// Componente principal
const Pecas = () => (
    <>
        <DesktopPecas />
        <MobilePecas />
    </>
);

export default Pecas;
