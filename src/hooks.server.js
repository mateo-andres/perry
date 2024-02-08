import { redirect } from '@sveltejs/kit';
import { verificarToken } from '$lib/jwt/jwt';

export const handle = async ({ event, resolve }) => {
	const protectedRoutes = ['home', 'assistant', 'user'];

	const userJWT = event.cookies.get('userToken');

	if (protectedRoutes.includes(event.url.pathname.split('/')[1])) {
		if (userJWT) {
			try {
				const payload = verificarToken(userJWT);

				event.locals.user = {
					name: payload.name,
					email: payload.email,
					id: payload.id
				};

				return await resolve(event);
			} catch (error) {
				throw redirect(303, '/authentication/logout');
			}
		} else {
			throw redirect(303, '/authentication/logout');
		}
	}

	if (event.url.pathname.startsWith('/api')) {
		try {
			// const token = event.request.headers.get('api-token');
			// verificarToken(token);
		} catch (e) {
			return new Response(JSON.stringify({ message: `401 Unauthorized (•ˋ _ ˊ•)` }), {
				status: 401
			});
		}
	}

	return resolve(event);
};
