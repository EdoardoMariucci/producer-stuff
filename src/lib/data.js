const users = [
    {id:1, name: '3ddy'},
    {id:2, name: 'Metro Boomin'},
    {id:3, name: 'BNYX'},
];

const packs = [
    {id:1, title: 'TRAPSTAR VOL. 1', body: 'Na roba trap', userId: 1, src: '/product/trapstar1.webp', date: '17.01.2003', price:'74.95$'},
    {id:2, title: 'TRAPSTAR VOL. 2', body: 'Na roba trap (di nuovo)', userId: 1, src: '/product/trapstar2.webp', date: '17.01.2023', price:'89.99$'},
    {id:3, title: 'SOUL TAPES VOL. 2', body: 'Robbetta sofisticata', userId: 2, src: '/product/soulTapes.webp', date: '05.10.2024', price:'29.94$'},
    {id:4, title: 'DARKNIGHT', body: 'Per quando te parte la nave', userId: 3, src: '/product/darknights.webp', date: '09.03.2020', price:'48.50$'},
];

export const getItems = async () => {
    return packs;

};

export const getItem = async (id) => {
    return packs.find((pack) => pack.id === parseInt(id));
};

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
}