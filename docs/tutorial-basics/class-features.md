---
sidebar_position: 4
---

# Class Features


### `refClass` attribute

To create an instance of a newly defined Element, use the `refClass` property.

```js
<object refClass="MyElement" />
```

Using the tag object has no special meaning and is used only as a name meaning creating an object.

It is free to define it in the form below.


```js
<span refClass="MyElement" />
```

### Pass props 

sapa can create props as it is to create html.

```js

class SecondElement extends UIElement {
    components () {
        return { MyElement }
    }
    template () {
        return `
            <div>
                <object refClass='MyElement' title="my element title" />
            </div>
        `
    }
}


```




### Passing variables as props

sapa uses html strings.

So, when passing a certain variable as props, it must be converted into a string.

In this case, it provides a way to keep the reference as it is without converting the variable to a string.



```js

class SecondElement extends UIElement {
    components () {
        return { MyElement }
    }
    template () {
        return `
            <div>
                <object refClass='MyElement' title=${this.variable({
                    title: 'my element title'
                })} />
            </div>
        `
    }
}


```

### Using props 

It can be used by referencing the value of props through `this.props`.

```js

class MyElement extends UIElement {

    template () {
        const titleObject = this.props.title;
        return `
            <div>
                ${titleObject.title}
            </div>
        `
    }
}

```

### Local State 

UIElement provides a state that is simple to use.

```js

class MyElement extends UIElement {

    // initialize local state 
    initState() {
        return {
            title: this.props.title
        }

    }

    template () {
        const {title} = this.state; 
        return `
            <div>
                ${title}
            </div>
        `
    }
}


```


### Access DOM 

Use `this.$el`

$el is jQuery-liked DOM wrapper object.

```js
class Test extends UIElement {
    template () { return '<div class="test-item"></div>' }

    [CLICK()] () {
        if (this.$el.hasClass('test-item')) {
            console.log('this element has .test-item')
        }
    }
}
```


### ref  

When the DOM is created, the DOM with the ref attribute is managed as a variable that can be used in advance.

```js
template () {
    return `<div><span ref='$text'></span></div>`
}
[CLICK('$text')]  (e) { 
    console.log(this.refs.$text.html())
}
```

You can apply CLICK events to the `$text` DOM object.

### LOAD 

`LOAD` can define the part that changed frequently.

```js
template () {
    return `
        <div>
            <div ref='$list'></div>
        </div>
    `
}

[LOAD('$list')] () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return arr.map(value => `<div class='item'>${value}</div>`)
}

refresh( ) {
    this.load();
}
```

#### support async function 

```js
async [LOAD('$list')] () {
    return await api.get('xxxx').data;
}
```

### BIND 

`BIND` are used to change the attributes and style of a particular element. That is, it does not create the DOM itself.

```js
template () {
    return `
        <div>
            <div ref='$list'></div>
        </div>
    `
}

[BIND('$list')] () {
    return {
        'data-length': arr.length,
        style: {
            overflow: 'hidden'
        },
        cssText: `
            background-color: yellow;
            color: white;
            background-image: linear-gradient('xxxx')
        `,
        html: "<div></div>",
        innerHTML: "<div></div>",
        text: "blackblack",
        textContent: "redred",        
        class: {
            "is-selected": true,
            "is-focused": false,
        },
        class : [ 'className', 'className' ],
        class : 'string-class',
        htmlDiff: '<div><span></span></div>',
        svgDiff: '<g><rect /><circle /></g>',
        value: "input text",
    }
}

refresh( ) {
    this.load();
}
```

The final output after `BIND` is as follows.

```html
<div ref='$list' data-value='0' style='overflow:hidden'></div>
```

## Run separately

`LOAD` and `BIND` can be executed separately.

```js
this.load('$list')
this.bindData('$list');
```