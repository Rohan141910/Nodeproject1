import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"

function Getdata()
{
const [Data1,setData]=useState([])
useEffect(()=>
{
    fetch("http://localhost:5000/").then((result)=>{
        result.json().then((data)=>
        {
            setData(data)
        })
    })
},[])
return(
    <Table>
        <tbody>
            <tr>
            <td>Rollno</td>
            <td>Name</td>
            <td>Marks</td>
            </tr>
            {
                Data1.map((item)=>
               <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
               </tr>
                )
            }
        </tbody>
    </Table>
)
}
export default Getdata