export async function load({ parent, fetch }) {
	const { session } = await parent();

	const fetchTasks = async () => {
		const response = await fetch(`/api/todos/${session.id}`);
		const data = await response.json();
		return data.data;
	};

	return { session, tasks: await fetchTasks() };
}

export const actions = {
	addTask: async ({ request, fetch }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		const fetchTask = await fetch('/api/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const response = await fetchTask.json();
		console.log(response);
	}
};
