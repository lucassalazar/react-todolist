# To Do List App Using React

I made this project to learn a little bit more about React.
The main focus was to build an app just using react, so the style was made just with a simple CSS.

In this app, the user can add/remove tasks from the list and mark them when they are completed.

## Components of the To Do List App

- [x] To Do Item Component;
- [x] To Do Component;
- [x] Add To Do Component;
- [x] Header Component;
- [x] About Component.

## About React

What is react?

* React is a Javascript library created by Facebook and is used for building user interfaces (UIs) and front-end applications
* React is often called a framework because of it's behavior and capabilities

## Why use react?

* Makes front-end Javascript much easier
* Uses self contained, independent components with their own state
* Much more interactive UIs
* Virtual DOM
* JSX - Easily incorporate JS in markup (HTML)
* Easy to work with teams

## React state

* Components can have state which is an object that determines how that component renders and behaves
* React can also have an "application level" state by using a state manager like Redux or Reacts own context API 

## How to create React apps?

* CLI Tool for creating React applications (create-react-app)
* Uses Webpack but need no configuration from the developer
* Comes bundled with a dev server with hot reload
* "npm run build" will compile all the code to something that the browser can read

## Anatomy of a component

    Class Post extends React.Component {
        state = {
            title: 'Post One',
            body: 'This is a post'
        }

        render() {
            return() {
                <div>
                    <h3>{ this.state.title }</h3>
                    <p>{ this.state.body }</p>
                </div>
            }
        }
    }
