import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useGetEmployeesQuery, useGetEmployeebyIDQuery } from "./UserApi";

const EmployeesList = () => {
  const { data: employees, error, isLoading, isFetching } = useGetEmployeesQuery({
    refetchOnReconnect: true
  });
  const [selectedEmployeeID, setSelectedEmployeeID] = useState(null);
  const { data: selectedEmployee, error: selectedEmployeeError, isLoading: selectedEmployeeLoading } = useGetEmployeebyIDQuery(selectedEmployeeID);

  const handleEmployeeClick = (employeeID) => {
    setSelectedEmployeeID(employeeID);
  };

  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }

  if (error || selectedEmployeeError || !employees || employees.length === 0) {
    console.log("Error caught or no Employee");
    return <div>Error: An error occurred. Couldn't fetch Employees.</div>;
  }

  return (
    <div className="employeesList">
      <section className="employeescontainer">
        {employees.map((employee) => (
          <div key={employee.EmployeeID} onClick={() => handleEmployeeClick(employee.EmployeeID)}>
            {employee.name} {/* Assuming 'name' is a property of your employee object */}
          </div>
        ))}
      </section>
      {selectedEmployee && (
        <EmployeeModal
          isOpen={!!selectedEmployee}
          onClose={() => setSelectedEmployeeID(null)}
          employee={selectedEmployee}
        />
      )}
    </div>
  );
};

const EmployeeModal = ({ isOpen, onClose, employee }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Employee Details</h2>
          {employee && (
            <div>
              <p>Name: {employee.name}</p>
              <p>Email: {employee.email}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;









// import ClipLoader from "react-spinners/ClipLoader";
// import { useGetEmployeesQuery } from "./UserApi";


// const EmployeesList = () => {
//   const {
//     data: employees,
//     error,
//     isLoading,
//     isError,
//     isFetching,
//   } = useGetEmployeesQuery({ refetchOnReconnect: true });

//   console.log(
//     `Employees: ${employees}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
//   );

//   if (isLoading || isFetching) {
//     return <ClipLoader color="#000" loading={true} size={150} />;
//   }
//   if (error || isError || employees.length == 0) {
//     console.log("Error caught or no Empoyee");
//     return <div>Error: {"An error occurred. Couldn't fetch Enmployees. no employees"}</div>;
//   } else {
//     return (
//       <div className="employeesList">
//         <section className="employeescontainer">
//           {employees &&
//             [...employees]
//               .sort((a, b) => b.EmployeeID - a.EmployeeID)}
//         </section>
//       </div>
//     );
//   }
// };
// export default EmployeesList;