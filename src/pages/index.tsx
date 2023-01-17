import React from 'react';

//Assets
import * as S from '../assets/styles/index/index';
import PersonalImage from '../assets/images/dark.jpg';

const Index = () => {
    console.log(PersonalImage);

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
            </S.AboutMeField>
        </S.MainField>
    );
};

export default Index;
