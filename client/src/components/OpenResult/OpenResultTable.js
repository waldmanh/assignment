import React from 'react'
import {Table} from 'react-bootstrap'
const OpenResultTable = props =>
    {
        let keys = Object.keys(props.data)
        let data = keys.map((key,i)=>{
                            return(<tr key={i}>
                                <th>{key}</th>
                                <td>{props.data[key]}</td>
                            </tr>)
        })        
        return(
            <Table>
                <tbody>
                    {data}
                </tbody>
            </Table>
        )
    }
export default OpenResultTable