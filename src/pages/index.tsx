import React from 'react';

//Assets
import * as S from '../assets/styles/index/index';
import PersonalImage from '../assets/images/dark.jpg';
import Link from 'next/link';

const Index = () => {
    return (
        <S.MainField>
            <div className='yellow_line'></div>
            <S.ImageField backgroundImage={PersonalImage.src}></S.ImageField>
            <S.AboutMeField>
                <div className='header'>
                    <h1>I&apos;M KASRA HABIBBEYGI.</h1>
                    <h2>WEB DEVELOPER</h2>
                </div>
                <p>
                    I&apos;m a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am
                    passionate about building excellent software that improves the lives of those around me.
                </p>
                <Link href='/about-me'>
                    <S.ButtonField>
                        More About Me
                        <i className='fa fa-arrow-right'></i>
                    </S.ButtonField>
                </Link>
            </S.AboutMeField>
        </S.MainField>
    );
};

export default Index;
