import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AddDeviceModal from '../../components/collection/modals/AddDeviceModal/AddDeviceModal'
import ConfirmModal from '../../components/collection/modals/ConfirmModal/ConfirmModal'
import BlueButton from '../../components/ui/buttons/BlueButton/BlueButton'
import RedButton from '../../components/ui/buttons/RedButton/RedButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useConfirm } from '../../hooks/useConfirm'
import { useToggle } from '../../hooks/useToggle'
import { removeUser } from '../../store/user/userSlice'
import styles from './Profilepage.module.scss'

interface ProfilepageProps {}

const Profilepage: FC<ProfilepageProps> = props => {
	const user = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { state: showAddModal, toggleHandler: addModalToggle } = useToggle(
		false,
		400
	)
	const exitConfirm = useConfirm(() => {
		navigate('/react-comp')
		dispatch(removeUser())
	})

	return (
		<div className='container'>
			<AddDeviceModal show={showAddModal} setShow={addModalToggle} />
			<ConfirmModal {...exitConfirm} />
			<div className={styles.profile}>
				<img
					title={user.name ? user.name : ''}
					className={styles.avatar}
					src={user.img ? user.img : ''}
					alt=''
				/>
				<ul className={styles.info}>
					<li>Имя: {user.name && user.name}</li>
					<li>Логин: {user.email && user.email}</li>
					<li>Роль: {user.role}</li>
				</ul>
				<div className={styles.buttons}>
					{(user.role === 'admin' || user.role === 'employee') && (
						<BlueButton onClick={addModalToggle}>Добавить товары</BlueButton>
					)}
					<RedButton onClick={_ => exitConfirm.setShow(true)}>
						Выйти из аккаунта
					</RedButton>
				</div>
			</div>
		</div>
	)
}

export default Profilepage
