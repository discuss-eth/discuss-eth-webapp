import { UPDATE_NETWORK_INFO } from './_types';
import _ from 'underscore';
import { Registry } from '../util/contracts';

function getWeb3Info() {
  return Promise.all([
    window.web3.eth.getAccounts(),
    window.web3.eth.net.getId(),
    Registry.deployed().then(() => true).catch(() => false)
  ]).then(
    ([ accounts, networkId, isDeployed ]) => ({
      accounts,
      networkId,
      isDeployed
    })
  );
}

export function startPolling(timer) {
  return (dispatch, getState) => {
    const interval = _.throttle(
      () => {
        getWeb3Info()
          .then(
            web3Info => {
              if (!_.isEqual(web3Info, getState().web3)) {
                dispatch({ type: UPDATE_NETWORK_INFO, payload: web3Info });
              }
            }
          )
          .catch(error => console.error('failed to get web3 info', error))
          .then(() => interval());
      },
      timer
    );

    interval();
  };
}

