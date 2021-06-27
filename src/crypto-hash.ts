import crypto from "crypto";

/**
 * Hash an array of strings
 *
 * @param {string[]} inputs an array of values to hash
 * @returns {string} hex format of hash
 */
export const cryptoHash = (...inputs: (string | Date)[]): string => {
  const hash = crypto.createHash("sha256");

  hash.update(inputs.sort().join(" "));

  return hash.digest("hex");
};
