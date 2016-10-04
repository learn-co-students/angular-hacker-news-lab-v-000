#NOTES

1. add Angular to the JSON package
2. create `/js`, `js/app`, `js/app/controllers` directories
3. create `app.js` file - add module and dependencies ('ui-router')
4. extract `angular.js` file and added to js folder and a controller inside
of `/controllers`
5. add angular-ui-reouter.js to js folder
6. add `ng-app` to html file and ``<ui-view>`` where needed
7. add scripts to html file

```html
<script src="js/angular.js"></script>
<script src="js/angular-ui-router.js"></script>
<script src="js/angular-sanitize.js"></script>
<script src="js/app/directives/dirPagination.js"></script>
<script src="js/app/app.js"></script>
<script src="js/app/controllers/HomeController.js"></script>
<script src="js/app/controllers/PostController.js"></script>
```
8. add .config to app - Routes(states)
9. set pagination (if needed) with `npm install angular-utils-pagination`, relocate files, then assign script

```html
<!-- add the correct route -->
<script src="js/dirPagination.js"></script>
```
then use it in your html file:

```js
// in your app
angular.module('myApp', ['angularUtils.directives.dirPagination']);
```

```html
<ul>
    <li dir-paginate="item in items | itemsPerPage: 10">{{ item }}</li>
</ul>

<!-- then somewhere else on the page ....-->
<dir-pagination-controls></dir-pagination-controls>
```

10. add factory
11. add views
12. assign controllers to routes
