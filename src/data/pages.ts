import { IPage, PageDict } from '@/mytypes';

const pageArray: IPage[] = [
  {
    id: `intro`,
    html: `<h1 title="intro" class="doble">Gamebook template</h1>
    <p>
      Welcome to my gamebook template. Here you can make the reader participate in your story by making choices.
    </p>
    <hr />
    <p>
    All game mechanics will be handled by a single file: <code>src/data/pages.ts</code>, with many records of the form:
    </p>
    <pre>
    {
      id: \`01\`,
      html: \`&lt;h1 class="">Some title here&lt;/h1>
      &lt;p>
        Some more text here.
      &lt;/p>\`,
      random: false,
      actions: [
        {
          id: \`02\`,
          text: \`advance in this wonderful story\`,
        },
        {
          id: \`03\`,
          text: \`take this bad decision\`,
        },
      ],
    }
    </pre>
    <p><code>'id'</code> is an unique string that will work as the route for the "page"</p>
    <p><code>'html'</code> is the content (in html format) that will be injected into <code>Content.tsx</code> component. You can include images and whatever you like. As long as the paths are correct, there would be no issue.</p>
    <p><code>'actions'</code> is an array of options, every option has an <code>'id'</code>, the page it redirects to, and <code>'text'</code>, the button label.</p>
    <p><code>'random'</code> is a boolean that indicates if the actions are chosen by the reader (false, the default value) or if it emulates throwing a dice or something like that (true)</p>
    <blockquote><p>Note that you can use this template for a very simple documentation site or some sort of tutorial...</p></blockquote>
    <p>
    You can check it below:
    </p>
    <h1 class="doble">Some title here</h1>
    <p>
    Some more text here
    </p>`,
    actions: [
      {
        id: `01`,
        text: `advance in this wonderful story`,
      },
      {
        id: `02`,
        text: `take this bad decision`,
      },
    ],
  },
  {
    id: `01`,
    html: `<p class="h1alt">Some text here</p>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in fermentum posuere urna nec tincidunt praesent. Nec feugiat nisl pretium fusce id velit ut tortor. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Mattis nunc sed blandit libero volutpat sed. Arcu felis bibendum ut tristique. Sed odio morbi quis commodo odio. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Aliquam sem fringilla ut morbi. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam.
    </p>
    <p>
    Nec nam aliquam sem et tortor consequat id porta. Ullamcorper sit amet risus nullam eget felis. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Consequat semper viverra nam libero justo laoreet sit amet. Quis lectus nulla at volutpat diam ut venenatis tellus. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Tellus molestie nunc non blandit massa enim nec dui. Nisl vel pretium lectus quam id leo. Sed felis eget velit aliquet.
    </p>`,
    actions: [
      {
        id: `02`,
        text: `advance in this wonderful story`,
      },
      {
        id: `intro`,
        text: `back to the beginning`,
      },
    ],
  },
  {
    id: `02`,
    html: `<p>
    Dui ut ornare lectus sit amet est. Diam donec adipiscing tristique risus nec. Mi tempus imperdiet nulla malesuada pellentesque elit. At volutpat diam ut venenatis tellus in. Diam vulputate ut pharetra sit amet aliquam. Tincidunt tortor aliquam nulla facilisi cras. Pretium quam vulputate dignissim suspendisse in est. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Dictum varius duis at consectetur lorem donec massa sapien. Nunc mattis enim ut tellus elementum. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Faucibus turpis in eu mi bibendum neque egestas.
    </p>`,
    actions: [
      {
        id: `intro`,
        text: `Go back`,
      },
    ],
  },
];

export const pages: PageDict = pageArray.reduce(
  (prev, curr) => ({ ...prev, [curr.id]: curr }),
  {},
);
