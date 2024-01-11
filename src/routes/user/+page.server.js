export async function load({ fetch, parent }) {
	const { session } = await parent();

	const fetchAcademic = async () => {
		const fetchData = await fetch(`/api/users/academic/${session.id}`);
		const response = await fetchData.json();

		return response.data;
	};

	return {
		academicInfo: await fetchAcademic()
	};
}

export const actions = {
	sendAcademicInfo: async ({ request, fetch }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		let courses = [];
		for (let key in data) {
			if (key.startsWith('course')) {
				courses.push(data[key]);
			}
		}
		data.courses = courses;

		let method = 'PUT';
		if (data.id === '') {
			method = 'POST';
		}
		const fetchAcademic = await fetch('/api/users/academic', {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const response = await fetchAcademic.json();
	}
};
