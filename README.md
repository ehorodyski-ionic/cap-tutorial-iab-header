# Injecting a Header into an InAppBrowser Instance

In this tutorial we will walk through injecting a header element into an InAppBrowser instance. This can be useful in a scenario where you want to display external content to your users but want to retain some amount of stylistic consistency to the rest of your application.

**Note:** This tutorial will use a Capacitor project using Angular and the Ionic Framework. The methodology can be adapted for Capacitor apps using any web technology; the InAppBrowser plugin API will remain constant.

## Getting Started

Start by cloning this project and running `npm install`:

```bash
$ git clone git@github.com:ehorodyski-ionic/cap-tutorial-iab-header.git
$ npm install
```

Next add the InAppBrowser plugin and sync Capacitor:

```bash
$ npm install @ionic-enterprise/inappbrowser
$ npx cap sync
```

Open the application using live-reload to watch updates as you code:

```bash
$ ionic cap run ios -l --external
# or
$ ionic cap run android -l --external
```
