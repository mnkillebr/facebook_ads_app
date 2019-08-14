## Social Media Ad Reference

This project was designed to provide reference to the social media advertisements deemed Russian interference during the US 2016 election. You can access all of the files for direct download, or you can use the reference table to search and filter data from the files. The reference table is paginated. If you search for the Ad ID or add filter(s) and do not see results, try increasing the rows per page and/or moving to another page in the table. You can also sort the ads (ascending or descending) based on the number of clicks or impressions, as well as the date posted or Ad ID.

You may also refer to the original source [here](https://intelligence.house.gov/social-media-content/social-media-advertisements.htm)

### Demo
[demo](https://youtu.be/mBnMHBpuKt0)

### Getting Started

To get started, you may clone the repo. Once inside the directory, you will need to install the following packages:
* `npm i @material-ui/core`  for Material UI Framework
* `npm i @material-ui/icons` for Material UI Icons
* `npm i moment` for formatting Date
* `npm i react` React standard
* `npm i react-bootstrap` for additional UI styles based on Bootstrap Framework
* `npm i react-router-dom` for client-side routing
* `npm i react-dom` React standard
* `npm i react-scripts` React standard

### Running the server

You can run a JSON server for the application with the provided JSON file. You will need to run `json-server --watch index.json` on port 3000 in order for the app to work.

### Backend

A backend was later added using Node.js, Express.js and Mongo DB Atlas cloud storage. The code can be found [here](https://github.com/mnkillebr/facebook_ads_app_backend). Keep in mind that the code here is for demonstration. Thus, the connection URL to the mongodb client, as well as the database and collection names are not provided. 

Setting up the cloud database is rather simple if you follow the prompts during set up. You can test things with a free cluster. You can try it [here](http://www.mongodb.com/cloud/atlas). It is recommended to refer to the [docs](https://docs.atlas.mongodb.com/) if you encounter issues. 

Once the database is set-up you can import the provided json file to the cluster you created.

### Running the app

Once the server is up you can run `npm start`. The console may prompt you to run on another port. Make sure to select 'Yes'.

### Author
Marcus Killebrew
