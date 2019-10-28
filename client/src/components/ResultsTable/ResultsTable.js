import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Table,Grid,Row,Col} from 'react-bootstrap'
import './ResultsTable.css'

class ResultsTable extends Component {    
    render() {        
        return(
        (this.props.results !== undefined) ? 
        <div className='results-table'>
             <Grid>
                <Row className="show-grid">
                    <Col xs={12} >
                        <div>
                        <h1>Results (Top 25):</h1> 
                        <Table striped bordered condensed hover>
                            <thead >
                                <tr>
                                    <th>#</th>
                                    <th>Track kind</th>
                                    <th>Track name</th>                                    
                                    <th>Collection name</th>
                                    <th>Artist name</th>
                                    <th>Preview Link</th>
                                </tr>
                            </thead>
                            {this.props.results.map(row => (
                            <tbody key={row.trackId}>
                                <tr>
                                    <td>{row.trackId}</td>
                                    <td>{row.kind}</td>
                                    <td>{row.trackName}</td>                                    
                                    <td>{row.collectionName}</td>
                                    <td>{row.artistName}</td>
                                    <td><button onClick={(e) => {
                                        this.props.updateTrackIdToChild(row.trackId)
                                        }}>Preview</button></td>
                                </tr>
                            </tbody>))}

                        </Table>
                        </div>
                    </Col>
                </Row>
            </Grid>           
        </div>
        : 
        <div style={{textAlign:'center'}}> place for search results ...</div>  )
  }
}

ResultsTable.propTypes = {  
  results: PropTypes.array  
}

 const mapStateToProps = state => ({
   results: state.data.results.results
 })

export default connect(mapStateToProps,null)(ResultsTable);
