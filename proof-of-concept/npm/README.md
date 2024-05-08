# Example poc for a malicious npm package

This module executes abitrary code on the pre-install and post install of the package. 

The `inject.js` code is executed when a user or build system invokes `npm i` if already installed or `npm i evil-npm`

