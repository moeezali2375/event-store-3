import classes from "./comment-list.module.css";

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.comments.map((c) => (
        <li key={c.id}>
          <p>{c.comment}</p>
          <div>
            By <address>{c.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;

