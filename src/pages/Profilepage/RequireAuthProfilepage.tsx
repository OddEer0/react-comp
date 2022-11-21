import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import ProfilePage from './ProfilePage'

interface RequireAuthProfilePageProps {}

const RequireAuthProfilePage: FC<RequireAuthProfilePageProps> = props => {
	const { role } = useAppSelector(state => state.user)

	if (role === 'anonym') return <Navigate to='/react-comp' />

	return <ProfilePage />
}

export default RequireAuthProfilePage
