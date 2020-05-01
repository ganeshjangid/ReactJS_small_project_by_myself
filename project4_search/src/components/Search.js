import React from 'react';

function search(props){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Search By Name For GitHub</a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" onKeyPress={props.onKeyPress} />
            </div>
            </nav>
        </>
    );

}

export default search;