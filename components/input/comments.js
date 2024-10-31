import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import axios from "axios";

function Comments(props) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const { eventId } = props;

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/comment?eid=${eventId}`,
      );
      console.log(res);
      setComments(res.data.comments);
    };
    getComments();
  }, [eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    const res = await axios.post("http://localhost:3000/api/comment", {
      email: commentData.email,
      name: commentData.name,
      comment: commentData.text,
      eid: eventId,
    });
    setComments([...comments,res.data.newComment]);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
