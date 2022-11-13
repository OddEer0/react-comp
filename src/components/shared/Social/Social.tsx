import React, { FC } from 'react'
import { socialImage } from '../../../assets/img'
import styles from './Social.module.scss'

interface SocialProps {}

const Social: FC<SocialProps> = props => {
	return (
		<div className={styles.social}>
			<h2>Следите за нами</h2>
			<div className={styles.socialIcons}>
				{socialImage.map((icon, index) => (
					<img key={index} src={icon} alt='' />
				))}
			</div>
		</div>
	)
}

export default Social
