import React,{Component} from 'react'
import ResultsTable from './ResultsTable/ResultsTable'
import OpenResult from './OpenResult/OpenResult'

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {id: 1}
        this.updateId = this.updateId
    }
    updateId = (id) => {this.setState({ id })}
    render() {
        return (
            <div>
                {
                (this.state.id===1) ? <ResultsTable updateTrackIdToChild={this.updateId} />
                                    : <OpenResult id={this.state.id} updateTrackIdToChild={this.updateId} />
                }
            </div>
        )
    }
}

export default Results