import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET({ params }) {
	const { idUser } = params;
	try {
		const tasks = await prisma.todos.findMany({
			where: {
				user_id: parseInt(idUser)
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ data: tasks, susccess: true }));
	} catch (error) {
		console.error(error);
		prisma.$disconnect();
		return new Response(JSON.stringify({ error, susccess: false }));
	}
}
