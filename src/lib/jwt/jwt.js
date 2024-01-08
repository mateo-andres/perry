import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

/**
 *
 * @param {*} usernameSession
 * @param {*} roles
 * @returns JWT signed
 */
export function firmarToken(user) {
	const DOS_HORAS_EN_MILISEGUNDOS = 60 * 60 * 2 * 1000;

	const payload = {
		sub: 'sessionToken',
		name: user.name,
		email: user.email,
		id: user.id,
		exp: Date.now() + DOS_HORAS_EN_MILISEGUNDOS
	};

	return jwt.sign(payload, JWT_SECRET);
}

export function verificarToken(token) {
	const payload = jwt.verify(token, JWT_SECRET);

	if (Date.now() > payload.exp) {
		throw new Error('Token expirado');
	}
	return payload;
}
