import React,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle
  } from "reactstrap";

  import './QuestionCards.css'

const QuestionCards=(props)=>{
    // console.log("Loop",props);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    
    var tagCubes=props.question_data.tags.map(tag=>(
        <p key={tag} className='btn btn-sm tag' style={{margin:'5px 5px', backgroundColor:'grey'}}>{tag}</p>
    )
        )

        var answer=null;
        
        if(props.question_data.isanswered ){
            answer=<p className='answer btn btn-success btn-sm'>Answered</p>
        }else{
            answer=<p className='answer btn btn-danger btn-sm'>Not Answered</p>
        }


    return(
        <>
        <Card onClick={toggle}>
                 
        <CardBody className='row' style={{padding:"10px"}} >
             <div className="column" style={{width:"20%"}}>

             </div>
                <div className='column' style={{width:"15%", padding:"2px",margin:"0px 10px"}}>
              <img   src={props.question_data.author_avator} style={{width:"80%",height:"90%", alignSelf:"center"}} alt="Card image cap" />
            </div>
                <div className='column'  style={{width:"50%"}} >
                <CardTitle style={{margin:'0px' }}><strong>{props.question_data.title}</strong></CardTitle>
                <CardSubtitle style={{margin:"10px 0px"}} >{props.question_data.author_name}</CardSubtitle>
                <CardText className=" text-muted" style={{margin:' 5px 0px' }}> View Count: <b>{props.question_data.views}</b></CardText>

                </div>
                    </CardBody>
                </Card>
   


                  <Modal isOpen={modal} toggle={toggle}  external={externalCloseBtn}>
                    <ModalHeader><strong>{props.question_data.title}</strong></ModalHeader>
                    <ModalBody>
                        Tags: {tagCubes}
                        <br />
                        <br/>
                        <div className='column' style={{width:"50%",margin:"5px 0px 0px 0px"}}>  
                        View Count: <b>{props.question_data.views}</b>
                        </div>
                        <div className='column' style={{width:"50%",textAlign:'center'}}>
                            {answer}

                        </div>


                        <br></br>
                       <hr></hr>
                       <div className='column' style={{width:"20%",textAlign:''}}>
                        <img   src={props.question_data.author_avator} style={{width:"70px",height:"70px", alignSelf:"center"}} alt="Card image cap" />
                       </div>
                       <div className='column' style={{width:"50%",textAlign:''}}>
                            <b>{props.question_data.author_name}</b>
                            <p className=" text-muted" style={{fontSize:"14px"}}>Reputation:{props.question_data.auth_rep}</p>
                       </div>

                    </ModalBody>
                    <ModalFooter>
                    <a className="btn btn-primary" href={props.question_data.link} target="_blank" >View Question in StackOverflow</a>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
   
    </>
    );
}

export default QuestionCards;