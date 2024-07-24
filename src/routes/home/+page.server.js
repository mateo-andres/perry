export async function load({ parent, fetch }) {
	const { session } = await parent();

	const fetchTasks = async () => {
		const response = await fetch(`/api/todos/${session.id}`);
		const data = await response.json();
		return data.data;
	};

	const fetchAcedemicInfo = async () => {
		const response = await fetch(`/api/users/academic/${session.id}`);
		const data = await response.json();
		return data.data;
	};

	return { session, tasks: await fetchTasks(), academicInfo: await fetchAcedemicInfo() };
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

		if (response.success) {
			return {
				success: true,
				message: 'Se creo una nueva tarea'
			};
		} else {
			return {
				success: false,
				message: 'Ocurrio un problema, intenta de nuevo mas tarde'
			};
		}
	}
	// completeTask: async ({ request, fetch }) => {
	// 	const form = await request.formData();
	// 	const data = Object.fromEntries(form.entries());

	// 	console.log(data);
	// }
};
