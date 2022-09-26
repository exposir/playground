const git = require("simple-git");

const init = async () => {
  const submit = async () => {
    try {
      const simpleGit = git();
      await simpleGit.add("./*");
      await simpleGit.commit("update");
      await simpleGit.push("origin", "main");
      console.log("ok");
    } catch (e) {
      console.log(e);
    }
  };

  setTimeout(() => {
    submit();
  }, 5000);
};

init();
