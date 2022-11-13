import React, { FC } from 'react'
import Select, { OnChangeValue } from 'react-select'
import MyInput from '../../../ui/inputs/MyInput/MyInput'
import { IOption, ISelectCollection } from './AddDevice.interface'
import styles from './AddDeviceModal.module.scss'

interface AddDeviceSelectOrInputProps {
	collection: ISelectCollection | undefined | null
	info: any
	setInfo: (obj: any) => void
}

const AddDeviceSelectOrInput: FC<AddDeviceSelectOrInputProps> = ({
	collection,
	setInfo,
	info,
}) => {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = collection?.name
		if (name) setInfo({ ...info, [collection.name]: e.target.value })
	}

	const selectChangeHandler = (e: OnChangeValue<IOption, boolean>) => {
		const name = collection?.name
		if (name) setInfo({ ...info, [collection.name]: (e as IOption).value })
	}

	if (!collection) return <div></div>

	return (
		<>
			{collection.options.length ? (
				<Select
					onChange={selectChangeHandler}
					options={collection.options}
					placeholder={collection.name}
					isSearchable={false}
					className={styles.select}
				/>
			) : (
				<MyInput
					onChange={changeHandler}
					subClass={styles.input}
					placeholder={collection.name}
				/>
			)}
		</>
	)
}

export default AddDeviceSelectOrInput
