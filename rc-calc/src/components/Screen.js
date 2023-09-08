import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from "react-textfit"

  const Screen = () => {
    const { calc } = useContext(CalcContext);
    // A tela exibe o resultado da operação. O código usa um operador condicional ternário foo ? foo : foo
    // teste_lógico ? se_verdade : se_falsa 
      return (
        <Textfit className="screen" max={70} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
      )
  }

export default Screen