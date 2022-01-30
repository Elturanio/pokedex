import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { handleInput, showPokemon, changeLimit } from "../redux/actions"

import "../styles/header.css"



function Header() {

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const inputValue = useSelector((state) => state.input)

   const handleSubmit = (name) => {
      dispatch(showPokemon(name))
      navigate("/pokemon")
   }
   const handleButtons = (count) => {
      dispatch(changeLimit(count))
      navigate("/")
   }

   return (
      <header className="header bg-black text-primary">
         <div className="container-xxl">
            <div className="header row justify-content-between">

               <div className="logo col-md-2 col-sm-12"><Link to="/">PokedeX 2</Link></div>

               <div className="col-sm-12 col-md-7 menu">
                  <div onClick={() => handleButtons(10)} className="col-2 menu-item">10</div>
                  <div onClick={() => handleButtons(20)} className="col-2 menu-item">20</div>
                  <div onClick={() => handleButtons(50)} className="col-2 menu-item">50</div>
               </div>

               <div className="search-input col-sm-6 col-md-3 mt-2 mb-2">
                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e.target.pokemonName.value) }}>
                     <input type="text"
                        name="pokemonName"
                        placeholder="input pokemon name"
                        className="form-control"
                        value={inputValue}
                        onChange={(e) => dispatch(handleInput(e.target.value))} />
                     <input type="submit" hidden />
                  </form>
               </div>

            </div>
         </div>
      </header>
   )
}

export default Header;