// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
//  url: 'http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/api/v1/categories'
  url: 'http://www.mocky.io/v2/59badac50f00005104622a16',
  profUrl: 'http://ec2-54-202-209-58.us-west-2.compute.amazonaws.com/api/v1/professionals'
};
