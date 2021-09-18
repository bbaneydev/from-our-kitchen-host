import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Reviews() {
    const [reviewPage, setReviewPage] = useState([])

    const [refreshPage, setRefreshPage] = useState(false)
    useEffect(()=> {
        fetch('https://fokty-backend.herokuapp.com/reviews')
        .then((r)=> r.json())
        .then(data => {
            setReviewPage(data)
            console.log(data)
        })
    },[refreshPage, handleDeleteReview])
    // function handleSubmit(event){
    //     event.preventDefault()
    //     const newReview = {
    //         id: uuid(),
    //         name,
    //         image,
    //         reviewText,
    //     }
    //     fetch('http://localhost:3000/reviews',{
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json"
    //        }, body:JSON.stringify(newReview)
    //     }).then((r)=> r.json())
    //     .then(setReviewPage([...reviewPage, newReview]))
    //     setUserName("");
    //     setUserImage("");
    //     setReviewText("");
    // }
    const listOfReviews = reviewPage.map((review)=>{
        return(
        <div className="review-card">
            <span className="edit-button" onClick={()=>handleDeleteReview(review)}>X</span>
            <br/>
            <p className="review-card-name">{review.name}</p>
            <br/>
            <h1>{review.cook}</h1>
            <div className='review-image'>
                <img src={review.image} className="review-card-image"/>
            </div>
            <br/>
            <p className="review-card-text">{review.reviewText}</p>
         </div>
        )
     })
    //  function handleEditPost(blog){
    //      fetch(`http://localhost:3000/reviews/${blog.id}`,{
    //          method: "PATCH",
    //          headers: {
    //              "Content-Type": "application/json"
    //          },
    //          body: JSON.stringify({blogText: "WHAT NEEDS TO BE UPDATED"})
    //      })
    //          .then(r=> r.json())
    //          .then(data => console.log(data.blogText))
    //  }
    // function handleDeleteReview(review){
    //     fetch(`http://localhost:3000/reviews/${review.id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }). then(
    //         setRefreshPage(!refreshPage)
    //     )
    // }

    function handleDelete(id) {
        const newObj = reviewPage.filter((review) => review.id !== id)
        setRefreshPage(newObj)
    }

    function handleDeleteReview(review) {
        fetch(`https://fokty-backend.herokuapp.com/reviews/${review.id}`, {
            method: "DELETE"
        })
        handleDelete(review.id)
    }

    return (
             <div>
            <div className="top-bar">
                <h1>From Our <br/> <span>Kitchen</span><br/> To Yours</h1>
                <h4>All Reviews</h4>
            </div>
            {/* <Link to={'/'} className='button'><button>Back To Home</button></Link> */}
            <Link to='/reviews/add'><button className="review-button">Add Review</button></Link>
            <div className="blog-list">
            {listOfReviews}
            </div>
            <br/> <br/>
            {/* <form onSubmit={handleSubmit} className="form">
                <h3> Let Us Know What You Think!</h3>
                <input type="text" placeholder="Your Name" value={name} onChange={(e)=> setUserName(e.target.value)}/> <br/>
                <input type="text" name="image" placeholder="Insert Image" value={image} onChange={(e)=> setUserImage(e.target.value)}/> <br/>
                <input className='review-post-textbox' type="text" placeholder="...Your Story Here" value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={10}/><br/>
                <input type="submit" value="Add Your Post" onClick={handleSubmit}/>
            </form> */}
        </div>
    );
}
export default Reviews;