const apiURL = "https://demo-api.incodesmile.com/";
const apiKey = "570c70d1693636fdc200713415ebc3973afbdf19";


const helloSdk = window.Hello.create({
  apiKey: apiKey,
  apiURL: apiURL,
});

function helloLogin(){
helloSdk.renderLogin(document.getElementById('root'), {

  onSuccess: r => {
    console.log('onSuccess', r)
    document.getElementById('root').innerHTML = `Welcome Back, your token is ${r.token}`
  },
  onError: r => {
    console.log('on error', r)
  },
})
}