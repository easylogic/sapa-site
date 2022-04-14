---
sidebar_position: 7
---

# Messaging System 

sapa has a simple event system for sending messages between objects.

This also uses `method` string, just like specifying a DOM event.

### SUBSCRIBE 

SUBSCRIBE allows you to receive emit messages from elsewhere. 

Provides a callback to send and receive messages even if they are not connected.


```js

class A extends UIElement {
    [SUBSCRIBE('setLocale')] (locale) {
        console.log(locale);
    }
}

class B extends UIElement {
    template () {
        return `<button type="button">Click</button>`
    }

    [CLICK()] () {
        this.emit('setLocale', 'ko')
    }
}

App.start({
    components : {
        A, B
    },
    template : `
        <div>
            <A />
            <B />
        </div>
    `
})

```


### emit

`emit` is a method that delivers a message to an object other than itself.


```js
[CLICK()] () {
    this.emit('setLocale', 'ko')
}
```
why does not it send to its element?

The reason for not sending to itself is that there is a possibility that the event can run infinitely. Once I send the message, I can not come back to me.

### multiple SUBSCRIBE 

SUBSCRIBE can define several at the same time.

```js

[SUBSCRIBE('a', 'b', 'c')] () {
    // 
}

// this.emit('a')
// this.emit('b')
// this.emit('c')

```

### DEBOUNCE 

You can also slow down the execution time of a message.

```js

[SUBSCRIBE('a') + DEBOUNCE(100)] () {

}

```

### THROTTLE 

You can also slow down the execution time of a message.

```js

[SUBSCRIBE('a') + THROTTLE(100)] () {

}

```


#### IF

```js
class A extends UIElement {

    checkShow(locale) {
        return true;        // runnable if return value is true
    }

    [SUBSCRIBE('setLocale') + IF("checkShow")] (locale) {
        console.log(locale);
    }
}
```


### trigger 

The trigger method allows you to execute an event defined on the object itself. Messages sent by trigger are not propagated elsewhere.
 
```js
this.trigger('setLocale', 'en')  // setLocale message is run only on self instance 
```

If you want to send a message only to the parent object, you can do the following:

```js
this.parent.trigger('setLocale', 'en'); 
```


### SUBSCRIBE_SELF 

It can only be called with the trigger function. (How to trigger my own event)


```js
class A extends UIElement {
    [SUBSCRIBE_SELF('setLocale')] (locale) {
        console.log(locale);
    }
}
```