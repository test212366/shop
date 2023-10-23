import { $host } from "."

export const registration = async (email, password) => {
	const responce = await $host.post('api/auth/registration', { email, password, role: 'ADMIN' })
	return responce
}