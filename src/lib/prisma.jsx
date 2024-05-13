import prisma from './prismaClient'; 

export const getItems = async () => {
    const items = await prisma.pack.findMany();
    // Converti date da Date a stringa nel formato desiderato
    items.forEach(item => {
        item.date = new Date(item.date).toLocaleDateString("it-IT", {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
        });
    });
    return items;
}
  
export const getItemBySlug = async (slug) => {
    const item = await prisma.pack.findUnique({
      where: {
        id: parseInt(slug)
      }
    });
  
    // Controlla se l'item è stato trovato e se ha un campo data che necessita di conversione
    if (item && item.date) {
      item.date = new Date(item.date).toLocaleDateString("it-IT", {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  
    return item;
};

export const getUser = async (userName) => {
  const users = await prisma.user.findUnique({
      where:{
          id: userName
      } 
  });
  return users;
}

export const getUserAll = async () => {
  const users = await prisma.user.findMany();
  return users;
}
  