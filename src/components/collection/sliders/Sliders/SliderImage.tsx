import React, { FC } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { sliderImage } from '../../../../assets/img/slider'
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
				{sliderImage.map((image, index) => (
					<img key={index} src={image} alt='' />
				))}
			</Slider>
		</div>
	)
}

export default SliderImage
