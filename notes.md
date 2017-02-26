- 'top' state
  - gets array of top stories from HN API
  - displays 30 posts at a time with pagination (by slicing the array)
  - each post should show: URL, # of comments, and overall score

- 'post' state
  - gets info about a single post from HN
  - shows URL, # of comments, and overall score
  - also shows comment threads for the post

[x] basic setup
[x] inspect API data with Postman
    https://hacker-news.firebaseio.com/v0/topstories.json
      -list of IDs
      -need to request info separately
    https://hacker-news.firebaseio.com/v0/item/{id}.json
      -has 'kids' property which is another list of IDs
      -need to make a call for each kid ID and its kid IDs (if present) until the full comment thread is displayed
      -comments come through containing HTML so special handling is required (ngSanitize, ng-bind-html)
[] consider structure (controller for fetching data, and... component for the ng-repeat? Where does pagination live?)
