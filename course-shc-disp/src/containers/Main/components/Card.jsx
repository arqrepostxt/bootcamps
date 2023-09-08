import React, { memo } from 'react'
import { Card as CardUI } from '../../../components'
// Na aplicação os Cards são elementos de cartões do Material UI apresentandos como a área destinada para exibição das estatísticas carregadas
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'


function Card({ value, label, color, gocolor }) {
  return (
    <CardUI id={gocolor} >
      <CardContentStyled color={color}>
        <LabelStyled>{label}</LabelStyled>
        <ValueStyled>{value}</ValueStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)