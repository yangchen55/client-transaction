import React, { useState } from 'react'
import { Table, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTransAction } from '../../redux/transaction/TransAction';



const TransTable = ({ trans }) => {
  const dispatch = useDispatch()
  const [idsToDelete, setIdsToDelete] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false)


  const handleOnSelect = (e) => {
    const { checked, value } = e.target;



    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
      setIsAllSelected(trans.length === idsToDelete.length + 1);
    } else {
      setIdsToDelete(idsToDelete.filter((_id) => _id !== value));
      setIsAllSelected(false)
    }



  }
  const handleOnSelectAll = (e) => {
    const checked = e.target.checked;
    if (checked) {
      // select all

      setIdsToDelete(trans.map(({ _id }) => _id));
      setIsAllSelected(true);

    } else {
      setIdsToDelete([])
      setIsAllSelected(false)


    }



  }



  const handleOnDelete = async () => {
    if (window.confirm(`are you sure you want to delete ${idsToDelete.length} item(s)`)) {
      dispatch(deleteTransAction(idsToDelete))
    }

  };



  const total = trans.reduce(
    (acc, { type, amount }) =>
      type === "income" ? acc + amount : acc - amount,
    0
  );
  return (


    <>
      <Table className='table' striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                onChange={handleOnSelectAll}
                // checked ={deselect.includes(true)}
                checked={isAllSelected}


              />{""} select all </th>
            <th>Date</th>
            <th>transaction Name </th>
            <th>income</th>
            <th>expesnses</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((item, i) => (
            <tr key={item._id}>
              <td>

                <Form.Check
                  type="checkbox"
                  onChange={handleOnSelect}
                  value={item._id}
                  checked={idsToDelete.includes(item._id)}

                ></Form.Check> </td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>{item.transaction}</td>
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
      {/* ternary operator doesnot show zero if condition false  */}
      {
        idsToDelete.length ? <Button variant='danger' onClick={handleOnDelete}>Delete {idsToDelete.length} item(s)</Button> : null
      }
    </>



  );
};

export default TransTable