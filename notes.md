- 'top' state
  - gets array of top stories from HN API
  - displays 30 posts at a time with pagination (by slicing the array)
  - each post should show: URL, # of comments, and overall score

- 'post' state
  - gets info about a single post from HN
  - shows URL, # of comments, and overall score
  - also shows comment threads for the post

[x] basic setup
[] inspect API data with Postman
[] consider structure (controller for fetching data, and... component for the ng-repeat? Where does pagination live?)
