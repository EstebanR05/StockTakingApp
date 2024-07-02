export interface IInventory {
    id: number,
    sparePart: string,
    value: string,
    amount: number,
    date: string,
    saleDate: string,
    idUser: number,
    brand?: string;
}