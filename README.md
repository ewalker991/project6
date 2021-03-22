# Vedic Words API
## Project 6 - By Erika Sanchez

##### Used: 
* express
* javascript
* mongoose
  
##### Information source: https://aninditabasu.github.io/indica/html/vs.html

### End Point: `https://sei21-es-project6.herokuapp.com/`

#### Categories to search

* Flora: `grass`, `plant`, `tree`
* Fauna: `animal`, `bird`, `cattle`, `fish`, `insect`, `snake`, `worm`
* Things: `building`, `chariot`, `food`, `grain`, `metal`, `object`, `ship`, `weapons`, `war`
* Measurements: `number`, `distance`, `time`, `weight`
* Geography: `mountain`, `place`, `river`
* Knowledge: `astronomy`, `disease`, `literature`, `medicine`, `poison`, `subject`
* Entertainment: `dicing`, `games`, `music`
* Toilette: `clothing`, `hair`, `ornament`
* Legal: `law`, `morals`
* Societal: `agriculture`, `caste`, `family`, `occupation`, `priest`, `royalty`, `trade`, `tribe`

## This API uses HTTP GET for query
### This will retrieve every object within your specified category.

#### Example: `$ http get https://sei21-es-project6.herokuapp.com/food`

##### Expected result: 

```
[
{
"_id": "6054a69ee11b660004cc374b",
"category": "food",
"description": "butter",
"nagari": "आज्या",
"word": "ajya",
"__v": 0
},
{
"_id": "6054a69ee11b660004cc375c",
"category": "food",
"description": "a kind of grain",
"nagari": "आम्ब",
"word": "amb",
"__v": 0
},
{ ....

```

## POST
### This will allow you to create a new category and add new words.

***Note: YOU MUST INCLUDE A CATEGORY WHEN MAKING A WORD.***

#### Template: `http post https://sei21-es-project6.herokuapp.com/<word here> word="<word here>" description="<describe word here>" category="<define category here>"`

#### Example: `http post https://sei21-es-project6.herokuapp.com/hello word="hello" category="english words" description="the word to greet others in english"`

##### Expected Result: 
```
{
    "__v": 0,
    "_id": "6058fe1ca697891294c33712",
    "category": "english words",
    "description": "the word to greet others in english",
    "word": "hello"
}
```

## PUT
### This will edit the word you specify and change its fields you define.

#### Template: `http put https://sei21-es-project6.herokuapp.com/<word here> description="<desired description here>"`

#### Example: `http put https://sei21-es-project6.herokuapp.com/hello description="a short greeting in english"`

##### Expected result: 
```
{
    "__v": 0,
    "_id": "6058fe1ca697891294c33712",
    "category": "english words",
    "description": "a short greeting in english",
    "word": "hello"
}
```

## DELETE
### This will delete everything within the specified category. 

#### Template: `http delete https://sei21-es-project6.herokuapp.com/"<category name here>"`

#### Example: `http delete https://sei21-es-project6.herokuapp.com/"english words"`

##### Expected result: 
```
{
    "ok": true
}
```