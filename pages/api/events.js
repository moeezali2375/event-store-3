import events from "@/data/events";
import fs from "fs";
import path from "path";

export default function header(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ events: events });
  } else {
    res.status(400).json({ message: "Request not allowed" });
  }
}
