import { useRef, useState } from "react";
import classes from "./new-comment.module.css";

function NewComment(props) {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows="5" ref={commentInputRef}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewComment;

