import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { headerImage } from '../../../assets/img'
import { useAppSelector } from '../../../hooks/redux'
import { useToggle } from '../../../hooks/useToggle'
import BasketModal from '../../collection/modals/BasketModal/BasketModal'
import SearchModal from '../../collection/modals/SearchModal/SearchModal'
import GreenButton from '../../ui/buttons/GreenButton/GreenButton'
import styles from './Header.module.scss'

interface HeaderSecondNavProps {}

const HeaderSecondNav: FC<HeaderSecondNavProps> = props => {
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)
	const { state: showBasket, toggleHandler: toggleBasket } = useToggle(
		false,
		400,
		() => document.body.classList.add('no-scroll-1'),
		() => document.body.classList.remove('no-scroll-1')
	)

	return (
		<nav className={styles.navbarTwo}>
			<div className='container'>
				<div className={styles.navbarTwoContent}>
					<Link to='/react-comp'>
						<img className={styles.logo} src={headerImage.Logo} alt='' />
					</Link>
					<Link to='/react-comp/catalog'>
						<GreenButton title='Каталог товаров' src={headerImage.catalog} />
					</Link>
					<SearchModal />
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
						<Link to='favorite' className={styles.iconListItem}>
							<img alt='' src={headerImage.heart} />
							{favoriteItems.length ? <sub>{favoriteItems.length}</sub> : ''}
						</Link>
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
