import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET({ params }) {
	const { id } = params;
	try {
		const academicInfo = await prisma.academic_info.findFirst({
			where: {
				user_id: parseInt(id)
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
