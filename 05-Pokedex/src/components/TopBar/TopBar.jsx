import "./TopBar.css";
import pokeball from "../../Img/pokeball.png"
import pokeballColor from "../../Img/pokeballcolor.png"


export const TopBar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokédex</p>
        <div className="caught-seen">
          <div className="cought">
            <img src={pokeballColor} alt="pokeball" width={30} style={{marginRight : "10px"}} />
            <p>438</p>
          </div>
          <div className="seen">
            <img src={pokeball} alt="pokeball" width={30} style={{marginRight : "10px"}} />
            <p>649</p>
          </div>
        </div>
      </div>
    </div>
  )
}
