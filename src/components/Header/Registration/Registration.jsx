import React from "react";
import styles from './Registration.module.scss'
import {useForm} from "react-hook-form";
import {fetchRegister, selectIsAuth} from "../../../redux/slices/authSlice";
import {useDispatch, useSelector} from "react-redux";

function Registration({currentTab, setCurrentTab, setActive}) {
    const dispatch = useDispatch()
    const [error, setError] = React.useState('')


    const {register,
        handleSubmit,
        setErrors,
        formState: {errors ,isValid}
    } = useForm({
        defaultValues: {
            telegramName: '',
            password: ''
        },
        mode: 'onChange'
    })


    const onSubmitRegister = async (values) => {
        try{
            const data = await dispatch(fetchRegister(values))

            console.log(data.payload, 'payload')

            if(!data.payload){
                alert('Не удалось зарегистрироваться ')
                console.log(data.error.message)
            }
            if(data.error.message === 'Request failed with status code 501'){
                setError('Такой пользователь уже существует')
            } else if (data.error.message === 'Request failed with status code 400'){
                setError('Пароль должен быть минимум 5 символов')
            } else if('token' in data.payload){
                window.localStorage.setItem('token', data.payload.token)
            } else {
                alert('Не удалось зарегистрироваться')
            }

        } catch(err){
            setError('')
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmitRegister)}>
            <div className={styles.registrationblock}>
                <div className={styles.firstregistration}>
                    <div className={styles.titleandlogo}>
                        <h2>РЕГИСТРАЦИЯ</h2>
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
                            className={styles.registerinputlogin} {...register('telegramName', {required: 'Введите имя'})}
                            type="text"/>
                        <p className={styles.paragraph}>*введите никнейм без @</p>
                    </div>
                    <div className={styles.pass}>
                        <h3>Пароль</h3>
                        <input
                            className={styles.registerinputpass} {...register('password', {required: 'Введите пароль'})}
                            type="text"/>
                    </div>

                    <p className={styles.error}>{error}</p>
                </div>
                <div className={styles.buttonsblock}>
                    <button className={styles.refgistrbtn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    <h4 className={styles.btntologin} onClick={() => {
                        setCurrentTab('login')
                    }}>Я УЖЕ ЗАРЕГИСТРИРОВАН</h4>
                </div>
            </div>
        </form>
    )
}

export default Registration;