import { useSelector } from "react-redux"
import { Link } from "react-router-dom"



export const Pokemon = () => {

   const { data } = useSelector(state => state.searchData)
   const { isError } = useSelector(state => state.searchData)

   const noMarkers = { listStyleType: "none", }

   
   const element = data.name && !isError ?
      <div className="pokemon">
         <div className="card mb-3" style={{ maxWidth: 740 }}>
            <div className="row g-0">
               <div className="col-md-4">
                  <img src={data.image} className="img-fluid" alt="..." />
               </div>
               <div className="col-md-8">
                  <div className="card-body text-center">
                     <h5 className="card-title fs-1">{data.name}</h5>
                     <div className="card-text fs-3"><ul style={noMarkers}>
                        <li>HP: {data.stats.hp}</li>
                        <li>Attack: {data.stats.attack}</li>
                        <li>Defense: {data.stats.defense}</li>
                     </ul></div>
                     <p className="card-text text-end"><Link to="/main" >go back</Link></p>
                  </div>
               </div>
            </div>
         </div>
      </div> :
      <h2 className="text-center">Pokmon not found</h2>

   return (
      element
   )
}