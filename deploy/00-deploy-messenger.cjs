module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Messenger", {
    contract: "Messenger",
    from: deployer,
    args: ["Hello Devs...this is simple and fun"], // The message value in the function constructor
    log: true, // Logs statements to console
  });
};
module.exports.tags = ["Messenger"];