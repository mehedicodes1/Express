import { Sequelize } from 'sequelize';
import { createUser } from '../model/user.js';

const sequelize = new Sequelize('postgresql://neondb_owner:npg_W7Aqh5fdmtFa@ep-morning-sun-a1bliyg6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require');

let UserModel = null;

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = await createUser(sequelize);
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    return UserModel;
}

export { connect, UserModel };
