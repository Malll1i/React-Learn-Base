import React from "react";
import classes from "./myButton.module.css"

const MyButton = ({children, ...props}) =>{
    return(
        <div>
            <button className={classes.myBTN}>
                {children}
            </button>
        </div>
    )
}

export default MyButton