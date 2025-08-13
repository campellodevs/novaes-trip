// Importe as imagens dos seus destinos
import imagem1 from '../assets/images/destino1.png';
import imagem2 from '../assets/images/destino2.png';
import imagem3 from '../assets/images/destino3.png';

const destinos = [
  {
    id: 1,
    titulo: 'Praia de Jericoacoara',
    descricao: 'Aproveite o paraíso das águas cristalinas e dunas de areia.',
    preco: 'A partir de R$ 1.500',
    imagem: imagem1,
  },
  {
    id: 2,
    titulo: 'Fernando de Noronha',
    descricao: 'Descubra a beleza natural de um dos arquipélagos mais famosos do Brasil.',
    preco: 'A partir de R$ 3.200',
    imagem: imagem2,
  },
  {
    id: 3,
    titulo: 'Lençóis Maranhenses',
    descricao: 'Um deserto de dunas brancas com lagoas de água doce.',
    preco: 'A partir de R$ 2.100',
    imagem: imagem3,
  },
];

export default destinos;