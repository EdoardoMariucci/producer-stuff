import prisma from '@/lib/prismaClient';

import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, body, imgSrc, prvSrc, price } = req.body;

        if (!imgSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid image source path. Must start with '/'." });
        }

        if (!prvSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid preview source path. Must start with '/'." });
        }

        const imgPath = path.join(process.cwd(), 'product', imgSrc.slice(1)); 
        const prvPath = path.join(process.cwd(), 'preview', prvSrc.slice(1));

        try {
            await fs.access(imgPath);
            await fs.access(prvPath);

            const newPack = await prisma.pack.create({
                data: {
                    title: title,
                    body: body,
                    srcImg: imgSrc,
                    srcPrv: prvSrc,
                    price: price
                }
            });
            res.status(200).json(newPack);
        } catch (error) {
            if (error.code === 'ENOENT') {
                res.status(404).json({ error: "Image or preview not found in public directory" });
            } else {
                res.status(500).json({ error: "Failed to add pack" });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}