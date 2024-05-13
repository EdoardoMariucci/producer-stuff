import prisma from '@/lib/prismaClient';

import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, imgSrc } = req.body;

        if (!name) {
            return res.status(400).json({error: 'Devi inserire il nome'});
        }

        if (imgSrc && !imgSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid image source path. Must start with '/'." });
        }

        try {
            if (imgSrc) {
                const filePath = path.join(process.cwd(), 'public', imgSrc.slice(1)); // Rimuovi l'iniziale '/'
                await fs.access(filePath);
            }

            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    img: imgSrc
                }
            });
            res.status(200).json(newUser);
        } catch (error) {
            if (error.code === 'ENOENT') {
                res.status(404).json({ error: "Image not found in public directory" });
            } else {
                res.status(500).json({ error: "Failed to add user" });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}