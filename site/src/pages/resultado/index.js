import './index.scss'


export default function Index() {
return (
        <main>
            
         <table>
          <thead>
                <tr>
                                
                 <th>heroi</th>
                 <th>Poder</th>
                 <th>Voa</th>
                                
                </tr>
           </thead>
           <tbody>
             
             {buscarHeroi.map(item =>
             <tr>
             <td>{item.nome}</td>
             <td>{item.poder}</td>
             <td>{item.voa ? 'sim' :'Não'}</td>
             </tr>
                            )}
                          
           </tbody>
         </table>   
            
        </main>
    )
}

