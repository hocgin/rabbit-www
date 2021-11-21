import qs from 'query-string';
import WebsiteConfig from '@/services/website';

let FILL_WEBSITE = 'fillWebsite';

let initState = {
  paging: null,
  detail: null,
  complete: [],
  website: {}
};
export default {
  namespace: 'home',
  state: initState,
  effects: {
    * getWebsiteConfig({payload, callback}, {call, put}) {
      yield put({type: FILL_WEBSITE, payload: WebsiteConfig});
    },
  },
  reducers: {
    [FILL_WEBSITE](state, {payload}) {
      return {...state, website: payload};
    },
  },
  subscriptions: {
    setup({dispatch, history}, done) {
      return history.listen(({pathname, search}) => {
        const query = qs.parse(search);
        switch (pathname) {
          case '/': {
            // TODO
            break;
          }
          default: {
            console.log(pathname);
          }
        }
      });
    },
  },
};
