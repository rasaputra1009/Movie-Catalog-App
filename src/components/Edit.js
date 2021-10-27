import React from 'react'
import Form from './Form';
import { useParams } from 'react-router-dom';


function Edit() {
    let {title}= useParams();
    return (
        <div>
          <Form name={title}/>
        </div>
    )
}
export default Edit
