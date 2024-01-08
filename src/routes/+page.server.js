import { redirect } from '@sveltejs/kit';

export async function load() {
	return {};
}

export const actions = {
	login: async ({ request, fetch, cookies }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		const fetchData = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data)
		});

		const response = await fetchData.json();

		if (!response.success) {
			return {
				success: false,
				message: response.data
			};
		}

		const TWO_HOURS_IN_SECONDS = '7200';
		cookies.set('userToken', response.data, {
			path: '/',
			maxAge: TWO_HOURS_IN_SECONDS,
			secure: true
		});
		throw redirect(301, '/home');
	},
	userCreation: async ({ request, fetch }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		const fetchData = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(data)
		});

		const response = await fetchData.json();

		if (!response.success) {
			return {
				success: false,
				message: 'Error en la creación del usuario'
			};
		}

		return {
			success: true,
			message: 'Usuario creado correctamente'
		};
	}
};
