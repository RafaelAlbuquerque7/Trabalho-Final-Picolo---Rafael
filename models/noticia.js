const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  titulo: { type: String },
  autor: { type: String },
  conteudo: { type: String },
  descricao: { type: String },
  datapublicacao: { type: Date }
  // subtitle: { type: String },
  // status: { type: Boolean, default: true }
});

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;