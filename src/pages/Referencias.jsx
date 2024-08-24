import React, { useState } from 'react';

const Referencias = () => {
    return (
        <section className='text-justify text-paragrafo bg-fundo pb-1'>
            <div className="relative mt-16 z-0">
                <div className='flex flex-col items-center justify-center text-center absolute inset-0'>
                    <h2 className='text-subtitulo text-4xl font-bold '>TechPet</h2>
                    <img className='w-36' src="2logo.png" alt="" />
                    <p className='text-titulo font-semibold xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
                </div>
                <div>
                    {/* Imagem para desktop */}
                    <img
                        src="/referencia/gato1.png"
                        alt="Imagem para Desktop"
                        className="hidden md:block w-full h-auto"
                    />

                    {/* Imagem para mobile */}
                    <img
                        src="/referencia/cat.png"
                        alt="Imagem para Mobile"
                        className="block md:hidden w-full h-auto"
                    />
                </div>

            </div>
            <div className='xl:mx-52 xl:my-8 2xl:mx-96 m-10'>
                <div className='bg-background  xl:flex'>
                    <img src="/referencia/cat2.png" alt="" />
                    <div className='xl:flex xl:flex-col xl:justify-center px-6 py-6 xl:pt-0 xl:px-14'>
                        <h2 className='flex justify-center text-titulo text-3xl font-bold pb-6 xl:text-4xl 2xl:text-5xl xl:mt-8'>| REFERÊNCIAS</h2>
                        <p className='text-paragrafo xl:text-lg' >O IBGE revela que já é o maior número de lares com animais domesticos  do que crianças.</p>
                        <p className='text-paragrafo xl:text-lg py-6'>Conforme pesquisas há uma estimativa da existência de mais de 1 bilhão de cachorros e gatos no mundo.</p>
                        <p className='text-paragrafo xl:text-lg'>De acordo com a Secretaria do Estado da Saúde (SES), cerca de 80% dos focos dos mosquitos Aedes Aeayplysn proquiam nas vasilhas dos pets.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Referencias;