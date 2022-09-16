# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can fix this by using migration.  I actually made this error when I was creating a model called blogposts and had zero arguements so I had to migrate the two arguements with :name, :text.  To fix the foreign key you would use the migration on the belongs_to and sticking with the naming conventions of modelname_id. For your student, cohort example the foreign id would be on the student model since student belongs_to one cohort.

Researched answer: After some reaserch my answer seems to cover everthing that was asked.  It verified that you want the foreign key to be the modelname_id which in this case would be cohort_id would be one of the student parameters.  Also after some research migration is the proper way to fix a model if you forget to add a foreign key or any type of parameter you wanted to add but forgot.

2. Which RESTful routes must always be passed params? Why?

Your answer:

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: You have rails generate model. This rails generate command builds a model inside a rails application for us with us adding the parameters for it like $rails generate model Animal name:string age:integer dob:date. Another generator command is rails generate migration.  Rails migration is a way to add columns to a table.  This comes in handy becuase you can add new columns or add columns that you forgot to like I did in one of my projects so I had to utilize rails generate migration and add the two columns I needed. The last rails generator command I can think of is rails generate resources.  This command is my favorite since it essentially has you build a model like rails generate model but it also adds the routes you need inside the rails project so you do not have to manually do them yourself.

Researched answer: Afte some research I came accross pretty much what I said with just a little more detail.  Instead of touching on them again I want to talk about he one I didn't mention above and that is rails generate controller.  When you run this it add all the files associated with the name of the controller you chose.  It then allows you to to be able to access the file and add the methods you want to use.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
You would use the method index to access all the data that has been stored in table.  

action: "POST" location: /students
For this route you use the create method.  This method lets you create a new instance for the table.

action: "GET" location: /students/new
This will help create a new instance of itself by creating the html for you will need to make a new instance. This will use the new method.

action: "GET" location: /students/2
This will use the show method. This allows you to you look at a particular instance whose primary key matches the number you put in the URL.

action: "GET" location: /students/2/edit
You will use the edit method here which gets the html form so that edit can use.  This will have you edit one particular instance with the udpate method.

action: "PATCH" location: /students/2
This uses the update method and this with grab the instance that has the primary key 2 and help you update the data in the instance.

action: "DELETE" location: /students/2
You would use the delete method.  The delete method deletss the instance you declare and completely removes it from the table.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer I want to be able to create an application that tracks my every day to-do list

As a developer I want to be able to have a name, and projected duration of the task, and to be able to determine if the task has been completed or not

As a developer I want to add dishes to the to-do list.

As a developer I want to add laundry to the to do list.

As a developer I want to be able to have the dishes be completed.

As a developer I want to add two more chores to the list. (Your choice)

As a developer I want to be able to have a way to see how much projected duration of all my tasks are left. 

As a developer I want to be able to see which tasks have been completed and which tasks have not.

As a developer I want to be able to delete a task from the to-do list.

As a developer I want to be able to change the name or duration of the task.