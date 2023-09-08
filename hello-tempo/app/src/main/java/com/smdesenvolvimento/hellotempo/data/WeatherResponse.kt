package com.smdesenvolvimento.hellotempo.data

data class WeatherResponse(
    val name: String,
    val timezone: Int,
    val main: MainWeatherData
)

data class MainWeatherData(
    val temp: Double
)
