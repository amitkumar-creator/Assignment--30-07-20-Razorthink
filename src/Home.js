import React from 'react';
import './index.css';
import ImageGrid from './grid';
import {HttpService} from './apiService/apiService'
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            data:{}
        }
    }
        
   

    handleChange = e =>{
         this.setState({search:e.target.value})
     }
     handleSearch = (e) =>{
         e.preventDefault();
        const data = HttpService(this.state.search);
        data.then((res)=>{
            this.setState({
                data:res
            });
        })
     }
  render(){
      return (
          <>
      <div className="container">
        <h2 className="heading">Live search Unplace</h2>
        <form className="example" onSubmit={this.handleSearch}>
            <input type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
            <button type="submit" onClick={this.handleSearch}><i className="fa fa-search"></i></button>
        </form>
      </div>
      {this.state.data && this.state.data.results && this.state.data.results.length-1 && <ImageGrid {...this.state.data} />}
      </>
    );
  }
}

export default Home;
