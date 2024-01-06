import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	login: async () => {
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

		console.log(response);
	}
};
