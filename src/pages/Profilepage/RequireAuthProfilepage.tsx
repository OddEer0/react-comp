import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import Profilepage from './Profilepage'

interface RequireAuthProfilepageProps {}

const RequireAuthProfilepage: FC<RequireAuthProfilepageProps> = props => {
	const { role } = useAppSelector(state => state.user)

	if (role === 'anonym') return <Navigate to='/react-comp' />

	return <Profilepage />
}

export default RequireAuthProfilepage
