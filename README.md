# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/Screenshot%202023-03-13%20at%2015-07-22%20Frontend%20Mentor%20Advice%20generator%20app.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

For this project, one problem I encountered is that by using the api link provided in the website, the quote was staying the same even if I reloaded the page or clicked on the dice icon. To solve this, I used the link where the user can input a number ID and it returns the corresponding code. So I added a random number generator on the beggining of the code to generate a number between 1 and 220 (which seems to be the highest number the site accepts) and added this number to the link so that now the quote changes everytime the user clicks on the button.

## Author

- Website - [Felipe Thomé](https://www.github.com/felipetn1989)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

