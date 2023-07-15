export const TestChallenge = `import React from 'react'

// In this test example, when solved, will display a green banner that says "Congratulations!"
// To solve this test, Update the code below to say "Hello, World" instead of "Hello, ..."

export default function test () {
    const World = '...'
    return (
       <p> Hello, {World } </p>
    )
}`
export const RenderChallenge = 
`import React from 'react'
 import Counter from './components/Counter'

// We need to import the component we just created into our index.tsx file now
// Add our new Counter component to the code below to render it

export default function test () {
    return (
        <>
          ...  // Something should go here  
        </>
    )
}`