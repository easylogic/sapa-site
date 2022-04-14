---
sidebar_position: 1
---
# sapa

sapa is a library that creates a UI with a simple event system.
## Basic concept

sapa helps you to create applications naturally in html without compiling.

#### No compile and virtual dom 

sapa is using only html string to create dom element. 

#### Simple DOM event system 

sapa provides a system for handling events well.

## Install 

```sh
npm install @easylogic/sapa
```

#### How to use in es6

```js
import {App, UIElement, SUBSCRIBE, CLICK} from '@easylogic/sapa'

```

#### How to use in browser 

```html
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/@easylogic/sapa@0.3.0/dist/sapa.umd.js'></script>
<script type='text/javacript'>
    const {App, CLICK, SUBSCRIBE, UIElement} = sapa;   // or window.sapa 
</script>

```


## Start a application 

```js

import {start, UIElement} from '@easylogic/sapa';

class SampleElement extends UIElement { }

start(SampleElement, {
    container: document.getElementById('sample') // default value is document.body
})
```

The `start` method defines the point in time of the first run. Apply the template to the location specified by container.

