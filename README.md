# Team Engineering Project
---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#product-backlog">Product backlog</a></li>
    <li><a href="#sprint-one-backlog">Sprint One backlog</a></li>
    <li><a href="#mocks-and-component-hierarchy">Mocks and Component Hierarchy </a></li>
    <li><a href="#front-end-breakdown">Front-end Breakdown</a></li>
    <li><a href="#back-end-breakdown">Back-end Breakdown</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
  </ol>
</details>

---
---

## About the project

In this project we have tasked with creating a full-stack DFX clone, making sure to include to the front and back-end.
We were given a large range of epic user stories to break down and complete within our teams. 


## Built with

### Front end
ReactJS App with the following imports:

axios (for handling HTTP requests and responses)
Tailwind (css styling import only)
React Router (handling paths within the React App)

<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" width="100" >

Testing - Jest with:

testing-library/react
testing-library/user-events
jest.fn() for mocking axios get/post responses.

### Back end

NodeJS server using:

Express (provide web framework for node)
Mongoose (provide connection between server and MongoDB)
body-parser (parsing middleware for handling json req.body)
dotenv (environment variable loading)
cors (cross origin resource sharing package)

<img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original-wordmark.svg" width="100" >&nbsp;&nbsp;&nbsp;<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" alt="express" width="100" >&nbsp;&nbsp;&nbsp;                    <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" width="100" >

Testing - Mocha with:

chai (assertion library)
chai-http (extend chai assertion library with HTTP integration)
Back end (data persistence layer)
MongoDB Atlas

<img src="https://github.com/devicons/devicon/blob/master/icons/mocha/mocha-plain.svg" width="100" >

## Getting started

Clone the project and then from the project root directory:

Install the dependencies
```npm i``` // from both the cloned root directory of the front end and back end
Run tests:
```$ npm test```
Run the server
```$ npm start```
Using web browser, navigate to the localhost address/port provided in the server console.

## Product Backlog

We decided to focus our time on the most important element of the DFXtra Application - the Graduate view page. With this in mind, the epic breakdown that we focussed on was:
```
As a graduate user I want to manage my DFXtra 
profile so that I can keep it current.
```
This was broken down into the following Graduate User Epic Breakdown:
```
As a graduate user I want to be able to view my profile so that I can check it for errors and omissions.
```
From these we were able to produce our product backlog, which was broken down into smaller tasks for us to tackle:
```
As a graduate user I want to be able to view my profile so that I can check it for errors and omissions.
As a graduate user I want to be able to edit my profile so that I can add or update information.
```
The profile page was separated into 5 components:

- [X] Header
  - [X] Build a header using Tailwind. 
  - [X] Test that the header is correctly rendered.
- [X] Footer
  - [X] Build a footer using Tailwind.
  - [X] Test that the header is correctly rendered.
- [X] Profile
  - [X] Create a front-end component hierarchy. 
  - [X] Create a front-end skeleton for the profile section. 
    - [X] Style the front-end components.
  - [X] Connect the back-end to the shared database.
  - [X] Create a model schema for:
    - [X] Degree Experience
    - [X] School Qualification
    - [X] Work Experience
    - [X] Portfolio
    - [X] Certificates and Awards
    - [X] Profile
  - [X] Create back-end routes for:
    - [X] Degree Experience
    - [X] School Qualification
    - [X] Work Experience
    - [X] Portfolio
    - [X] Certificates and Awards
    - [X] Profile
  - [X] Test back-end for:
    - [X] Degree Experience
    - [X] School Qualification
    - [X] Work Experience
    - [X] Portfolio
    - [X] Certificates and Awards
    - [X] Profile
  - [X] Feed back-end data into the front-end for:
    - [X] Degree Experience
    - [X] School Qualification
    - [X] Work Experience
    - [X] Portfolio
    - [X] Certificates and Awards
    - [X] Profile
- [X] Training
  - [X] Create a front-end component hierarchy. 
  - [X] Create a front-end skeleton for the training section. 
    - [X] Style the front-end components.
  - [X] Connect the back-end to the shared database.
  - [X] Create a model schema for:
    - [X] Your training
    - [X] Modules
  - [X] Create back-end routes for:
    - [X] Your training
    - [X] Modules
  - [X] Test back-end for:
    - [X] Your training
    - [X] Modules
  - [X] Feed back-end data into the front-end for:
    - [X] Your training
    - [X] Modules
