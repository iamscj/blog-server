import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    user: 'admin',
    host: 'dpg-cjh4e9c1ja0c73aeek00-a.oregon-postgres.render.com',
    database: 'blog_0tvx',
    password: 'iqhokBNwnbSCBgJMikauC5kTFLjgBS6x',
    port: '5432',
    ssl: {
        rejectUnauthorized: false,
    },
});