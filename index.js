const git = require("simple-git");

const init = async () => {
  try {
    const simpleGit = git();
    await simpleGit.add("./*");
    await simpleGit.commit("update");
    await simpleGit.push("origin", "main");
  } catch (e) {
    console.log(e);
  }
};

init();
