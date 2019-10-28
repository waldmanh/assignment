import React from 'react'
import config from '../../config'
import {Row,Col,Panel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TopTen.css'
import TopTenCol from './TopTenCol'
class TopTen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            leftCol: [],
            rightCol:[],
            panelOpen: false
          }
        this.onClick = this.onClick.bind(this)
        this.closePanel = this.closePanel.bind(this)
    }
    closePanel(e){
        this.setState({
                        leftCol: [],
                        rightCol: [],
                        panelOpen:false
                    })
    }
    onClick(e) {
        e.preventDefault()
        let url = '/itunes/topten'
        let headers = {
            headers:{
            username: config.username
            }
          }
        fetch(url,headers)
        .then(res=>res.json())
        .then(res=>{
            if (res.length<6) {
                    this.setState(prevState=>({...prevState,
                                                leftCol: res,
                                                rightCol: [],
                                                panelOpen:true
                                            }))
            }
            else {
                let leftCol = res.slice(0,5)
                let rightCol = res.slice(5,res.length)
                this.setState(prevState=>({...prevState,
                                                leftCol:leftCol,
                                                rightCol:rightCol,
                                                panelOpen:true
                                            }))
            }
            
        })            
    }
    render(){
        return(
        <div className='top-ten'>
            <br/><br/><br/><br/>
                <button type="submit" onClick={this.onClick}><h1>{config.username}'s Top Ten Searches</h1></button>
            <br/><br/>
            {(this.state.panelOpen===true)?
            <div className='panel'>
                <Panel> 
                    <Row className="show-grid">
                        <Col xs={6}>
                            {(this.state.leftCol !== [])? <TopTenCol data = {this.state.leftCol}/>: <div>left</div> }
                        </Col>                    
                        <Col xs={6}>
                            {(this.state.rightCol !== [])? <TopTenCol data = {this.state.rightCol}/>: <div>right</div>}
                        </Col>                    
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <button type='submit' onClick={this.closePanel}>Close</button>
                        </Col>
                    </Row>
                </Panel>
            </div>
            :<div></div>
            }   
        </div>)  
    } 
}

export default TopTen