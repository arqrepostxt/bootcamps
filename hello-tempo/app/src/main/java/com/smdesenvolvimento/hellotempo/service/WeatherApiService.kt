package com.smdesenvolvimento.hellotempo.service

import com.smdesenvolvimento.hellotempo.data.WeatherResponse
import retrofit2.http.GET
import retrofit2.http.Query

interface WeatherApiService {
    @GET("weather")
    suspend fun getWeatherData(
        @Query("lat") latitude: Double,
        @Query("lon") longitude: Double,
        @Query("appid") apiKey: String
    ): WeatherResponse // Define the response model for this endpoint
}