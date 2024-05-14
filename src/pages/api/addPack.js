import prisma from '@/lib/prismaClient';

import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, body, imgSrc, prvSrc, price, userId } = req.body;

        if (!title || !body || !price || !prvSrc) {
            return res.status(400).json({ error: "Hai dimenticato uno dei campi" });
        }

        if (!imgSrc || imgSrc === '/product/' || !imgSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid image source path." });
        }

        if (!prvSrc || prvSrc === '/preview/' || !prvSrc.startsWith('/')) {
            return res.status(400).json({ error: "Invalid preview source path." });
        }

        const numericUserId = parseInt(userId, 10);
        if (isNaN(numericUserId)) { 
            return res.status(400).json({ error: "Devi selezionare un producer" });
        }

        try {
            
            const imgPath = path.join(process.cwd(), 'public', imgSrc.slice(1)); 
            await fs.access(imgPath);
        
            const prvPath = path.join(process.cwd(), 'public', prvSrc.slice(1));
            await fs.access(prvPath);           
            
            await prisma.pack.create({
                data: {
                    title: title,
                    body: body,
                    srcImg: imgSrc,
                    srcPrv: prvSrc,
                    price: price,
                    userId: numericUserId
                }
            });
            res.writeHead(302, { Location: '/admin' });
            res.end();
            
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