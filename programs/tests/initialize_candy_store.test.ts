import { beforeAll } from "@jest/globals";
import { BN } from "bn.js";
import { setupEnv } from "./setup";
import { IContextAccounts } from "./types";
import { findCandyStorePda, findSettingsPda } from "./helpers";
import { BanksClient } from "solana-bankrun";

describe("Settings", () => {
  let adminAccount: IContextAccounts;
  let treasuryAccount: IContextAccounts;
  let cmbAccount: IContextAccounts;
  let deployerAccount: IContextAccounts;
  let deployerCollectionAccount: IContextAccounts;

  const platformFee = 100000;

  beforeAll(async () => {
    const { admin, treasury, cmb, deployer, deployerCollection } =
      await setupEnv();

    adminAccount = admin;
    treasuryAccount = treasury;
    cmbAccount = cmb;
    deployerAccount = deployer;
    deployerCollectionAccount = deployerCollection;

    await adminAccount.program.methods
      .initializeSettings(
        treasuryAccount.keypair.publicKey,
        new BN(platformFee)
      )
      .accountsPartial({
        admin: adminAccount.keypair.publicKey,
        collection: cmbAccount.keypair.publicKey,
      })
      .signers([adminAccount.keypair])
      .rpc();
  });

  test("Initialize Candy Store", async () => {
    const candyStorePda = findCandyStorePda(
      deployerAccount.program.programId,
      deployerCollectionAccount.keypair.publicKey
    );

    const settingsPda = findSettingsPda(deployerAccount.program.programId);
    const settingsAccount =
      await deployerAccount.program.account.settings.fetch(settingsPda);

    const createCandyStoreTx = await deployerAccount.program.methods
      .initializeCandyStore("Name", "url", "manifest_id", new BN(1))
      .accountsPartial({
        collection: deployerCollectionAccount.keypair.publicKey,
        candyStore: candyStorePda,
        owner: deployerAccount.keypair.publicKey,
        treasuryWallet: settingsAccount.treasury,
        settingsCollection: settingsAccount.collection,
        settingsCollectionAsset: null,
      })
      .signers([deployerAccount.keypair])
      .rpc();
  });
});
