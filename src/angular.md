# Getting started

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
If any of your models have `Date` or `Datetime` type fields or your endpoints have `Date`/`Datetime` type response, you will need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `marvelcomicslib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=MarvelComics-Angular&projectName=MarvelComicsLib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=MarvelComics-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
    var app = angular.module('myApp', []);
    app.controller('testController', function($scope) 
    {

    });
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
	<!DOCTYPE html>
	<html>
	<head>
		<title>Angular Project</title>
		<script></script>
	</head>

	<body>
	</body>

	</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=MarvelComics-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
	<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
	<script src="scripts/angular.min.js" ></script>
	<script src="scripts/moment.min.js" ></script>
	<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
	<head>
		...
		<!-- Helper files -->
		<script src="scripts/marvelcomicslib/Module.js"></script>
		<script src="scripts/marvelcomicslib/Configuration.js"></script>
		<script src="scripts/marvelcomicslib/APIHelper.js"></script>
		<script src="scripts/marvelcomicslib/Http/Client/HttpContext.js"></script>
		<script src="scripts/marvelcomicslib/Http/Client/RequestClient.js"></script>
		<script src="scripts/marvelcomicslib/Http/Request/HttpRequest.js"></script>
		<script src="scripts/marvelcomicslib/Http/Response/HttpResponse.js"></script>

		<!-- API Controllers -->
        <script src="scripts/marvelcomicslib/Controllers/StoriesController.js"></script>
        <script src="scripts/marvelcomicslib/Controllers/SeriesController.js"></script>
        <script src="scripts/marvelcomicslib/Controllers/EventsController.js"></script>
        <script src="scripts/marvelcomicslib/Controllers/CreatorsController.js"></script>
        <script src="scripts/marvelcomicslib/Controllers/ComicsController.js"></script>
        <script src="scripts/marvelcomicslib/Controllers/CharactersController.js"></script>


		<!-- Models -->
        <script src="scripts/marvelcomicslib/Models/BaseModel.js"></script>
        <script src="scripts/marvelcomicslib/Models/ComicSummary.js"></script>
        <script src="scripts/marvelcomicslib/Models/EventList.js"></script>
        <script src="scripts/marvelcomicslib/Models/Url.js"></script>
        <script src="scripts/marvelcomicslib/Models/CreatorList.js"></script>
        <script src="scripts/marvelcomicslib/Models/CreatorSummary.js"></script>
        <script src="scripts/marvelcomicslib/Models/StorySummary.js"></script>
        <script src="scripts/marvelcomicslib/Models/Image.js"></script>
        <script src="scripts/marvelcomicslib/Models/ComicDate.js"></script>
        <script src="scripts/marvelcomicslib/Models/ComicPrice.js"></script>
        <script src="scripts/marvelcomicslib/Models/CharacterList.js"></script>
        <script src="scripts/marvelcomicslib/Models/TextObject.js"></script>
        <script src="scripts/marvelcomicslib/Models/SeriesList.js"></script>
        <script src="scripts/marvelcomicslib/Models/StoryList.js"></script>
        <script src="scripts/marvelcomicslib/Models/CharacterDataContainer.js"></script>
        <script src="scripts/marvelcomicslib/Models/EventDataContainer.js"></script>
        <script src="scripts/marvelcomicslib/Models/EventSummary.js"></script>
        <script src="scripts/marvelcomicslib/Models/CharacterSummary.js"></script>
        <script src="scripts/marvelcomicslib/Models/DateDescriptorEnum.js"></script>
        <script src="scripts/marvelcomicslib/Models/FormatTypeEnum.js"></script>
        <script src="scripts/marvelcomicslib/Models/Thumbnail.js"></script>
        <script src="scripts/marvelcomicslib/Models/ComicList.js"></script>
        <script src="scripts/marvelcomicslib/Models/SeriesSummary.js"></script>
        <script src="scripts/marvelcomicslib/Models/EventDataWrapper.js"></script>
        <script src="scripts/marvelcomicslib/Models/ComicDataContainer.js"></script>
        <script src="scripts/marvelcomicslib/Models/CreatorDataWrapper.js"></script>
        <script src="scripts/marvelcomicslib/Models/StoryDataWrapper.js"></script>
        <script src="scripts/marvelcomicslib/Models/CharacterDataWrapper.js"></script>
        <script src="scripts/marvelcomicslib/Models/ComicDataWrapper.js"></script>
        <script src="scripts/marvelcomicslib/Models/SeriesDataWrapper.js"></script>
        <script src="scripts/marvelcomicslib/Models/SeriesDataContainer.js"></script>
        <script src="scripts/marvelcomicslib/Models/StoryDataContainer.js"></script>
        <script src="scripts/marvelcomicslib/Models/CreatorDataContainer.js"></script>
        <script src="scripts/marvelcomicslib/Models/Event.js"></script>
        <script src="scripts/marvelcomicslib/Models/Character.js"></script>
        <script src="scripts/marvelcomicslib/Models/Story.js"></script>
        <script src="scripts/marvelcomicslib/Models/Series.js"></script>
        <script src="scripts/marvelcomicslib/Models/Comic.js"></script>
        <script src="scripts/marvelcomicslib/Models/Creator.js"></script>

		...
	</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
	<head>
		...
		<script src="scripts/app.js"></script>
	</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
	<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
	...
	<body ng-app="myApp">
		<div ng-controller="testController">
			...
		</div>
		...
	</body>
	...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
    var app = angular.module('myApp', ['MarvelComicsLib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization

### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| referer | TODO: add a description |
| apikey | TODO: add a description |



```JavaScript
// Configuration parameters and credentials
referer = "*.marvel.com";
apikey = "apikey";

```
The Angular App can be initialized as following:
```html
<body ng-app="myApp">
    <div ng-controller="testController">
        ...
    </div>
    ...
