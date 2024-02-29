export async function load({ fetch, parent }) {
	const { session } = await parent();

	const fetchAcademic = async () => {
		const fetchData = await fetch(`/api/users/academic/${session.id}`);
		const response = await fetchData.json();

		return response.data;
	};
	const fetchCareer = async () => {
		const fetchData = await fetch(`/api/users/professional/${session.id}`);
		const response = await fetchData.json();

		return response.data;
	};

	return {
		academicInfo: await fetchAcademic(),
		careerInfo: await fetchCareer()
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
	},
	sendProfessionalInfo: async ({ request, fetch }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		//get every item  from data that starts with "objective"
		let career_goals = [];
		for (let key in data) {
			if (key.startsWith('objective')) {
				career_goals.push(data[key]);
			}
		}

		let skills = [];
		for (let key in data) {
			if (key.startsWith('skill')) {
				skills.push(data[key]);
			}
		}

		let method = 'PUT';
		if (data.id === '') {
			method = 'POST';
		}

		const fetchProfessional = await fetch('/api/users/professional', {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				career_goals: career_goals,
				skills: skills,
				user_id: data.user_id,
				id: data.id
			})
		});

		const response = await fetchProfessional.json();

		console.log(response);
	},
	sendFeecback: async ({ request, fetch }) => {
		const form = await request.formData();
		const data = Object.fromEntries(form.entries());

		delete data['rating-7'];

		const fetchFeedback = await fetch('/api/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const response = await fetchFeedback.json();

		if (response.success) {
			console.log('Feedback sent');
		} else {
			console.log('Feedback not sent');
		}
	}
};
