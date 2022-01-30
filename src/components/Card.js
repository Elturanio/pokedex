
function Card({ data }) {
   const img = data.sprites.front_default
   const hp = data.stats[0].base_stat
   const attack = data.stats[1].base_stat
   const defense = data.stats[2].base_stat
   return (
      <div className="col-sm-6 col-md-4 col-lg-3">
         <div className="card mt-2 mb-2" >
            <img src={img} className="card-img-top" alt="..." />
            <hr className="hr" />
            <div className="card-body">
               <h5 className="card-title">{data.name}</h5>
               <div className="card-text">
                  <ul>
                     <li>HP: {hp}</li>
                     <li>Attack: {attack}</li>
                     <li>Defense: {defense}</li>
                  </ul>
               </div>
            </div>
         </div>
      </div >


   )
}

export default Card