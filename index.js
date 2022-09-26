const simpleGit = require("simple-git");

const init = async () => {
  try {
    // const a = await git.init();
    // console.log(a);

    simpleGit()
      .add("./*")
      .commit("first commit!")
      .addRemote("origin", "some-repo-url")
      .push();

    // await git.addRemote(name, repoUrl);
  } catch (e) {
    /* handle all errors here */
  }
};

init();
