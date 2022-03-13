import got from 'got';
import { debankUrl, evmChains } from './constants';

const { DebankAccessKey, evmWalletPublicAddressList } = prcoess.env;
const evmWalletPublicAddressArray = evmWalletPublicAddressList.split(',');

export const getWalletData = async () => {
    evmWalletPublicAddressArray.forEach(publicAddress => {
        evmChains.forEach(chainId => {
            // loop over each chain, pushing a got promise to an array (do not await it)
            gotPromises.push(got.get(`${debankUrl}/user/token_list?id=${publicAddress}&chain=chainId`, {
                Headers: { 'AccessKey':  DebankAccessKey },
            }).json());
        });
    });
    return Promise.all(gotPromises);
};