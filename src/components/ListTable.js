import React ,{Fragment} from 'react';
//import {connect} from 'react-redux';
//import {fetchDataAction} from '../actions/action';

class ListTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            scanData:[]
        };
      }
//   componentDidMount(){}

  scanStatus = (scan) => {
      if(scan){
        this.setState({
            scanData:scan
        }) 
      } 
  }
  render(){
    const {scanData} = this.state
    const list = this.props.dataList.map((item,key) => {
        let date = new Date(item.pickup_date)
        let date2 = new Date(item.extra_fields?item.extra_fields.expected_delivery_date:'')
        return (
          <Fragment key={key}>
                <tr onClick={()=>this.scanStatus(item.scan)} className="table_row_list">
                <td>#{item.awbno}</td>
                <td>{item.carrier}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>USPA</td>
                <td> {item.pickup_date?`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`:""}</td>
                <td>{item.extra_fields ? `${date2.getDate()}/${date2.getMonth()+1}/${date2.getFullYear()}` :"" }</td>
                <td className={item.current_status_code==='DEL'?'text-success':'text-warning'}>{item.current_status}</td>
                </tr>
          </Fragment>
        )
      })
      return(
       <Fragment>
           <div className="row both_row">
          <div className="col-3 col_index col_left">
          <div className="container">
                    <ul>
                        <span><img className="top_icon" src={require("../assets/img/destination.svg")} alt="dest" width="20"/></span>
                        <div className="scan_box">
                        {
                            scanData.map((item,key)=> {
                                let date = new Date(item.time)
                                return(
                                    <li key={key}>
                                        <span></span>
                                        <div className="text-muted">
                                            <div className="scan_title">{item.location}</div>
                                            <div className="scan_time">
                                            {`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}&nbsp;&nbsp;&nbsp;{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        </div>
                     <span><img className="bottom_icon" src={require("../assets/img/warehouse.svg")} alt="dest" width="20"/></span>
                    </ul>
          </div>
          </div>
          <div className="col-8 col_index col_right">
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
           <table className="table mb-0">
            <thead>
                <tr className="table_head">
                <th scope="col">AWB N0.</th>
                <th scope="col">TRANSPORTER</th>
                <th scope="col">SOURCE</th>
                <th scope="col">DESTINATION</th>
                <th scope="col">BRAND</th>
                <th scope="col">START DATE</th>
                <th scope="col">ETD</th>
                <th scope="col">STATUS</th>
                </tr>
            </thead>
            <tbody>
               {list}
            </tbody>
            </table>
            </div>
          </div>
        </div>
       </Fragment>
      )
  }
 
}

// const mapStateToProps = (state) => {
//   return {
//     dataList: state.dataList
//   }
// }

//export default connect(mapStateToProps,{fetchDataAction})(ListTable);
export default ListTable