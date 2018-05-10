### IFRAME

1. 2 versions of frameworks
2. can deploy only one app
3. hard to call the other backend

### NODE_MODULE

1. Inside the project (cannot deploy without CC)
2. must use CC angular version
3. easy to call the backend
4. only release frontend

### LAZY LOADING

1. split billing in other js file
2. replace with Jenkins

### ANGULAR 5 IN ANGULARJS

1. Must use ng-upgrade
2. Must bootstrap CC with angular 5

### NG-APP IN NG-APP

1. tricky

### NG-INCLUDE

1. import the html

### CREATE A PORTAL

1. Replicate the code
2. High dependency with npm modules (shared between CC, Claims, Billing)
3. Bad performance
4. 


## INFO

1. Code must be external
2. if possible 1.6 or more
3. update only front or update only billing

bundled file js (components and views)
on deploy update 

Front CC et Front Billing doivent parler au backend
Cannot fully externalize


Best of both world :
AngularJS 1.6

if we change the UI we only deploy CC front
if we change billing rest we only deploy billing rest
if we add fields we update everything
The CC backend ties us to CC