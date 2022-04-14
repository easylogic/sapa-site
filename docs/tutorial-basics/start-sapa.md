---
sidebar_position: 2
---

# Start sapa

```js

import {start, UIElement} from '@easylogic/sapa';

class SampleElement extends UIElement { }

start(SampleElement, {
    // default value is document.body
    container: document.getElementById('sample') 
})
```

The `start` method defines the point in time of the first run. Apply the template to the location specified by container.
