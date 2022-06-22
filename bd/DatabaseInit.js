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
            timeFavorito: 'Atletico Mineiro',
        
        },
    ];

    constructor() {
        this.initDb();
    }

    initDb() {
        const sql = [
            DataManager.createTableUsuarios(),
            DataManager.createUsuarios(this.seeder[2]),
        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}