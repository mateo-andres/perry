import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET({ params }) {
	const { idUser } = params;
	try {
		const tasks = await prisma.todos.findMany({
			where: {
				user_id: parseInt(idUser),
				active: true
			},
			orderBy: {
				task_id: 'asc'
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

export async function PUT({ request }) {
	try {
		const data = await request.json();
		const modifiedTask = await prisma.todos.update({
			where: {
				user_id: parseInt(data.user_id),
				task_id: parseInt(data.task_id)
			},
			data: {
				status: data.status === 'pending' ? 'done' : 'pending'
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ data: modifiedTask, success: true }));
	} catch (error) {
		console.error(error);
		prisma.$disconnect();
		return new Response(JSON.stringify({ error: error, success: false }));
	}
}

export async function DELETE({ request }) {
	try {
		const data = await request.json();
		const modifiedTask = await prisma.todos.update({
			where: {
				user_id: parseInt(data.user_id),
				task_id: parseInt(data.task_id)
			},
			data: {
				active: false
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ data: modifiedTask, success: true }));
	} catch (error) {
		console.error(error);
		prisma.$disconnect();
		return new Response(JSON.stringify({ error: error, success: false }));
	}
}
