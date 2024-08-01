import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function PUT({ request }) {
	const data = await request.json();
	try {
		const careerInfo = await prisma.career_info.update({
			where: {
				id: parseInt(data.id)
			},
			data: {
				skills: {
					push: data.newSkill
				}
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ success: true, data: careerInfo }));
	} catch (error) {
		prisma.$disconnect();
		console.error(error);
		return new Response(JSON.stringify({ success: false, error: error }));
	}
}
