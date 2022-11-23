import React, { FC } from 'react'
import { useFetching } from '../../../../hooks/useFetching'
import { apiService } from '../../../../services/api/api.service'
import { IDevice } from '../../../../types/IDevice'
import styles from './HomeSecondSection.module.scss'
import DeviceCards from '../../../../components/collection/items/DeviceCards/DeviceCards'
import Container from '../../../../components/layout/Container/Container'
import EmptyCards from '../../../../components/shared/Kostyl/Kostyl'

interface HomeSecondSectionProps {}

const HomeSecondSection: FC<HomeSecondSectionProps> = props => {
	const [devices, error, isLoading] = useFetching<IDevice[]>(
		apiService.getNewDevice(10)
	)

	return (
		<section>
			<Container>
				<h1 className={styles.title}>Новинки</h1>
				<div className={styles.content}>
					<DeviceCards
						devices={devices ? devices : []}
						error={error}
						isLoading={isLoading}
					/>
					<EmptyCards count={2} width={274} />
				</div>
			</Container>
		</section>
	)
}

export default HomeSecondSection
