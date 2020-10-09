import React, { useState,Component } from 'react';
//import {Card} from 'react-bootstrap'

  import axios from 'axios';

  import './HomePage.css';
  
  
import QuestionCards from '../../components/QuestionCards/QuestionCards';


class HomePage extends Component{
    state={
        question_data:null,
        done:false,
        modal:false
    }

    
    
    componentDidMount(){
        axios.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow")
        .then(response=>{
            console.log(response['data']['items']);
            var post_data=response['data']['items'];
            this.setState({question_data:post_data,done:true});
        })
        .catch(error=>{
            console.log(error);
        })
    }

    
    
    render(){



       

        let card=null
        if(!this.state.done){
            card=<h3>Loading...</h3>
        }else{
            var data_obj=this.state.question_data;
             console.log('type of ',typeof data_obj)
            var data_arr=[]
            for (const key of Object.keys(data_obj)) {
                data_arr.push(
                    {
                        'title':data_obj[key]['title'],
                        'link':data_obj[key]['link'],
                        'author_name':data_obj[key]['owner']["display_name"],
                        'author_avator':data_obj[key]['owner']['profile_image'],
                        'tags':data_obj[key]['tags'],
                        'views':data_obj[key]['view_count'],
                        "isanswered":data_obj[key]['is_answered'],
                        "Q_id":data_obj[key]['question_id'],
                        "auth_rep":data_obj[key]['owner']['reputation']
                    }
                )
              }
            console.log("array",data_arr)
           //console.log('type of 2',typeof data_arr)

           card= data_arr.map(question=>(
               <QuestionCards key={question.Q_id} question_data={question}></QuestionCards>
                   
               
           ))

        }


        
        return(
            <div style={{alignSelf:'center'}}>
                  
            {card}
            
            
            </div>
        )
    }
}

export default HomePage;