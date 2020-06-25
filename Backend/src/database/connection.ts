import knex from 'knex';
import path from 'path'; //library é uma biblioteca do node.js que possibilita padronizar o ''path'' do filename de acordo com o pc da pessoa. Se for windows, por exemplo, irá aparecer src\index.


const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), // __dirname retorna o caminho do arquivo diretório que está executando ele. E o ''database.pg'' é o nome do filename.
    },
    useNullAsDefault: true,
});

export default connection;

//Migrations = Histórico do Banco de Dados
//