import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { headerImage } from '../../assets/img'
import GreenButton from '../UI/GreenButton/GreenButton'
import styles from './Header.module.scss'

interface HeaderSecondNavProps {}

const HeaderSecondNav: FC<HeaderSecondNavProps> = props => {
	return (
		<nav className={styles.navbarTwo}>
			<div className='container'>
				<div className={styles.navbarTwoContent}>
					<img className={styles.logo} src={headerImage.Logo} alt='' />
					<Link to='/react-comp/catalog'>
						<GreenButton title='Каталог товаров' src={headerImage.catalog} />
					</Link>
					<div className={styles.searchBlock}>
						<input
							id='search'
							className={styles.searchBlockInput}
							type='text'
							placeholder='Поиск'
						/>
						<label htmlFor='search' className={styles.searchBlockIcon}>
							<img src={headerImage.search} alt='' />
						</label>
					</div>
					<img
						className={styles.searchIcon}
						src={headerImage.searchMobile}
						alt=''
					/>
					<div className={styles.contact}>050 065 87 96</div>
					<div className={styles.iconList}>
						<img alt='' src={headerImage.scales} />
						<img alt='' src={headerImage.heart} />
						<img alt='' src={headerImage.cart} />
					</div>
					<div className={styles.iconListWhite}>
						<img alt='' src={headerImage.cartWhite} />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default HeaderSecondNav
