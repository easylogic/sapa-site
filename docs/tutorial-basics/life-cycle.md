---
sidebar_position: 5
---

# Life Cycle
sapa has a life cycle. 

```js
UIElement ->
    created()
    initialize() -> 
        initState()
    render -> 
        template() 
        parseComponent() -> 
            create child component -> 
    load()            
    initializeEvent()
    afterRender()
```

| Method | Override | Description |
| --- | --- | --- |
| created | O | When the UIElement is created  |
| initialize | O | It is the same as `created` but it is used when creating initial data. |
| initState | O | Methods to initialize state  |
| template | O | Generate html at render time |
| afterRender | O | When the DOM is applied to the actual browser, the element can be accessed from outside |