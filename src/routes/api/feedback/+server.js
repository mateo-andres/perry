import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
	try {
		const data = await request.json();

		data.user_id = parseInt(data.user_id);
		data.rate = parseInt(data.rate);

		await prisma.feedbak.create({
			data
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ success: true }));
	} catch (error) {
		console.error(error);
		prisma.$disconnect();
		return new Response(JSON.stringify({ success: false }));
	}
}
