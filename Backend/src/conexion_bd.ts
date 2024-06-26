import mysql from 'mysql2';

export const conexion = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'stocktaking'
}).promise();

// Helper para ejecutar consultas
export const generalQuery = async <T>(query: string, params?: any[]): Promise<T> => {
    const [result] = await conexion.query(query, params);
    return result as T;
};
