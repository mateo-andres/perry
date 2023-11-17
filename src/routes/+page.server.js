import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

export const actions = {
    login: async () =>  {
        throw redirect(301, '/home');
    }
}