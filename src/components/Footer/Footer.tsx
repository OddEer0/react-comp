import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../../utils/consts'
import Contacts from '../Contacts/Contacts'
import Social from '../Social/Social'
import List from '../UI/List/List'
import styles from './Footer.module.scss'

interface FooterProps {}

const Footer: FC<FooterProps> = props => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.content}>
					{footerData.map(data => (
						<div key={data.id} className={styles.list}>
							<h2>{data.title}</h2>
							<ul>
								<List
									items={data.subItem}
									renderItem={item => (
										<li key={item.id}>
											<Link to={item.to ? item.to : '/react-comp'}>
												{item.title}
											</Link>
										</li>
									)}
								/>
							</ul>
						</div>
					))}
					<Contacts />
					<Social />
				</div>
			</div>
		</footer>
	)
}

export default Footer
