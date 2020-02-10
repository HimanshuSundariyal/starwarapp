import React from 'react';
import { connect  } from 'react-redux'; 
import { searchplanets  } from '../../actions'; 
import Searchplantes from './searchresult';
import $ from 'jquery';
import {Image} from 'react-bootstrap';
import Loadingimg from '../../images/loading.gif';

class SearchResult extends React.Component{
    constructor(props) {  
        super(props);
        this.state={
                userdetails:'',
        }
    }
searhPlanets = (e) => {
    $('#overlay').show();
    this.props.searchplanets(e.target.value);
}

componentWillMount(){
    if(!this.props.userdata)
    {
        this.props.history.push("/");
    }
    else
    {
        this.setState({userdetails:this.props.userdata});
    }    
}
render(){
require('./searchreasult.css');

if(this.props.searchresult)
{
	$('#overlay').hide();
}

        return(
            <React.Fragment>

            <div id="overlay">
				<Image className="loadingimg" src={Loadingimg} />
			</div>	

            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Search..." onChange={this.searhPlanets} />
                    <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                    </div>
                </div>
                { 
                    this.state.userdetails && (
                    <div className="row">
                        <div className="user_details">
                            welcome <strong> {this.state.userdetails.name} </strong> now you can search for the planets
                        </div>
                    </div>
                    )
                }
                {
                    this.props.searchresult && <Searchplantes planteslist={this.props.searchresult}/>
                }

            </div>

            </React.Fragment>
        )
    }
}



const mapStatetoprops = state => {
    return {
        searchresult: state.searchresult,
        userdata: state.userdata
    }
}


const mapDispatchToProps = (dispatch) => {
	return {
		searchplanets:(searchstring) => { dispatch(searchplanets(searchstring)) }
	}
}

export default connect(mapStatetoprops,mapDispatchToProps)(SearchResult);