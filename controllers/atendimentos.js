const Atendimento = require('../models/atendimentos')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res);
  });

  app.get('/atendimentos/:id', (req, res) => {
    const {id} = req.params;
    Atendimento.buscaPorId(id, res);
  });

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;
    Atendimento.adiciona(atendimento, res);
  });

  app.patch('/atendimentos/:id', (req, res) => {
    const {id} = req.params;
    const valores = req.body;
    Atendimento.alterar(id, valores, res);
  });

  app.delete('/atendimentos/:id', (req, res) => {
    const {id} = req.params;
    Atendimento.deletar(id, res);
  })
}