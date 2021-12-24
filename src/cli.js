#!/usr/bin/env node
const { resolve } = require("path");
const { create } = require("create-create-app");
const execa = require("execa");

const templateRoot = resolve(__dirname, "..", "templates");

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-lianshoumini", {
  templateRoot,
  promptForTemplate: true,
  extra: {
    architecture: {
      type: "list",
      describe: "choose your fave os",
      choices: ["macOS", "Windows", "Linux"],
      prompt: "if-no-arg",
    },
    plugin: {
      type: "input",
      describe: "plugin to be used in your project",
      default: "",
      prompt: "if-no-arg",
    },
  },
  after: ({ answers }) => {
    console.log(`Ok you chose ${answers.architecture}.`);
  },
  caveat: async ({ packageDir, answers }) => {
    const { plugin } = answers;
    if (plugin) {
      await execa("npm", ["install", "--prefix", packageDir, "-S", plugin]);
    }
    console.log(`"${plugin}" has been added`);
  },
});
