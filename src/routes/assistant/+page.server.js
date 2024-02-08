// export async function load() {
// 	return {};
// }

export const actions = {
	sendConversation: async ({ request }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		console.log(data);
	}
};
