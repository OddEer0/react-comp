import React, { FC } from 'react'
import { socialIcons } from '../../../assets/icon/social'
import styles from './Social.module.scss'

interface SocialProps {}

const Social: FC<SocialProps> = props => {
	return (
		<div className={styles.social}>
			<h2>Следите за нами</h2>
			<div className={styles.socialIcons}>
				{socialIcons.map((icon, index) => (
					<img key={index} src={icon} alt='' />
				))}
			</div>
		</div>
	)
}

export default Social
