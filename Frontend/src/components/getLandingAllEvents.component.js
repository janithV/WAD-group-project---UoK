import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class GetLandingAllEvents extends Component{
    state = {
        events: [],
    };

    componentDidMount() {
        axios.get('http://localhost:3000/events',{
            params:{
                _limit:this.props.limitE
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
            
            <div key ={event.eventid} className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="iconbox">
              <div>
                    
                    <img src={event.imageUrl} alt="" className="img-fluid" style={{width:'100%'}}/>
                    <h4><Link to ={'/events/' + event.eventid}>{event.name}</Link></h4>
                    <i className="icofont-google-map" style={{padding:30}} >{event.venue}</i> <br></br>
                    <i className="icofont-calendar"style={{padding:30}}>{event.date}</i>
            </div>
          </div> 
        </div>
        )
        }
        </div>  
        )
    }
}