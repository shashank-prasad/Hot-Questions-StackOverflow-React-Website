import React from 'react';

import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle
  } from "reactstrap";

const QuestionCards=(props)=>{
    console.log(props);
    return(
        <Card style={{ }}>
                 
        <CardBody className='row' style={{padding:"10px", backgroundColor:"white"}} >
       <div className="column" style={{width:"20%"}}>

       </div>
       <div className='column' style={{width:"15%", padding:"2px",margin:"0px 10px"}}>
       <img   src={props.question_data.author_avator} alt="Card image cap" />
       </div>
        <div className='column'  style={{width:"50%"}} >
            <CardTitle style={{margin:'0px' }}><strong>{props.question_data.title}</strong></CardTitle>
            <CardSubtitle >{props.question_data.author_name}</CardSubtitle>
            <CardText className=" text-muted" style={{margin:' 5px 0px' }}> Note: The note will come here </CardText>
        </div>
                    </CardBody>
                    <hr/>
                </Card>
    );
}

export default QuestionCards;