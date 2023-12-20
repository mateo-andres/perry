import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	login: async () => {
		throw redirect(301, '/home');
	},
	userCreation: async ({ request }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		console.log(data);
	}
};
