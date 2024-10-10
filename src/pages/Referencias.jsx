import React from 'react';

const Referencias = () => {
    return (
        <section className='text-justify text-paragrafo bg-fundo pb-1'>
            {/* Seção da imagem de fundo */}
            <div className="relative bg-center bg-cover w-full h-screen" style={{ backgroundImage: "url('/referencia/gato1.png')" }}>
                {/* Conteúdo sobre a imagem */}
                <div className='flex flex-col items-center justify-center text-center absolute inset-0 z-10'>
                    <h2 className='text-titulo text-4xl xl:text-6xl font-bold xl:mb-5 uppercase'>TechPet</h2>
                    <img className='w-48' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
            </div>

            {/* Conteúdo abaixo da imagem */}
            <div className='xl:mx-52 xl:my-8 2xl:mx-96 m-10'>
                <div className='bg-background xl:flex'>
                    <img src="/referencia/cat2.png" alt="Gato" />
                    <div className='xl:flex xl:flex-col xl:justify-center px-6 py-6 xl:pt-0 xl:px-14'>
                        <h2 className='flex justify-center text-titulo text-3xl font-bold pb-6 xl:text-4xl 2xl:text-5xl xl:mt-8'>| REFERÊNCIAS</h2>
                        <p className='text-paragrafo xl:text-lg'>
                            O número de lares com animais de estimação tem crescido, superando os lares com crianças em países como os EUA. Esse fenômeno está relacionado à queda nas taxas de natalidade e ao aumento de adultos sem filhos. <br />​(RISMedia)
                        </p>
                        <p className='text-paragrafo xl:text-lg py-6'>
                            Estima-se que a população mundial de cães e gatos seja de mais de 1 bilhão, refletindo o crescente apego das pessoas por seus pets, que são vistos como parte da família.​ <br />(National Association of REALTORS®)
                        </p>
                        <p className='text-paragrafo xl:text-lg'>
                            No entanto, práticas inadequadas de cuidado, como deixar recipientes de água para pets sem supervisão, têm contribuído para a proliferação do mosquito Aedes aegypti, responsável por doenças como a dengue​. <br />(RISMedia)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Referencias;
