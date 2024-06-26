import { selectQuery, insertQuery, updateQuery, deleteQuery } from "../Core/generalQuerys";
import { IEmployees } from "../interface/employees.interface";

// Función para encontrar todos los empleados
export const findAllEmployee = async (): Promise<IEmployees[]> => {
    return await selectQuery<IEmployees[]>('Users');
};

// Función para encontrar un empleado por ID
export const findByIdEmployee = async (id: number): Promise<IEmployees> => {
    const result = await selectQuery<IEmployees[]>('Users', ['*'], 'id = ?', [id]);
    return result.length > 0 ? result[0] : {} as IEmployees;
};

// Función para crear un empleado
export const createEmployees = async (employee: IEmployees): Promise<IEmployees> => {
    const result = await insertQuery<any>('Users', employee);
    return findByIdEmployee(result.insertId);
};

// Función para actualizar un empleado por ID
export const updateEmployees = async (id: number, employee: Partial<IEmployees>): Promise<IEmployees | null> => {
    await updateQuery<void>('Users', employee, 'id = ?', [id]);
    return findByIdEmployee(id);
};

// Función para eliminar un empleado por ID
export const deleteEmployees = async (id: number): Promise<void> => {
    await deleteQuery<void>('Users', 'id = ?', [id]);
};
