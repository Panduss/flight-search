# Flight-search <br>

A simple React app to search flights using Schiphol's API

# Disclaimer

I was not able to make the app it work while CORS is enabled in the browser. I get ```Request header field app_id is not allowed by Access-Control-Allow-Headers in preflight response.``` error. I'm in contact with the API's support team but we weren't able to figure out the problem yet. To run it locally, you must disable same origin policy in Chrome window: 

### Mac
```$ open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security```

### Windows
```$ chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security```

### Linux
```$ google-chrome --disable-web-security --user-data-dir="/tmp/someFolderName"```

# If I had more time
* Figure out the CORS issue
* Extend the date filter with time
* Remove Material ui completely (tried to use as little as possible but I still use it for creating the providing the theme for example)
* Implement resetting search fields
* Implement flight tracking

# Quickstart 🚀
(Assuming there is a CORS disabled chrome running already)
```$ npm install``` <br>
```$ npm start``` <br>
    
# What packages I choose

  ### SWR
  Because it is fast due to the fact that first it returns the cached data before it revalidates the results.
   
  ### Axios
  Mostly because of the automatic data transformation. 
