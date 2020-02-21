Olive Garden restaurant is an web application representing an restaurant web site.

The functionality supports full menu overview and user profile management(including cart operations) and uses CRUD operations .

The front-end part is build on Angular, using route protection(such as user profile and cart), global error handling, directives(build in and custom), pipes, reactiveforms(and its validations).

The back-end part is build on node js, using Express(usig the MVC pattern) with Jason Web Token verification on the protected back-end routes and bcrypt for password hashing.

MongoDB withMongoose ORM is being used for a database storage.