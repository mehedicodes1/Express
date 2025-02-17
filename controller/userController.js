import { UserModel } from '../server/db.js';

/**
 * Retrieves all employee records from the database.
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - Sends a JSON response with either the employee data or an error message.
 * 
 * - If successful, responds with status 200 and the employee data.
 * - If no records are found, responds with status 404 and a "No data found" message.
 * - If an error occurs, responds with status 500 and an error message.
 */

export async function getAllEmp(req, res) {
    try {
        const data = await UserModel.findAll();
        if (data.length === 0) {
            return res.status(404).json({
                message: "No data found"
            });
        }

        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}

/**
 * Adds a new employee record to the database.
 * 
 * @param {object} req - The request object containing employee details in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - Sends a JSON response with the result of the operation.
 * 
 * - If the employee record is added successfully, responds with status 201 and a success message.
 * - If the employee record already exists, responds with status 400 and an error message.
 * - If an error occurs, responds with status 500 and an error message.
 */

export async function addEmp(req, res) {
    const { name, email, designation, id } = req.body;

    try {
        const data = await UserModel.findOne({ where: { id: id } });
        if (data == null) {
            await UserModel.create(req.body);
            return res.status(201).json({ message: 'Data added successfully' });
        } else {
            return res.status(400).json({ message: 'Data already exists' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error });
    }
}

/**
 * Updates an existing employee record in the database.
 * 
 * @param {object} req - The request object containing the employee ID in the URL path and the updated employee details in the body.
 * @param {object} res - The response object.
 * @returns {Promise<void>} - Sends a JSON response with the result of the operation.
 * 
 * - If the employee record is updated successfully, responds with status 200 and a success message.
 * - If an error occurs, responds with status 500 and an error message.
 */
export async function updateEmp(req, res) {
    const id = req.params.id;
    try {
        const data = await UserModel.update(req.body, { where: { id: id } });
        if (data[0] === 0) {
            return res.status(404).json({ message: 'Data not found' });
        }
        return res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error });
    }
}

export async function deleteEmp(req, res) {
    const id = req.params.id;
    try {

        const data = await UserModel.destroy({ where: { id: id } });
        if (data === 0) {
            return res.status(404).json({ message: 'Data not found' });
        }
        return res.status(200).json({ message: 'Data deleted successfully' });

    }catch (error) {
        return res.status(500).json({ message: 'An error occurred', error });
    }

} 