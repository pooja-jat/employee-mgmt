import React from "react";
import { useDispatch } from "react-redux";
import { remove, edit } from "../features/employees/employeeSlice";

const ListItem = ({ employee }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleEdit = (employee) => {
    dispatch(edit(employee));
  };

  return (
    <li className=" relative my-1 p-2 rounded-md border border-gray-300">
      <h1 className="text-lg font-semibold">{employee.name}</h1>
      <p className="text-sm text-gray-600 my-1">
        Departmeent : {employee.department}
      </p>
      <p className="text-sm text-gray-600 my-1">
        Designation : {employee.designation}
      </p>

      <p className="text-sm text-gray-600 my-1">Salary : ${employee.salary}</p>
      <div className="absolute bottom-2 right-2">
        <button
          onClick={() => handleEdit(employee)}
          className="bg-yellow-500 rounded-lg  mx-1 text-sm p-1.5 text-white font-bold "
        >
          Edit
        </button>
        <button
          onClick={() => handleRemove(employee._id)}
          className="bg-red-500 rounded-lg  mx-1 text-sm p-1.5 text-white font-bold "
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
