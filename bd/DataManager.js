import db from './DataBaseInstance'

const sqlCreateUsuarios = 'CREATE TABLE IF NOT EXISTS USUARIOS (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeUsuario VARCHAR(200),timeFavorito VARCHAR(200))';
const sqlCreateEsportes = 'CREATE TABLE IF NOT EXISTS ESPORTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeUsuario VARCHAR(200))';
//Create
const sqlInsertUsuarios = 'INSERT INTO USUARIOS (nomeUsuario,timeFavorito) VALUES (?,?)';
const sqlInsertEsportes = 'INSERT INTO ESPORTES (categoria,timeFavorito) VALUES (?,?)';
//Read
const sqlSelectUsuarios = 'SELECT * FROM USUARIOS WHERE ID = ?';
const sqlSelectEsportes = 'SELECT * FROM ESPORTES WHERE ID = ?';
//Update
const sqlUpdateUsuarios = 'UPDATE USUARIOS SET nomeUsuario = ? WHERE id = ?';
const sqlUpdateEsportes = 'UPDATE ESPORTES SET nomeUsuario = ? WHERE id = ?';
//Delete
const sqlDeleteUsuarios = 'DELETE FROM USUARIOS WHERE id = ?';
const sqlDeleteEsportes = 'DELETE FROM ESPORTES WHERE id = ?';

export default class DataBaseInstance {

    static async createTableUsuarios() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreateUsuarios);
        });
    }

    static async openDatabase() {
        return await db;
    }

    static async createUsuarios(usuarios) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsertUsuarios,[usuarios.nome,usuarios.timeFavorito]);
        });
    }


    async getUser(id) {
        let user = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                user = rows._array[0];
            });
        });
        return user;
    }

    async deleteUser(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

    async updateUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [user.email, user.password]);
        });
    }
}


