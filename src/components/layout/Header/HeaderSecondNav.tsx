import React, { FC } from 'react'
import { BsCart3, BsHeart } from 'react-icons/bs'
import { RiScales3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { headerIcons } from '../../../assets/icon/header'
import { FiSearch } from 'react-icons/fi'
import { useAppSelector } from '../../../hooks/redux'
import { useToggle } from '../../../hooks/useToggle'
import BasketModal from '../../collection/modals/BasketModal/BasketModal'
import SearchModal from '../../collection/modals/SearchModal/SearchModal'
import GreenButton from '../../ui/buttons/GreenButton/GreenButton'
import Container from '../Container/Container'
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

	const Logo = headerIcons.Logo
	const Catalog = headerIcons.catalog

	return (
		<nav className={styles.navbarTwo}>
			<Container>
				<div className={styles.navbarTwoContent}>
					<Link to='/react-comp'>
						<Logo className={styles.logo} />
					</Link>
					<Link to='/react-comp/catalog'>
						<GreenButton title='Каталог товаров' icon={Catalog} />
					</Link>
					<SearchModal show={showSearchBlock} setShow={setShowSearchBlock} />
					<FiSearch
						onClick={setShowSearchBlock}
						className={styles.searchIcon}
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
			</Container>
			<BasketModal show={showBasket} setShow={toggleBasket} />
		</nav>
	)
}

export default HeaderSecondNav
