import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../../../utils/constants/consts'
import Contacts from '../../shared/Contacts/Contacts'
import Social from '../../shared/Social/Social'
import List from '../../shared/List/List'
import styles from './Footer.module.scss'
import Container from '../Container/Container'

interface FooterProps {}

const Footer: FC<FooterProps> = props => {
	return (
		<footer className={styles.footer}>
			<Container>
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
			</Container>
		</footer>
	)
}

export default Footer
