import { Routes, Route } from "react-router-dom";
import Card from "./Card"
import { Pokemon } from "./Pokemon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, plusOffset, minusOffset, minOffset, maxOffset } from "../redux/actions";

function Main() {
   const fetchProps = useSelector(state => state.fetchProps)
   const { isLoading } = useSelector(state => state.loading)
   const dispatch = useDispatch()
   useEffect(() => { dispatch(fetchPokemons(fetchProps)) }, [fetchProps])
   const pokemons = useSelector(state => state.pokemons.pokemons)

   const loadingElement = <h1 style={{ textAlign: "center", height: "400px", lineHeight: "400px" }}>Loading...</h1>
   const pokemonsList = <div className="pokemons-list row gx-6">
      {isLoading ? loadingElement : pokemons ? pokemons.map((item) => <Card data={item} key={item.id} />) : null}
   </div>
   return (
      <main className="main">
         <div className="container-xxl">


            <Routes>
               <Route path="/main" element={pokemonsList} />
               <Route path="/main/pokemon" element={<div style={{ paddingTop: "70px", paddingBottom: "50px" }}>
                  <Pokemon />
               </div>} />
            </Routes>


            <div className="paginator mt-3">
               <nav aria-label="Page navigation example">
                  <div className="paginator-text">{`${fetchProps.offset + 1}-${fetchProps.offset + fetchProps.limit} of 1118 items`}</div>
                  <ul className="pagination justify-content-center">

                     {fetchProps.offset === 0 ? <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                     </li> : <li className="page-item ">
                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true" onClick={(e) => { e.preventDefault(); dispatch(minusOffset(fetchProps.limit)) }}>Previous</a>
                     </li>}

                     <li className="page-item">
                        <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); dispatch(minOffset()) }}>1</a>
                     </li>
                     <li className="page-item">
                        <a className="page-link" href="#">2</a>
                     </li>
                     <li className="page-item">
                        <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); dispatch(maxOffset()) }}>{Math.ceil(1118 / fetchProps.limit)}</a>
                     </li>
                     {fetchProps.offset + fetchProps.limit >= 1118 ? <li className="page-item disabled">
                        <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); dispatch(plusOffset(fetchProps.limit)) }}>Next</a>
                     </li> : <li className="page-item ">
                        <a className="page-link" href="#" onClick={(e) => { e.preventDefault(); dispatch(plusOffset(fetchProps.limit)) }}>Next</a>
                     </li>}

                  </ul>
               </nav>
            </div>
         </div>
      </main>
   )

}

export default Main