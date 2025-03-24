const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database
const db = new sqlite3.Database("./database.db", err => {
  if (err) console.error("SQLite Connection Failed:", err);
  else console.log("Connected to SQLite");
});

// Create a sample table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`);

// API Routes
app.get("/", (req, res) => res.send("Backend is running!"));

app.get("/api/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
});
  
app.post("/api/users", (req, res) => {
    const { name } = req.body;
    db.run("INSERT INTO users (name) VALUES (?)", [name], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, name });
    });
});
  

app.listen(5000, () => console.log("Server running on port 5000"));
