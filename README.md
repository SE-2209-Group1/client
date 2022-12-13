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
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
  </ol>
</details>

---
---

## About the project


## Built with


## Getting started


## Product Backlog

### Graduate View Page
We decided to focus our time on the most important element of the DFXtra Application - the Graduate view page. With this in mind, the epic breakdown that we focussed on was:
```
As a graduate user I want to manage my DFXtra profile so that I can keep it current
```
This was broken down into the following Graduate User Epic Breakdowns:
```
As a graduate user I want to be able to view my profile so that I can check it for errors and omissions.
```
From these we were able to produce our product backlog, which was broken down into smaller tasks for us to tackle. 
```
As a graduate user I want to be able to view my profile so that I can check it for errors and omissions.
As a graduate user I want to be able to edit my profile so that I can add or update information.
```
The profile page was separated into 6 components:

- [X] Header
  - [X] Build a header using Bootstrap. 
  - [ ] Ensure that the links supplied in the header, direct the user to a relevant page. 
  - [ ] Test that the header is correctly rendered.
- [ ] Footer
  - [ ] Build a footer using Bootstrap.
  - [ ] Test that the header is correctly rendered.
- [ ] Profile
  - [ ] Create a front-end component hierarchy. 
  - [ ] Create a front-end skeleton for the profile section. 
    - [ ] Style the front-end components using Bootstrap.
  - [ ] Connect the back-end to the shared database.
  - [ ] Create a model schema for:
    - [ ] Degree Experience
    - [ ] School Qualification
    - [ ] Work Experience
    - [ ] Portfolio
    - [ ] Certificates and Awards
    - [ ] Profile
  - [ ] Create back-end routes for:
    - [ ] Degree Experience
    - [ ] School Qualification
    - [ ] Work Experience
    - [ ] Portfolio
    - [ ] Certificates and Awards
    - [ ] Profile
  - [ ] Test back-end for:
    - [ ] Degree Experience
    - [ ] School Qualification
    - [ ] Work Experience
    - [ ] Portfolio
    - [ ] Certificates and Awards
    - [ ] Profile
  - [ ] Feed back-end data into the front-end for:
    - [ ] Degree Experience
    - [ ] School Qualification
    - [ ] Work Experience
    - [ ] Portfolio
    - [ ] Certificates and Awards
    - [ ] Profile
- [ ] Training
  - [ ] Create a front-end component hierarchy. 
  - [ ] Create a front-end skeleton for the training section. 
    - [ ] Style the front-end components using Bootstrap.
  - [ ] Connect the back-end to the shared database.
  - [ ] Create a model schema for:
    - [ ] Your training
    - [ ] Modules
  - [ ] Create back-end routes for:
    - [ ] Your training
    - [ ] Modules
  - [ ] Test back-end for:
    - [ ] Your training
    - [ ] Modules
  - [ ] Feed back-end data into the front-end for:
    - [ ] Your training
    - [ ] Modules
- [ ] Your Information
  - [ ] Create a front-end component hierarchy. 
  - [ ] Create a front-end skeleton for the your information section. 
    - [ ] Style the front-end components using Bootstrap.
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

### Graduate Edit Page

```
As a graduate user I want to be able to edit my profile so that I can add or update information.
As a graduate user I want to be able to upload an image of myself so that it can be displayed on my profile.
```

## Sprint One Backlog



## Mocks and Component heirachy

I have create 4 mocks to show the various pages of the application. A sign up page, a log in page, the homepage, and a create peep page. I will break these mocks into a component heirachy.

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