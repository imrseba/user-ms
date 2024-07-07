import { createConnection } from 'typeorm';
import { UserEntity } from './src/database/entities/user.entity';

async function populateDatabase() {
  const connection = await createConnection({
    type: 'sqlite',
    database: 'sqlite://db.sqlite3',  // Ruta correcta a tu base de datos
    entities: [UserEntity],
    synchronize: true,
  });

  const users = [
    { name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { name: 'Bob', email: 'bob@example.com', password: 'password123' },
    { name: 'Charlie', email: 'charlie@example.com', password: 'password123' },
  ];

  for (const userData of users) {
    const user = new UserEntity();
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
