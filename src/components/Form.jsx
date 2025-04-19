import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../features/employees/employeeSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.employee);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit ?
     dispatch(
      add({
        _id: crypto.randomUUID(),
        name,
        designation,
        department,
        salary,
      })
    ): 
    dispatch(update({
      _id: edit.employee._id,
      name,
      designation,
      department,
      salary,
    }))


    
    setName("");
    setDesignation("");
    setDepartment("");
    setSalary("");
  };

  useEffect(() => {
    setName(edit.employee.name), setDepartment(edit.employee.department);
    setDesignation(edit.employee.designation);
    setSalary(edit.employee.salary);
  }, [edit]);

  return (
    <div className=" border border-gray-200 shadow-lg rounded-md p-4 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Employee Name"
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 w-full rounded-sm my-2 p-2"
        />
        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="border border-gray-300 w-full rounded-sm my-2 p-2"
        >
          <option value="#">Select Designation</option>
          <option value=" Sales">Sales</option>
          <option value="Development">Devlopment</option>
          <option value="Deployment">Deployment</option>
          <option value="Designer">Design</option>
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border border-gray-300 w-full rounded-sm my-2 p-2"
        >
          <option value="#">Select Department</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Product Designer">Product Designer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Tester">Tester</option>
        </select>

        <input
          value={salary}
          type="Number"
          onChange={(e) => setSalary(e.target.value)}
          className="border border-gray-300 w-full rounded-sm my-2 p-2"
          placeholder="Enter Salary"
        />
        <button
          type="submit"
          className="bg-emerald-700  hover:bg-emerald-500 cursor-pointer w-full my-2 p-2 rounded-md font-semibold text-white"
        >
          Save Employee
        </button>
      </form>
    </div>
  );
};

export default Form;
