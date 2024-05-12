# Malicious npm package

This module executes abitrary code on by making use of the `preinstall` and `postinstall` scripts that are specified in `package.json`. Other lifecycle hooks can be used to achieve this as [referenced here.](https://docs.npmjs.com/cli/v10/using-npm/scripts).

What happens here is the `inject.js` executed automatically when a user or a build system invokes `npm i`. This also occurs if its directly installed with `npm i evil-npm`. 


## Mitigations

These issues can be mitigated by:

1. Using scoped packages such as `@org/internal-package` this way an attacker cannot squat any package names.

2. Claim the name of any internal packages on the public registry. Upload some placeholder code to ensure it cannot be claimed by a malicious user.

