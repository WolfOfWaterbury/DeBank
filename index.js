import { getWalletData } from './dataCollection';


async function main() {
    const gotPromises = [];
    // Collect data
    const data = await getWalletData();
    // Figure out how to parse all this data
    // Connect to local PG instance
    // Write data to PG
    // Print data
    // End
}

main();

