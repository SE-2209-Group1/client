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
    <li><a href="#mocks-and-component-heirachy">Mocks and Component heirachy</a></li>
    <li><a href="#front-end-breakdown">Front-end Breakdown</a></li>
    <li><a href="#back-end-breakdown">Back-end Breakdown</a></li>
    <li><a href="#tests">Tests</a></li>
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

Testing - Mocha with:

chai (assertion library)
chai-http (extend chai assertion library with HTTP integration)
Back end (data persistence layer)
MongoDB Atlas

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
As a graduate user I want to manage my DFXtra profile so that I can keep it current

This was broken down into the following Graduate User Epic Breakdown:
As a graduate user I want to be able to view my profile so that I can check it for errors and omissions.

From these we were able to produce our product backlog, which was broken down into smaller tasks for us to tackle:

As a graduate user I want to be able to view my profile so that I can check it for errors and omissions.
As a graduate user I want to be able to edit my profile so that I can add or update information.

The profile page was separated into 6 components:

- [X] Header
  - [X] Build a header using Tailwind. 
  - [ ] Ensure that the links supplied in the header, direct the user to a relevant page. 
  - [ ] Test that the header is correctly rendered.
- [X] Footer
  - [X] Build a footer using Tailwind.
  - [ ] Test that the header is correctly rendered.
- [X] Profile
  - [X] Create a front-end component hierarchy. 
  - [X] Create a front-end skeleton for the profile section. 
    - [X] Style the front-end components.
  - [X] Connect the back-end to the shared database.
  - [X] Create a model schema for:
    - [X] Degree Experience
    - [X] School Qualification
    - [X] Portfolio
    - [X] Certificates and Awards
    - [X] Profile
- [X] Create back-end routes for:
    - [X] Degree Experience
    - [X] School Qualification
    - [X] Portfolio
    - [X] Certificates and Awards
    - [X] Profile
  - [ ] Test back-end for:
    - [ ] Degree Experience
    - [ ] School Qualification
    - [ ] Portfolio
    - [ ] Certificates and Awards
    - [ ] Profile
  - [ ] Feed back-end data into the front-end for:
    - [ ] Degree Experience
    - [ ] School Qualification
    - [X] Portfolio
    - [ ] Certificates and Awards
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
- [ ] Your Information
  - [ ] Create a front-end component hierarchy. 
  - [ ] Create a front-end skeleton for the your information section. 
    - [ ] Style the front-end components.
  - [ ] Connect the back-end to the shared database.
  - [ ] Create a model schema for:
    - [ ] Badges
    - [ ] Scores
    - [ ] Video Link
  - [ ] Create back-end routes for:
    - [ ] Badges
    - [ ] Scores
    - [ ] Video Link
  - [ ] Test back-end for:
    - [ ] Badges
    - [ ] Scores
    - [ ] Video Link
  - [ ] Feed back-end data into the front-end for:
    - [ ] Badges
    - [ ] Scores
    - [ ] Video Link


## Sprint One Backlog

Have the graduate view page fully built, tested, styled, shippable and checked with product owner

## Mocks and Component heirachy

We have used the two wireframes given to us by the product owner and from these we have broken them down into the component heirarchy below.

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