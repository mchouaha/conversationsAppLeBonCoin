# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?

# Demo :

## Logs - What has been done
- Show list of conversations and messages
- Add new message
- Implement Apollo graphql server
- mobile responsive 

## Logs - What is left to do 
- Add interceptor with appolo client and display errors network/graphql globally on app
- Add new conversation 
- Add user authentification

## How to use :
  1) Start application on [http://localhost:3000/](http://localhost:3000/)
  2) Click on See Demo button to route to conversations list
  3) On conversation-list page, select a conversation to route to the list of messages
  4) On messages-list page, add a new message by typing string input and then click send to dispatch the message.

  ### The conversation card shows:
  - sender name
  - last message of this conversation
  - last time message sent
  - sender avatar logo

  ### The message card shows:
  - author name
  - message of author
  - last time message sent
  - author avatar logo

  ### More Info: logos are fecthed locally and we suppose that you are logged in as user You 


## Getting Started

- Intall dependencies
 ``` 
 npm install 
 ```

- start graphql server at [http://localhost:4000/](http://localhost:4000/)
``` 
npm run start-server 
```

- start client at [http://localhost:3000/](http://localhost:3000/)
``` 
npm run dev 
```
