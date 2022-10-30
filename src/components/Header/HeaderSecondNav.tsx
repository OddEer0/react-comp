import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { headerImage } from '../../assets/img'
import { useAppSelector } from '../../hooks/redux'
import BasketModal from '../BasketModal/BasketModal'
import GreenButton from '../UI/GreenButton/GreenButton'
import styles from './Header.module.scss'

interface HeaderSecondNavProps {}

const HeaderSecondNav: FC<HeaderSecondNavProps> = props => {
	const [showBasket, setShowBasket] = useState(false)
	const { basketItem } = useAppSelector(state => state.basket)

	const toggleBasket = () => {
		if (showBasket) {
			setShowBasket(false)
			document.body.classList.remove('no-scroll-1')
		} else {
			setShowBasket(true)
			document.body.classList.add('no-scroll-1')
		}
	}

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
						<div className={styles.iconListItem}>
							<img alt='' src={headerImage.scales} />
							<sub>45</sub>
						</div>
						<div className={styles.iconListItem}>
							<img alt='' src={headerImage.heart} />
							<sub>45</sub>
						</div>
						<div onClick={toggleBasket} className={styles.iconListItem}>
							<img alt='' src={headerImage.cart} />
							{basketItem.length ? <sub>{basketItem.length}</sub> : ''}
						</div>
					</div>
					<div className={styles.iconListWhite}>
						<img onClick={toggleBasket} alt='' src={headerImage.cartWhite} />
					</div>
				</div>
			</div>
			<BasketModal show={showBasket} setShow={toggleBasket} />
		</nav>
	)
}

export default HeaderSecondNav
