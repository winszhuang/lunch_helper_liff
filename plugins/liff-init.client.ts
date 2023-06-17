import liff from '@line/liff';

export default defineNuxtPlugin(nuxtApp => {
  const liffInit = liff.init({ liffId: nuxtApp.$config.public.LIFF_ID! })
    .then(() => {
      console.log('liff.init() done');
    })
    .catch((err: any) => {
      console.log(`liff.init() failed: ${err}`);
      if (!process.env.liffId) {
        console.info('LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable.');
      }
      return Promise.reject(err);
    })

  return {
    provide: {
      liff: () => liff,
      liffInit: () => liffInit
    }
  }
})