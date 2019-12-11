import React from 'react';
import {connect} from 'react-redux'
import { fetchDataAction } from '../actions/action';
import ListTable from './ListTable'

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        delCount:[],
        intCount:[],
        oodCount:[],
        undCount:[],
        nfiCount:[],
        dataToTable:[],
        activeClass:'DEL'
    };
  }
  async componentDidMount(){
    await this.getCount()
  }

  getCount = async () => {
    const email = 'sanjay@gmail.com'
    const name="mayank"
    await this.props.fetchDataAction(email,name)
    const response = await this.props.dataList
    if(response){
      this.setState({
        dataToTable:response.filter(value=>value.current_status_code==='DEL'),
        delCount: response.filter(value=>value.current_status_code==='DEL'),
        intCount:response.filter(value=>value.current_status_code==='INT'),
        oodCount:response.filter(value=>value.current_status_code==='OOD'),
        undCount:response.filter(value=>value.current_status_code==='UND'),
        nfiCount:response.filter(value=>value.current_status_code==='NFI'),
      })
    }
  }

  passData = (data) => {
    switch(data){
      case 'DEL': return this.setState({
        dataToTable:this.state.delCount,
        activeClass:'DEL'
      })
      case 'INT': return this.setState({
        dataToTable:this.state.intCount,
        activeClass:'INT'
      })
      case 'OOD': return this.setState({
        dataToTable:this.state.oodCount,
        activeClass:'OOD'
      })
      case 'UND': return this.setState({
        dataToTable:this.state.undCount,
        activeClass:'UND'
      })
      case 'NFI': return this.setState({
        dataToTable:this.state.nfiCount,
        activeClass:'NFI'
      })
      default: return data;
    }
  }

  render(){
    const {delCount,intCount,oodCount,undCount,nfiCount,dataToTable,activeClass} = this.state
    return(
      <div>
      <div>
      <section className="mycount" id="port">
            <div className="card-list">
                <div className={`card 1 ${activeClass==='DEL'? 'active' :""}`}
                 onClick={()=>this.passData('DEL')} 
                 title="Delivered">
                    <h1 className="card-title">DEL</h1>
                    <h4 className="card-sub-title">{delCount.length}</h4>
                </div>

                <div className={`card 1 ${activeClass==='INT'? 'active' :""}`}
                  onClick={()=>this.passData('INT')}  title="In Transit">   
                  <h1 className="card-title">INT</h1>
                  <h4 className="card-sub-title">{intCount.length}</h4>
                </div>

                <div className={`card 1 ${activeClass==='OOD'? 'active' :""}`}
                   onClick={()=>this.passData('OOD')} title="Out for Delivery">
                  <h1 className="card-title">OOD</h1>
                  <h4 className="card-sub-title">{oodCount.length}</h4>
                </div>

                <div className={`card 1 ${activeClass==='UND'? 'active' :""}`}
                  onClick={()=>this.passData('UND')} title="Undelivered">
                  <h1 className="card-title">UND</h1>
                  <h4 className="card-sub-title">{undCount.length}</h4>
                </div>
                <div className={`card 1 ${activeClass==='NFI'? 'active' :""}`}
                 onClick={()=>this.passData('NFI')} title="No Information Yet">
                <h1 className="card-title">NFI</h1>
                    <h4 className="card-sub-title">{nfiCount.length}</h4>
                </div>
            </div>

    </section>
      </div>

      <ListTable dataList={dataToTable} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    dataList:state.dataList
  }
}

export default connect(mapStateToProps,{fetchDataAction})(Home)