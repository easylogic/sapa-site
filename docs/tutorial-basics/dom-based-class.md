---
sidebar_position: 3
---

# DOM Based Class System

```js
class MyElement extends UIElement {
    template () {
        return `<div>my element</div>`
    }
}

```

Use the `template ()` method to specify the actual HTML string for MyElement.

A UIElement can be contained in other UIElement.

```js
class SecondElement extends UIElement {
    components () {
        return { MyElement }
    }
    template () {
        return `
        <div>
            <object refClass='MyElement' />
        </div>
        `
    }
}

```

It creates MyElement internally when SecondElement is created. At this time, the parent property of MyElement becomes the instance of SecondElement.

