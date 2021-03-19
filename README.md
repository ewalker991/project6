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

### This API uses HTTP GET for query

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
