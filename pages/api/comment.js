import path from "path";
import fs from "fs";
const handler = (req, res) => {
  if (req.method === "GET") {
    const { eid } = req.query;
    const p = path.join(process.cwd(), "data", "comments.json");
    const f = fs.readFileSync(p);
    const comments = JSON.parse(f);
    const data = comments.filter((c) => c.eid === eid);
    res.status(200).json({ comments: data });
  } else if (req.method === "POST") {
    const { email, comment, name, eid } = req.body;
    const p = path.join(process.cwd(), "data", "comments.json");
    const f = fs.readFileSync(p);
    const comments = JSON.parse(f);

    const newComment = {
      id: comments.length,
      email: email,
      comment: comment,
      name: name,
      eid: eid,
    };

    comments.push(newComment);
    fs.writeFileSync(p, JSON.stringify(comments));
    res.status(200).json({ msg: "Comment Added", newComment: newComment });
  }
  res.status(400).json({ msg: "Bad Request Bro!" });
};
export default handler;
