import React from 'react';
import styles from './Login.module.scss'
import {useForm} from "react-hook-form";
import {fetchAuth} from "../../../redux/slices/authSlice";
import {useDispatch} from "react-redux";

function Login({currentTab, setCurrentTab, setActive}){
    const dispatch = useDispatch()
    const [error, setError] = React.useState('')

    const {register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            telegramName: '',
            password: ''
        },
        mode: 'onChange'
    })

    const onSubmitLogin = async (values) => {
        try{
            const data = await dispatch(fetchAuth(values))

            if(!data.payload){
                alert('Не удалось зарегистрироваться ')
                console.log(data)
            }
            if(data.payload === 'User already exists'){
                setError(data.payload)
            } else if('token' in data.payload){
                window.localStorage.setItem('token', data.payload.token)
            } else {
                alert('Не удалось зарегистрироваться')
            }
        } catch(err){
            setError('Не удалось авторизоваться')
        }

    }


    return (
        <form onSubmit={handleSubmit(onSubmitLogin)}>
            <div className={styles.loginblock}>
                <div className={styles.firstlogin}>
                    <div className={styles.titleandlogo}>
                        <h2>ВХОД</h2>
                        <svg onClick={() => setActive(false)} width="35" height="35" viewBox="0 0 35 35"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3848 8L8 26.3848M26.3848 26.3848L8 8" stroke="#07040C"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.contentbody}>
                    <div className={styles.reg}>
                        <h3>Ваш ник в Телеграмме</h3>
                        <input
                            className={styles.signinputlogin} {...register('telegramName', {required: 'Введите имя'})}
                            type="text"/>
                        <p className={styles.paragraph}>*введите никнейм без @</p>
                    </div>
                    <div className={styles.pass}>
                        <h3>Пароль</h3>
                        <input className={styles.signinputpass} {...register('password', {required: 'Введите пароль'})}
                               type="text"/>
                    </div>

                    <p className={styles.error}>{error}</p>
                </div>
                <div className={styles.buttonsblock}>
                    <button className={styles.refgistrbtn}>ВОЙТИ</button>
                    <h4 className={styles.btntologin} onClick={() => {
                        setCurrentTab('register')
                    }}>ЗАРЕГИСТРИРОВАТЬСЯ</h4>
                </div>
            </div>
        </form>
    )
}

export default Login;