import React from  'react';
import {Container,Row} from 'react-bootstrap';
const SearchResult = (props) =>{
    return(
        <React.Fragment>
            <Container className="searchcontainer">
                <Row>
                    { 
                        props.planteslist.map(searchresult => (
                        <div key ={searchresult.name} className="d-inline-flex p-2 bd-highlight">
                            <div className="resultdata">
                            <h2>Plant name: {searchresult.name}</h2>
                            <p><strong>Total population:</strong> {searchresult.population} </p>
                            </div>
                        </div>
                        ))
                    }
            </Row>
         </Container>   
        </React.Fragment>
    )
}
export default SearchResult;