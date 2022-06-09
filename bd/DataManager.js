import db from './DataBaseInstance'

const sqlCreateUsuarios = 'CREATE TABLE IF NOT EXISTS USUARIOS (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeUsuario VARCHAR(200))';
const sqlCreateEsportes = 'CREATE TABLE IF NOT EXISTS ESPORTES (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeUsuario VARCHAR(200))';
//Create
const sqlInsertUsuarios = 'INSERT INTO USUARIOS (nomeUsuario) VALUES (?)';
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

    async crateTableUSUARIOS() {
        (await db).transaction(tx => {
            tx.executeSql(sqlCreateUsuarios);
        });
    }

    async openDatabase() {
        return await db;
    }

    async createUsuarios(USUARIOS) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsertUsuarios,[USUARIOS.nome]);
        });
    }
}

