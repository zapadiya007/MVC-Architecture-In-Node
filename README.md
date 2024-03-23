# MVC-Architecture-In-Node

The Project created using nodejs, express and mysql to help out those who wants to follow mvc structure for the nodejs project.

<br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

<br>

### Prerequisites

What things you need to install the software and how to install them

```
git clone https://github.com/zapadiya007/MVC-Architecture-In-Node.git

npm install
```


<br><br>
## Built With

* [Nodejs](https://nodejs.org/en/docs/) - The Backend framework used
* [Express](https://expressjs.com/) - The web framework used
* [Mysql](https://www.mysql.com/) - The database used.


<br><br>
### Authors

* **Ashish Zapadiya** - *Initial work* - [zapadiya007](https://github.com/zapadiya007)


See also the list of [contributors](https://github.com/zapadiya007/MVC-Architecture-In-Node) who participated in this project.


<br><br><br>
### MVC Folder Structure :

```bash
.
├── config
│   └── dbConnection.js
├── controllers
│   ├── 404Controller.js
│   ├── homeController.js
│   └── userController.js
├── index.js
├── models
│   └── userModel.js
├── package.json
├── package-lock.json
├── public
│   ├── assets
│   ├── css
│   │   ├── 404Page.css
│   │   ├── aboutPage.css
│   │   └── homePage.css
│   └── javascript
│       ├── 404Page.js
│       ├── aboutPage.js
│       └── homePage.js
├── README.md
├── routes
│   ├── rootRoute.js
│   └── userRoute.js
└── views
    ├── common
    │   ├── footer.ejs
    │   └── head.ejs
    └── pages
        ├── 404Page.ejs
        ├── aboutPage.ejs
        └── homePage.ejs

```
