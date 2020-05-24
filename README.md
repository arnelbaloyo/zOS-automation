# zOS Mainframe Automation

A demo on automation with z/OS mainframe using Zowe-CLI, NPM Scripts, and TypeScript
  


### Automation Flow
This automation will perform the following z/OS tasks automatically (eg. in a single click process)

1. Compile and Add of CICS/Cobol program EICIACC into Endevor (G).
2. After successful compile, run our z/OS Connect API to execute our CICS/COBOL program to return account details and balances.
3. We’ll save the API response/output in our local machine. We will also upload this file into z/OS Mainframe (both in PDS and Sequential file formats). This could be useful if we want to capture test results for further test processing and test result verifications.
4. We’ll also try to allocate a mainframe dataset using the zowe script and send the output of the API to this newly created mainframe data set.

> Bonus script tasks: (to show some more of the Zowe cli automation capability).
5. Compile and Run a z/os JAVA program to read a file in z/OS USS server and send the output to z/OS MVS.
6. Download a USS file from z/OS UNIX server into our local machine
7. Compile and Run a z/OS Assembler program.



### Prerequisites
- [Zowe-CLI](https://docs.zowe.org/v1-1-x/user-guide/cli-installcli.html)
- [TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling)
- [NPM - Creating package.json](https://docs.npmjs.com/creating-node-js-modules)


### Quick Start
1. Install zowe-cli. Note the first step in this installation requires a Node.js and Node Package Manager. If you already have Node.js installed skip to 2 and 3. Step 4 is not required for this exercise. Refer to steps for installation here - - [Zowe-CLI](https://docs.zowe.org/v1-1-x/user-guide/cli-installcli.html)

2. After successful installation of zowe-cli. Create a zowe zosmf profile by entering the below command on your terminal. Please replace 'yourProfile', 'yourMainframeID', and 'yourPassword' with your own mainframe credentials. In my setup, i've used the profile name 'zIPO2' as my profile name. You may use the same name (zIPO2) so you wont need to change the scripts in the succeeding steps.

   > $ zowe profiles create zosmf-profile {yourProfile} --host 10.xx.xx.xx --port xxxx --user {yourMainframeUserID} --password     {yourPassword}


3. Install Visual Studio Code. In the demo, i've used Visual Studio Code as my editor to write the Npm scripts and TypeScripts. This page assumes you have some basic knowledge of using VSC eg. navigating, opening terminals, etc. If not, let me know and i can walk you to the steps. We won't be really using VSC much apart from browsing and editing the scripts. You can also use any editor of your choice.
  

4. Install TypeScript compiler and type definitions for Node.js. On your terminal,

 > npm install -g typescript
 
 > npm install --save @types/node


5. GitHub Clone Setup. To get started quickly, simply clone my gitHub repository for the z/OS Automation project. On your local machine's terminal.

 > $ git clone https://github.com/arnelbaloyo/zOS-automation

6. Update the zowe commands on the package.json file with your preferred zowe command and Run the Scripts! 


#### Demo (Video) of the above z/OS Automation in action: [https://www.youtube.com/watch?v=6nf5-o28E3M](https://www.youtube.com/watch?v=6nf5-o28E3M). 
  
    
#### Contact: Arnel Baloyo  
- LinkedIn: https://www.linkedin.com/in/arnel-baloyo-14896788  
- Email (P): abaloyo@yahoo.com  
- Email (W): Arnel_Baloyo@bnz.co.nz. 
    
