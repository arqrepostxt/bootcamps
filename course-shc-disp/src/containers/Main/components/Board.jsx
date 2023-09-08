import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  
  return (
    <Grid container spacing={4} >
      <Grid item xs={12} md={4} >
        <Card value={ getValue(cases).toLocaleString() } label="Casos" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ getValue(recovered).toLocaleString() } label="Recuperados" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ getValue(deaths).toLocaleString()} label="Total de mortes" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ todayDeaths === 0 ? "0" : getValue(todayDeaths)} label="Mortes hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ todayCases === 0 ? "0" : getValue(todayCases)} label="Casos hoje" color="#F7B829" />
      </Grid>
      
    </Grid>
  )
}

export default memo(Board)