import fs from "fs";
import path from "path";
const handler = (req, res) => {
  if (req.method === "POST") {
    try {
      const p = path.join(process.cwd(), "data", "data.json");
      const f = fs.readFileSync(p);
      const arr = JSON.parse(f);

      const newEmail = {
        id: arr.length,
        email: req.body.email,
      };
      arr.push(newEmail);
      const newData = JSON.stringify(arr);
      fs.writeFileSync(p,newData);
      res.status(200).json({ message: "User Added" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
