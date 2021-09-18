import React, {useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {v4 as uuid} from 'uuid';

function AddReview() {
    const [reviewPage, setReviewPage] = useState([])
    const [name, setUserName] = useState("");
    const [image, setUserImage] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [cook, setCook] = useState("")

    let history = useHistory()

    function handleSubmit(event){
        event.preventDefault()
        const newReview = {
            id: uuid(),
            name,
            image,
            reviewText,
            cook
        }
        fetch('https://fokty-backend.herokuapp.com/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
           }, body:JSON.stringify(newReview)
        }).then((r)=> r.json())
        .then(setReviewPage([...reviewPage, newReview]))
        setUserName("");
        setUserImage("");
        setReviewText("");
        setCook("")
        history.push('/reviews')
    }
    return (
        <div>
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>Add a Review</h4>
            </div>
            <Link to='/reviews'><button className="review-button">Back to Reviews</button></Link>
            <div className='review-form'>
            <form onSubmit={handleSubmit} className="form">
                <span>What's your name?</span><input className='input' type="text" placeholder="Name" value={name} onChange={(e)=> setUserName(e.target.value)}/> <br/>
                <span>What did you cook?</span><input className='input' type='text' placeholder='What did you cook?' value={cook} onChange={(e) => setCook(e.target.value)}/> <br/>
                <span>Take any pictures?</span><input className='input' type="text" name="image" placeholder="Insert Image" value={image} onChange={(e)=> setUserImage(e.target.value)}/> <br/>
                <p className='review-p'>Tell us about it!</p>
                <textarea className='review-post-textbox' type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}/><br/>
                <button className="add-review-button" type="submit" value="Add Your Post" onClick={handleSubmit}>Add Review</button>
                <Link to='/reviews'><button className="nevermind-button">Nevermind</button></Link>
            </form>
            </div>
        </div>
    )
}

export default AddReview