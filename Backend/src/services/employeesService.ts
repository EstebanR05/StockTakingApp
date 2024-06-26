import { generalQuery } from "../conexion_bd";
import { IEmployees } from "../interface/employees.interface";

export const findAllEmployee = async (): Promise<IEmployees[]> => generalQuery<IEmployees[]>('SELECT * FROM employees');

export const findByIdEmployee = async (id: number): Promise<IEmployees> => (await generalQuery<IEmployees[]>('SELECT * FROM employees WHERE id = ?', [id]))[0];

export const createEmployees = async (employee: IEmployees): Promise<IEmployees> => {
    const columns = Object.keys(employee).join(', ');
    const placeholders = Object.values(employee).map(value => typeof value === 'string' ? `'${value}'` : value).join(', ');
    const query = `INSERT INTO employees (${columns}) VALUES (${placeholders})`;
    const result: any = await generalQuery<any>(query, []);

    return findByIdEmployee(result.insertId);
}


// Función para actualizar un empleado por ID
export const updateEmployees = async (id: number, employee: Partial<IEmployees>): Promise<IEmployees> => {
    const updates = Object.keys(employee).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(employee), id];

    await generalQuery<void>(`UPDATE employees SET ${updates} WHERE id = ?`, values);
    return findByIdEmployee(id);
}

export const deleteEmployees = async (id: number): Promise<void> => {
    await generalQuery<void>('DELETE FROM employees WHERE id = ?', [id]);
}