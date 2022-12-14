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
bootstrap (css styling import only)
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



As a graduate user I want to be able to view my profile so that I can check it for errors and omissions

As a graduate user I want to be able to edit my profile so that I can add or update information


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