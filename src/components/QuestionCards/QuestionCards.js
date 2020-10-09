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
        <Card class='FullQuestion' onClick={toggle}>
                 
        <CardBody className='row bodyCardClass' >
             <div className="column oneDiv">

             </div>
                <div className='column twoDiv' >
              <img   src={props.question_data.author_avator} className='AuthorImage'  alt={props.question_data.author_name} />
            </div>
                <div className='column bodyDiv'   >
                <CardTitle className='CardTitleStyle'><strong>{props.question_data.title}</strong></CardTitle>
                <CardSubtitle className="cardSubStyle" >{props.question_data.author_name}</CardSubtitle>
                <CardText className=" text-muted" className="cardTextStyle "> View Count: <b>{props.question_data.views}</b></CardText>

                </div>
                    </CardBody>
                </Card>
   


                  <Modal isOpen={modal} toggle={toggle}  external={externalCloseBtn}>
                    <ModalHeader><strong>{props.question_data.title}</strong></ModalHeader>
                    <ModalBody>
                        Tags: {tagCubes}
                        <br />
                        <br/>
                        <div className='column viewCount'>  
                        View Count: <b>{props.question_data.views}</b>
                        </div>
                        <div className='column answered' >
                            {answer}

                        </div>


                        <br></br>
                       <hr></hr>
                       <div className='column authIMG'>
                        <img   src={props.question_data.author_avator} style={{width:"70px",height:"70px", alignSelf:"center"}} alt="Card image cap" />
                       </div>
                       <div className='column authName' >
                            <b>{props.question_data.author_name}</b>
                            <p className=" text-muted rep" >Reputation:{props.question_data.auth_rep}</p>
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