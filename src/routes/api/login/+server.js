import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
	const data = await request.json();

	try {
		const usuario = await prisma.users.findFirst({
			where: {
				email: data.email
			}
		});

		prisma.$disconnect();

		if (usuario.password === data.password) {
			return new Response(JSON.stringify({ success: true, data: usuario }));
		} else {
			return new Response(JSON.stringify({ success: false, data: 'user not found' }));
		}
	} catch (error) {
		prisma.$disconnect();
		console.log(error);
		return new Response(JSON.stringify({ success: false, data: error }));
	}

	return new Response();
}
