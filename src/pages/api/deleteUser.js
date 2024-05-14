import prisma from '@/lib/prismaClient';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { id } = req.body;
        try {
            await prisma.pack.deleteMany({
                where: { userId: parseInt(id) },
            });

            await prisma.user.delete({
                where: { id: parseInt(id) },
            });
            res.writeHead(302, { Location: '/admin' });
            res.end();
        } catch (error) {
            res.status(500).json({ error: "Failed to delete user" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}