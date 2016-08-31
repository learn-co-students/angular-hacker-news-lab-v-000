## Instructions

(STATE ---- 'TOP')
<!-- 1. Create a state for the "top stories". -->

<!-- 2. Grab all the top stories from the URL `https://hacker-news.firebaseio.com/v0/topstories.json` (500 IDs) -->

<!-- 3. Create a service, and a method to grab all the top stories. -->

<!-- 4. Then create a method to grab information about a single post by it's ID. This should hit `https://hacker-news.firebaseio.com/v0/item/{id}.json`. -->

<!-- 5. Display a list of 30 posts on the top stories -->

<!-- 6. Put two links at the bottom to change to the next/previous page. -->

<!-- 7. Each top story should have it's URL displayed along with the amount of comments and the score. -->


(STATE --- 'POST')
<!-- 1. Create another route to view a post with a given ID. This should make a request to the same URL above. -->

<!-- 2. Display the same information for each item (URL, comments, score). -->

<!-- 3. Each post has an array of `kids`. This is a list of comments inside the post. These again, are items, so to retrieve the info for the comment, we hit the same URL - `https://hacker-news.firebaseio.com/v0/item/{id}.json`. We can tell stories and comments apart by the `type` property. -->

<!-- 4. Create a component to display the comments - this should grab data from the URL on initialisation. The comments contents are provided to use in HTML, however Angular doesn't allow us to inject HTML into our templates from a variable. Use the `ngSanitize` module to allow us to do this (hint: we need to use `ng-bind-html`). -->

<!-- Each kid (comment) might have kids (comments) inside it - so each comment should actually call the comment component inside of it. This means we've got a recursive component - awesome! -->

<!-- There are simple styles for you to use inside `app.css` to make it look pretty! -->

## Resources

- [ngSanitize](https://docs.angularjs.org/api/ngSanitize)
