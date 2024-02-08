export async function GET() {
	// console.log('GET /authentication/logout');
	const tokenCookie = `userToken=user; Expires=${new Date(0)}; Path=/; Secure;`;
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/',
			'Set-Cookie': `${tokenCookie}`
		}
	});
}
