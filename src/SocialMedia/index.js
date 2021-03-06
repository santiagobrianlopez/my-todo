import React from "react";
import twitter from '../twitter.svg';
import github from '../github.svg';

function SocialMedia(){
    return(
        <React.Fragment>
            <span>por Santiago Lopez</span>
            <a href='https://github.com/santiagobrianlopez' 
            target='_blank'
            rel="noopener noreferrer">
                <img src={github}
                alt='github'
                rel="noopener noreferrer"/>
            </a>
            <a href='https://twitter.com/santy97lopez' 
            target='_blank'
            rel="noopener noreferrer">
                <img src={twitter}
                alt='twitter'/>
            </a>
        </React.Fragment>
    );
}

export {SocialMedia}