- [X] Your Information
  - [X] Create a front-end component hierarchy. 
  - [X] Create a front-end skeleton for the your information section. 
    - [X] Style the front-end components.
  - [X] Connect the back-end to the shared database.
  - [X] Create a model schema for:
    - [X] Badges
    - [X] Scores
    - [X] Video Link
  - [X] Create back-end routes for:
    - [X] Badges
    - [X] Scores
    - [X] Video Link
  - [X] Test back-end for:
    - [X] Badges
    - [X] Scores
    - [X] Video Link
  - [X] Feed back-end data into the front-end for:
    - [X] Badges
    - [X] Scores
    - [X] Video Link


## Sprint One Backlog

Have the graduate view page fully built, tested, styled, shippable and checked with product owner

## Mocks and Component Hierarchy 

We have used the two wireframes given to us by the product owner and from these we have broken them down into the component hierarchy below.

## Graduate Page

![Graduate page component heirachy](/Images/Graduate.png)

| Components   | Colour                                    |
| ------------ | ----------------------------------------- |
| **App**      | <span style="color: purple">Purple</span> |
| **Profile**  | <span style="color: green">Green</span>   |
| **Training** | <span style="color: red">Red</span>       |
| **Info**     | <span style="color: blue">Blue</span>     |
| **Footer**   | <span style="color: orange">Orange</span> |

### Graduate page component breakdown

![Graduate page component breakdown](/Images/GraduatePageComponentBreakdown.png)

## Edit Page

![Edit page component heirachy](/Images/EditPage.png)

| Components  | Colour                                    |
| ----------- | ----------------------------------------- |
| **App**     | <span style="color: purple">Purple</span> |
| **Profile** | <span style="color: green">Green</span>   |
| **Info**    | <span style="color: red">Red</span>       |
| **Story**   | <span style="color: blue">Blue</span>     |
| **Footer**  | <span style="color: orange">Orange</span> |

### Edit page component breakdown

![Edit page component breakdown](/Images/EditPageComponentBreakdown.png)


## Front-End Breakdown

![Front-end Breakdown](/Images/Client.png)

## Back-End Breakdown

![Back-end Breakdown](/Images/Server.png)

## Sprint Goals

Goal 1:

"Have the graduate view page fully built, tested, styled, shippable and checked with product owner"

Goal 2: 

"Have the graduate view and edit page fully built, tested, styled, shippable and checked with product owner"

## Project Retro 
- Sprint 0 (planning)
  - We learnt a lot from breaking down the problems into smaller tasks.
  - We discussed time-management honestly and divided our team-engineering time accordingly.  
  - We decided to work using the Agile Methodology:
    - We all agreed that daily stand-ups were a priority, and that all members must be in attendance.
  - We decided to use Miro and Trello for project planning and management. 
    
![Trello](/Images/Trelloproject2.png)

- Sprint 1
  - What went well:
    - Our methods of communication worked really well. 
    - Daily end-of-day reflection meetings were very useful for our team for ensuring that we were on track to achieve our goals. 
    - Daily morning stand-ups were well used. 
    - Regular communication with the product owner. 
  - What to work on for the next sprint:
    - We overestimated how many tasks we could complete in this time (our work velocity).
    - We agreed to consistent code and styling standards for the next sprint for consistency. 
    - We decided to extract lengthy code into smaller components, that were simpler and more reusable.
    - Introduce a developer branch to separate what we were working on, and shippable products. 

- Sprint 2
  - What went well:
    - Working in flexible pair-programming allowed us to share skills and swarm bugs – learnt a lot from other working styles. 
    - We were more realistic with our sprint goal - achieved our 'definition of done'.
    - We worked well as an Agile team, every member was proactive, engaged, reliable, and we communicated effectively through the use of daily stand-ups, group chats, and group reflections. 
  
![Sprint 2](/Images/sprin2.png)

### Sprint 3 and beyond...
Goals:
- Login/Logout functionality
- Back-end deployment
- Editable summary page
- Begin to tackle other user stories
  - We would speak with the product owner to discuss what tasks to prioritise. 

What would we improve from sprint 2:
- Plan out our databases in even more detail. 

![Sprint 1](/Images/sprin1.png)
