import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
        {
            id: 1,
            descrição: "Uma foto teste",
            imagem: "https://placecats.com/millie/300/150",
        },
        {
            id: 2,
            descrição: "Um lindo pôr do sol",
            imagem: "https://placekitten.com/300/200",
        },
        {
            id: 3,
            descrição: "Aventura nas montanhas",
            imagem: "https://placebear.com/300/150",
        },
        {
            id: 4,
            descrição: "Relaxando na praia",
            imagem: "https://picsum.photos/300/200",
        },
        {
            id: 5,
            descrição: "Explorando florestas",
            imagem: "https://placekitten.com/400/200",
        },
        {
            id: 6,
            descrição: "Café quentinho para começar o dia",
            imagem: "https://placebear.com/400/300",
        }
    ];
    


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console;console.log("servidor escutando");
});
 
app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

function buscarPostePorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) =>{
    const index = buscarPostePorId(req.params.id)
    res.status(200).json(posts [index]);
});