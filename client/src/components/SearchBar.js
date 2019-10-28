import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import TextSearch from './TextSearch/TextSearch'
import TopTen from './TopTen/TopTen'
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBar = () =>
<div className='search-bar'>
    <Grid>
        <Row className="show-grid">
            <Col xs={6} >
                <TextSearch />
            </Col>
            <Col xs={6} >
                <TopTen />    
            </Col>
        </Row>
    </Grid>
</div>
export default SearchBar