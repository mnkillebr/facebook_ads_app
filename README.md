## Social Media Ad Reference

This project was designed to provide reference to the social media advertisements deemed Russian interference during the US 2016 election. You can access all of the files for direct download, or you can use the reference table to search and filter data from the files. The reference table is paginated. If you search for the Ad ID or add filter(s) and do not see results, try increasing the rows per page and/or moving to another page in the table. You can also sort the ads (ascending or descending) based on the number of clicks or impressions, as well as the date posted or Ad ID.

You may also refer to the original source [here](https://intelligence.house.gov/social-media-content/social-media-advertisements.htm)

### Backend
A backend was added using Node.js, Express.js and Mongo DB Atlas cloud storage. To connect to the server, cd into the backend directory and run `npm i` to install node modules then run `npm start`. The code can be found [here](https://github.com/mnkillebr/facebook_ads_app_backend)

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

There is no backend API used for this project as data is provided in a JSON file. You will need to run 
`json-server --watch index.json` on port 3000 in order for the app to work.

### Running the app

Once the server is up you can run `npm start`. The console may prompt you to run on another port. Make sure to select 'Yes'.

### Author
Marcus Killebrew
