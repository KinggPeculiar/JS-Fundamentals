// Write a script that prints a message depending of the number of arguments passed:

//     If no arguments are passed to the script, print “No argument”
//     If only one argument is passed to the script, print “Argument found”
//     Otherwise, print “Arguments found”
//     You must use console.log(...) to print all output
//     You are not allowed to use var

 const sampleArgs = ["arg1", "arg2", "arg3"];

    for (let i = 0; i <= 3; i++) {
      const args = sampleArgs.slice(0, i); // simulate different argument counts

      console.log(`Testing with ${args.length} argument(s):`);
      
      if (args.length === 0) {
        console.log("No argument");
      } else if (args.length === 1) {
        console.log("Argument found");
      } else {
        console.log("Arguments found");
      }

      console.log("------"); // separator for clarity
    }