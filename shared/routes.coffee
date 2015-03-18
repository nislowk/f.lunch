Router.configure
  autoRender: false
  autoStart: false

Router.configure
    progressSpinner : false

#
# Public Routes
#
@PublicController = RouteController.extend
  layoutTemplate: "frontPage"
  loadingTemplate: "loading"

Router.route "/about",
  controller: "PublicController"

Router.route "/sign-in",
  name: "accounts.signIn"
  template: "signIn"
  controller: "PublicController"

Router.route "/sign-up",
  name: "accounts.signUp"
  template: "signUp" 
  controller: "PublicController"

Router.route "/sign-out",
  action: ->
    Meteor.logout ->
      Router.go "/sign-in"

#
# Dashboard Routes
#
@DashboardController = RouteController.extend
  layoutTemplate: "homePage"
  loadingTemplate: "loading"
  onBeforeAction: ->
    if Meteor.loggingIn()
      @render "loading"
    else if Meteor.user()
      @next()
    else
      @redirect "/"

Router.route "/",
  name: "home"
  action: ->
    if Meteor.user()
      @layout "homePage"
      @render "splash"
    else
      @redirect "/sign-in"

Router.route "/vote",
  name: "accounts.vote"
  template: "create" 
  controller: "DashboardController"


Router.route "/order",
  name: "accounts.order"
  template: "vote" 
  controller: "DashboardController"