const terminalInput = document.querySelector(".terminal-input");
const terminalOutput = document.querySelector(".terminal-output");
const input = document.querySelector(".input");

//terminal input represents commands
//whenever we hit enter, we want to check the input against the avaiable cmds
//and get the correct output
//we then want to send that output to the terminal output

function handleTerminalInput(cmd) {
  return [cmd];
}

function handleTerminalOutput(lines) {
  for (const line of lines) {
    const paragraph = document.createElement("p");
    paragraph.innerText = line;
    terminalOutput.appendChild(paragraph);
  }
}

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.keyCode === 13) {
    const outputLines = handleTerminalInput(input.value);
    handleTerminalOutput(outputLines);
    input.value = "";
  } else if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 32) {
    input.value += e.key;
  } else if (e.keyCode === 8) {
    input.value = input.value.substring(0, input.value.length - 1);
  }
});
