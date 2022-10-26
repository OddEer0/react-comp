import axios from 'axios'
import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { setUser } from '../../store/slices/userSlice'
import { IUser } from '../../types/IUser'
import BlueButton from '../UI/BlueButton/BlueButton'
import MyModal from '../UI/MyModal/MyModal'
import RedButton from '../UI/RedButton/RedButton'
import styles from './AuthModal.module.scss'

interface AuthModalProps {
	show: boolean
	setShow: (show: boolean) => void
}

const AuthModal: FC<AuthModalProps> = ({ show, setShow }) => {
	const [nameValue, setNameValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')
	const [isValid, setIsValid] = useState(true)
	const dispatch = useAppDispatch()

	const fetchUser = async (email: string) => {
		try {
			const response = await axios.get<IUser[]>(
				`https://632feb2ef5fda801f8d8053d.mockapi.io/user?email=${email}`
			)
			const [data] = await response.data

			if (data.email === nameValue) {
				if (data.password === passwordValue) {
					dispatch(setUser(data))
					setShow(false)
				} else {
					setIsValid(false)
				}
			} else setIsValid(false)
		} catch (e) {
			setIsValid(false)
		}
	}

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const isAuth = fetchUser(nameValue)
	}

	return (
		<MyModal show={show} setShow={setShow} subClass={styles.modal}>
			<div className={styles.header}>
				<h2>Вход</h2>
				<button onClick={_ => setShow(false)}> &#10006;</button>
			</div>
			<form onSubmit={submitHandler} className={styles.body}>
				<input
					onChange={e => setNameValue(e.target.value)}
					placeholder='Почта'
					value={nameValue}
					className={styles.input}
					type='text'
				/>
				<input
					onChange={e => setPasswordValue(e.target.value)}
					placeholder='Пароль'
					value={passwordValue}
					className={styles.input}
					type='password'
				/>
				<div className={styles.link}>
					<a>Забыли пароль?</a>
				</div>
				<BlueButton style={{ width: '100%', height: '36px' }}>Вход</BlueButton>
				<div className={styles.line}>
					<span></span>
					<h4>или войти с помощью</h4>
					<span></span>
				</div>
				<div className={styles.buttons}>
					<RedButton>
						<img src='' alt='' />
						Google
					</RedButton>
					<BlueButton>
						<img src='' alt='' />
						Facebook
					</BlueButton>
				</div>
			</form>
			<div className={styles.footer}>
				<h4>Нет аккаунта?</h4>
				<a>Зарегистрироваться</a>
			</div>
		</MyModal>
	)
}

export default AuthModal
