# AngularReact

This project will test using react component inside angular project.

# Q & A

1. What will be the performance impact
    - TODO: This need to be implemented and test. For example use a list of items(1000) and render them in both angular and react to see the time difference
2. How to handle design patterns (MVC vs Component)
    - Need to adhere strict rule of not brining any react stuff to angular side and vice versa. 
3. How to render angular components inside the react component 
    - For example if we are using react modal we need to render an angular component inside the react modal. 
        - As i see this will be expensive call for the dom since we are not relying on virtual dom. But if this is more like a one component we can use it. So the call will be always on the scenario basis.


# Findings 

- Using multiple `ReactDOM.render` in single page will get into performance issue. 
    
    - Can use `createPortal` _need to do a test_
- Since react use virtual Dom and when angular update a data it might destroy the current component and re-render from the scratch. To avoid this we have to manually handle Angular dom rendering

    - This won't be an big issue but has to keep an eye on
- 


# Reference 
- [Calling ReactDOM.render() many many times is slow](https://github.com/facebook/react/issues/12700)
- [Is it OK to use React.render() multiple times in the DOM](https://stackoverflow.com/questions/31302803/is-it-ok-to-use-react-render-multiple-times-in-the-dom)