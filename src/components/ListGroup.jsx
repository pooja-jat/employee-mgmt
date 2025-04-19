import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListGroup = () => {
  const { employees } = useSelector((state) => state.employee);

  return (
    <ul className="my-6">
      <em>
        {employees.map((employee) => (
          <ListItem key={employee._id} employee={employee} />
        ))}
      </em>
    </ul>
  );
};

export default ListGroup;
