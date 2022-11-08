import React, { FC } from 'react'
import { contactsData } from '../../utils/consts'
import List from '../UI/List/List'
import styles from './Contacts.module.scss'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = props => {
	return (
		<div className={styles.contacts}>
			<h2>Контакты</h2>
			<List
				items={contactsData}
				renderItem={(item, index) => <li key={index}>{item}</li>}
			/>
		</div>
	)
}

export default Contacts
