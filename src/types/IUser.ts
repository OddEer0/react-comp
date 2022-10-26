export type RoleType = 'anonym' | 'user' | 'admin' | 'employee'

export interface IUser {
	id: number | null
	email: string | null
	password: string | null
	name: string | null
	role: RoleType
	img: string | null
}
