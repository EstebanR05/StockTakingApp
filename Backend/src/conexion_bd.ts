import mysql from 'mysql2';

export const conexion = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'stocktaking'
}).promise();


export const findById = async (table: string, id: number) => {
    const [rows]: any = await conexion.query("SELECT * FROM ? WHERE id =?", [table, id]);
    return rows[0];
}

export const findAll = async (table: string) => {
    const [rows]: any = await conexion.query("SELECT * FROM ?", [table]);
    return rows;
}

export const create = async (table: string, data: any) => {
    const [resp]: any = await conexion.query("INSERT INTO ? SET ?", [table, data]);
    return resp;
}

export const update = async (table: string, id: number, data: any) => {
    const [resp]: any = await conexion.query("UPDATE ? SET ? WHERE id = ?", [table, data, id]);
    return resp;
}

export const remove = async (table: string, id: number) => {
    const [resp]: any = await conexion.query("DELETE FROM ? WHERE id = ?", [table, id]);
    return resp;
}