import express from 'express';
import {
  addEmployee,
  getAllEmployees,
  getEmployeeById,
  removeEmployee,
  updateEmployeeDataById,
} from '../employee';
const router = express.Router();
const routerMiddleware = (req, res, next) => {
  console.log('Employee Routes');
  next();
};
router.use(routerMiddleware);

// read
router.get('/employees', async (req, res, next) => {
  const employees = await getAllEmployees();
  res.send({ data: employees });
});

// read by an id
router /
  get('/employee/:id', async (req, res) => {
    const id = req.params.id;
    const employee = getEmployeeById(id);
    if (employee) {
      return res.send({ data: employee });
    } else {
      return res
        .send(404)
        .send({ message: 'Employee with given id does not exist' });
    }
  });

//   create
router.post('/employee', async (req, res) => {
  const employeeData = req.body;
  const employee = await addEmployee(employeeData);
  return res.send({ data: employee });
});
//
router.patch('/employee/:id', async (req, res) => {
  const id = req.params.id;
  const employeeData = req.body;
  const employee = await updateEmployeeDataById(Number(id), employeeData);
  return res.send({ data: employee });
});
// delete

router.delete('/employee/:id', async (req, res) => {
  const id = req.params.id;
  const employee = await removeEmployee(Number(id));
  if (employee) {
    return res.send({ data: employee });
  } else {
    return res
      .status(404)
      .send({ message: 'Employee with given id does not exist' });
  }
});
// module.exports={router}
export default router;
