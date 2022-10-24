import React, { FC } from 'react'
import Slider from 'react-slick'
import { SliderImageItems } from '../../mock/SliderImage'
import 'slick-carousel/slick/slick.css'
import styles from './SliderImage.module.scss'

interface SliderImageProps {}

const SliderImage: FC<SliderImageProps> = props => {
	return (
		<div>
			<Slider
				autoplay={true}
				autoplaySpeed={10000}
				dots={true}
				arrows={false}
				className={styles.slider}
			>
				{SliderImageItems.map(image => (
					<img key={image.id} src={image.imgUrl} alt='' />
				))}
			</Slider>
		</div>
	)
}

export default SliderImage
