## Basic Directive
In this example I have a directive which take an input a color and higtlight the host element when mouse enter and clear the color when the mouse leave.

This works by taking `ElementRef` as input which is a wrapper around a native element and in this case it is the element which the directive is defined in.

Also the `HostListener` is used to bind the element with `mouseenter` and `mouseleave` events of the native element.

This example works without zone.js and it targets ES2016.
