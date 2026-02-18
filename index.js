const http = require("http");
const porta = 3000;
const express = require("express"); 
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.send("rota raiz - na barra adicione / e a abreviação do Estado desejado (em letra minúscula) para saber o nome da capital.");
});

app.get("/ac", (req, res) => {
  res.send("Rio Branco");
});

app.get("/ap", (req, res) => {
  res.send("Macapá");
});

app.get("/am", (req, res) => {
  res.send("Manaus");
});

app.get("/pa", (req, res) => {
  res.send("Belém");
});

app.get("/ro", (req, res) => {
  res.send("Porto Velho");
});

app.get("/rr", (req, res) => {
  res.send("Boa Vista");
});

app.get("/to", (req, res) => {
  res.send(" Palmas");
});

app.get("/al", (req, res) => {
  res.send("Maceió");
});

app.get("/ba", (req, res) => {
  res.send("Salvador");
});

app.get("/ce", (req, res) => {
  res.send("Fortaleza");
});

app.get("/ma", (req, res) => {
  res.send("São Luís");
});

app.get("/pb", (req, res) => {
  res.send("João Pessoa");
});

app.get("/pe", (req, res) => {
  res.send("Recife");
});

app.get("/pi", (req, res) => {
  res.send("Teresina");
});

app.get("/rn", (req, res) => {
  res.send("Natal");
});

app.get("/se", (req, res) => {
  res.send("Aracaju");
});

app.get("/df", (req, res) => {
  res.send("Brasília");
});

app.get("/go", (req, res) => {
  res.send("Goiânia");
});

app.get("/mt", (req, res) => {
  res.send("Cuiabá");
});

app.get("/ms", (req, res) => {
  res.send("Campo Grande");
});

app.get("/es", (req, res) => {
  res.send("Vitória");
});

app.get("/mg", (req, res) => {
  res.send("Belo Horizonte");
});

app.get("/rj", (req, res) => {
  res.send("Rio de Janeiro");
});

app.get("/sp", (req, res) => {
  res.send(" São Paulo");
});

app.get("/pr", (req, res) => {
  res.send("Curitiba");
});

app.get("/sc", (req, res) => {
  res.send("Florianópolis");
});

app.get("/rs", (req, res) => {
  res.send("Porto Alegre");
});

app.use((req, res) => {
    res.status(404).send("rota não encontrada")
})

app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});