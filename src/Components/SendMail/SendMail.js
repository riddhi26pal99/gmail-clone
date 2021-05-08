import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form"
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase.config'
import firebase from 'firebase';

function SendMail() {

    const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


    const onSubmit = (formData) => {
        //console.log(formData);
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        
        dispatch(closeSendMessage());
    }
    
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon 
                    onClick = { () => dispatch(closeSendMessage()) }
                    className="sendMail_close"/>
            </div>

            <form onSubmit={ handleSubmit(onSubmit) }>
                <input 
                    placeholder="To" 
                    type="text" 
                    {...register( 'to', { required: true })}/>

                    {errors.to && <p className="sendMail_error">
                        To is required!</p>}

                <input 
                    placeholder="Subject" 
                    type="text" 
                    {...register('subject', { required: true })}/>

                    {errors.subject && <p className="sendMail_error">
                        To is required!</p>}

                <input 
                    placeholder="Message" 
                    type="text" 
                    className="sendMail_message" 
                    {...register('message', { required: true })}
                />
                {errors.message && <p className="sendMail_error">
                        To is required!</p>}

                <div className="sendMail_options">
                    <Button className="sendMail_send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
