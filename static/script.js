const terminalInput = document.querySelector(".typer");
const terminalOutput = document.querySelector(".terminal-output");
const input = document.querySelector(".input");
//const anchor = document.querySelector(".anchor");
//const body = document.querySelector("body");

//terminal input represents commands
//whenever we hit enter, we want to check the input against the avaiable cmds
//and get the correct output
//we then want to send that output to the terminal output

function clearTerminal() {
  terminalOutput.innerHTML = "";
}

function handleTerminalInput(cmd) {
  switch (cmd) {
    case "help":
      return help;
    case "whois":
      return whois;
    case "resume":
      return resume;
    case "projects":
      return projects;
    case "social":
      return social;
    case "email":
      return email;
    case "clear":
      clearTerminal();
      return [];
    default:
      return ["Invalid command! Type <span class=command>'help'</span> to see available commands"];
  }
}

function formatLine(line) {
  let i = 0;
  res = [];
  while (i < line.length) {
    if (line[i] === " ") {
      res.push(" ");
      i++;
      while (i < line.length && line[i] == " ") {
        res.push("&nbsp");
        i++;
      }
    } else {
      res.push(line[i]);
      i++;
    }
  }
  return res.join("");
}

async function handleTerminalOutput(lines) {
  if(lines.length == 0) return;
  const paragraph = document.createElement("p");
  const formattedLine = formatLine(lines[0]);
  paragraph.innerHTML = formattedLine;
  terminalOutput.appendChild(paragraph);
  setTimeout(() => handleTerminalOutput(lines.slice(1)), 100);
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    const outputLines = [...handleTerminalInput(input.value)];
    if (outputLines.length > 0)
      outputLines.unshift("<span class=line-starter>visitor@cocochimps:~$</span> " + input.value);
    handleTerminalOutput(outputLines);
    input.value = "";
  } else if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 32) {
    input.value += e.key;
  } else if (e.keyCode === 8) {
    input.value = input.value.substring(0, input.value.length - 1);
  }
  terminalInput.innerHTML = input.value;
});

handleTerminalOutput(banner);
setTimeout(() => handleTerminalOutput(header), 1000);