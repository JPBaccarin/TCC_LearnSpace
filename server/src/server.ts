import express from "express";
import mysql, { RowDataPacket } from "mysql2";
import cors from "cors";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tcc",
});

const userSchema = z.object({
  nome: z.string(),
  email: z.string().email(),
  password: z.string(),
  datanasc: z.string(),
});

const saltRounds = 10;

app.post("/signup", (req, res) => {
  const { nome, email, password, datanasc } = userSchema.parse(req.body);
  bcrypt.hash(password, saltRounds, (hashError, hash) => {
    if (hashError) {
      console.error(hashError);
      res.status(500).json({ message: "Erro ao criptografar a senha." });
    } else {
      connection.query("SELECT * FROM usuarios WHERE email = ?", [email], (selectError, results) => {
        if (selectError) {
          console.error(selectError);
          res.status(500).json({ message: "Erro ao buscar usuário no banco de dados." });
        } else if ((results as RowDataPacket[]).length > 0) {
          res.status(400).json({ message: "Email já está sendo usado." });
        } else {
          connection.query(
            "INSERT INTO usuarios (nome, senha, email, data_nasc) VALUES (?, ?, ?, ?)",
            [nome, hash, email, datanasc],
            (insertError, results) => {
              if (insertError) {
                console.error(insertError);
                res.status(500).json({ message: "Erro ao salvar usuário no banco de dados." });
              } else {
                res.status(201).json({ message: "Usuário cadastrado com sucesso." });
              }
            }
          );
        }
      });
    }
  });
});


let user;

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  connection.query("SELECT * FROM usuarios WHERE email = ?", [email], (error, results) => {
    user = results[0];
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar usuário no banco de dados." });
    } else if ((results as RowDataPacket[]).length === 0) {
      res.status(404).json({ message: "Usuário não encontrado." });
    } else {
      bcrypt.compare(password, user.senha, (compareError, isMatch) => {
        if (compareError) {
          console.error(compareError);
          res.status(500).json({ message: "Erro ao comparar as senhas." });
        } else if (!isMatch) {
          res.status(401).json({ message: "Senha incorreta." });
        } else {
          const { nome, email, papel } = user;
          const token = jwt.sign({ email, papel }, "secretKey");
          res.status(200).json({ message: "Login bem-sucedido.", nome, email, papel, token });
        }
      });
    }
  });
});

// Adicione um middleware de autorização
function authorize(...allowedRoles) {
  return (req, res, next) => {
    const user = req.user;
    req.user = user;
    if (user && allowedRoles.includes(user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Acesso negado." });
    }
  };
}

// Use o middleware nas rotas que você quer proteger
// Create
app.post("/admin", authorize("admin"), (req, res) => {
  const { name, email } = req.body;
  connection.query("INSERT INTO admin (name, email) VALUES (?, ?)", [name, email], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Error inserting data into the database." });
    } else {
      res.status(201).json({ message: "Data inserted successfully." });
    }
  });
});

// Read
app.get("/admin", authorize("admin"), (req, res) => {
  connection.query("SELECT * FROM admin", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching data from the database." });
    } else {
      res.status(200).json(results);
    }
  });
});

// Update
app.put("/admin/:id", authorize("admin"), (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  connection.query("UPDATE admin SET name = ?, email = ? WHERE id = ?", [name, email, id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating data in the database." });
    } else {
      res.status(200).json({ message: "Data updated successfully." });
    }
  });
});

// Delete
app.delete("/admin/:id", authorize("admin"), (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM admin WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Error deleting data from the database." });
    } else {
      res.status(200).json({ message: "Data deleted successfully." });
    }
  });
});



app.get("/professor", authorize("professor", "admin"), (req, res) => {
  // Lógica da rota
});

app.get("/aluno", authorize("aluno", "professor", "admin"), (req, res) => {
  // Lógica da rota
});

app.listen(3002, () => {
  console.log("Servidor rodando em http://localhost:3002");
});
