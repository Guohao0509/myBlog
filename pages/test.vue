<template>
  <div>
    <h1>Hello blog! {{ project }}</h1>
<div class="container">
  这是container
</div>
<div class="container">
  <div class="columns">
    <div class="one-fifth column">
      .one-fifth
    </div>
    <div class="four-fifths column">
      .four-fifths
    </div>
  </div>

  <div class="columns">
    <div class="one-fourth column">
      .one-fourth
    </div>
    <div class="three-fourths column">
      .three-fourths
    </div>
  </div>

  <div class="columns">
    <div class="one-third column">
      .one-third
    </div>
    <div class="two-thirds column">
      .two-thirds
    </div>
  </div>

  <div class="columns">
    <div class="one-half column">
      .one-half
    </div>
    <div class="one-half column">
      .one-half
    </div>
  </div>
  <div class="columns">
    <div class="one-half column centered">
      .one-half
    </div>
  </div>
</div>

<h1>h1. Primer heading</h1>
<h2>h2. Primer heading</h2>
<h3>h3. Primer heading</h3>
<h4>h4. Primer heading</h4>
<h5>h5. Primer heading</h5>
<h6>h6. Primer heading</h6>

<p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
<p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>

<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>

<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>

<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>

<button class="btn" type="button">Button button</button>
<a class="btn" href="#" role="button">Link button</a>

<button class="btn" type="button">Button</button>
<button class="btn btn-sm" type="button">Small button</button>

<button class="btn btn-primary" type="button">Primary button</button>
<button class="btn btn-sm btn-primary" type="button">Small primary button</button>

<button class="btn btn-danger" type="button">Danger button</button>
<button class="btn btn-sm btn-danger" type="button">Small danger button</button>

<button class="btn btn-outline" type="button">Outline button</button>
<button class="btn btn-sm btn-outline" type="button">Outline button</button>

<button class="btn" type="button" disabled>Disabled button</button>
<a class="btn disabled" href="#" role="button">Disabled button</a>

<button class="btn btn-primary" type="button" disabled>Disabled button</button>
<a class="btn btn-primary disabled" href="#" role="button">Disabled button</a>

<button class="btn btn-danger" type="button" disabled>Disabled button</button>
<a class="btn btn-danger disabled" href="#" role="button">Disabled button</a>

<button class="btn btn-outline" type="button" disabled>Disabled button</button>
<a class="btn btn-outline disabled" href="#" role="button">Disabled button</a>

<p><button class="btn btn-block" type="button">Block button</button></p>
<p><button class="btn btn-sm btn-block" type="button">Small block button</button></p>

<div class="clearfix">
  <a class="btn btn-sm btn-with-count" href="#" role="button">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="#">6</a>
</div>

<button class="btn" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-primary" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-danger" type="button">
  Button
  <span class="counter">12</span>
</button>

<button class="btn btn-outline" type="button">
  Button
  <span class="counter">12</span>
</button>

<div class="btn-group">
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
</div>

<div class="btn-group">
  <form class="btn-group-form">
    <button class="btn" type="button">Button in a form</button>
  </form>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>

<span class="hidden-text-expander">
  <button type="button" class="ellipsis-expander">&hellip;</button>
</span>

<form>
  <label for="name">Name</label>
  <input class="form-control" type="text" id="name">

  <label for="email">Email address</label>
  <input class="form-control" type="email" id="email">

  <label>
    <input type="checkbox"> Remember me
  </label>

  <label>
    <input type="radio" id="herp" name="herpderp" checked> Herp
  </label>
  <label>
    <input type="radio" id="derp" name="herpderp"> Derp
  </label>

  <button class="btn" type="submit">Submit</button>
</form>

<form>
  <input class="form-control" type="text" placeholder="Default input">
  <input class="form-control input-contrast" type="text" placeholder="Input with contrast">
</form>

<form>
  <input class="form-control input-lg" type="text" placeholder="Large input">
</form>
<form>
  <input class="form-control input-sm" type="text" placeholder="Small input">
</form>
<form>
  <input class="form-control input-lg" type="text" placeholder="Large input">
</form>
<form>
  <input class="form-control input-block" type="text" placeholder="Full-width input">
</form>
<form>
  <select class="form-select">
    <option>Choose an option</option>
    <option>Git</option>
    <option>Subversion</option>
    <option>Social Coding</option>
    <option>Beets</option>
    <option>Bears</option>
    <option>Battlestar Galactica</option>
  </select>
</form>
<select class="form-select select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>

