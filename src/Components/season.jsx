import React from "react";
import '../styles/season.css';

const seasonObj = {
    Winter:{
        message:"Burr. It's chilly",
        iconName:"snowflake"
    },
    Summer:{
        message:"Lets hit the Beach",
        iconName:"sun"
    }

};

function decideSeason(lat, month) {
    if(month >2 && month < 9){

        return lat > 0 ? "Summer" : "Winter";
    }else{
        return lat > 0 ? "Winter":"Summer";
    }

  }


function SeasonComponent(props){

   const season = decideSeason(props.lat, new Date().getMonth());
    
   const {iconName, message} = seasonObj[season];
    
    return <div>
          <i style={{color: season==="Winter"?'blue': "yellow" }} className={`rightObj massive ${iconName} icon`}></i>
          <h1 className={"msg"} >{message}</h1>
          <i style={{color: season==="Winter"?'blue': "yellow" }} className={`leftObj massive ${iconName} icon`}></i>
    
    </div>
}

export default SeasonComponent;