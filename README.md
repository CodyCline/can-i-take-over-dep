<h1 align="center">Can I Take Over Dependency?<br><sup><sub>A list of package managers and whether they are vulnerable to dependency takeovers!<br><sup> Maintained by</sup></h1>


## Disclaimer :warning:

**The author(s) of this document take no responsibility for correctness. Information outlined in this project is here to act as a compass for security researchers. This project relies on information and contributions from the public domain**


### Some fantastic resources about dependency takeovers you can read about:
https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610v


### Disclosed Reports
1. https://hackerone.com/reports/946409
2. https://hackerone.com/reports/1043385
3. https://hackerone.com/reports/1007014
4. https://hackerone.com/reports/925585

### What is a dependency confusion or takeover?

Dependency confusion is type of exploit that targets an organizations *software supply chain*. These are successfully executed by taking advantage of mis-configured private package managers.


Almost all programming language runtimes, such as node.js, C#, Ruby come equipped with a complementary package manager, which automatically installs *dependencies* into your project. Typically, package managers have three common configurations:

- **🏪 Public Manager:** A public index of freely distributed software packages that anyone can browse, download and use.
- **🔐 Private Manager:** A private index of software packages that can only be accessed by internal teams and developers.
- **🎱 Virtual:** A hybrid setup where packages are sourced from the private registry and the public registry

Successful dependency confusion attacks usually, target virtual registries whereby an organization downloads code from their internal registry and the public one such as `npm`. Typos and various mis-configurations creates *confusion* and thus opens the door the vulnerabilities. 

# Package Managers

| 📦 Package Manager | 🪲 Is Vulnerable ? | 📓 Language or Platform | 🚪 Entry Point | 🪝 Execution Vector | 💾 PoC Code | 🏪 Registry  URLs  | 🛡️ Mitigation(s)
| - | - | -  | - | - | - | - | - |
| npm | yes | `javascript` or `typescript` | `package.json` | `preinstall` and `postinstall` | [npm example](./proof-of-concept/npm/) | https://www.npmjs.com/ | use a scoped namespace such as `@company/package` 
| nuget | yes | `c#` or `f#` or `vb` | `.csproj` |  .targets files imported in `.csproj` | [dotnet examples](./proof-of-concept/nuget/) | https://nuget.org | use a packageSourceMapping declaration in `nuget.config` and reserve a name prefix such as `Company.Namespace.Package`
