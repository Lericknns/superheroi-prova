import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:5000'

})

export async function BuscarHeroi(nome) {
    const resposta = await api.get(`/heroi/buscar?nome=${nome}`);
    return resposta.data;
}

export async function todosHerois(){
    const resposta = await api.get(`/heroi`);
    return resposta.data;
}