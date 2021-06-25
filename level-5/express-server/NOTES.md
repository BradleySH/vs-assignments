# Intro to Express

# Initialize a new node project
-npm init -y 

-npm install express --save its default and not necessary to save

#Vocabulary 


    # Route
    * an event listener for http requests



    # Endpoint
    * "/item"  "/user"


    # PORT
    * localhost:9000/

    #Nodemon
    * npm install -g nodemon

    ----------------------------------------------

# Intro to REST API acrchitecture

    # REST - Representational State Transfer

    # RESOURCE- Single item (object) in a database
    /user

    # COLLECTION - A collection of similar items in a database
    /users

    # BASE (root) URL - http://amazon.com/

    # API ENDPOINT - http://amazon.com/movies/ffh889tg999t9 get the id

    #PARAMETERS - /movies/:movieId

    #QUERY (QUERY STRING) - /movies?genre=action&year=1999

    # CLIENT - Frontend

    # SERVER - Intermediary 

    # REQUEST METHOD - CRUD - GET POST PUT DELETE

    ---------------------------------------------------

# Middleware - a function that fires on the inbetween

# Request Body (req.body)

#UUID - creates unique ID
    - npm install uuid


---------------------------------------------------------

# Express Router - Enables to modularize our routes in express

# modular file organization - 