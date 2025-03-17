import { publicKey } from "@metaplex-foundation/umi";
import { PinataSDK } from "pinata-web3";

export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL ?? "";
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT ?? "staging";

export const ASSETS_URL =
  "https://raw.githubusercontent.com/Candy-Blinks/assets/refs/heads/main/";

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const SIGNING_MESSAGE =
  process.env.NEXT_PUBLIC_SIGNING_MESSAGE ?? "TEST";

export const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT ?? "TEST";
export const PINATA_GATEWAY =
  process.env.NEXT_PUBLIC_PINATA_GATEWAY ?? "https://gateway.pinit.io/";

export const PINATA = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: PINATA_GATEWAY,
});
