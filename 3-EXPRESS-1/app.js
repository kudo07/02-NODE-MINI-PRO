// import { getAllEmployees } from './employee';
const {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployeeDataById,
  removeEmployee,
} = require('./employee');
const express = require('express');
const app = express();
app.use(express.json()); //to read req body as json
app.get('/', (req, res) => {
  res.send('hello this is from the home page');
});
//READ
app.get('/employee/all', async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.send({ data: employees });
  } catch (error) {
    res.status(500).send({ error: 'error' });
  }
});
// READ
app.get('/employee/:id', async (req, res) => {
  const id = req.params.id;
  const employee = await getEmployeeById(Number(id));
  if (employee) {
    return res.send({ data: employee });
  } else {
    return res.status(404).send({
      message: 'Employee with given if does not exist',
    });
  }
});
// CREATE
app.post('/employee', async (req, res) => {
  const employeeData = req.body;
  const employee = await addEmployee(employeeData);

  return res.send({ data: employee });
});

// update the particular id
app.patch('/employee/:id', async (req, res) => {
  const id = req.params.id;
  const employeeData = req.body;
  const employee = await updateEmployeeDataById(Number(id), employeeData);
  return res.send({
    data: employee,
  });
});
// delete the id
app.delete('/employee/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Deleting employee with ID:', id);
    const employee = await removeEmployee(id);
    if (employee === -1) {
      console.log('Employee not found.');
      return res.status(404).send({ error: 'Employee not found.' });
    }
    console.log('Employee deleted:', employee);
    return res.send({ data: employee });
  } catch (error) {
    console.error('Error deleting employee:', error);
    return res.status(500).send({ error: 'Internal server error.' });
  }
});

app.listen(3000, () => {
  console.log('server starts at 3000');
});
