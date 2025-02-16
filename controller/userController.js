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
