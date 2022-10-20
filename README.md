# FDC3-App-Directory

## What Is It?

- This is the FINOS FDC3 2.0 App Directory.
- It contains sample FDC3 applications that you can use with an [FDC3 2.0 Compatible](https://fdc3.finos.org) Desktop Agent.
- This is hosted using [GitHub Pages](https://pages.github.com), which means you can fork it to create your own App Directory.

## Why Is This Important?

🧑🏽‍🤝‍🧑🏽 **Get Working Faster**

- FDC3 is a desktop interoperability solution used in the finance industry.   Applications communicate with each other via a "Desktop Agent".
- Multiple Desktop Agent implementations exist, including [FINOS](https://finos.org)' own open source [FDC3 Sail](https://github.com/finos/electron-FDC3).
- If you want to evaluate an FDC3 Desktop Agent then you need a set of compatible applications to test it with, collected in an App Directory (or AppD for short).
- Using (or forking) this repo allows you to shortcut the process of curating your own suite of applications.

⛅ **A Showcase**

- FINOS are committed to showcasing the best of the FDC3 community.  What better way to do this than to have your app in the app directory?
- FDC3 is all about interoperability.  It is important to see how the apps work together: sharing context data and user intents between themselves.   For this reason it is valuable to collect the apps together to allow users to see this in action.

## How Does It Work?

This repo uses [Jekyll](https://jekyllrb.com) to template a static-site https://directory.fdc3.finos.org.   It produces:

  - An `index.html` page containing a list of all the applications.
  - A `v2/apps` page (in JSON format) containing the contents of the app directory, as specified [here](https://fdc3.finos.org/schemas/2.0/app-directory)
  - Individual `v2/apps/{appId}` pages (in JSON format) containing the invididual AppD records.

### To Add Records to The FINOS App Directory
 
1.  Create a PR with a new `.json` file in the `_apps` directory.  Follow the format there:

```
---
data: { 
  # AppD record JSON Manifest
}
---
```

2.  The maintainers of this repo will review and approve the PR.  GitHub will automatically update the GitHub pages site with details of your application.

### To Create Your Own App Directory

1.  Click the `fork` button at the top of the page and create a fork into your own GitHub repository.
2.  Modify the contents of the `_apps` folder with the apps you want in your apps directory.
3.  Set up GitHub pages for your forked repo, and point your Desktop Agent at the resulting URL.

# License

Copyright 2022 FINOS

Distributed under the Apache License, Version 2.0.

SPDX-License-Identifier: Apache-2.0
