import React, { FC } from 'react'
import { BsCart3, BsHeart } from 'react-icons/bs'
import { RiScales3Line } from 'react-icons/ri'
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
	const { state: showSearchBlock, toggleHandler: setShowSearchBlock } =
		useToggle(
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
					<SearchModal show={showSearchBlock} setShow={setShowSearchBlock} />
					<img
						onClick={setShowSearchBlock}
						className={styles.searchIcon}
						src={headerImage.searchMobile}
						alt=''
					/>
					<div className={styles.contact}>050 065 87 96</div>
					<div className={styles.iconList}>
						<div className={styles.iconListItem}>
							<RiScales3Line className={styles.icon} />
							<sub>45</sub>
						</div>
						<Link to='favorite' className={styles.iconListItem}>
							<BsHeart className={styles.icon} />
							{favoriteItems.length ? <sub>{favoriteItems.length}</sub> : ''}
						</Link>
						<div onClick={toggleBasket} className={styles.iconListItem}>
							<BsCart3 className={styles.icon} />
							{basketItem.length ? <sub>{basketItem.length}</sub> : ''}
						</div>
					</div>
					<div className={styles.iconListWhite}>
						<BsCart3 onClick={toggleBasket} className={styles.icon} />
					</div>
				</div>
			</div>
			<BasketModal show={showBasket} setShow={toggleBasket} />
		</nav>
	)
}

export default HeaderSecondNav
