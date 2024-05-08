<h1 align="center">Can I Take Over Dependency?<br><sup><sub>A list of package managers and whether they are vulnerable to dependency takeovers!<br><sup> Maintained by</sup>


## Disclaimer :warning:

**The author(s) of this document take no responsibility for correctness. Information outlined in this project is here to act as a compass for security researchers. This project relies on information and contributions from the public domain**


### Some fantastic resources about dependency takeovers you can read about:
https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610

### What is a dependency confusion or takeover?

Dependency confusion is novel type of attack which targets an organizations *software supply chain*. These are successfully executed by taking advantage of mis-configured private package managers.


Almost all programming language runtimes, such as JavaScript, C#, Ruby are equipped with a package manager, which automatically installs *dependencies* into your project. Typically, package managers have three common configurations:

- 🏪 **Public Manager:** Freely distributed software packages that anyone can browse, download and use
- 🔐 **Private Manager:** Private packages that can only be accessed by internal teams and developers
- **🎱 Virtual:** A hybrid setup where packages are sourced from the private registry and the public registry





# Package Managers

| 📦 Package Manager | 🪲 Is Vulnerable ? | 📓 Language or Platform | 🚪 Entry Point | 🪝 Execution Vector | 💾 PoC Code | 🏪 Registry  URLs  | 🛡️ Mitigation(s)
| - | - | -  | - | - | - | - | - |
| npm | yes | `javascript` or `typescript` | package.json | `preinstall` and `postinstall` | [npm example](./proof-of-concept/npm/) | https://www.npmjs.com/ | use a scoped namespace such as `@company/package` |

