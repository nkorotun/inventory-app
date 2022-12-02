import 'dotenv/config';
export const config = () => ({
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    //dropSchema: true,
    logging: false,
    entities: ['dist/**/*.entity.js'],
    migrationsTableName: 'migration',
    migrations: ['src/migration/*.ts'],
    cli: {
      migrationsDir: 'src/migration',
    },
  },
});