<select class="form-select select-sm">
  <option>Choose an option</option>
  <option>Git</option>
  <option>Subversion</option>
  <option>Social Coding</option>
  <option>Beets</option>
  <option>Bears</option>
  <option>Battlestar Galactica</option>
</select>
<form>
  <dl class="form-group">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
  </dl>

  <dl class="form-group">
    <dt><label>Example Select</label></dt>
    <dd>
      <select class="form-select">
        <option>Choose an option</option>
        <option>Git</option>
        <option>Subversion</option>
        <option>Social Coding</option>
        <option>Beets</option>
        <option>Bears</option>
        <option>Battlestar Galactica</option>
      </select>
    </dd>
  </dl>

  <dl class="form-group">
    <dt><label>Example Textarea</label></dt>
    <dd>
      <textarea class="form-control"></textarea>
    </dd>
  </dl>
</form>
<form>
  <dl class="form-group errored">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
    <dd class="error">This example input has an error.</dd>
  </dl>
  <br>
  <dl class="form-group warn">
    <dt><label>Example Text</label></dt>
    <dd><input class="form-control" type="text" value="Example Value"></dd>
    <dd class="warning">This example input has a warning.</dd>
  </dl>
</form>

<form>
  <div class="form-checkbox">
    <label>
      <input type="checkbox" checked="checked">
      <em class="highlight">Available for hire</em>
    </label>
  </div>
</form>

<form>
  <div class="input-group">
    <input class="form-control" type="text" placeholder="Username">
    <span class="input-group-button">
      <button class="btn">
        <span class="octicon octicon-clippy"></span>
      </button>
    </span>
  </div>
</form>

<div class="form-actions">
  <button type="button" class="btn btn-primary">Save changes</button>
  <button type="button" class="btn">Cancel</button>
</div>

<nav class="menu">
  <a class="menu-item selected" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>

<nav class="menu">
  <a class="menu-item selected" href="#">
    <span class="octicon octicon-tools"></span>
    Account
  </a>
  <a class="menu-item" href="#">
    <span class="octicon octicon-person"></span>
    Profile
  </a>
  <a class="menu-item" href="#">
    <span class="octicon octicon-mail"></span>
    Emails
  </a>
  <a class="menu-item" href="#">
    <span class="octicon octicon-radio-tower"></span>
    <span class="counter">3</span>
    Notifications
  </a>
</nav>

<nav class="menu">
  <span class="menu-heading">Menu heading</span>
  <a class="menu-item selected" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>

<div class="tabnav">
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo tab</a>
    <a href="#" class="tabnav-tab">Bar tab</a>
  </nav>
</div>

<div class="tabnav">
  <a class="btn btn-sm right" href="#">Button</a>
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo Tab</a>
    <a href="#" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>

<div class="tabnav">
  <div class="tabnav-extra right">
    Tabnav widget text here.
  </div>
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo Tab</a>
    <a href="#" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>

<div class="tabnav">
  <div class="right">
    <a class="tabnav-extra" href="#">
      Tabnav extra link
    </a>
    <a class="tabnav-extra" href="#">
      Tabnav extra link
    </a>
  </div>
  <nav class="tabnav-tabs">
    <a href="#" class="tabnav-tab selected">Foo Tab</a>
    <a href="#" class="tabnav-tab">Bar Tab</a>
  </nav>
</div>

<ul class="filter-list">
  <li>
    <a href="#" class="filter-item selected">
      <span class="count">21</span>
      First filter
    </a>
  </li>
  <li>
    <a href="#" class="filter-item">
      <span class="count">3</span>
      Second filter
    </a>
  </li>
  <li>
    <a href="#" class="filter-item">
      Third filter
    </a>
  </li>
</ul>

<div class="flash">
  Flash message goes here.
</div>

<div class="flash">
  <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
  <p>And this is another paragraph.</p>
</div>

<div class="flash-messages">
  <div class="flash">
    Flash message goes here.
  </div>
</div>

<div class="flash flash-warn">
  Flash message goes here.
</div>

<div class="flash flash-error">
  Flash message goes here.
</div>

<div class="flash flash-with-icon">
  <span class="octicon octicon-alert"></span>
  Flash message with an icon goes here.
</div>

<div class="flash">
  <span class="octicon octicon-x flash-close js-flash-close"></span>
  Dismissable flash message goes here.
</div>

