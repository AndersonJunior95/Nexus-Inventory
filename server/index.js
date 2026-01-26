const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

const dbPath = path.join(__dirname, '../database.json');

app.use(cors());
app.use(express.json());


app.get('/api/status', (req, res) => {
    res.json({ 
        status: "Online", 
        message: "Servidor Nexus Inventory Conectado!",
        timestamp: new Date().toISOString()
    });
});

app.post('/api/register', (req, res) => {
    const { name, email, password, role, avatar } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ 
            message: "Erro: Nome, E-mail e Senha são campos obrigatórios!" 
        });
    }

    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        const usuarios = JSON.parse(data);

        const emailExiste = usuarios.find(u => u.email === email);
        if (emailExiste) {
            return res.status(400).json({ 
                message: "Erro: Este e-mail já está em uso por outro colaborador." 
            });
        }

        const novoUsuario = {
            id: usuarios.length + 1,
            name,
            email,
            password, // Depois vou implementar um criptografia aqui
            role: role || 'User',
            avatar: avatar || 'https://i.pravatar.cc/150',
            created_at: new Date().toISOString()
        };

        usuarios.push(novoUsuario);
        fs.writeFileSync(dbPath, JSON.stringify(usuarios, null, 2));

        console.log(`✅ Usuário registrado: ${name} [ID: ${novoUsuario.id}]`);
        
        res.status(201).json({ 
            message: "Usuário cadastrado com sucesso!",
            userId: novoUsuario.id 
        });

    } catch (error) {
        console.error("Erro ao processar banco de dados:", error);
        res.status(500).json({ message: "Erro interno no servidor ao salvar dados." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`\n🚀 Servidor Nexus Inventory rodando em http://localhost:${PORT}`);
    console.log(`💡 Rota de status: http://localhost:${PORT}/api/status`);
    console.log(`💡 Pressione CTRL + C para parar o servidor\n`);
});