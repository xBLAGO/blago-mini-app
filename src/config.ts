// src/config.ts

import { clusterApiUrl, PublicKey } from "@solana/web3.js";

// Определяем текущую сеть. Для нашего теста это 'devnet'.
export const SOLANA_NETWORK = 'devnet';

// URL для подключения к сети Solana.
export const SOLANA_RPC_URL = clusterApiUrl(SOLANA_NETWORK);

// Адреса наших программ, развернутых в Devnet.
// Ты предоставил их, и теперь приложение знает, куда обращаться.
export const BLAGO_DAO_PROGRAM_ID = new PublicKey(
  "5XQDfM2JuVoeeJpFA1QTkLeiuCTLTYrpd4hQ54tbVqJy"
);
export const GOOD_TOKEN_PROGRAM_ID = new PublicKey(
  "ChxnGdaewCaV3iyWkhtmSxFEYhD6x1L3yYVLZKRaqDLD"
);
export const NEED_PROTOCOL_PROGRAM_ID = new PublicKey(
  "E83CPdcp7UkFF7DwYTB3CAjz21gNCADRwLxj3dRA84cj"
);
export const ASSET_NFT_PROGRAM_ID = new PublicKey(
  "5oNmieefkw6tLGrkeYwsr8ST5YAhES9t4K7DNM8W81pw"
);

// Другие важные настройки
// Например, адрес центрального казначейства или авторитета для минта GOOD
export const MINT_AUTHORITY_PUBKEY = new PublicKey(
    "8qUuWY1nqaKmw4zbrN6br7QtSTFTWk71BzwdSrpENmpx" // СЮДА НУЖНО ВСТАВИТЬ ТВОЙ ПУБЛИЧНЫЙ КЛЮЧ КОШЕЛЬКА
);