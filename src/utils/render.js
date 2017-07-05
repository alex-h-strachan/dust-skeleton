import { render } from 'dustjs-linkedin';

export default (template, context) => new Promise(
  (res, rej) => {
    render(template, context, (e, result) => {
      if (e) rej(e);
      res(result);
    });
  }
);
