import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler<{ body: { movementId: number, templeId: number, user: string, town: string, type: string } }>(async (event) => {
    setResponseHeaders(event, {
        "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Headers": '*',
        "Access-Control-Expose-Headers": '*'
    });
    
    if (event.method === 'OPTIONS') {
        event.node.res.statusCode = 204;
        event.node.res.statusMessage = "No Content.";
        return 'OK';
    }

    const body = await readBody(event)

    if (!body.movementId || !body.templeId || !body.user || !body.town || !body.type) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing required parameters',
        });
    }

    try {
        const oldMovement = await prisma.templeMovement.findFirst({
            where: {
                movementId: body.movementId,
                templeId: body.templeId,
            },
        });

        if (oldMovement) {
            return { 
                success: false,
                data: 'Movement already exists' 
            };
        }

        const movement = await prisma.templeMovement.create({
            data: {
                movementId: body.movementId,
                templeId: body.templeId,
                user: body.user,
                town: body.town,
                type: body.type,
            },
        });

        return {
            success: true,
            data: movement
        };

    } catch (error) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Failed to create movement',
        });
    }
});