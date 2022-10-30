import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import BlueButton from '../../components/UI/BlueButton/BlueButton'
import RedButton from '../../components/UI/RedButton/RedButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { removeUser } from '../../store/slices/userSlice'
import styles from './Profilepage.module.scss'

interface ProfilepageProps {}

const Profilepage: FC<ProfilepageProps> = props => {
	const user = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const exitHandler = () => {
		navigate('/react-comp')
		dispatch(removeUser())
	}

	return (
		<div className='container'>
			<div className={styles.profile}>
				<img
					title={user.name ? user.name : ''}
					className={styles.avatar}
					src={user.img ? user.img : ''}
					alt=''
				/>
				<ul className={styles.info}>
					<li>Имя: {user.name ? user.name : ''}</li>
					<li>Логин: {user.email ? user.email : ''}</li>
				</ul>
				<div className={styles.buttons}>
					{user.role === 'admin' || user.role === 'employee' ? (
						<BlueButton>Добавить товары</BlueButton>
					) : (
						''
					)}
					<RedButton onClick={exitHandler}>Выйти из аккаунта</RedButton>
				</div>
			</div>
		</div>
	)
}

export default Profilepage
