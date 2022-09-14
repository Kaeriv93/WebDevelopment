# Intro to HTML

## What is HTML?
HTML stands for Hypertext Mark Up Language. Think of it has the building blocks of what our webpage holds. It is ensentially the building blocks that will hold things together. You will see things as links, image urls, tables, forms, etc...

When we are writing HTML we will use the HTML boiler plate. This can be done by typing out HTML in your vs code. Go ahead and give it a try! We will break down some parts in a bit.

The <!DOCTYPE html> tells the page that this is a HTML document file. Everything you write will be encoded between all of this.

## HTML is not a programming language, but a mark up language
HTML is essentially made up of tags that look like this **<>**. Within these tags, our browser will be able to know how to encode the content.

One of the most famous things we will write out will be this
**"<h1>"Hello World"</h1>"** Please note that it may render as HELLO WORLD in bold when we are just trying to write the character tags 
(< h1>) Hello World (</ h1>) 
Notice the special tags located above?  h1 will stand for heading and it has an opening tag which are the carrots and a closing tag which looks like a slash between the carrots.
Don't worry if it doesn't make too much sense, we will have some practice right now!

## Self Closing Tags
As mentioned above the h1 tag will be followed be a closing tag. But sometimes we will have special tags that will have a self closing. Which will look like this < name of tag />
This can included things such as the image tag and inputs.

## Naming a HTML tag (Syntax)

< nameofthetag      > Actual content you want to write out! </ nameofthetag     >

## HTML TREE
Let's try to visualize our HTML as a tree. This means that whatever code we write, will be read from top to bottom. For example
< h1 > Hello < /h1>
< h1 > There < /h1>
< h1 > Welcome < /h1>

As you might have guessed. It will display the text kind of like this!
<h1>Hello</h1>
<h1>There</h1>
<h1>Welcome</h1>

## Parents, Children, Siblings
At the top level overview, our html tags can be a parent, children or sibling.
What does that mean? Take for example that what if we wanted things to appear on the same level instead of it rendering from top to bottom?

[Example](https://codepen.io/SteamricexD/pen/yLKyJNg)

I will better explain it in the upcoming videos a bit more as we go along, but for now let's practice playing around with HTML and code our own site!


After we play around lets continue [here](https://github.com/Kaeriv93/WebDevelopment/blob/main/Day1/Intro-To-CSS.md)