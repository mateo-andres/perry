import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
	const data = await request.json();

	try {
		const professionalInfo = await prisma.career_info.create({
			data: {
				user_id: parseInt(data.user_id),
				career_goals: data.career_goals,
				skills: data.skills
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ success: true, data: professionalInfo }));
	} catch (error) {
		prisma.$disconnect();
		console.error(error);
		return new Response(JSON.stringify({ success: false, error: error }));
	}
}

export async function PUT({ request }) {
	const data = await request.json();
	try {
		const careerInfo = await prisma.career_info.update({
			where: {
				id: parseInt(data.id)
			},
			data: {
				career_goals: data.career_goals,
				skills: data.skills
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
