- expression must hv one parent tag
- jsx fragment

1. tags are elements
   <tags> = React.createElement()

Use <lowercase /> tags when you need a DOM elements, and <Capitalized /> tags for component elements.

2. JSX children becom child elements
3. attributes are props
   -"" for string props
   -{} for variable or literal props
   -bare attribute name to indicate a value of true

4. {} interpolated children
5. Empt <> tags get turned into React.Fragment element i.e. an element that doesn’t map to DOM nodes.

6. {...object} acts like Object.assign()
   Passing {...object} as an attribute will add all of the properties of the object as separate attributes.
