export const MY_BREADCRUMB_PUSH = 'MYBREADCRUMBPUSH';

export const myBreadcrumbPush = payload => {
  console.log('payload',payload);
  
  return {
    type: MY_BREADCRUMB_PUSH,
    payload
  };
};

