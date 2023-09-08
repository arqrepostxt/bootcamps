/* eslint-disable no-unused-vars */
import React, { memo, useRef } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'
import LogoImg from '../../../assets/images/logo.png'

const navigatorHasShare = navigator.share


function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data
  
  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div id="region">{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )



  const copyInfo = () => {
    
    var gcountry = document.querySelector(`#actCountry`).textContent;
    navigator.clipboard.writeText( `País : ${gcountry} - 
    Casos: ${cases} - Recuperados: ${recovered} - Mortes : ${deaths} -  
    Mortes hoje: ${todayDeaths}  - Novos casos hoje : ${todayCases} `);
  }



  const shareInfo = () => {
    var gcountry2 = document.querySelector(`#actCountry`).textContent;

    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: `País : ${gcountry2}
        - Casos: ${cases} - 
        - Recuperados: ${recovered} - 
        - Mortes : ${deaths} -  
        - Mortes hoje: ${todayDeaths} - 
        - Novos casos hoje : ${todayCases} `,
      url: 'https://shcdispcov19.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        COPIAR INFORMAÇÕES
      </Button>
    </div>
  )

  return (
    <Card >
      <CardPanelContentStyled id="instabg">
        <div>
          <Typography variant="h5" component="span" color="primary"> <img src={LogoImg} alt={`Logo SHC Disp }`} /></Typography><br></br>
          <Typography variant="h6" component="span" color="primary">Painel de Casos de Covid-19</Typography><br></br>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <h3>SELECIONAR REGIÃO</h3>
            <Select id="actCountry" onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)