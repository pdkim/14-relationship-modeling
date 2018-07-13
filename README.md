##Travis:
[![Build Status](https://travis-ci.com/pdkim/14-relationship-modeling.svg?branch=pk14)](https://travis-ci.com/pdkim/14-relationship-modeling)

##Heroku:
https://pk14-relationship-modeling.herokuapp.com/

##Github: 
https://github.com/pdkim/14-relationship-modeling


##Feature:
Using the same application for lab 13, this should be able to find data that is connected to another set of data.  This app should use the popukate method during its functionality.

###Intructions:
1. Go to the github link and clone the repository. You may want to fork prior to cloning the repository.
'npm install' before running anything.
2. If you haven't already, install mongo. Once installed or already installed, run mongod to get mongo up and running.
3. Create a .env file with the following content: 
  PORT=3000 
  MONGODB_URI="mongodb://localhost/lab-14"
4. In another terminal, 'nodemon index.js' to start server.
5. In postman, have a tab for POST, GET, and PUT at the following url: http://localhost:3000/api/v1/workers
6. Go to POST tab and select Body > Raw. Copy the following information (you can change values on the right as you like): 
  {
    "firstName" : "Phil", 
    "lastName" : "Kim", 
    "hourlyWage" : "100" 
    }
  Press POST. You should now recieve a valid object (workers).
7. Open a new POST tab at the url, http://localhost:3000/api/v1/company, and select Body > Raw. Copy the following information (name can be anything but the id should be the id created from the worker object above):
  {
	 "name":"Microsoft",
	 "employee":"worker_id"
  }
  Press POST and a new company object should be created.
8. Open 2 new GET tabs with the following URLs (change ids to the id generated in the POST tabs):
  - http://localhost:3000/api/v1/workers/id
  - http://localhost:3000/api/v1/company/id
  Press GET and you should retrieve the newly generated objects.  Company should have populated the worker information.
9. Open 2 new PUT tabs at the same URLs as step 8 and update the body information.  Ensure they follow the same format as step 6 and 7.
10. Press PUT on both and go back to GET tabs and GET.  You should now have the objects with updated data.
11. Open 2 new DELETE tabs using the URLs in step 8.  Press DELETE on both or worker first, then company.
12. Go back to GET tabs and GET.  Both objects should no longer exist. 