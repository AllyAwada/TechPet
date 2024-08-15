import React, { useState } from 'react';

const Referencias = () => {
    return (
        <section className='mt-20 mb-6 text-justify text-paragrafo'>
            <div className='flex flex-col items-center justify-center text-center my-8'>
                <h2 className='text-titulo text-4xl font-bold my-4'>TechPet</h2>
                <img className='w-36' src="2logo.png" alt="" />
                <p className='text-paragrafo xl:text-lg'>TechPet: Transformando inovação em soluções criativas para um mundo moderno.</p>
            </div>
            <div className='xl:mx-52 xl:my-8 2xl:mx-96 mx-10'>
                <h2 className='text-titulo text-4xl font-bold mb-2'>| REFERÊNCIAS</h2>

                <p className='text-paragrafo xl:text-lg'>O IBGE revela que já é o maior número de lares com animais domesticos  do que crianças.</p>

                <div className='flex justify-center my-4'>
                    <img src="IBGE.png" alt="" />
                </div>

                <p className='text-paragrafo xl:text-lg'>Conforme pesquisas há uma estimativa da existência de mais de 1 bilhão de cachorros e gatos no mundo.</p>

                <div className='flex justify-center my-4'>
                    <img src="SES.png" alt="" />
                </div>

                <p className='text-paragrafo xl:text-lg'>De acordo com a Secretaria do Estado da Saúde (SES), cerca de 80% dos focos dos mosquitos Aedes Aeayplysn proquiam nas vasilhas dos pets.</p>
            </div>
        </section>
    );
};

export default Referencias;