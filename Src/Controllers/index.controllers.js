const { Pool } = require ('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '12345',
    database:'APIS2',
    port : '5432'
})
const getUsers = async(req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
   
};

const getUserByid = async (req,res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE id = $1',[id]);
    res.json(response.rows);
};
const CreateUsers = async (req, res) => {
   const {name, email} = req.body;
   const response = await  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name , email]);
   console.log(response);
   res.json({
       message : ' Asked added SyccesFully',
       body : {
           user :{name, email}
       }
   })
};

const updateUsers = async (req, res) =>{
    const id  = req.params.id;
    const {name , email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email= $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('ask updated succesfully')

}

const deleteUsers = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json('ask ${id} deleted succesfully')

}


module.exports = {
     getUsers,
     getUserByid,
     CreateUsers,
     deleteUsers,
     updateUsers
     } 