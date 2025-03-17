// import { useMemo } from "react";
// import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
// import { AnchorProvider, Program } from "@coral-xyz/anchor";
// import {
//   CandyblinksProgram,
//   CandyblinksProgramIdl,
// } from "@/lib/idls/candyblinks_program";
// import useLaunchpadProgram from "./useLaunchpadProgram";
// import { useQuery } from "@tanstack/react-query";
// import { PublicKey } from "@solana/web3.js";

// interface IUseLaunchpadProgramSettingsAccount {
//   account: PublicKey;
// }

// export default function useLaunchpadProgramSettingsAccount({
//   account,
// }: IUseLaunchpadProgramSettingsAccount) {
//   const { program } = useLaunchpadProgram();

//   const fetchAllQuery = useQuery({
//     queryKey: ["settings"],
//     queryFn: () => program.account.settings.all(),
//   });

//   const fetchQuery = useQuery({
//     queryKey: ["settings"],
//     queryFn: () => program.account.settings.fetch(account),
//   });

//   return { fetchAllQuery, fetchQuery };
// }
