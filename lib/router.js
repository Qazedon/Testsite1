Router.configure({
  layoutTemplate:'layout',
  notFoundTemplate:'notFound',
  loadingTemplate:'loading'
});

Router.route("/", {
  name: "homeIndex",
  data: function(){
    return{
      message: "Welcome to Hortus Hub"
    }
  }
});

Router.route("/about", {
  name: "homeAbout"
});

Router.route("/contact", {
  name: "homeContact"
});
