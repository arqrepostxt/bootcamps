package com.smdesenvolvimento.hellotempo

import android.Manifest
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.os.Bundle
import android.widget.RadioGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.smdesenvolvimento.hellotempo.service.WeatherApiService
import com.smdesenvolvimento.hellotempo.utils.ApiKeys
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.TimeZone

class MainActivity : AppCompatActivity() {

    private lateinit var tv_cityNameTextView: TextView
    private lateinit var tv_cityTemperatureTextView: TextView
    private lateinit var tv_cityTimeTextView: TextView
    private lateinit var fusedLocationClient: FusedLocationProviderClient

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setupView()

        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
        requestLocationPermission()

        val languages = arrayOf("English", "Spanish", "French", "Portuguese")
        val radioGroup = findViewById<RadioGroup>(R.id.radio_group_language)

        radioGroup.setOnCheckedChangeListener { group, checkedId ->
            val selectedLanguageCode = when (checkedId) {
                R.id.radio_english -> "en"
                R.id.radio_spanish -> "es"
                R.id.radio_french -> "fr"
                R.id.radio_portuguese -> "pt"
                else -> "en" // Default to English
            }

            val locale = Locale(selectedLanguageCode)
            Locale.setDefault(locale)

            val configuration = Configuration()
            configuration.setLocale(locale)
            resources.updateConfiguration(configuration, resources.displayMetrics)

            updateUIText()

        }
    }

    private fun updateUIText() {
        // Fetch translated strings from resources and update UI elements
        val text1 = findViewById<TextView>(R.id.tv_localLocationTextView)
        text1.text = getString(R.string.local_location)
        val text2 = findViewById<TextView>(R.id.tv_localWeatherTextView)
        text2.text = getString(R.string.local_weather)
        val text3 = findViewById<TextView>(R.id.tv_localtimeTextView)
        text3.text = getString(R.string.local_time)

    }

    fun fahrenheitToCelsius(fahrenheit: Double): Double {
        return (fahrenheit - 32) * 5 / 9
    }


    private fun setupView() {
        tv_cityNameTextView = findViewById(R.id.tv_cityNameTextView)
        tv_cityTemperatureTextView = findViewById(R.id.tv_cityTemperatureTextView)
        tv_cityTimeTextView = findViewById(R.id.tv_cityTimeTextView)
    }



    private fun requestLocationPermission() {
        if (ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
                LOCATION_PERMISSION_REQUEST_CODE
            )
        } else {
            getLocation()
        }
    }

    private fun getLocation() {
        if (ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return
        }
        fusedLocationClient.lastLocation
            .addOnSuccessListener { location ->
                if (location != null) {
                    val latitude = location.latitude
                    val longitude = location.longitude
                    fetchWeatherData(latitude, longitude)
                }
            }
    }

    private fun fetchWeatherData(latitude: Double, longitude: Double) {
        val retrofit = Retrofit.Builder()
            .baseUrl("https://api.openweathermap.org/data/2.5/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val weatherApiService = retrofit.create(WeatherApiService::class.java)
        val apiKey = ApiKeys.OPEN_WEATHER_MAP_API_KEY

        GlobalScope.launch(Dispatchers.Main) {
            try {
                val response = weatherApiService.getWeatherData(latitude, longitude, apiKey)
                val cityName = response.name
                // Temperature Kelvin to F and C
                val temperatureKelvin = response.main.temp
                val temperatureCelsius = temperatureKelvin - 273.15
                val temperatureCelsiusFormatted = String.format("%.1f", temperatureCelsius)
                val temperatureCelsiusWithSymbol = "$temperatureCelsiusFormatted °C"
                val temperatureFahrenheit = (temperatureKelvin - 273.15) * 9/5 + 32
                val temperatureFahrenheitFormatted = String.format("%.1f", temperatureFahrenheit)
                val temperatureFahrenheitWithSymbol = "$temperatureFahrenheitFormatted °F"

//                RETRIEVED TIMEZONE
//                val utcOffsetSeconds = response.timezone
//                TODO("Add feature to search location and apply Timezone from the location")
                val currentUtcTimeMillis = System.currentTimeMillis()
                val utcOffsetMillis = -3 * 60 * 60 * 1000L // UTC-3 offset in milliseconds

                val localTimeMillis = currentUtcTimeMillis + utcOffsetMillis

                val dateFormat = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault())
                dateFormat.timeZone = TimeZone.getTimeZone("UTC-3")
                val localTimeString = dateFormat.format(Date(localTimeMillis))
                tv_cityTimeTextView.text = localTimeString

                tv_cityNameTextView.text = cityName

                val userLocale = Locale.getDefault()
                val language = userLocale.language
                if (language == "en") {
                    tv_cityTemperatureTextView.text = temperatureFahrenheitWithSymbol
                } else {
                    tv_cityTemperatureTextView.text = temperatureCelsiusWithSymbol
                }

            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == LOCATION_PERMISSION_REQUEST_CODE) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                getLocation()
            } else {
            }
        }
    }

    companion object {
        private const val LOCATION_PERMISSION_REQUEST_CODE = 1001
    }
}

