export async function load({ parent, fetch }) {
	const { session } = await parent();

	const fetchAcedemicInfo = async () => {
		const response = await fetch(`/api/users/academic/${session.id}`);
		const data = await response.json();
		return data.data;
	};

	return {
		academicInfo: await fetchAcedemicInfo()
	};
}
