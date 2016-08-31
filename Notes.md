WHERE DO I BEGIN

First, establish your file structure (this will change/grow/update):
js
|-app/
|---controllers/
|-----TopStoriesController.js
|---directives/
|---services/
|---app.js
|-angular-ui-router.js
|-angular.js
|-views/
|---top-stories.html


first up, we know we need to create a state for the top stories. we'll need to add ui.router as a dependency in our main app, and configure these routes. Configuration requires a url ('/top'), a templateUrl ('/views/top-stories.html'), and a controller ('TopStoriesController') which we've set as 'top'.

CONNECTIONS
TopStoriesController.hello = "hello"
{{ top.hello }} in top-stories.html = "hello"

groovy! we can see that our app has been configured with the state '/top', using the controller TopStoriesController, because our top-stories view is successfully rendering {{ top.hello }}

Our next order of business is grabbing the data from the first API endpoint - https://hacker-news.firebaseio.com/v0/topstories.json

This will be done again through our module configuration, using our resolve function. But first, it's a best practice to make API calls through a service, not a controller, so let's create a StoryService that will make our $http.get() call (don't forget to inject $http into our service!)

I've created the .getItems() function that will return the data retrieved from our API call. Awesome. We have a way of grabbing this data, but we haven't actually utilized this method in our app, nor have we rendered the data. Time to resolve.

In our 'top' state, we add the resolve property which takes an object. the key of this object we'll call 'items', and the value is a function (don't forget to inject our StoryService!). This function calls on our StoryService.getItems() and returns the retrieved data. Now the data we've grabbed from the api lives in the key 'items', but how do we render it in the view?

We need to inject 'items' into our TopStoriesController! By setting this.items = items, we can now access the data in our view - try it out: {{ top.items }} should render an array of IDs. nice!

Now. we have the array, but we want to render something more interesting than just the article ID. This is where our second $http call comes in. But first, how will we know which ID we're gathering information for? We have 30 API calls to fire off, and 30 stories to render - sounds like a directive. But again - how will we know which ID to use?

To start, we're rendering top-stories.html based on our ui-routing state ('/top'). Within top-stories.html, we have a div containing an ordered list, the list items of which are bound to our TopStoriesController's limitThirty array via an ng-repeat of item in top.limitThirty. As we know, our array is just IDs, so each item value corresponds to a story ID.

Within this li I've placed the top-stories-directive with an attribute id='item'.This is important!!!! Yes, I was tempted multiple times to make the id='{{item}}' to get the raw data value, but this ultimately doesn't work... (let's research another time). However, when you set the id='item', you can then bindToController: {id: '='}, and a call to this.id in your controller will yield our story ID!!! No need to define a new scope - set it to an empty array. Now, through our directive's controller, we can make our secondary API call using our Story Service, setting the returned data equal to an accessible variable in our controller. We are now ready to render!
