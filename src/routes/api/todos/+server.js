import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
	const { user_id, title } = await request.json();
	try {
		const newTask = await prisma.todos.create({
			data: {
				user_id: parseInt(user_id),
				title
			}
		});
		prisma.$disconnect();
		return new Response(JSON.stringify({ data: newTask, success: true }));
	} catch (error) {
		console.error(error);
		prisma.$disconnect();
		return new Response(JSON.stringify({ error, success: false }));
	}
}
