import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Grid,Row,Col} from 'react-bootstrap'
import OpenResultTable from './OpenResultTable'
import './OpenResult.css'
import ReactPlayer from 'react-player'

class OpenResults extends Component {    
    render() {
        const trackId = this.props.id
        let trackData = []
        if (this.props.results !== undefined){
            trackData = this.props.results.filter(item=>item.trackId===trackId)[0]
        }
        let player = null
        switch(trackData.kind){
            case 'feature-movie':
            case 'tv-episode':
            {
                player = <ReactPlayer 
                url={trackData.previewUrl}
                className='react-player'                
                width='100%'
                height='100%'
                controls />
                break
            }
            case 'song':
            {
                player = <ReactPlayer 
                url={trackData.previewUrl}
                className='react-player'
                file='forceAudio'  
                width='100%'
                height='30px'
                controls />
                break
            }
            default: player = <div>No preview for this track type ...</div>
        }        
        return(
        (this.props.results !== undefined) ? 
        <div className='open-result'>

             <Grid>
                <Row className="show-grid">
                    <Col xs={12}><button onClick={(e) => this.props.updateTrackIdToChild(1)}>Back to results</button></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6}>
                        <div >                        
                            <h2>Open result with trackId: {trackId}</h2> 
                            <OpenResultTable data={trackData}/>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div style={{textAlign:'center'}}><h2>Preview Track</h2>
                            <Row>
                            <Col xs={2}></Col>
                            <Col xs={8}>
                                <div>
                                    {player}    
                                </div>
                            </Col>
                            <Col xs={2}></Col>
                            </Row>
                        </div>                    
                    </Col>
                </Row>
            </Grid>           
        </div>
        : 
        <div style={{textAlign:'center'}}> place for search results ...</div>  )
  }
}

OpenResults.propTypes = {  
  results: PropTypes.array  
}

 const mapStateToProps = state => ({
   results: state.data.results.results
 })

export default connect(mapStateToProps,null)(OpenResults);
