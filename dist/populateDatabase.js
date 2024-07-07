"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./src/database/entities/user.entity");
async function populateDatabase() {
    const connection = await (0, typeorm_1.createConnection)({
        type: 'sqlite',
        database: 'sqlite://db.sqlite3',
        entities: [user_entity_1.UserEntity],
        synchronize: true,
    });
    const users = [
        { name: 'Alice', email: 'alice@example.com', password: 'password123' },
        { name: 'Bob', email: 'bob@example.com', password: 'password123' },
        { name: 'Charlie', email: 'charlie@example.com', password: 'password123' },
    ];
    for (const userData of users) {
        const user = new user_entity_1.UserEntity();
        user.name = userData.name;
        user.email = userData.email;
        user.password = userData.password;
        await connection.manager.save(user);
    }
    console.log('Database populated with initial users');
    await connection.close();
}
populateDatabase().catch(err => {
    console.error('Error populating database:', err);
});
//# sourceMappingURL=populateDatabase.js.map