<div class="blankslate">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<div class="blankslate">
  <span class="mega-octicon octicon-git-commit blankslate-icon"></span>
  <span class="mega-octicon octicon-tag blankslate-icon"></span>
  <span class="mega-octicon octicon-git-branch blankslate-icon"></span>
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<div class="blankslate blankslate-narrow">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<div class="blankslate blankslate-capped">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<div class="blankslate blankslate-spacious">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<div class="blankslate blankslate-large">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<div class="blankslate blankslate-clean-background">
  <h3>This is a blank slate</h3>
  <p>Use it to provide information when no dynamic content exists.</p>
</div>

<img class="avatar" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144" width="72" height="72">
<img class="avatar avatar-small" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=64" width="32" height="32">
<div class="avatar-parent-child left">
  <img class="avatar" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=96" width="48" height="48">
  <img class="avatar avatar-child" src="https://avatars3.githubusercontent.com/u/9919?v=3&s=40" width="20" height="20">
</div>

<span class="state state-open">Open</span>
<span class="state state-proposed">Open</span>
<span class="state state-reopened">Open</span>
<span class="state state-closed">Closed</span>
<span class="state state-merged">Merged</span>
<span class="tooltipped tooltipped-n border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North
</span>
<span class="tooltipped tooltipped-ne border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North East
</span>
<span class="tooltipped tooltipped-e border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip East
</span>
<span class="tooltipped tooltipped-se border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip South East
</span>
<span class="tooltipped tooltipped-s border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip South
</span>
<span class="tooltipped tooltipped-sw border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip South West
</span>
<span class="tooltipped tooltipped-w border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip West
</span>
<span class="tooltipped tooltipped-nw border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North West
</span>
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip.">
  Tooltip no delay
</span>
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip.">
  Tooltip no delay
</span>
<span class="tooltipped tooltipped-n tooltipped-no-delay border p-2" aria-label="This is the tooltip.">
  Tooltip no delay
</span>

<span class="branch-ref css-truncate css-truncate-target">
  really-long-branch-name
</span>
<span class="css-truncate expandable">
  <span class="branch-ref css-truncate-target">this-is-a-really-long-branch-name</span>
</span>
<span class="counter">9</span>
<div class="clearfix">
  <code class="left">.left</code>
  <code class="right">.right</code>
</div>
<nav class="menu centered">
  <a class="menu-item selected" href="#">Account</a>
  <a class="menu-item" href="#">Profile</a>
  <a class="menu-item" href="#">Emails</a>
  <a class="menu-item" href="#">Notifications</a>
</nav>
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-center">Center aligned text.</p>
<span class="d-inline-block p-3 bg-white">.bg-white</span>
<span class="d-inline-block p-3 bg-gray-dark text-white">.bg-gray-dark</span>
<span class="d-inline-block p-3 bg-blue">.bg-blue</span>
<span class="d-inline-block p-3 bg-blue-light">.bg-blue-light</span>
<span class="d-inline-block p-3 bg-gray">.bg-gray</span>
<span class="d-inline-block p-3 bg-gray-light">.bg-gray-light</span>
<span class="d-inline-block p-3 bg-green">.bg-green</span>
<span class="d-inline-block p-3 bg-red">.bg-red</span>

<span class="text-blue">.text-blue</span>
<span class="text-red">.text-red</span>
<span class="text-gray-light">.text-gray-light</span>
<span class="text-gray">.text-gray</span>
<span class="text-gray-dark">.text-gray-dark</span>
<span class="text-green">.text-green</span>
<span class="text-orange">.text-orange</span>
<span class="text-purple">.text-purple</span>
<span class="text-white bg-gray-dark">.text-white</span>
<span class="text-inherit">.text-inherit</span>

<p>Here is some example text. <a class="link-blue" href="#">And a .link-blue</a></p>
<p>Here is some example text. <a class="link-gray" href="#">And a .link-gray</a></p>
<p>Here is some example text. <a class="link-gray-dark" href="#">And a .link-gray-dark</a></p>

<div class="flex-table">
  <div class="flex-table-item flex-table-item-primary">
    <input class="input-block" type="text" placeholder="Long flexible input form">
  </div>
  <div class="flex-table-item">
    <button class="btn" type="button">Button</button>
  </div>
</div>

<div class="d-inline-block border p-2 mr-0">.mr-0</div>
<div class="d-inline-block border p-2 mr-1">.mr-1</div>
<div class="d-inline-block border p-2 mr-2">.mr-2</div>
<div class="d-inline-block border p-2 mr-3">.mr-3</div>
<div class="d-inline-block border p-2 mr-4">.mr-4</div>
<div class="d-inline-block border p-2 mr-5">.mr-5</div>
<div class="d-inline-block border p-2 mx-2">.mx-5</div>
<div class="d-inline-block border p-2 my-2">.my-5</div>
<div class="d-inline-block border p-2 m-2">.m-2</div>

