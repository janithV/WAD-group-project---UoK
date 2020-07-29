import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class GetRecomendedEvents extends Component{
    state = {
        events: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos',{
            params:{
                _limit:8
            }
        }).then(res=>{
            console.log(res);
            this.setState({ events:res.data });
        });
        }
    render(){
        return(
            <div className="row">
          {this.state.events.map(event=>  
            
            <div key={event.id} className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="iconbox">
              <div>
                    <img src={event.url} alt="" className="img-fluid" style={{width:'100%'}}/>
                    <h4><Link to ={'/event/' + event.id}>{event.title}</Link></h4>
                    <p>{event.title}</p>
            </div>
          </div> 
        </div>)}</div>  
        )
    }
}