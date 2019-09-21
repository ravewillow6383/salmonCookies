# salmonCookies
salmonCookies lab


## day 01:


Your friend Pat has come up with a business idea by combining two signature 

Seattle icons: Pat has developed a recipe for a coffee-time confection called 

Salmon Cookies. These cookies made into the shape of a salmon that has just a hint 

of fishy goodness.


Pat needs some help with the branding of the business, as well as some help with 

internal data management for the company, and has enlisted your assistance because 

of your extensive and proven work in developing web applications.


Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the 

number of cookies each location must make every day so that it can manage its 

supplies inventory and baking schedule. The number of cookies to make depends on 

the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors 

unique to each location:


* The minimum number of customers per hour.

* The maximum number of customers per hour.

* The average number of cookies purchased per customer.


Because we are early in the life of this business, we will need to build an 

application that is adaptable. Pat will need to be able to add and remove 

locations from the daily projections report, and Pat will also need to be able to 

easily modify the input numbers for each location based on day of the week, 

special events, and other factors. Pat would like to see these numbers with nice 

formatting in a web application.


Pat needs you to take a leading role in doing the design work and construction of 

a public-facing page, too. They already have a logo image picked out (below), but 

Pat is requesting your assistance in the design of the documents, color scheme, 

fonts, and any additional images for the public facing site.


A salmon


So, in addition to building an application that calculates daily sales projections 

for each location (on a page called sales.html), you also need to create a 

public-facing page (on the homepage index.html) that is colorful, eye-catching, 

readable, useful, and informative.

You’ve got a lot to do. Plan your work, and work your plan.

Instructions


Before you begin, create a new repository within GitHub callled “cookie-stand”. 


Make sure that this repository is propertly set up with a license and a readme. 

Clone this repo down to your local machine


Create two new pages within your project. One for Sales Data (sales.html) and 

another for the homepage (index.html).

Sales Data


Within your javascript file (example: app.js), create separate JS object literals 

for each shop location that outputs the following to the sales.html file:


Stores the min/max hourly customers, and the average cookies per customer, in 

object properties


Uses a method of that object to generate a random number of customers per hour. 

Objects/Math/random


Calculate and store the simulated amounts of cookies purchased for each hour at 

each location using average cookies purchased and the random number of customers 

generated


Store the results for each location in a separate array… perhaps as a property of 

the object representing that location

Display the values of each array as unordered lists in the browser

Calculating the sum of these hourly totals; your output for each location should

look like this:

Seattle

* 6am: 16 cookies
* 7am: 20 cookies
* 8am: 35 cookies
* 9am: 48 cookies
* 10am: 56 cookies
* 11am: 77 cookies
* 12pm: 93 cookies
* 1pm: 144 cookies
* 2pm: 119 cookies
* 3pm: 84 cookies
* 4pm: 61 cookies
* 5pm: 23 cookies
* 6pm: 42 cookies
* 7pm: 57 cookies
* Total: 875 cookies

Display the lists on sales.html. We will be adding features to this application 

and working with its layout throughout the week.


## Day 02
Each cookie stand location should have a separate render() method that creates and

appends its row to the table


The header row and footer row are each created in their own stand-alone function


In addition to the requirements listed above, please ensure that your project also 

contains the following according to our style guide:

* Good use of a constructor function; style and syntax are correctly implemented
* Duplicate code has been removed and DRY principles are evident
* Working on a non-master branch for the day, with regular commit history.
*  Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.


