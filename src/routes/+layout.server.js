export const load = async ({ locals }) => {
	return {
		session: await locals.user
	};
};
