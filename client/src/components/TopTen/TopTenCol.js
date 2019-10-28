import React from 'react'
import {Table} from 'react-bootstrap'
const TopTenCol = props =>
    <Table>
        <thead>
        <tr>
            <th>Text searched</th>
            <th>How many times?</th>            
        </tr>
        </thead>
        <tbody>
        {props.data.map((item,ind)=>
            <tr key={ind}>
                <td>{item.textSearched}</td>
                <td>{item.numOfSearches}</td>
            </tr>
            )}
        </tbody>
    </Table>

export default TopTenCol