</body>
```
> The initialization code will be added inside the `index.html` file (which is the view of the app you have created). More detail about this can be found in the [`How to Use`](#how-to-use) section

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [StoriesController](#stories_controller)
* [SeriesController](#series_controller)
* [EventsController](#events_controller)
* [CreatorsController](#creators_controller)
* [ComicsController](#comics_controller)
* [CharactersController](#characters_controller)

### <a name="stories_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StoriesController") StoriesController

#### Get singleton instance

The singleton instance of the ``` StoriesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	});
```

#### <a name="get_story_individual"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getStoryIndividual") getStoryIndividual

> Fetches a single comic story by id.


```javascript
function getStoryIndividual(storyId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| storyId |  ``` Required ```  | Filter by story id. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var storyId = "storyId";


		var result = StoriesController.getStoryIndividual(storyId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Story not found. |




#### <a name="get_character_story_collection"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getCharacterStoryCollection") getCharacterStoryCollection

> Fetches lists of stories filtered by a character id.


```javascript
function getCharacterStoryCollection(characterId, modifiedSince, comics, series, events, creators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| characterId |  ``` Required ```  | The character ID. |
| modifiedSince |  ``` Optional ```  | Return only stories which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only stories contained in the specified (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only stories contained the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only stories which take place during the specified events (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "id", "modified", "-id", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var characterId = "characterId";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var creators = "creators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = StoriesController.getCharacterStoryCollection(characterId, modifiedSince, comics, series, events, creators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comic_story_collection_by_comic_id"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getComicStoryCollectionByComicId") getComicStoryCollectionByComicId

> Fetches lists of stories filtered by a comic id.


```javascript
function getComicStoryCollectionByComicId(comicId, modifiedSince, series, events, creators, characters, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| comicId |  ``` Required ```  | The comic ID. |
| modifiedSince |  ``` Optional ```  | Return only stories which have been modified since the specified date. |
| series |  ``` Optional ```  | Return only stories contained the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only stories which take place during the specified events (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only stories which feature the specified characters (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "id", "modified", "-id", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var comicId = "comicId";
    var modifiedSince = "modifiedSince";
    var series = "series";
    var events = "events";
    var creators = "creators";
    var characters = "characters";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = StoriesController.getComicStoryCollectionByComicId(comicId, modifiedSince, series, events, creators, characters, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_story_collection"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getCreatorStoryCollection") getCreatorStoryCollection

> Fetches lists of stories filtered by a creator id.


```javascript
function getCreatorStoryCollection(creatorId, modifiedSince, comics, series, events, characters, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| creatorId |  ``` Required ```  | The ID of the creator. |
| modifiedSince |  ``` Optional ```  | Return only stories which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only stories contained in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only stories contained the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only stories which take place during the specified events (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only stories which feature the specified characters (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "id", "modified", "-id", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var creatorId = "creatorId";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var characters = "characters";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = StoriesController.getCreatorStoryCollection(creatorId, modifiedSince, comics, series, events, characters, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_event_story_collection"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getEventStoryCollection") getEventStoryCollection

> Fetches lists of stories filtered by an event id.


```javascript
function getEventStoryCollection(eventId, modifiedSince, comics, series, creators, characters, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eventId |  ``` Required ```  | The ID of the event. |
| modifiedSince |  ``` Optional ```  | Return only stories which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only stories contained in the specified (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only stories contained the specified series (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only stories which feature the specified characters (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "id", "modified", "-id", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var eventId = "eventId";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var creators = "creators";
    var characters = "characters";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = StoriesController.getEventStoryCollection(eventId, modifiedSince, comics, series, creators, characters, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_series_story_collection"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getSeriesStoryCollection") getSeriesStoryCollection

> Fetches lists of stories filtered by a series id.


```javascript
function getSeriesStoryCollection(seriesId, modifiedSince, comics, events, creators, characters, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| seriesId |  ``` Required ```  | The series ID. |
| modifiedSince |  ``` Optional ```  | Return only stories which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only stories contained in the specified (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only stories which take place during the specified events (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only stories which feature the specified characters (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "id", "modified", "-id", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var seriesId = "seriesId";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var events = "events";
    var creators = "creators";
    var characters = "characters";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = StoriesController.getSeriesStoryCollection(seriesId, modifiedSince, comics, events, creators, characters, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_story_collection"></a>![Method: ](https://apidocs.io/img/method.png ".StoriesController.getStoryCollection") getStoryCollection

> Fetches lists of stories.


```javascript
function getStoryCollection(modifiedSince, comics, series, events, creators, characters, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| modifiedSince |  ``` Optional ```  | Return only stories which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only stories contained in the specified (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only stories contained the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only stories which take place during the specified events (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only stories which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only stories which feature the specified characters (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "id", "modified", "-id", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, StoriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var creators = "creators";
    var characters = "characters";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = StoriesController.getStoryCollection(modifiedSince, comics, series, events, creators, characters, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




[Back to List of Controllers](#list_of_controllers)

### <a name="series_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SeriesController") SeriesController

#### Get singleton instance

The singleton instance of the ``` SeriesController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	});
```

#### <a name="get_series_individual"></a>![Method: ](https://apidocs.io/img/method.png ".SeriesController.getSeriesIndividual") getSeriesIndividual

> Fetches a single comic series by id.


```javascript
function getSeriesIndividual(seriesId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| seriesId |  ``` Required ```  | Filter by series title. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var seriesId = "seriesId";


		var result = SeriesController.getSeriesIndividual(seriesId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Series not found. |




#### <a name="get_character_series_collection"></a>![Method: ](https://apidocs.io/img/method.png ".SeriesController.getCharacterSeriesCollection") getCharacterSeriesCollection

> Fetches lists of series filtered by a character id.


```javascript
function getCharacterSeriesCollection(characterId, title, titleStartsWith, startYear, modifiedSince, comics, stories, events, creators, seriesType, contains, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| characterId |  ``` Required ```  | The character ID |
| title |  ``` Optional ```  | Filter by series title. |
| titleStartsWith |  ``` Optional ```  | Return series with titles that begin with the specified string (e.g. Sp). |
| startYear |  ``` Optional ```  | Return only series matching the specified start year. |
| modifiedSince |  ``` Optional ```  | Return only series which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only series which contain the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only series which contain the specified stories (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only series which feature work by the specified creators (accepts a comma-separated list of ids). |
| seriesType |  ``` Optional ```  ``` DefaultValue ```  | Filter the series by publication frequency type. (Acceptable values are: "collection", "one shot", "limited", "ongoing") |
| contains |  ``` Optional ```  ``` DefaultValue ```  | Return only series containing one or more comics with the specified format. (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "title", "modified", "startYear", "-title", "-modified", "-startYear") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var characterId = "characterId";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var stories = "stories";
    var events = "events";
    var creators = "creators";
    var seriesType = "seriesType";
    var contains = "contains";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = SeriesController.getCharacterSeriesCollection(characterId, title, titleStartsWith, startYear, modifiedSince, comics, stories, events, creators, seriesType, contains, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_series_collection"></a>![Method: ](https://apidocs.io/img/method.png ".SeriesController.getCreatorSeriesCollection") getCreatorSeriesCollection

> Fetches lists of series filtered by a creator id.


```javascript
function getCreatorSeriesCollection(creatorId, title, titleStartsWith, startYear, modifiedSince, comics, stories, events, characters, seriesType, contains, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| creatorId |  ``` Required ```  | The creator ID. |
| title |  ``` Optional ```  | Filter by series title. |
| titleStartsWith |  ``` Optional ```  | Return series with titles that begin with the specified string (e.g. Sp). |
| startYear |  ``` Optional ```  | Return only series matching the specified start year. |
| modifiedSince |  ``` Optional ```  | Return only series which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only series which contain the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only series which contain the specified stories (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only series which feature the specified characters (accepts a comma-separated list of ids). |
| seriesType |  ``` Optional ```  ``` DefaultValue ```  | Filter the series by publication frequency type. (Acceptable values are: "collection", "one shot", "limited", "ongoing") |
| contains |  ``` Optional ```  ``` DefaultValue ```  | Return only series containing one or more comics with the specified format. (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "title", "modified", "startYear", "-title", "-modified", "-startYear") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var creatorId = "creatorId";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var stories = "stories";
    var events = "events";
    var characters = "characters";
    var seriesType = "seriesType";
    var contains = "contains";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = SeriesController.getCreatorSeriesCollection(creatorId, title, titleStartsWith, startYear, modifiedSince, comics, stories, events, characters, seriesType, contains, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_event_series_collection"></a>![Method: ](https://apidocs.io/img/method.png ".SeriesController.getEventSeriesCollection") getEventSeriesCollection

> Fetches lists of series filtered by an event id.


```javascript
function getEventSeriesCollection(eventId, title, titleStartsWith, startYear, modifiedSince, comics, stories, creators, characters, seriesType, contains, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eventId |  ``` Required ```  | The event ID. |
| title |  ``` Optional ```  | Filter by series title. |
| titleStartsWith |  ``` Optional ```  | Return series with titles that begin with the specified string (e.g. Sp). |
| startYear |  ``` Optional ```  | Return only series matching the specified start year. |
| modifiedSince |  ``` Optional ```  | Return only series which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only series which contain the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only series which contain the specified stories (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only series which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only series which feature the specified characters (accepts a comma-separated list of ids). |
| seriesType |  ``` Optional ```  ``` DefaultValue ```  | Filter the series by publication frequency type. (Acceptable values are: "collection", "one shot", "limited", "ongoing") |
| contains |  ``` Optional ```  ``` DefaultValue ```  | Return only series containing one or more comics with the specified format. (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "title", "modified", "startYear", "-title", "-modified", "-startYear") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var eventId = "eventId";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var stories = "stories";
    var creators = "creators";
    var characters = "characters";
    var seriesType = "seriesType";
    var contains = "contains";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = SeriesController.getEventSeriesCollection(eventId, title, titleStartsWith, startYear, modifiedSince, comics, stories, creators, characters, seriesType, contains, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_series_collection"></a>![Method: ](https://apidocs.io/img/method.png ".SeriesController.getSeriesCollection") getSeriesCollection

> Fetches lists of series.


```javascript
function getSeriesCollection(title, titleStartsWith, startYear, modifiedSince, comics, stories, events, creators, characters, seriesType, contains, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| title |  ``` Optional ```  | Return only series matching the specified title. |
| titleStartsWith |  ``` Optional ```  | Return series with titles that begin with the specified string (e.g. Sp). |
| startYear |  ``` Optional ```  | Return only series matching the specified start year. |
| modifiedSince |  ``` Optional ```  | Return only series which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only series which contain the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only series which contain the specified stories (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only series which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only series which feature the specified characters (accepts a comma-separated list of ids). |
| seriesType |  ``` Optional ```  ``` DefaultValue ```  | Filter the series by publication frequency type. (Acceptable values are: "collection", "one shot", "limited", "ongoing") |
| contains |  ``` Optional ```  ``` DefaultValue ```  | Return only series containing one or more comics with the specified format. (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "title", "modified", "startYear", "-title", "-modified", "-startYear") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var stories = "stories";
    var events = "events";
    var creators = "creators";
    var characters = "characters";
    var seriesType = "seriesType";
    var contains = "contains";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = SeriesController.getSeriesCollection(title, titleStartsWith, startYear, modifiedSince, comics, stories, events, creators, characters, seriesType, contains, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_story_series_collection"></a>![Method: ](https://apidocs.io/img/method.png ".SeriesController.getStorySeriesCollection") getStorySeriesCollection

> Fetches lists of series filtered by a story id.


```javascript
function getStorySeriesCollection(storyId, events, title, titleStartsWith, startYear, modifiedSince, comics, creators, characters, seriesType, contains, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| storyId |  ``` Required ```  | The story ID. |
| events |  ``` Optional ```  | Return only series which have comics that take place during the specified events (accepts a comma-separated list of ids). |
| title |  ``` Optional ```  | Filter by series title. |
| titleStartsWith |  ``` Optional ```  | Return series with titles that begin with the specified string (e.g. Sp). |
| startYear |  ``` Optional ```  | Return only series matching the specified start year. |
| modifiedSince |  ``` Optional ```  | Return only series which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only series which contain the specified comics (accepts a comma-separated list of ids). |
| creators |  ``` Optional ```  | Return only series which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only series which feature the specified characters (accepts a comma-separated list of ids). |
| seriesType |  ``` Optional ```  ``` DefaultValue ```  | Filter the series by publication frequency type. (Acceptable values are: "collection", "one shot", "limited", "ongoing") |
| contains |  ``` Optional ```  ``` DefaultValue ```  | Return only series containing one or more comics with the specified format. (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "title", "modified", "startYear", "-title", "-modified", "-startYear") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SeriesController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var storyId = "storyId";
    var events = "events";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var creators = "creators";
    var characters = "characters";
    var seriesType = "seriesType";
    var contains = "contains";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = SeriesController.getStorySeriesCollection(storyId, events, title, titleStartsWith, startYear, modifiedSince, comics, creators, characters, seriesType, contains, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




[Back to List of Controllers](#list_of_controllers)

### <a name="events_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EventsController") EventsController

#### Get singleton instance

The singleton instance of the ``` EventsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	});
```

#### <a name="get_event_individual"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getEventIndividual") getEventIndividual

> Fetches a single event by id.


```javascript
function getEventIndividual(eventId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eventId |  ``` Required ```  | A single event. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var eventId = "eventId";


		var result = EventsController.getEventIndividual(eventId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Event not found. |




#### <a name="get_character_events_collection"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getCharacterEventsCollection") getCharacterEventsCollection

> Fetches lists of events filtered by a character id.


```javascript
function getCharacterEventsCollection(characterId, name, nameStartsWith, modifiedSince, creators, series, comics, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| characterId |  ``` Required ```  | The character ID. |
| name |  ``` Optional ```  | Filter the event list by name. |
| nameStartsWith |  ``` Optional ```  | Return events with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only events which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only events which feature work by the specified creators (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only events which are part of the specified series (accepts a comma-separated list of ids). |
| comics |  ``` Optional ```  | Return only events which take place in the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only events which contain the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "startDate", "modified", "-name", "-startDate", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var characterId = "characterId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var series = "series";
    var comics = "comics";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = EventsController.getCharacterEventsCollection(characterId, name, nameStartsWith, modifiedSince, creators, series, comics, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_issue_events_collection"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getIssueEventsCollection") getIssueEventsCollection

> Fetches lists of events filtered by a comic id.


```javascript
function getIssueEventsCollection(comicId, name, nameStartsWith, modifiedSince, creators, characters, series, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| comicId |  ``` Required ```  | The comic ID. |
| name |  ``` Optional ```  | Filter the event list by name. |
| nameStartsWith |  ``` Optional ```  | Return events with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only events which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only events which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only events which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only events which are part of the specified series (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only events which contain the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "startDate", "modified", "-name", "-startDate", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var comicId = "comicId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var series = "series";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = EventsController.getIssueEventsCollection(comicId, name, nameStartsWith, modifiedSince, creators, characters, series, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_events_collection"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getCreatorEventsCollection") getCreatorEventsCollection

> Fetches lists of events filtered by a creator id.


```javascript
function getCreatorEventsCollection(creatorId, name, nameStartsWith, modifiedSince, characters, series, comics, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| creatorId |  ``` Required ```  | The creator ID. |
| name |  ``` Optional ```  | Filter the event list by name. |
| nameStartsWith |  ``` Optional ```  | Return events with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only events which have been modified since the specified date. |
| characters |  ``` Optional ```  | Return only events which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only events which are part of the specified series (accepts a comma-separated list of ids). |
| comics |  ``` Optional ```  | Return only events which take place in the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only events which contain the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "startDate", "modified", "-name", "-startDate", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var creatorId = "creatorId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var characters = "characters";
    var series = "series";
    var comics = "comics";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = EventsController.getCreatorEventsCollection(creatorId, name, nameStartsWith, modifiedSince, characters, series, comics, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_events_collection"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getEventsCollection") getEventsCollection

> Fetches lists of events.


```javascript
function getEventsCollection(name, nameStartsWith, modifiedSince, creators, characters, series, comics, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Optional ```  | Return only events which match the specified name. |
| nameStartsWith |  ``` Optional ```  | Return events with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only events which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only events which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only events which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only events which are part of the specified series (accepts a comma-separated list of ids). |
| comics |  ``` Optional ```  | Return only events which take place in the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only events which take place in the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "startDate", "modified", "-name", "-startDate", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var series = "series";
    var comics = "comics";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = EventsController.getEventsCollection(name, nameStartsWith, modifiedSince, creators, characters, series, comics, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_events_collection_by_series_id"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getEventsCollectionBySeriesId") getEventsCollectionBySeriesId

> Fetches lists of events filtered by a series id.


```javascript
function getEventsCollectionBySeriesId(seriesId, name, nameStartsWith, modifiedSince, creators, characters, comics, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| seriesId |  ``` Required ```  | The series ID. |
| name |  ``` Optional ```  | Filter the event list by name. |
| nameStartsWith |  ``` Optional ```  | Return events with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only events which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only events which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only events which feature the specified characters (accepts a comma-separated list of ids). |
| comics |  ``` Optional ```  | Return only events which take place in the specified comics (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only events which contain the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "startDate", "modified", "-name", "-startDate", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var seriesId = "seriesId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var comics = "comics";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = EventsController.getEventsCollectionBySeriesId(seriesId, name, nameStartsWith, modifiedSince, creators, characters, comics, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_events_collection_by_story_id"></a>![Method: ](https://apidocs.io/img/method.png ".EventsController.getEventsCollectionByStoryId") getEventsCollectionByStoryId

> Fetches lists of events filtered by a story id.


```javascript
function getEventsCollectionByStoryId(storyId, name, nameStartsWith, modifiedSince, creators, characters, series, comics, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| storyId |  ``` Required ```  | The story ID. |
| name |  ``` Optional ```  | Filter the event list by name. |
| nameStartsWith |  ``` Optional ```  | Return events with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only events which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only events which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only events which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only events which are part of the specified series (accepts a comma-separated list of ids). |
| comics |  ``` Optional ```  | Return only events which take place in the specified comics (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "startDate", "modified", "-name", "-startDate", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, EventsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var storyId = "storyId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var series = "series";
    var comics = "comics";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = EventsController.getEventsCollectionByStoryId(storyId, name, nameStartsWith, modifiedSince, creators, characters, series, comics, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




[Back to List of Controllers](#list_of_controllers)

### <a name="creators_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CreatorsController") CreatorsController

#### Get singleton instance

The singleton instance of the ``` CreatorsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	});
```

#### <a name="get_creator_individual"></a>![Method: ](https://apidocs.io/img/method.png ".CreatorsController.getCreatorIndividual") getCreatorIndividual

> Fetches a single creator by id.


```javascript
function getCreatorIndividual(creatorId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| creatorId |  ``` Required ```  | A single creator id. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var creatorId = "creatorId";


		var result = CreatorsController.getCreatorIndividual(creatorId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Creator not found. |




#### <a name="get_creator_collection_by_comic_id"></a>![Method: ](https://apidocs.io/img/method.png ".CreatorsController.getCreatorCollectionByComicId") getCreatorCollectionByComicId

> Fetches lists of creators filtered by a comic id.


```javascript
function getCreatorCollectionByComicId(comicId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| comicId |  ``` Required ```  | The comic id. |
| firstName |  ``` Optional ```  | Filter by creator first name (e.g. brian). |
| middleName |  ``` Optional ```  | Filter by creator middle name (e.g. Michael). |
| lastName |  ``` Optional ```  | Filter by creator last name (e.g. Bendis). |
| suffix |  ``` Optional ```  | Filter by suffix or honorific (e.g. Jr., Sr.). |
| nameStartsWith |  ``` Optional ```  | Filter by creator names that match critera (e.g. B, St L). |
| firstNameStartsWith |  ``` Optional ```  | Filter by creator first names that match critera (e.g. B, St L). |
| middleNameStartsWith |  ``` Optional ```  | Filter by creator middle names that match critera (e.g. Mi). |
| lastNameStartsWith |  ``` Optional ```  | Filter by creator last names that match critera (e.g. Ben). |
| modifiedSince |  ``` Optional ```  | Return only creators which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only creators who worked on the specified series (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only creators who worked on the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "lastName", "firstName", "middleName", "suffix", "modified", "-lastName", "-firstName", "-middleName", "-suffix", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var comicId = "comicId";
    var firstName = "firstName";
    var middleName = "middleName";
    var lastName = "lastName";
    var suffix = "suffix";
    var nameStartsWith = "nameStartsWith";
    var firstNameStartsWith = "firstNameStartsWith";
    var middleNameStartsWith = "middleNameStartsWith";
    var lastNameStartsWith = "lastNameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CreatorsController.getCreatorCollectionByComicId(comicId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_collection"></a>![Method: ](https://apidocs.io/img/method.png ".CreatorsController.getCreatorCollection") getCreatorCollection

> Fetches lists of creators.


```javascript
function getCreatorCollection(firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, events, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| firstName |  ``` Optional ```  | Filter by creator first name (e.g. Brian). |
| middleName |  ``` Optional ```  | Filter by creator middle name (e.g. Michael). |
| lastName |  ``` Optional ```  | Filter by creator last name (e.g. Bendis). |
| suffix |  ``` Optional ```  | Filter by suffix or honorific (e.g. Jr., Sr.). |
| nameStartsWith |  ``` Optional ```  | Filter by creator names that match critera (e.g. B, St L). |
| firstNameStartsWith |  ``` Optional ```  | Filter by creator first names that match critera (e.g. B, St L). |
| middleNameStartsWith |  ``` Optional ```  | Filter by creator middle names that match critera (e.g. Mi). |
| lastNameStartsWith |  ``` Optional ```  | Filter by creator last names that match critera (e.g. Ben). |
| modifiedSince |  ``` Optional ```  | Return only creators which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only creators who worked on the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only creators who worked on the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "lastName", "firstName", "middleName", "suffix", "modified", "-lastName", "-firstName", "-middleName", "-suffix", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var firstName = "firstName";
    var middleName = "middleName";
    var lastName = "lastName";
    var suffix = "suffix";
    var nameStartsWith = "nameStartsWith";
    var firstNameStartsWith = "firstNameStartsWith";
    var middleNameStartsWith = "middleNameStartsWith";
    var lastNameStartsWith = "lastNameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CreatorsController.getCreatorCollection(firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, events, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_collection_by_event_id"></a>![Method: ](https://apidocs.io/img/method.png ".CreatorsController.getCreatorCollectionByEventId") getCreatorCollectionByEventId

> Fetches lists of creators filtered by an event id.


```javascript
function getCreatorCollectionByEventId(eventId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eventId |  ``` Required ```  | The event ID. |
| firstName |  ``` Optional ```  | Filter by creator first name (e.g. brian). |
| middleName |  ``` Optional ```  | Filter by creator middle name (e.g. Michael). |
| lastName |  ``` Optional ```  | Filter by creator last name (e.g. Bendis). |
| suffix |  ``` Optional ```  | Filter by suffix or honorific (e.g. Jr., Sr.). |
| nameStartsWith |  ``` Optional ```  | Filter by creator names that match critera (e.g. B, St L). |
| firstNameStartsWith |  ``` Optional ```  | Filter by creator first names that match critera (e.g. B, St L). |
| middleNameStartsWith |  ``` Optional ```  | Filter by creator middle names that match critera (e.g. Mi). |
| lastNameStartsWith |  ``` Optional ```  | Filter by creator last names that match critera (e.g. Ben). |
| modifiedSince |  ``` Optional ```  | Return only creators which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only creators who worked on the specified series (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only creators who worked on the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "lastName", "firstName", "middleName", "suffix", "modified", "-lastName", "-firstName", "-middleName", "-suffix", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var eventId = "eventId";
    var firstName = "firstName";
    var middleName = "middleName";
    var lastName = "lastName";
    var suffix = "suffix";
    var nameStartsWith = "nameStartsWith";
    var firstNameStartsWith = "firstNameStartsWith";
    var middleNameStartsWith = "middleNameStartsWith";
    var lastNameStartsWith = "lastNameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CreatorsController.getCreatorCollectionByEventId(eventId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_collection_by_series_id"></a>![Method: ](https://apidocs.io/img/method.png ".CreatorsController.getCreatorCollectionBySeriesId") getCreatorCollectionBySeriesId

> Fetches lists of creators filtered by a series id.


```javascript
function getCreatorCollectionBySeriesId(seriesId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, events, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| seriesId |  ``` Required ```  | The series ID. |
| firstName |  ``` Optional ```  | Filter by creator first name (e.g. brian). |
| middleName |  ``` Optional ```  | Filter by creator middle name (e.g. Michael). |
| lastName |  ``` Optional ```  | Filter by creator last name (e.g. Bendis). |
| suffix |  ``` Optional ```  | Filter by suffix or honorific (e.g. Jr., Sr.). |
| nameStartsWith |  ``` Optional ```  | Filter by creator names that match critera (e.g. B, St L). |
| firstNameStartsWith |  ``` Optional ```  | Filter by creator first names that match critera (e.g. B, St L). |
| middleNameStartsWith |  ``` Optional ```  | Filter by creator middle names that match critera (e.g. Mi). |
| lastNameStartsWith |  ``` Optional ```  | Filter by creator last names that match critera (e.g. Ben). |
| modifiedSince |  ``` Optional ```  | Return only creators which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only creators who worked on the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "lastName", "firstName", "middleName", "suffix", "modified", "-lastName", "-firstName", "-middleName", "-suffix", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var seriesId = "seriesId";
    var firstName = "firstName";
    var middleName = "middleName";
    var lastName = "lastName";
    var suffix = "suffix";
    var nameStartsWith = "nameStartsWith";
    var firstNameStartsWith = "firstNameStartsWith";
    var middleNameStartsWith = "middleNameStartsWith";
    var lastNameStartsWith = "lastNameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var events = "events";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CreatorsController.getCreatorCollectionBySeriesId(seriesId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, events, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_creator_collection_by_story_id"></a>![Method: ](https://apidocs.io/img/method.png ".CreatorsController.getCreatorCollectionByStoryId") getCreatorCollectionByStoryId

> Fetches lists of creators filtered by a story id.


```javascript
function getCreatorCollectionByStoryId(storyId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, events, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| storyId |  ``` Required ```  | The story ID. |
| firstName |  ``` Optional ```  | Filter by creator first name (e.g. brian). |
| middleName |  ``` Optional ```  | Filter by creator middle name (e.g. Michael). |
| lastName |  ``` Optional ```  | Filter by creator last name (e.g. Bendis). |
| suffix |  ``` Optional ```  | Filter by suffix or honorific (e.g. Jr., Sr.). |
| nameStartsWith |  ``` Optional ```  | Filter by creator names that match critera (e.g. B, St L). |
| firstNameStartsWith |  ``` Optional ```  | Filter by creator first names that match critera (e.g. B, St L). |
| middleNameStartsWith |  ``` Optional ```  | Filter by creator middle names that match critera (e.g. Mi). |
| lastNameStartsWith |  ``` Optional ```  | Filter by creator last names that match critera (e.g. Ben). |
| modifiedSince |  ``` Optional ```  | Return only creators which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only creators who worked on in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only creators who worked on the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only creators who worked on comics that took place in the specified events (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "lastName", "firstName", "middleName", "suffix", "modified", "-lastName", "-firstName", "-middleName", "-suffix", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CreatorsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var storyId = "storyId";
    var firstName = "firstName";
    var middleName = "middleName";
    var lastName = "lastName";
    var suffix = "suffix";
    var nameStartsWith = "nameStartsWith";
    var firstNameStartsWith = "firstNameStartsWith";
    var middleNameStartsWith = "middleNameStartsWith";
    var lastNameStartsWith = "lastNameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CreatorsController.getCreatorCollectionByStoryId(storyId, firstName, middleName, lastName, suffix, nameStartsWith, firstNameStartsWith, middleNameStartsWith, lastNameStartsWith, modifiedSince, comics, series, events, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




[Back to List of Controllers](#list_of_controllers)

### <a name="comics_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ComicsController") ComicsController

#### Get singleton instance

The singleton instance of the ``` ComicsController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	});
```

#### <a name="get_comic_individual"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicIndividual") getComicIndividual

> Fetches a single comic by id.


```javascript
function getComicIndividual(comicId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| comicId |  ``` Required ```  | A single comic. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var comicId = "comicId";


		var result = ComicsController.getComicIndividual(comicId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Comic not found. |




#### <a name="get_comics_character_collection"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicsCharacterCollection") getComicsCharacterCollection

> Fetches lists of comics filtered by a character id.


```javascript
function getComicsCharacterCollection(characterId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| characterId |  ``` Required ```  | The character id. |
| format |  ``` Optional ```  ``` DefaultValue ```  | Filter by the issue format (e.g. comic, digital comic, hardcover). (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| formatType |  ``` Optional ```  | Filter by the issue format type (comic or collection). |
| noVariants |  ``` Optional ```  ``` DefaultValue ```  | Exclude variant comics from the result set. (Acceptable values are: "true") |
| dateDescriptor |  ``` Optional ```  | Return comics within a predefined date range. |
| dateRange |  ``` Optional ```  | Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. |
| title |  ``` Optional ```  | Return only issues in series whose title matches the input. |
| titleStartsWith |  ``` Optional ```  | Return only issues in series whose title starts with the input. |
| startYear |  ``` Optional ```  | Return only issues in series whose start year matches the input. |
| issueNumber |  ``` Optional ```  | Return only issues in series whose issue number matches the input. |
| diamondCode |  ``` Optional ```  | Filter by diamond code. |
| digitalId |  ``` Optional ```  | Filter by digital comic id. |
| upc |  ``` Optional ```  | Filter by UPC. |
| isbn |  ``` Optional ```  | Filter by ISBN. |
| ean |  ``` Optional ```  | Filter by EAN. |
| issn |  ``` Optional ```  | Filter by ISSN. |
| hasDigitalIssue |  ``` Optional ```  ``` DefaultValue ```  | Include only results which are available digitally. (Acceptable values are: "true") |
| modifiedSince |  ``` Optional ```  | Return only comics which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only comics which are part of the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only comics which take place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only comics which contain the specified stories (accepts a comma-separated list of ids). |
| sharedAppearances |  ``` Optional ```  | Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). |
| collaborators |  ``` Optional ```  | Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "focDate", "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-onsaleDate", "-title", "-issueNumber", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var characterId = "characterId";
    var format = "format";
    var formatType = Object.keys(FormatTypeEnum)[0];
    var noVariants = "noVariants";
    var dateDescriptor = Object.keys(DateDescriptorEnum)[0];
    var dateRange = "dateRange";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var issueNumber = "issueNumber";
    var diamondCode = "diamondCode";
    var digitalId = "digitalId";
    var upc = "upc";
    var isbn = "isbn";
    var ean = "ean";
    var issn = "issn";
    var hasDigitalIssue = "hasDigitalIssue";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var sharedAppearances = "sharedAppearances";
    var collaborators = "collaborators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = ComicsController.getComicsCharacterCollection(characterId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comics_collection"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicsCollection") getComicsCollection

> Fetches lists of comics.


```javascript
function getComicsCollection(format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| format |  ``` Optional ```  ``` DefaultValue ```  | Filter by the issue format (e.g. comic, digital comic, hardcover). (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| formatType |  ``` Optional ```  | Filter by the issue format type (comic or collection). |
| noVariants |  ``` Optional ```  ``` DefaultValue ```  | Exclude variants (alternate covers, secondary printings, director's cuts, etc.) from the result set. (Acceptable values are: "true") |
| dateDescriptor |  ``` Optional ```  | Return comics within a predefined date range. |
| dateRange |  ``` Optional ```  | Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. |
| title |  ``` Optional ```  | Return only issues in series whose title matches the input. |
| titleStartsWith |  ``` Optional ```  | Return only issues in series whose title starts with the input. |
| startYear |  ``` Optional ```  | Return only issues in series whose start year matches the input. |
| issueNumber |  ``` Optional ```  | Return only issues in series whose issue number matches the input. |
| diamondCode |  ``` Optional ```  | Filter by diamond code. |
| digitalId |  ``` Optional ```  | Filter by digital comic id. |
| upc |  ``` Optional ```  | Filter by UPC. |
| isbn |  ``` Optional ```  | Filter by ISBN. |
| ean |  ``` Optional ```  | Filter by EAN. |
| issn |  ``` Optional ```  | Filter by ISSN. |
| hasDigitalIssue |  ``` Optional ```  ``` DefaultValue ```  | Include only results which are available digitally. (Acceptable values are: "true") |
| modifiedSince |  ``` Optional ```  | Return only comics which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only comics which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only comics which are part of the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only comics which take place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only comics which contain the specified stories (accepts a comma-separated list of ids). |
| sharedAppearances |  ``` Optional ```  | Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). Accepts a comma-separated list of ids. |
| collaborators |  ``` Optional ```  | Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). Accepts a comma-separated list of ids. |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "focDate", "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-onsaleDate", "-title", "-issueNumber", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var format = "format";
    var formatType = Object.keys(FormatTypeEnum)[0];
    var noVariants = "noVariants";
    var dateDescriptor = Object.keys(DateDescriptorEnum)[0];
    var dateRange = "dateRange";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var issueNumber = "issueNumber";
    var diamondCode = "diamondCode";
    var digitalId = "digitalId";
    var upc = "upc";
    var isbn = "isbn";
    var ean = "ean";
    var issn = "issn";
    var hasDigitalIssue = "hasDigitalIssue";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var sharedAppearances = "sharedAppearances";
    var collaborators = "collaborators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = ComicsController.getComicsCollection(format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comics_collection_by_creator_id"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicsCollectionByCreatorId") getComicsCollectionByCreatorId

> Fetches lists of comics filtered by a creator id.


```javascript
function getComicsCollectionByCreatorId(creatorId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, characters, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| creatorId |  ``` Required ```  | The creator ID. |
| format |  ``` Optional ```  ``` DefaultValue ```  | Filter by the issue format (e.g. comic, digital comic, hardcover). (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| formatType |  ``` Optional ```  | Filter by the issue format type (comic or collection). |
| noVariants |  ``` Optional ```  ``` DefaultValue ```  | Exclude variant comics from the result set. (Acceptable values are: "true") |
| dateDescriptor |  ``` Optional ```  | Return comics within a predefined date range. |
| dateRange |  ``` Optional ```  | Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. |
| title |  ``` Optional ```  | Return only issues in series whose title matches the input. |
| titleStartsWith |  ``` Optional ```  | Return only issues in series whose title starts with the input. |
| startYear |  ``` Optional ```  | Return only issues in series whose start year matches the input. |
| issueNumber |  ``` Optional ```  | Return only issues in series whose issue number matches the input. |
| diamondCode |  ``` Optional ```  | Filter by diamond code. |
| digitalId |  ``` Optional ```  | Filter by digital comic id. |
| upc |  ``` Optional ```  | Filter by UPC. |
| isbn |  ``` Optional ```  | Filter by ISBN. |
| ean |  ``` Optional ```  | Filter by EAN. |
| issn |  ``` Optional ```  | Filter by ISSN. |
| hasDigitalIssue |  ``` Optional ```  ``` DefaultValue ```  | Include only results which are available digitally. (Acceptable values are: "true") |
| modifiedSince |  ``` Optional ```  | Return only comics which have been modified since the specified date. |
| characters |  ``` Optional ```  | Return only comics which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only comics which are part of the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only comics which take place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only comics which contain the specified stories (accepts a comma-separated list of ids). |
| sharedAppearances |  ``` Optional ```  | Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). |
| collaborators |  ``` Optional ```  | Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "focDate", "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-onsaleDate", "-title", "-issueNumber", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var creatorId = "creatorId";
    var format = "format";
    var formatType = Object.keys(FormatTypeEnum)[0];
    var noVariants = "noVariants";
    var dateDescriptor = Object.keys(DateDescriptorEnum)[0];
    var dateRange = "dateRange";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var issueNumber = "issueNumber";
    var diamondCode = "diamondCode";
    var digitalId = "digitalId";
    var upc = "upc";
    var isbn = "isbn";
    var ean = "ean";
    var issn = "issn";
    var hasDigitalIssue = "hasDigitalIssue";
    var modifiedSince = "modifiedSince";
    var characters = "characters";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var sharedAppearances = "sharedAppearances";
    var collaborators = "collaborators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = ComicsController.getComicsCollectionByCreatorId(creatorId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, characters, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comics_collection_by_event_id"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicsCollectionByEventId") getComicsCollectionByEventId

> Fetches lists of comics filtered by an event id.


```javascript
function getComicsCollectionByEventId(eventId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eventId |  ``` Required ```  | The event id. |
| format |  ``` Optional ```  ``` DefaultValue ```  | Filter by the issue format (e.g. comic, digital comic, hardcover). (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| formatType |  ``` Optional ```  | Filter by the issue format type (comic or collection). |
| noVariants |  ``` Optional ```  ``` DefaultValue ```  | Exclude variant comics from the result set. (Acceptable values are: "true") |
| dateDescriptor |  ``` Optional ```  | Return comics within a predefined date range. |
| dateRange |  ``` Optional ```  | Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. |
| title |  ``` Optional ```  | Return only issues in series whose title matches the input. |
| titleStartsWith |  ``` Optional ```  | Return only issues in series whose title starts with the input. |
| startYear |  ``` Optional ```  | Return only issues in series whose start year matches the input. |
| issueNumber |  ``` Optional ```  | Return only issues in series whose issue number matches the input. |
| diamondCode |  ``` Optional ```  | Filter by diamond code. |
| digitalId |  ``` Optional ```  | Filter by digital comic id. |
| upc |  ``` Optional ```  | Filter by UPC. |
| isbn |  ``` Optional ```  | Filter by ISBN. |
| ean |  ``` Optional ```  | Filter by EAN. |
| issn |  ``` Optional ```  | Filter by ISSN. |
| hasDigitalIssue |  ``` Optional ```  ``` DefaultValue ```  | Include only results which are available digitally. (Acceptable values are: "true") |
| modifiedSince |  ``` Optional ```  | Return only comics which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only comics which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only comics which are part of the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only comics which take place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only comics which contain the specified stories (accepts a comma-separated list of ids). |
| sharedAppearances |  ``` Optional ```  | Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). |
| collaborators |  ``` Optional ```  | Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "focDate", "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-onsaleDate", "-title", "-issueNumber", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var eventId = "eventId";
    var format = "format";
    var formatType = Object.keys(FormatTypeEnum)[0];
    var noVariants = "noVariants";
    var dateDescriptor = Object.keys(DateDescriptorEnum)[0];
    var dateRange = "dateRange";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var issueNumber = "issueNumber";
    var diamondCode = "diamondCode";
    var digitalId = "digitalId";
    var upc = "upc";
    var isbn = "isbn";
    var ean = "ean";
    var issn = "issn";
    var hasDigitalIssue = "hasDigitalIssue";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var sharedAppearances = "sharedAppearances";
    var collaborators = "collaborators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = ComicsController.getComicsCollectionByEventId(eventId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, series, events, stories, sharedAppearances, collaborators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comics_collection_by_series_id"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicsCollectionBySeriesId") getComicsCollectionBySeriesId

> Fetches lists of comics filtered by a series id.


```javascript
function getComicsCollectionBySeriesId(seriesId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, events, stories, sharedAppearances, collaborators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| seriesId |  ``` Required ```  | The series ID. |
| format |  ``` Optional ```  ``` DefaultValue ```  | Filter by the issue format (e.g. comic, digital comic, hardcover). (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| formatType |  ``` Optional ```  | Filter by the issue format type (comic or collection). |
| noVariants |  ``` Optional ```  ``` DefaultValue ```  | Exclude variant comics from the result set. (Acceptable values are: "true") |
| dateDescriptor |  ``` Optional ```  | Return comics within a predefined date range. |
| dateRange |  ``` Optional ```  | Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. |
| title |  ``` Optional ```  | Return only issues in series whose title matches the input. |
| titleStartsWith |  ``` Optional ```  | Return only issues in series whose title starts with the input. |
| startYear |  ``` Optional ```  | Return only issues in series whose start year matches the input. |
| issueNumber |  ``` Optional ```  | Return only issues in series whose issue number matches the input. |
| diamondCode |  ``` Optional ```  | Filter by diamond code. |
| digitalId |  ``` Optional ```  | Filter by digital comic id. |
| upc |  ``` Optional ```  | Filter by UPC. |
| isbn |  ``` Optional ```  | Filter by ISBN. |
| ean |  ``` Optional ```  | Filter by EAN. |
| issn |  ``` Optional ```  | Filter by ISSN. |
| hasDigitalIssue |  ``` Optional ```  ``` DefaultValue ```  | Include only results which are available digitally. (Acceptable values are: "true") |
| modifiedSince |  ``` Optional ```  | Return only comics which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only comics which feature the specified characters (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only comics which take place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only comics which contain the specified stories (accepts a comma-separated list of ids). |
| sharedAppearances |  ``` Optional ```  | Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). |
| collaborators |  ``` Optional ```  | Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "focDate", "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-onsaleDate", "-title", "-issueNumber", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var seriesId = "seriesId";
    var format = "format";
    var formatType = Object.keys(FormatTypeEnum)[0];
    var noVariants = "noVariants";
    var dateDescriptor = Object.keys(DateDescriptorEnum)[0];
    var dateRange = "dateRange";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var issueNumber = "issueNumber";
    var diamondCode = "diamondCode";
    var digitalId = "digitalId";
    var upc = "upc";
    var isbn = "isbn";
    var ean = "ean";
    var issn = "issn";
    var hasDigitalIssue = "hasDigitalIssue";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var events = "events";
    var stories = "stories";
    var sharedAppearances = "sharedAppearances";
    var collaborators = "collaborators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = ComicsController.getComicsCollectionBySeriesId(seriesId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, events, stories, sharedAppearances, collaborators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comics_collection_by_story_id"></a>![Method: ](https://apidocs.io/img/method.png ".ComicsController.getComicsCollectionByStoryId") getComicsCollectionByStoryId

> Fetches lists of comics filtered by a story id.


```javascript
function getComicsCollectionByStoryId(storyId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, series, events, sharedAppearances, collaborators, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| storyId |  ``` Required ```  | The story ID. |
| format |  ``` Optional ```  ``` DefaultValue ```  | Filter by the issue format (e.g. comic, digital comic, hardcover). (Acceptable values are: "comic", "magazine", "trade paperback", "hardcover", "digest", "graphic novel", "digital comic", "infinite comic") |
| formatType |  ``` Optional ```  | Filter by the issue format type (comic or collection). |
| noVariants |  ``` Optional ```  ``` DefaultValue ```  | Exclude variant comics from the result set. (Acceptable values are: "true") |
| dateDescriptor |  ``` Optional ```  | Return comics within a predefined date range. |
| dateRange |  ``` Optional ```  | Return comics within a predefined date range.  Dates must be specified as date1,date2 (e.g. 2013-01-01,2013-01-02).  Dates are preferably formatted as YYYY-MM-DD but may be sent as any common date format. |
| title |  ``` Optional ```  | Return only issues in series whose title matches the input. |
| titleStartsWith |  ``` Optional ```  | Return only issues in series whose title starts with the input. |
| startYear |  ``` Optional ```  | Return only issues in series whose start year matches the input. |
| issueNumber |  ``` Optional ```  | Return only issues in series whose issue number matches the input. |
| diamondCode |  ``` Optional ```  | Filter by diamond code. |
| digitalId |  ``` Optional ```  | Filter by digital comic id. |
| upc |  ``` Optional ```  | Filter by UPC. |
| isbn |  ``` Optional ```  | Filter by ISBN. |
| ean |  ``` Optional ```  | Filter by EAN. |
| issn |  ``` Optional ```  | Filter by ISSN. |
| hasDigitalIssue |  ``` Optional ```  ``` DefaultValue ```  | Include only results which are available digitally. (Acceptable values are: "true") |
| modifiedSince |  ``` Optional ```  | Return only comics which have been modified since the specified date. |
| creators |  ``` Optional ```  | Return only comics which feature work by the specified creators (accepts a comma-separated list of ids). |
| characters |  ``` Optional ```  | Return only comics which feature the specified characters (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only comics which are part of the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only comics which take place in the specified events (accepts a comma-separated list of ids). |
| sharedAppearances |  ``` Optional ```  | Return only comics in which the specified characters appear together (for example in which BOTH Spider-Man and Wolverine appear). |
| collaborators |  ``` Optional ```  | Return only comics in which the specified creators worked together (for example in which BOTH Stan Lee and Jack Kirby did work). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "focDate", "onsaleDate", "title", "issueNumber", "modified", "-focDate", "-onsaleDate", "-title", "-issueNumber", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, ComicsController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var storyId = "storyId";
    var format = "format";
    var formatType = Object.keys(FormatTypeEnum)[0];
    var noVariants = "noVariants";
    var dateDescriptor = Object.keys(DateDescriptorEnum)[0];
    var dateRange = "dateRange";
    var title = "title";
    var titleStartsWith = "titleStartsWith";
    var startYear = "startYear";
    var issueNumber = "issueNumber";
    var diamondCode = "diamondCode";
    var digitalId = "digitalId";
    var upc = "upc";
    var isbn = "isbn";
    var ean = "ean";
    var issn = "issn";
    var hasDigitalIssue = "hasDigitalIssue";
    var modifiedSince = "modifiedSince";
    var creators = "creators";
    var characters = "characters";
    var series = "series";
    var events = "events";
    var sharedAppearances = "sharedAppearances";
    var collaborators = "collaborators";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = ComicsController.getComicsCollectionByStoryId(storyId, format, formatType, noVariants, dateDescriptor, dateRange, title, titleStartsWith, startYear, issueNumber, diamondCode, digitalId, upc, isbn, ean, issn, hasDigitalIssue, modifiedSince, creators, characters, series, events, sharedAppearances, collaborators, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




[Back to List of Controllers](#list_of_controllers)

### <a name="characters_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CharactersController") CharactersController

#### Get singleton instance

The singleton instance of the ``` CharactersController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	});
```

#### <a name="get_character_individual"></a>![Method: ](https://apidocs.io/img/method.png ".CharactersController.getCharacterIndividual") getCharacterIndividual

> Fetches a single character by id.


```javascript
function getCharacterIndividual(characterId)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| characterId |  ``` Required ```  | A single character id. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var characterId = "characterId";


		var result = CharactersController.getCharacterIndividual(characterId);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 404 | Character not found. |




#### <a name="get_character_collection"></a>![Method: ](https://apidocs.io/img/method.png ".CharactersController.getCharacterCollection") getCharacterCollection

> Fetches lists of characters.


```javascript
function getCharacterCollection(name, nameStartsWith, modifiedSince, comics, series, events, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Optional ```  | Return only characters matching the specified full character name (e.g. Spider-Man). |
| nameStartsWith |  ``` Optional ```  | Return characters with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only characters which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only characters which appear in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only characters which appear the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only characters which appear in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only characters which appear the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "modified", "-name", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CharactersController.getCharacterCollection(name, nameStartsWith, modifiedSince, comics, series, events, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_comic_character_collection"></a>![Method: ](https://apidocs.io/img/method.png ".CharactersController.getComicCharacterCollection") getComicCharacterCollection

> Fetches lists of characters filtered by a comic id.


```javascript
function getComicCharacterCollection(comicId, name, nameStartsWith, modifiedSince, series, events, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| comicId |  ``` Required ```  | The comic id. |
| name |  ``` Optional ```  | Return only characters matching the specified full character name (e.g. Spider-Man). |
| nameStartsWith |  ``` Optional ```  | Return characters with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only characters which have been modified since the specified date. |
| series |  ``` Optional ```  | Return only characters which appear the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only characters which appear the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "modified", "-name", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var comicId = "comicId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var series = "series";
    var events = "events";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CharactersController.getComicCharacterCollection(comicId, name, nameStartsWith, modifiedSince, series, events, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_event_character_collection"></a>![Method: ](https://apidocs.io/img/method.png ".CharactersController.getEventCharacterCollection") getEventCharacterCollection

> Fetches lists of characters filtered by an event id.


```javascript
function getEventCharacterCollection(eventId, name, nameStartsWith, modifiedSince, comics, series, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eventId |  ``` Required ```  | The event ID |
| name |  ``` Optional ```  | Return only characters matching the specified full character name (e.g. Spider-Man). |
| nameStartsWith |  ``` Optional ```  | Return characters with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only characters which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only characters which appear in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only characters which appear the specified series (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only characters which appear the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "modified", "-name", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var eventId = "eventId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CharactersController.getEventCharacterCollection(eventId, name, nameStartsWith, modifiedSince, comics, series, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_series_character_wrapper"></a>![Method: ](https://apidocs.io/img/method.png ".CharactersController.getSeriesCharacterWrapper") getSeriesCharacterWrapper

> Fetches lists of characters filtered by a series id.


```javascript
function getSeriesCharacterWrapper(seriesId, name, nameStartsWith, modifiedSince, comics, events, stories, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| seriesId |  ``` Required ```  | The series id. |
| name |  ``` Optional ```  | Return only characters matching the specified full character name (e.g. Spider-Man). |
| nameStartsWith |  ``` Optional ```  | Return characters with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only characters which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only characters which appear in the specified comics (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids). |
| stories |  ``` Optional ```  | Return only characters which appear the specified stories (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "modified", "-name", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var seriesId = "seriesId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var events = "events";
    var stories = "stories";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CharactersController.getSeriesCharacterWrapper(seriesId, name, nameStartsWith, modifiedSince, comics, events, stories, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




#### <a name="get_character_collection_by_story_id"></a>![Method: ](https://apidocs.io/img/method.png ".CharactersController.getCharacterCollectionByStoryId") getCharacterCollectionByStoryId

> Fetches lists of characters filtered by a story id.


```javascript
function getCharacterCollectionByStoryId(storyId, name, nameStartsWith, modifiedSince, comics, series, events, orderBy, limit, offset)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| storyId |  ``` Required ```  | The story ID. |
| name |  ``` Optional ```  | Return only characters matching the specified full character name (e.g. Spider-Man). |
| nameStartsWith |  ``` Optional ```  | Return characters with names that begin with the specified string (e.g. Sp). |
| modifiedSince |  ``` Optional ```  | Return only characters which have been modified since the specified date. |
| comics |  ``` Optional ```  | Return only characters which appear in the specified comics (accepts a comma-separated list of ids). |
| series |  ``` Optional ```  | Return only characters which appear the specified series (accepts a comma-separated list of ids). |
| events |  ``` Optional ```  | Return only characters which appear comics that took place in the specified events (accepts a comma-separated list of ids). |
| orderBy |  ``` Optional ```  ``` DefaultValue ```  | Order the result set by a field or fields. Add a "-" to the value sort in descending order. Multiple values are given priority in the order in which they are passed. (Acceptable values are: "name", "modified", "-name", "-modified") |
| limit |  ``` Optional ```  | Limit the result set to the specified number of resources. |
| offset |  ``` Optional ```  | Skip the specified number of resources in the result set. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, CharactersController,ComicSummary,EventList,Url,CreatorList,CreatorSummary,StorySummary,Image,ComicDate,ComicPrice,CharacterList,TextObject,SeriesList,StoryList,CharacterDataContainer,EventDataContainer,EventSummary,CharacterSummary,DateDescriptorEnum,FormatTypeEnum,Thumbnail,ComicList,SeriesSummary,EventDataWrapper,ComicDataContainer,CreatorDataWrapper,StoryDataWrapper,CharacterDataWrapper,ComicDataWrapper,SeriesDataWrapper,SeriesDataContainer,StoryDataContainer,CreatorDataContainer,Event,Character,Story,Series,Comic,Creator){
	    var storyId = "storyId";
    var name = "name";
    var nameStartsWith = "nameStartsWith";
    var modifiedSince = "modifiedSince";
    var comics = "comics";
    var series = "series";
    var events = "events";
    var orderBy = "orderBy";
    var limit = "limit";
    var offset = "offset";


		var result = CharactersController.getCharacterCollectionByStoryId(storyId, name, nameStartsWith, modifiedSince, comics, series, events, orderBy, limit, offset);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 409 | Limit greater than 100. |




[Back to List of Controllers](#list_of_controllers)


