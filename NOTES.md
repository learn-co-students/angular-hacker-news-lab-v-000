## Javascript Directory Structure
```
js/
├── angular-sanitize.min.js
├── angular-ui-router.js
├── angular.js
└── app
    ├── app.js
    ├── components
    │   └── item.js
    ├── controllers
    │   ├── PostsController.js
    │   └── TopStoriesController.js
    ├── services
    │   └── PostsService.js
    └── views
        ├── item.html
        ├── post.html
        └── top_stories.html
```
### This is mainly for organizing my own thoughts on how all the pieces of this project fit together.

The main app resides in the js folder where the angular files are kept in the root, and the application files are in app.

The entry point of this program is the index.html file at the root of the project directory; this loads the top stories as defined in the app.js config default url. This uses the TopStoriesController and resolves the PostsService.getTopStories() function, which grabs all 500 top stories ids from HN. Since we only have the ids, I had to pass each news story id into the Item component that could differentiate whether or not the item was a story or a comment (more on comments later). This component loaded an html template with the information for that item. The main news item title is a link to the actual article, whereas the link below it with all the comment, score, and date data points to a that post page (/post/:id) as defined in the app.js config. This post page uses the PostsController and lists all the information pertaining to the post and below that lists all the comments using the same Item component recursively listing all nested comments as well. The top stories page also utilizes a homebrew pagination function that limits the posts to 30 per page instead of the full 500.
