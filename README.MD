# **GDC Playtime Web Application**

This is a full stack web application built using [React.js](https://reactjs.org/), [Redux.js](https://redux.js.org/) & [Node.js](https://nodejs.org/en/).

## **Technologies**

1.  [React.js](https://reactjs.org).
2.  [Redux.js](https://redux.js.org).
3.  [Express.js](https://expressjs.com).
4.  [Node.js](https://nodejs.org/en/).
5.  [MongoDB](https://www.mongodb.com).
6.  [Webpack](https://webpack.js.org).
7.  [Yarn](https://yarnpkg.com/en/)
8.  [Json Web Token](https://jwt.io).
9.  [Bootstrap](https://getbootstrap.com).
10. [react-google-maps (Google Maps API - React)](https://github.com/tomchentw/react-google-maps).

## **Features**

-   Sign-In & Sign-Up.
-   Make & Find dog playdate appointments.

# **Good to know**

**Error & Status Codes:**

**Codes 2xx:**

-   Code: 200 (_OK_)

        Indicates that the REST API successfully carried out the requested action, 
        the methods used in these requests are (GET, HEAD, POST, TRACE).
-   Code 201 (_Created_)

        The REST API responds whenever a resource is created.
-   Code 202 (_Accepted_)

        Typically used for long processes such as loading a page, 
        authenticating information or an batch-oriented process etc.
-   Code 204 (_No Content_)

        Sent to a PUT, POST or DELETE Request when the REST API declines 
        to send back any status message or response overall.

**Codes 3xx:**

-   Code 301 (_Moved Permanently_)

        Indicates that the REST APIs resource model has been modified ,
        and a new permanent URI has been assigned the the resource.
-   Code 302 (_Found_)

        HTTP Response 302 is a common way of performing URL redirection.
-   Code 303 (_See Other_)

        Indicates that a controller resource has finished its work, 
        but instead of sending a potentially unwanted response body, it 
        sends the client URI of a response resource.
-   Code 304 (_Not Modified_)

        Used when the resource has not been modified 
        since the version specified by the request headers 
        If-Modified-Since or If-None-Match
-   Code 307 (_Temporary Redirect_)

        Indicates that the REST API is not going to process the clients request. 
        Instead, the client should resubmit the request to the
        URI specified by the response message’s Location header

**Codes 4xx:**

-   Code 400 (_Bad Request_)
        
        The generic client-side error status used 
        when no other 4xx is appropiate.
-   Code 401 (_Unauthorized_)

        Indicates that the client tried to operate on a protected resource
        without providing the proper authorization.
-   Code 403 (_Forbidden_)

        Indicates that the clients request is formed correctly, 
        but the REST API refuses to hono it i.e. 
        the user does not have the necessary permissions for the resource.
-   Code 404 (_Not Found_)

        Indicates that the REST SPI can't map the clients URI to a resource,
        but may be available in the future.
-   Code 405 (_Method Not Allowed_)

        Indicates that the client tried to use an HTTP method that the resource does not allow i.e.
        a read-only resource could support only GET and HEAD, 
        while a controller resource might allow GET & Post, but not PUT & DELETE.
-   Code 406 (_Not Acceptable_)

        Indicates that the API is not able to generate any of the clients preferred media types,
        as indicated by the Accept request header.
-   Code 412 (_Precondition Failed_)

        Indicates that the client specified one or more preconditions in its request headers, 
        effectively telling the REST API to carry 
        out its request onlt if certain conditions were met.
-   Code 415 (_Unsupported Media Type_)

        Indicates that he API is not able to process the client's supplied media type,
        as indicated by the content-Type request header.

**Codes 5xx:**

-   Code 500 (_Internal Server Error_)

        Most web frameworks automatically responds with this reponse status code,
        whenever they execute som request hadler code that raises an exception.
-   Code 501 (_Not Implemented_)

        The server either does not recognize the request method, 
        or it lacks the ability to fulfill the request.

## **Installation**

-   Git clone this [Repo](https://github.com/MinikLambrecht/Gui-Project).
-   Then Install the dependencies from the terminal in   the root folder.

        $ npm install
-   The final step is to install nodemon globally and run the app from the root folder.

        $ npm install -g nodemon
        $ npm run start:dev

## Software used

-   [PHP](http://php.net/downloads.php) - PHP Framework
-   [Composer](https://getcomposer.org/download/) - PHP Dependency Manager
-   [MongoDB Compass](https://www.mongodb.com/products/compass) - Database Management
-   [GitBash](https://git-scm.com/downloads) - Terminal of choice (optional)
-   [Atom.io](https://atom.io/) - Editor of choice (optional)

## Authors

-   **Minik Gaarde Lambrecht** - _Developer_

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

-   This project has been a huge help [This](https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/) example.
