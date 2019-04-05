1.  Explain the differences between `client-side routing` and `server-side routing`.

With server side routing, every time you need new data (like a different page you want to get to) or certain other types of event occurs (ie button click, form submit), the browser has to send an HTTP request for those resources, and the full page will have to be reloaded with whatever is returned. With client-side routing, you can render/change specific components without having to make a request to a server, and thus you don't have to reload the page.

2.  What does HTTP stand for?

Hypertext Transfer Protocol

3.  What does CRUD stand for?

Create, Read, Update, Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create=Post,
Read=Get,
Put=Update,
Delete=Delete

5.  Mention three tools we can use to make AJAX requests

axios, fetch api, superagent