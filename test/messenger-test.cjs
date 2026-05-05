const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Messenger", function () {
  let MessengerFactory, messenger;

  beforeEach(async function () {
    MessengerFactory = await ethers.getContractFactory("Messenger");
    messenger = await MessengerFactory.deploy(
      "Hello devs...we love EVM development"
    );
    await messenger.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the correct initial message", async function () {
      expect(await messenger.getMessage()).to.equal(
        "Hello devs...we love EVM development"
      );
    });
  });

  describe("SetMessage", function () {
    it("Should change the message when called", async function () {
      await messenger.setMessage("We love building Dapps");
      expect(await messenger.getMessage()).to.equal("We love building Dapps");
    });

    it("Should emit console log on message change", async function () {
      const transaction = await messenger.setMessage("Happy hacking...");
      await transaction.wait();
    });
  });
});