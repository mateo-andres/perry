import { firmarToken } from '$lib/jwt/jwt.js';
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
			const jwtUser = firmarToken({ name: usuario.name, email: usuario.email, id: usuario.id });
			return new Response(JSON.stringify({ success: true, data: jwtUser }));
		} else {
			return new Response(
				JSON.stringify({ success: false, data: 'Correo o contraseña incorectos' })
			);
		}
	} catch (error) {
		prisma.$disconnect();
		console.log(error);
		return new Response(JSON.stringify({ success: false, data: error }));
	}
}