<div class="d-inline-block border pt-0">.pt-0</div>
<div class="d-inline-block border pt-1">.pt-1</div>
<div class="d-inline-block border pt-2">.pt-2</div>
<div class="d-inline-block border pt-3">.pt-3</div>
<div class="d-inline-block border pt-4">.pt-4</div>
<div class="d-inline-block border pt-5">.pt-5</div>
<div class="d-inline-block border p-3">.p-3</div>
<div class="d-inline-block border px-3">.px-3</div>
<div class="d-inline-block border py-3">.py-3</div>

<div class="p-3 border position-relative">
  .position-relative
  <div class="border position-absolute right-0 top-0 p-1">.position-absolute.right-0.top-0</div>
</div>

<span class="border text-center d-block p-2">.d-block</span>
<span class="border text-center d-inline p-2">.d-inline</span>
<span class="border text-center d-inline-block p-2">.d-inline-block</span>
<span class="border text-center d-none p-2">.d-none</span>

<div class="border p-3 mb-3">.border</div>
<div class="border-top p-3 mb-3">.border-top</div>
<div class="border-right p-3 mb-3">.border-right</div>
<div class="border-bottom p-3 mb-3">.border-bottom</div>
<div class="border-left p-3 mb-3">.border-left</div>

<div class="border p-3 mb-3 border-blue">.border-blue</div>
<div class="border p-3 mb-3 border-gray-light">.border-gray-light</div>
<div class="border p-3 mb-3 border-gray-dark">.border-gray-dark</div>

<div class="border border-0 p-3 mb-3">.border-0</div>
<div class="border border-top-0 p-3 mb-3">.border-top-0</div>
<div class="border border-right-0 p-3 mb-3">.border-right-0</div>
<div class="border border-bottom-0 p-3 mb-3">.border-bottom-0</div>
<div class="border border-left-0 p-3 mb-3">.border-left-0</div>

<p class="line-note" data-attribute="106">
  This is my paragraph of special text.
</p>

<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>

<table summary="This is a chart of invoices for 2011.">
  <thead>
    <tr>
      <th scope="col">Table header 1</th>
      <th scope="col">Table header 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Table footer 1</td>
      <td>Table footer 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Table data 1</td>
      <td>Table data 2</td>
    </tr>
  </tbody>
</table>

<div class="d-flex flex-justify-center flex-items-start"><!-- react-text: 3 -->
  <!-- /react-text --><div class="Popover position-relative"><!-- react-text: 5 -->
    <!-- /react-text --><div class="Popover-message Popover-message--right-top p-4 mr-2 Box box-shadow-large"><!-- react-text: 7 -->
      <!-- /react-text --><h4 class="mb-2">Popover heading</h4><!-- react-text: 9 -->
      <!-- /react-text --><p>Message about this particular piece of UI.</p><!-- react-text: 11 -->
      <!-- /react-text --><button type="submit" class="btn btn-outline mt-2 text-bold">Got it!</button><!-- react-text: 13 -->
    <!-- /react-text --></div><!-- react-text: 14 -->
  <!-- /react-text --></div><!-- react-text: 15 -->
  <!-- /react-text --><button class="btn btn-primary">UI</button><!-- react-text: 17 -->
<!-- /react-text --></div>

<div class="markdown-body"><p><!-- react-text: 4 -->This is inline <!-- /react-text --><code>code block</code><!-- react-text: 6 -->. This <!-- /react-text --><code><!-- react-text: 8 -->code block has a &lt;br&gt;<!-- /react-text --><br><!-- react-text: 10 --> in it<!-- /react-text --></code><!-- react-text: 11 -->. <!-- /react-text --><code>When a code block has a long sentence in it, it should wrap the page to a new line</code><!-- react-text: 13 -->. Some people like to see the world burn and put <!-- /react-text --><code>reallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstringsreallylongunbrokenstrings</code><!-- react-text: 15 --> in the code blocks.<!-- /react-text --></p></div>
<div data-reactroot="" class="p-4"><form><div class="input-group"><input type="text" class="form-control" placeholder="Username" aria-label="Username"><span class="input-group-button"><button class="btn" type="button" aria-label="Copy to clipboard"><span><svg version="1.1" width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-clippy" aria-hidden="true" name="clippy"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></span></button></span></div></form></div>
  </div>

</template>

<script>
export default {
  asyncData ({ params, error }) {
    return { project: 'nuxt' }
  }
}
</script>
