// import { FeeManagerArgs } from '@taodao/protocol';
import { DeployFunction } from 'hardhat-deploy/types';

const fn: DeployFunction = async function (hre) {
  const {
    deployments: { deploy, get },
    ethers: { getSigners },
  } = hre;

  const deployer = (await getSigners())[0];
  const feeManager = await get('FeeManager');

  await deploy('PerformanceFeeHurdle', {
    args: [feeManager.address],
    from: deployer.address,
    linkedData: {
      type: 'FEE',
    },
    log: true,
    skipIfAlreadyDeployed: true,
  });
};

fn.tags = ['Release', 'Fees', 'PerformanceFeeHurdle'];
fn.dependencies = ['FeeManager'];

export default fn;
