import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
	const data = await request.json();
	try {
		const validation = await prisma.users.findFirst({
			where: {
				email: data.email
			}
		});

		if (validation) {
			return new Response(JSON.stringify({ success: false, data: 'user already exists' }));
		}

		data.age = parseInt(data.age);
		const user = await prisma.users.create({
			data: data
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ success: true, data: user }));
	} catch (error) {
		prisma.$disconnect();
		console.log(error);
		return new Response(JSON.stringify({ success: false, data: error }));
	}
}
