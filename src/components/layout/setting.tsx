import React from 'react';
import { useDispatch } from 'react-redux';
import { themeHandler } from '../../state-manager/reducers/user-profile';

// Assets
import * as S from './setting.styles';
const Setting = () => {
    const dispatch = useDispatch();

    const changeThemeHandler = () => {
        if (localStorage.getItem('theme') === 'light') {
            dispatch(themeHandler('dark'));
        } else {
            dispatch(themeHandler('light'));
        }
    };

    return (
        <S.SettingField>
            <i className='fa-thin fa-gear'></i>
            <i className='fa-thin fa-lightbulb' onClick={changeThemeHandler}></i>
        </S.SettingField>
    );
};

export default Setting;
