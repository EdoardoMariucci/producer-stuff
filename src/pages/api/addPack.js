import prisma from '@/lib/prismaClient';

import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, body, imgSrc, prvSrc, price, userId } = req.body;

        if (!title || !body || !price || !prvSrc) {
            return res.status(400).json({ error: "Hai dimenticato uno dei campi" });
        }

        if (!imgSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid image source path. Must start with '/'." });
        }

        if (!prvSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid preview source path. Must start with '/'." });
        }

        const numericUserId = parseInt(userId, 10);
        if (isNaN(numericUserId)) { 
            return res.status(400).json({ error: "Devi selezionare un producer" });
        }

        

        try {
            if (imgSrc) {
                const imgPath = path.join(process.cwd(), 'public', imgSrc.slice(1)); 
                await fs.access(imgPath);
            }

            if (prvSrc) {
                const prvPath = path.join(process.cwd(), 'public', prvSrc.slice(1));
                await fs.access(prvPath);
            }
            
            const newPack = await prisma.pack.create({
                data: {
                    title: title,
                    body: body,
                    srcImg: imgSrc,
                    srcPrv: prvSrc,
                    price: price,
                    userId: numericUserId
                }
            });
            res.status(200).json(newPack);
        } catch (error) {
            if (error.code === 'ENOENT') {
                res.status(404).json({ error: "Immagine o preview non trovata" });
            } else {
                res.status(500).json({ error: "Failed to add user" });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}