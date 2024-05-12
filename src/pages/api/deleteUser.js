import prisma from '@/lib/prismaClient';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { id } = req.body;
        try {
            const deletedUser = await prisma.user.delete({
                where: { id: parseInt(id) },
            });
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: "Failed to delete user" });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}