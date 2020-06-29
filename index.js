const Sequelize = require('sequelize');
const connection = new Sequelize('testdb', 'postgres', 'Tejaswini@21', {
    dialect: 'postgres',
    port: 5432
});
const Student = connection.define('student', {
    name: Sequelize.STRING,
    dateofbirth: Sequelize.DATEONLY,
    branch: Sequelize.STRING
});
connection.sync();
/*Student.create({
    name: 'XYZ',
    dateofbirth: 1999 - 05 - 21,
    branch: 'CSE'
}).then(console.log("Inserted"));*/

Student.findAll().then((students) => console.log(students.length));
Student.findByPk(4).then((student) => console.log(student));