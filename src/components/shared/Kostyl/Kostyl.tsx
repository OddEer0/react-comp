import { FC } from 'react'

interface KostylProps {
	width: number
	count: number
}

const Kostyl: FC<KostylProps> = ({ width, count }) => {
	return (
		<>
			{[...new Array(count)].map((item, index) => (
				<div key={index} style={{ width: width }}></div>
			))}
		</>
	)
}

export default Kostyl
