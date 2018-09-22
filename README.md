# Keeping Mary Fresh
Mary Tyler Moore memory Challange React app

![](https://media.giphy.com/media/l2SqcwNNskUYX1hLO/giphy.gif)

A single native Minnesotan, moves to Minneapolis in 1970 at age 30 and becomes Associate Producer of WJM-TV's Six O'Clock News.

## Live Link
 - https://becoskie.github.io/With-Her-Smile/

## Usage

![](https://thumbs.gfycat.com/LawfulAmusingBass-size_restricted.gif)

Go to the homepage you are presented with the 12 outfits that a single working girl in the 70's can afford. The goal is to keep her in a fresh outfit for twelve days. With our help, she'll make it after all.

## Features
- Conditional Rendering
- React scaffolding

## The Build

- JavaScript
- React
- node.js
- JSX
- Bootstrap

## Code
- The application's UI built as components
- Managing component states
- Responding to user events


```js
renderPage = () => {
    if (this.state.currentPage === "Home") {
      return (
        <Home
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
      );
    } else if (this.state.currentPage === "Mary") {
      return <Mary>
        <ScoreBar 
          message = {this.state.message}
          score = {this.state.score}
          highScore = {this.state.highScore}
        />
      {this.state.mary.map(mary => (
        <MaryCard
          imageClick={this.imageClick}
          id={mary.id}
          key={mary.id}
          image={mary.image}
        />
      ))} 
      </Mary>;
```

### Be the one to turn the world on with a smile. 
<a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/mwFGJN9bZ"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy me a coffee"></a>