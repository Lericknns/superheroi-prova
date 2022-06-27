import './index.scss'
import { BuscarHeroi } from '../../api/heroiapi'

export default function Index() {


const[setHeroi] = UseState([]);
const[nome, setNome] = UseState('');

async function Nome(){
const resp = await BuscarHeroi(nome);
setHeroi(resp);
    }

return (

     <main>
          <div>
               <h1>pesquise heroi</h1>
          </div>

          <div> 
            <input type="text" placeholder='Buscar heroi por nome' value={Nome} onChange ={e => setNome(e.target.value)}/>
            <button onClick={Nome}><h2>buscar</h2></button> 
          </div>
          
            
     </main>

    )
}