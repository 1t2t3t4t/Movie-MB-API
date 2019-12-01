import { Pool, createPool, createConnection } from "mysql"
import e = require("express")

class DB {

    pool: Pool

    constructor() {
        this.pool = createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER ?? "root",
            password: process.env.DB_PASSWORD ?? "password",
            database: process.env.NAME ?? "test",
            port: Number(process.env.DB_PORT) | 3306,
        })
    }
}

export default new DB()