# zOS Mainframe Automation

A demo on automation with z/OS mainframe using Zowe-CLI, NPM Scripts, and TypeScript
  


### Automation Flow
This automation will perform the following z/OS tasks automatically (eg. in a single click process:

1. Compile and Add of CICS/Cobol program EICIACC into Endevor (G).
2. After successful compile, Run our z/OS API to execute our CICS/COBOL program to return account details and balances.
3. We’ll save the API response/output in our local machine. We will also upload this file into z/OS Mainframe (both in PDS and Sequential file formats). This could be useful if we want to capture test results for further test processing and test result verifications.
4. We’ll also try to allocate a mainframe dataset using the zowe script and send the output of the API to this newly created mainframe data set.

> Bonus script tasks: (to show some more of the Zowe cli automation capability).
5. Compile and Run a z/os JAVA program to read a file in z/OS USS server and send the output to z/OS MVS.
6. Download a USS file from z/OS UNIX server into our local machine
7. Compile and Run a z/OS Assembler program.



### Prerequisites
- [Zowe-CLI](https://code.visualstudio.com/docs/typescript/typescript-compiling)
- [TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling)
- [NPM - Creating package.json](https://docs.npmjs.com/creating-node-js-modules)


##### Demo (Video) of the above z/OS Automation in action: [https://www.youtube.com/watch?v=6nf5-o28E3M](https://www.youtube.com/watch?v=6nf5-o28E3M)
