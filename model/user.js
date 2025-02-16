import { DataTypes } from 'sequelize';

export async function createUser(sequelize) {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isLowercase: true
            }
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true // Mark id as the primary key
        }
    });

    return User;
}
