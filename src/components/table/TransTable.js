import React from 'react'
import Table from 'react-bootstrap/Table';

const TransTable = ({ trans }) => {
  const total = trans.reduce(
    (acc, { type, amount }) =>
      type === "income" ? acc + amount : acc - amount,
    0
  );
  return (
    
    

    <Table className='table' striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>transaction Name </th>
          <th>income</th>
          <th>expesnses</th>
        </tr>
      </thead>
      <tbody>
      {trans.map((item, i) => (
          <tr key={item._id}>
            <td>{item.createdAt}</td>

            <td>{item.name}</td>
            {item.type === "income" ? (
              <>
                <td>$ {item.amount}</td>
                <td></td>
              </>
            ) : (
              <>
                <td></td>
                <td className="text-danger">-$ {item.amount}</td>
              </>
            )}
          </tr>
        ))}

        <tr className="fw-bolder">
          <td colSpan={3}>Total balance</td>
          <td>${total}</td>
        </tr>
      </tbody>
    </Table>
 

   
  );
};

export default TransTable