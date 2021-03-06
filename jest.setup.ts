import { setGasCostAssertionTolerance } from '@enzymefinance/hardhat';
import { deployProtocolFixture, unlockAllWhales } from '@taodao/testutils';

setGasCostAssertionTolerance(0.03);

beforeAll(async () => {
  global.whales = await unlockAllWhales();
  global.fork = await deployProtocolFixture();
});
