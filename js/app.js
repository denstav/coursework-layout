import { createConnection } from 'mysql';

const conn = createConnection({
    host: "itgid.mysql.tools",
    user: 'itgid_nodetest',
    database: 'delfin_group',
    password:''

});

conn.connect(err => {
    if(err){
        console.log('NO')
        return err;   
    }
    else{
        console.log('OK')
    }
})
