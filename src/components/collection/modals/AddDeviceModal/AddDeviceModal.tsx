/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useMemo, useState } from 'react'
import Select, { OnChangeValue } from 'react-select'
import { useAppSelector } from '../../../../hooks/redux'
import { useInput } from '../../../../hooks/useInput'
import { apiService } from '../../../../services/api/api.service'
import { ICategory } from '../../../../types/ICategory'
import { IDevice } from '../../../../types/IDevice'
import { parseSelectOptions } from '../../../../utils/helpers/parseSelectOptions'
import { toSelectOptions } from '../../../../utils/helpers/toSelectOptions'
import GreenButton from '../../../ui/buttons/GreenButton/GreenButton'
import Loading from '../../../shared/Loading/Loading'
import MyInput from '../../../ui/inputs/MyInput/MyInput'
import MyModal from '../MyModal/MyModal'
import { IOption } from './AddDevice.interface'
import styles from './AddDeviceModal.module.scss'
import AddDeviceSelectOrInput from './AddDeviceSelectOrInput'

interface AddDeviceModalProps {
	show: boolean
	setShow: () => void
}

const AddDeviceModal: FC<AddDeviceModalProps> = ({ show, setShow }) => {
	const [info, setInfo] = useState({} as any)
	const nameInput = useInput()
	const priceInput = useInput()
	const stockInput = useInput()
	const rateInput = useInput()
	const countInput = useInput()
	const imgInput = useInput()
	const [categoryValue, setCategoryValue] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const { categoryItem } = useAppSelector(state => state.category)
	const categoryOptions = toSelectOptions<ICategory>(
		categoryItem,
		'id',
		'title'
	)

	const categoryChange = (e: OnChangeValue<IOption, boolean>) => {
		setCategoryValue(+(e as IOption).value)
	}

	const category = useMemo(() => {
		const obj = categoryItem.find(item => item.id === categoryValue)
		return parseSelectOptions(obj?.info)
	}, [categoryValue])

	const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const device: IDevice = {
			id: 1,
			category: +categoryValue,
			name: nameInput.value,
			price: +priceInput.value,
			stock: +stockInput.value,
			rate: +rateInput.value,
			count: +countInput.value,
			date: Date.now(),
			img: imgInput.value,
			info: info,
		}

		apiService.postDevice(device, setIsLoading)
	}

	return (
		<MyModal
			show={show}
			setShow={setShow}
			subClass={`${styles.modal} ${isLoading && 'no-scroll-1'}`}
		>
			<div className={styles.header}>
				<h1>???????????????????? ????????????</h1>
				<button onClick={setShow}>&#10006;</button>
			</div>
			<form onSubmit={addHandler} className={styles.body}>
				<Select
					className={styles.categorySelect}
					options={categoryOptions}
					onChange={categoryChange}
					placeholder='???????????????? ??????????????????'
				/>
				<div className={styles.inputBlock}>
					<MyInput {...nameInput} placeholder='?????? ????????????' />
					<MyInput {...priceInput} placeholder='???????? ????????????' />
					<MyInput {...stockInput} placeholder='???????????? ???????????? ?? %' />
					<MyInput {...rateInput} placeholder='?????????????? ????????????' />
					<MyInput {...countInput} placeholder='???????????????????? ????????????' />
					<MyInput {...imgInput} placeholder='url ???????????????? ????????????' />
				</div>
				<div className={styles.selectAndInputBlock}>
					{category && (
						<>
							{category.map((collection, index) => (
								<AddDeviceSelectOrInput
									key={index}
									collection={collection}
									setInfo={setInfo}
									info={info}
								/>
							))}
							<GreenButton title='???????????????? ??????????' />
						</>
					)}
				</div>
			</form>
			{isLoading && <Loading />}
		</MyModal>
	)
}

export default AddDeviceModal
