import React, { Fragment } from "react";
import Link from 'next/link';

// import static data
import { projects } from "../../cards/constants";

const card = () => {
    return ( 
        <Fragment className="main" >
        
        <div className = "cards"> {
            projects.map((item, index) => {
                return ( 
                    <Link href={`${item.URL}`}>
                        <a>
                    <div className = "card"></div>
                    key = { index }
                    
                    <img src = { `../../static/assets/images/${item.Image}` }
                    className = "img-fluid"
                    width = "100" />
                    
                    
                    <p > { item.project } </p> 
                    <p > { item.title } </p> <p > { item.description } </p> </div>
                    </a>
                    </Link>
                );
            })
        } </div>
         </Fragment>
    );
};

export default card;
