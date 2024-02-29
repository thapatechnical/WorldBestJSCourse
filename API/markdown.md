# API Project Steps

## Step 1: Select DOM Elements

- Select DOM elements for displaying weather information using appropriate query selectors.

## Step 2: Fetch Weather Data

- Define a function to fetch weather data from the OpenWeatherMap API using the `fetch` API.
- Extract relevant data from the API response such as temperature, humidity, wind speed, etc.

## Step 3: Review API Data

- Review the structure of the API response to understand the data available for display.

## Step 4: Display City Name

- Display the city name along with its country code using the provided API data.

## Step 5: Format Date and Time

- Format the timestamp provided by the API into a human-readable date and time format.

## Step 6: Display Additional Weather Details

- Display additional weather details such as temperature, minimum and maximum temperature, feels like temperature, humidity, wind speed, and pressure.

## Step 7: Handle City Search

- Implement functionality to allow users to search for weather information of different cities.
- Add event listeners to handle city search input and trigger the weather data fetching function accordingly.

## Step 8: Add Styling (Optional)

- Apply CSS styling to the weather display elements to improve the visual presentation of weather information.

## Step 9: Error Handling (Optional)

- Implement error handling mechanisms to gracefully handle errors that may occur during the API request or data processing.

## Step 11: Documentation

- Document the codebase, including function descriptions, variable names, and any implementation details, for better readability and maintainability.

## Step 12: Deployment

- Deploy the application to a web hosting platform or server to make it accessible to users over the internet.

<!--? The Intl object is part of the Internationalization API in JavaScript. It provides language-sensitive string comparison, number formatting, and date and time formatting. -->

<!--? The convertCountryCode function takes a country code as input and returns the corresponding full name of the country in English. It utilizes the Intl.DisplayNames API, which is part of the Internationalization API in JavaScript. -->

<!-- The .of(country) method is immediately called on the Intl.DisplayNames object to retrieve the country name corresponding to the provided country code. -->

<!-- The Unicode character &#176; represents the degree symbol (°). In HTML, it is used to display temperature values, angles, or other measurements in degrees. -->

<!-- // search the city
citySearch.addEventListener("change", (e) => {
  //   console.log(e.target.value);
  city = e.target.value;
  getWeatherData();
}); -->
