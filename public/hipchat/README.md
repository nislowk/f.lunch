jQuery HipChat Plugin
=====================

The jQuery HipChat Plugin is a jQuery plugin that embeds a minimal HipChat chat UI into the target page, allowing
visitor to anonymously chat in a HipChat room that has public access enabled.

Requirements
-----

* jQuery probably any version

Getting Started
-----

1. Load jQuery and the plugin:

        <!-- use local jQuery if you prefer -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js" type="text/javascript"></script>
        <script src="jquery.hipchat.js" type="text/javascript"></script>

2. Find your HipChat room's guest access URL:
    1. Visit the HipChat room you want to allow guest access to
    2. Click the checkbox next to "Guest access is off" if guest access is not already allowed.
    3. Right-click on the guest access URL

3. On document ready, invoke the plugin, replacing "YOUR_GUEST_ACCESS_URL" with the copied value from above:

        $(function() {
          $('.any-div-class').hipChatPanel({
            url: "YOUR_GUEST_ACCESS_URL",
            timezone: "PST"
          });
        });

4. When you reload the page, it should now have a "Chat" button that, when clicked, allows
   visitors to chat in your room anonymously!

Screenshots
------

| Chat button| Chat panel   |
| ---------- | ------------ |
| ![Chat button](https://bitbucket.org/atlassianlabs/jquery-hipchat-plugin/raw/master/images/embed-button.png) | ![Chat panel](https://bitbucket.org/atlassianlabs/jquery-hipchat-plugin/raw/master/images/embed-chat.png)

Options
------
|            |              |
| ---------- | ------------ |
| `url`      | The guest access URL for the Hipchat room. Required.
| `timezone` | The timezone for message time rendering.  Can be hardcoded or determined via something like [jstz](http://pellepim.bitbucket.org/jstz/). Required.
| `welcome`  | The welcome message you want to show to visitors as the first message in the chat window. Optional.
| `noframes` | Content to include when iframes are disabled in the browser.  Optional.
| `width`    | The width of the iframe, defaults to 100%. Optional.
| `height`   | The height of the iframe. Optional.

License
------

This project is available under the Apache License, Version 2
