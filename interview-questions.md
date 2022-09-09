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

Your answer:

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
