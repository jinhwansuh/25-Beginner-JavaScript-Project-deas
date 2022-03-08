const ROUTE_CHANGE_EVENT_NAME = 'route-change';

export const initRouter = (onRoute) => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e) => {
    console.log(e);
    console.log(e.detail);
    const { nextUrl } = e.detail;

    if (nextUrl) {
      history.pushState(null, null, nextUrl);
      onRoute();
    }
  });
};

export const routePush = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent('route-change', {
      detail: {
        nextUrl,
      },
    })
  );
};
