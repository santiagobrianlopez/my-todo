import React from "react";
import './Footer.css'
import { SocialMedia } from "../SocialMedia";

function Footer(props){
    return(
        <footer>
           {(!props.loading && !props.error) &&  <SocialMedia/>}
        </footer>
    );
}

export {Footer}