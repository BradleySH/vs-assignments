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

# URL Parameters
    # Parts of a URL
    * Base - http://amazon.com
    * Endpoint - http://amazon.com/images
    * Parameters - http://images/9709470wnt40
    * Query - 

# Parameters

# URL Queries
# Query String - (typically to filter results)
* Begins with the "?"
* Built of key=value pairs.
* Multiple queries separated by the "&"

-------------------------------------------------------------

# Middleware

    # What is it?
    app.use()
    1. (optional) - mount path (endpoint)
    2. Callback function - recieves the request, response objects, also the "next" function

    # The "next" function
         moves on to the next middleware on the server



     # Console Errors in Express 

     # Use A Logger
     * npm install morgan   



# Comnnecting the front end to the back end

    # Folder Structure
    # Proxy

# Introduction to Mongoose
    # npm install mongoose

    # Purpose
        * Create models
        * Query Data

    # Connect

# Mongoose Schemas
    *Blueprints for our data

#Mongoose Models
    * Models have a Name, and a Blueprint(Schema)
    *Models are used to perform the CRUD operations on data created with the model