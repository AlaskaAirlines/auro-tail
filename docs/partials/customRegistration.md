```js
// Import the classes only
import { AuroTail, AuroTailGroup } from '@aurodesignsystem/auro-tail/class';
// Register with custom names if desired
AuroTail.register('custom-tail');
AuroTailGroup.register('custom-tail-group');
```

This registers new custom elements `<custom-tail>` and `<custom-tail-group>` that behave exactly like `<auro-tail>` and `<auro-tail-group>`, so both sets can coexist on the same page without interfering with each other.
