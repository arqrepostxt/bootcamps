import { createGlobalStyle } from 'styled-components'
import WorldImg from '../../assets/images/world.jpg'


const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${WorldImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  

  .MuiPaper-root{
    background-color:#2c050573;
    color:#ffe300;
  }


  // Cor do Botão para copiar
  .MuiButton-containedPrimary{
    color:#00008B;
    font-weight:bold;
    background-color:#e6e6e6;
  }

  // Estilo com hover do Botão para copiar
  .MuiButton-containedPrimary:hover{
    background-color:#00008B;
    color:#e6e6e6;
    border: 3px white solid;
  }

// Card de título
  #instabg{
    background-color:#00008B;
  }

  .MuiInputBase-input{
    color: #e6e6e6;
  }

  .MuiTypography-colorPrimary{
    color: #d6cf44;
  }

  .MuiInputBase-root{
    color: #0d97ff;
  }

 
  // Fundo da Lista de regiões selecionada
  .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover{
    background-color: #365299;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }

`

export default globalStyle