const git = require("simple-git");

const init = async () => {
  try {
    const ROOT = "/Users/menglingyu/My/playground";
    const simpleGit = git(ROOT);
    // await simpleGit.status();
    // console.log(status);

    // await simpleGit.pull("orgin", main);
    await simpleGit.add("./*");
    await simpleGit.commit("update");

    // const a = await git.init();
    // console.log(a);
    // simpleGit()
    //   .add("./*")
    //   .commit("first commit!")
    //   .addRemote("origin", "some-repo-url")
    //   .push();
    // await git.addRemote(name, repoUrl);
  } catch (e) {
    /* handle all errors here */
  }
};

init();
