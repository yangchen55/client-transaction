import React, {useState} from 'react'
import {Table, Form, Button} from 'react-bootstrap';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

const TransTable = ({ trans }) => {
  const [idsToDelete, setIdsToDelete] = useState([]);


  const handleOnSelect = (e) => {
    const {checked, value} = e.target;
    console.log(checked)
    // if(!checked){
    //   const {type} = trans.filter((item)  => 
    //     item._id === value)[0];
    //     setDeselectAll(false)
      
    // }
  
  if (checked) {
    setIdsToDelete([...idsToDelete, value]);
  } else {
    const tempArg = idsToDelete.filter((item) => item !== value);
    setIdsToDelete(tempArg);

  }
  console.log(idsToDelete);
}
const handleOnSelectAll =(e)  => {
  const {checked} = e.target;
  if(checked){
    // select all
    const argToGetIds = trans.filter((item)  => {
      return item.type === 'expenses' || item.type === 'income' ;
      
    });
   
   
    const ids = trans.map((item  =>item._id ))
    setIdsToDelete(ids);
    
    console.log(idsToDelete);


}else{
  setIdsToDelete([])

}


}

const handleOnDelete = () => {
  // if(!window.confirm(`are you sure you want to delete ${idsToDelete.length}`))

}

  

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
  checked={trans.length === idsToDelete.length}


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
checked ={idsToDelete.includes(item._id)}

></Form.Check>
                </td>
            <td>{ new Date(item.createdAt).toLocaleString()}</td>
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
      idsToDelete.length?<Button variant='danger' onClick={handleOnDelete}>Delete {idsToDelete.length} item(s)</Button>:null
    }
    </>
 

   
  );
};

export default TransTable