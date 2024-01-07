import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	login: async ({ request, fetch }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		const fetchData = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data)
		});
		const response = await fetchData.json();

		// console.log(fetchData);

		if (response.success) {
			throw redirect(301, '/home');
		} else {
			return {
				success: false,
				message: 'Error en el login'
			};
		}
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
