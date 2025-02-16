import { UserModel } from '../server/db.js';

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
