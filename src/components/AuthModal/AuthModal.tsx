import axios from 'axios'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { setUser } from '../../store/slices/userSlice'
import { IUser } from '../../types/IUser'
import BlueButton from '../UI/BlueButton/BlueButton'
import Loading from '../UI/Loading/Loading'
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
	const [isFetch, setIsFetch] = useState(false)
	const dispatch = useAppDispatch()

	const fetchUser = async (email: string, password: string) => {
		try {
			const response = await axios.get<IUser[]>(
				`https://632feb2ef5fda801f8d8053d.mockapi.io/user?email=${email}`
			)
			const [data] = await response.data

			if (data.email === email) {
				if (data.password === password) {
					dispatch(setUser(data))
					setShow(false)
				} else {
					setIsValid(false)
				}
			} else setIsValid(false)
		} catch (e) {
			setIsValid(false)
		} finally {
			setIsFetch(false)
		}
	}

	const closeHandler = () => {
		if (!isFetch) {
			setShow(false)
			setTimeout(() => {
				setIsValid(true)
				setNameValue('')
				setPasswordValue('')
			}, 300)
		}
	}

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		setIsFetch(true)
		fetchUser(nameValue, passwordValue)
	}

	return (
		<MyModal show={show} setShow={closeHandler} subClass={styles.modal}>
			{isFetch ? (
				<div className={styles.modalOverlay}>
					<Loading />
				</div>
			) : (
				''
			)}
			<div className={styles.header}>
				<h2>Вход</h2>
				<button onClick={closeHandler}>&#10006;</button>
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
					<Link to='/react-comp'>Забыли пароль?</Link>
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
				<div className={styles.link}>
					<Link to='/react-comp'>Зарегистрироваться</Link>
				</div>
			</div>
			{isValid ? (
				''
			) : (
				<h5 className={styles.error}>Неверный логин или пароль</h5>
			)}
		</MyModal>
	)
}

export default AuthModal
