import tw from 'twin.macro'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    ${tw`m-0 p-0 outline-none box-border`}
  }
  *:focus{
    ${tw`outline-none`}
  }
  *::selection{
    ${tw`bg-blue-500 bg-opacity-25`}
  }
  button {
    ${tw`outline-none focus:outline-none`}
  }
  html, :root, body{
    ${tw`overflow-x-hidden h-screen w-screen antialiased`}
  }
  body {
    ${tw`bg-gray-200 font-body`}
  }
  .container {
    ${tw`w-full md:max-w-5xl mx-auto`}
  }
  .btn {
    ${tw`flex justify-center items-center bg-default rounded py-2 px-5 font-display font-bold text-base transition-colors ease-linear duration-300 shadow-lg`}
  }
  .btn.primary {
    ${tw`text-white bg-lightBlue-500 hover:bg-lightBlue-400`}
  }
  .btn.secondary {
    ${tw`text-white bg-green-500 hover:bg-green-400`}
  }

  .element {
    ${tw`h-80`}
  }
`
