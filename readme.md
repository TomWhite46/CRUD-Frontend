## ICELANDIC VOCAB PROJECT
### Readme File
<br>

# Contents
1. Resources
2. Brief
3. Kanban Board
4. Source control (Git)
5. Database Structure
6. Backend
7. Frontend
8. Testing
9. Stretch Goals
<br><br>
# 1. Resources
* Jira board: [here](https://team-1624352109955.atlassian.net/jira/software/projects/CRUD/boards/2)

* Github Repos: 
	* Backend: [here](https://github.com/TomWhite46/CRUDBackEnd)
	* Frontend: [here](https://github.com/TomWhite46/CRUD-Frontend)
<br><br>
# 2. Brief
Create fully functional CRUD app with a fully functional front end, a back-end with integration test and unit testing, a database.
The project takes in concepts from all the training to this point:
* Jira Kanban boards
* Version control (Git/Github)
* Databases/SQL
* Java
* Spring Boot
* HTML/CSS
* Javascript, using Axios for HTTP requests and responses
* Back-end testing with J-Unit and Mockito
<br><br>
# 3. Kanban Board
The Kanban board for the Icelandic vocab project, hosted on Jira, is available at https://team-1624352109955.atlassian.net/jira/software/projects/CRUD/boards/2.  
Screenshot of Sprint after backend completed:
![Sprint Kanban board](https://i.imgur.com/gCsz36V.png)

User stories were assigned to 2 overarching epics for frontend and backend:
![Frontend epic](https://i.imgur.com/CLZyaxh.png)


Each user story was assigned a priority, a story point estimate, and as many sub-issues as needed:
![user story](https://i.imgur.com/T3Rvznp.png)
<br><br>
# 4. Source control with Git/GitHub
GitBash and GitHub were used for source control. Each feature, corresponding to a user story on the Kanban board, was created in a separate branch, and merged into the dev branch.  
![github network](https://i.imgur.com/56IFraD.png)
<br><br>
# 5. Database Structure
Each Word in the database has 5 fields, corresponding to the Word class structure specified in the back-end:
* _id_ (autoincremented)
* _icelandic_ (varChar, not null): the Icelandic word.
* _english_ (varChar, not null): the English meaning of the word.
* _pos_ (varChar): the part of speech (noun, adjective, etc.). Can be null as not vital for front-end functionality.
* _score_ (int): tracks the number of times the user has given the correct meaning of the word in the front-end tester.


Image of back-end database structure:  
![ER diagram](https://i.imgur.com/LSS7gmA.png)
![Database structure](https://i.imgur.com/kXifyJd.png)


Two databases were used in the project:
* An H2 console with data and schema saved in the backend, to facilitate integration testing.
* A MySQL database for persistent storage for the production backend.
<br><br>
# 6. Backend
The backend is powered by Java, using Spring Boot. The backend stores the DB queries on the repo and the HTTP requests in the controller, allowing for full integration of the three elements.  
Backend folder structure:  
![Backend structure](https://i.imgur.com/XhUwolv.png)
<br><br>
# 7. Frontend
The frontend is based on HTML, CSS and Javscript, using Bootstrap for formatting of columns, rows, forms and tables. HTML and CSS determine the basic front-end display, while JS is used to for interactivity, to make HTTP requests, and to receive and render responses.
![Front end](https://i.imgur.com/Y2GgMn7.png)
<br><br>
# 8. Testing
Integration tests were written for every method in the controller, and unit tests, using Mockito, were written for every method in the ServiceDB class.

Unit test example and pass:

![Unit test eg](https://i.imgur.com/Ynp4xkG.png)
![Unit test pass](https://i.imgur.com/YOZo6lv.png)

Integration test example and pass:

![Integration test eg](https://i.imgur.com/QR52ahO.png)
![Integration test pass](https://i.imgur.com/okd4ZEy.png)
<br><br>
# 9. Stretch goals
- I created an additional low-priority issue on Jira to create a test function on the website, which would consist of two HTTP requests:
	1. A request to get a random Icelandic word from the database from those words whose score was lowest, using a custom SQL query in the repo ("SELECT * FROM word WHERE score = (select MIN(score) FROM word)", which would then populate the question of the test and prompt for the English meaning.  
	Story for test function:  
![Tester story](https://i.imgur.com/fs4Bdff.png)


	2. On submission of a correct answer by the user, an patch request to increment the score of the word by 1, and then submits a further get request for another random word.

	![Correct answer](https://i.imgur.com/aoMFRvq.png)

	3. On submission of a correct answer, JS provides the answer, and then gets a new random word.

	![Incorrect answer](https://i.imgur.com/pVtKquN.png)

Further improvements could consist of:
- Functionality to make the test appear as an overlay rather than a fixed form on the page.
- Functionality to add warnings when deleting records.
- Functionality to switch test to English -> Icelandic.

<br><br>
### Project by Tom White


 