const mysql = require('mysql2');

const connection = mysql.createConnection({  
	host: process.env.DB_HOST,  
	user: process.env.DB_USER,  
	password: process.env.DB_PASSWORD,  
	database: process.env.DB_NAME
});
export function queryPromise(queryString:string) {  
  return new Promise((resolve, reject) => {  
		connection.query(queryString, (error:any, results:any) => {  
			if (error) {  
				return reject(error);  
			}  
			resolve(results);  
		});  
	});  
}  