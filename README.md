<h3 align="center">Hodinkee Challenge</h3>

<p align="center">
  Conde Challenge for job application. 
  <br />
  Juan Pablo Paredes
</p>


## About the project

The current code allow to show a basic CRUD over a Blog System and also includes the necesary code to extract remote posts.


## What's included

Within the download you'll find the following directories and files, logically grouping common assets. You'll see something like this:

```text
src/
├── Constants.js          --> This file was created to manage all configuration variables. For example API KEYS, endpoints to get results etc.
├── Router.jsx            --> File to manage all possible routes in the applications. This allow to have a routing system with scalable projection.
├── components/
│   ├── Main.jsx          --> This allow us to manage a common template to navigate throught the site, connecting different components in a unique place.
│   ├── ExternalPosts.jsx --> Page to manage and extract posts from external websites in this case all requests come from gnews.com
│   ├── LocalPosts.jsx    --> Similar to External Posts however this includes CRUD operations saving posts in local variables (localStorage).
│   ├──common/            --> This file contents all code used for other components. For example for Local and External Posts all components related to visualization are shared.
│       ├──ArticleCard.jsx --> Component created to show an article. This is shared for the other components.
│       ├──Base64Image.jsx --> This component allows to codify images to base64. With this information the image can be saved in local variables with as a better approach.
├── common/                --> In this folder all assets are included like css, images, etc.
├── apis/                  --> Folder created to allocate files related with apis consumption. For this excersice in special methos related with crud simulations are listed too.
    ├── CrudService.js     --> Service implemented to get external posts and manage local storage too.



```

## Live Example

If you want to explore a working example please go to the following Link: http://78.46.205.38/


