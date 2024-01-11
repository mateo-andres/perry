import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST({ request }) {
	const data = await request.json();
	try {
		const academicInfo = await prisma.academic_info.create({
			data: {
				user_id: parseInt(data.user_id),
				semester: parseInt(data.semester),
				courses: data.courses
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ success: true, data: academicInfo }));
	} catch (error) {
		prisma.$disconnect();
		console.error(error);
		return new Response(JSON.stringify({ success: false, error: error }));
	}
}

export async function PUT({ request }) {
	const data = await request.json();
	try {
		const academicInfo = await prisma.academic_info.update({
			where: {
				id: parseInt(data.id)
			},
			data: {
				semester: parseInt(data.semester),
				courses: data.courses
			}
		});

		prisma.$disconnect();
		return new Response(JSON.stringify({ success: true, data: academicInfo }));
	} catch (error) {
		prisma.$disconnect();
		console.error(error);
		return new Response(JSON.stringify({ success: false, error: error }));
	}
}
