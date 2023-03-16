import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3>1. What is the purpose of react router</h3>
            <p>
                <strong>
                    Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                </strong>
            </p>
            <h3>2. How does context api works</h3>
            <p>
                <strong>
                    Here are a few benefits of Context API that give it an edge:
                    The Context API helps share data between components which you can’t easily share with props, for example, complex data objects.
                    React Context API provides a way to send data like userId, auth, and theme data through the component tree without sending any props manually at every level.
                    We can also share specific states with multiple components instead through props manually. In some use cases, ideal for theming, localization, authentication etc
                </strong>
            </p>
            <h3>3. Why it needs to useRef Hooks</h3>
            <p>
                <strong>
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                </strong>
            </p>
        </div>
    );
};

export default Blog;