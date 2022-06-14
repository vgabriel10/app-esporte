import DataManager from './DataManager';
import db from './DataBaseInstance';
export default class DatabaseInit {

    seeder = [
        {
            nome: 'João',
            timeFavorito:'Ceará',
            
        },
        {
            nome: 'Maria',
            timeFavorito: 'Real Madrid',
            
        },
        {
            nome: 'Tiago',
        
        },
    ];

    constructor() {
        this.initDb();
    }

    initDb() {
        const sql = [
            DataManager.createTableUsuarios(),
            DataManager.createUsuarios(this.seeder[0]),
        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}