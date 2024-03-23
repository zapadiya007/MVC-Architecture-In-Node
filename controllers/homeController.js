const homePage = (req, res) => {


    // res.send("home page");
    res.render('pages/homePage');
}


const aboutPage = (req, res) => {

    // res.send("about page");
    res.render('pages/aboutPage');
}

module.exports = {
    homePage,
    aboutPage
}