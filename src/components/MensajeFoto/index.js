import React, {Component} from 'react';
import {View,Platform} from 'react-native';
import { Asset } from 'expo-asset';
import  {WebView}  from 'react-native-webview';

export default class MensajeFoto extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            loading: false,
            sent: false,
            isHTMLFileLoaded:false
        }
        const patchPostMessageFunction = function() {
            var originalPostMessage = window.postMessage;
            var patchedPostMessage = function(message, targetOrigin, transfer) {
                originalPostMessage(message, targetOrigin, transfer);
            };
            patchedPostMessage.toString = function() {
                return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
            };
            window.postMessage = patchedPostMessage;
        };
        this.patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';
    }
    componentDidMount() {
        this.HTMLFile = Asset.fromModule(require('./validarScript.html'))
        if (!this.HTMLFile.localUri) {
          Asset.loadAsync(require('./validarScript.html')).then(() => {
            this.HTMLFile = Asset.fromModule(require('./validarScript.html'))
            this.setState({ isHTMLFileLoaded: true })
          })
        }else {
            this.setState({ isHTMLFileLoaded: true })
          }
    }
    handleNavigation(event) {
        'handleNavigation' in this.props && this.props.handleNavigation(event)
    }
    
    handleMessage(event) {
        let data = event.nativeEvent.data;
       let  datas = JSON.parse(data);
       if (datas.status == 'Success') {
            this.props.success(datas)
        } else {
            this.setState({
                loading: false
            });
            this.props.failed(datas)
        }
    }
    passValues() {
        let data = {
            amount:1,
            myRef:this.myRef 
        };
        if (!this.state.sent) {
            this.refs.webview.postMessage(JSON.stringify(data));
            this.setState({
                loading: false,
                sent: true
            });
        }
    }
   
    render() {
        if (!this.state.isHTMLFileLoaded) {
            return null
          }
        const { localUri } = this.HTMLFile
        return ( <View style = {{flex: 1}}>
                <WebView style = {{overflow: 'scroll'}}
                source ={  Platform.OS === 'android'
                ? 
                {uri:localUri }
                : 
                require('./validarScript.html')}
                originWhitelist = {["*"]}
                mixedContentMode = {'always'}
                useWebKit = {Platform.OS == 'ios'}
                onLoadEnd = {() => this.passValues()}
                ref = "webview"
                thirdPartyCookiesEnabled = {true}
                scrollEnabled = {true}
                domStorageEnabled = {true}
                startInLoadingState = {true}
                injectedJavaScript = {this.patchPostMessageJsCode}
                allowUniversalAccessFromFileURLs = {true}
                onMessage={(event) => this.handleMessage(event)}
                onNavigationStateChange = {(event) => this.handleNavigation(event)}
                javaScriptEnabled = {true}
                allowFileAccess={true}/>
            </View>
        );
    }
} 

/*

 const lang = 'en'
    const apiURL = "https://demo-api.incodesmile.com/";
    const apiKey = "570c70d1693636fdc200713415ebc3973afbdf19";
    const onBoarding = window.OnBoarding.create(
      {
        apiKey: apiKey,
          apiURL: apiURL,
          lang: "es",
          theme: {
            main: "red",
            mainButton: {
              borderRadius: "20px",
              color: "white",
              border: "2px solid black"
            }
        },
          translations: {
            tutorial: {
              front1: "Seguridata Onboarding",
              front2: "Scan ID",
              back1: "Now scan the ",
              back2: "back side ",
              back3: "of your ID",
              selfie1: "Let's take a selfie",
              selfie2: "Keep a neutral expression, find balanced",
              selfie3: "light and remove any glasses and hats",
              passport1: "Align your passport to the frame and take a photo",
              passport2: "Position just the page with the photo"
            }
          }
      }
    )
    console.log("onBoarding",onBoarding)
    onBoarding.createSession("ALL").then(async (session) => {
      await onBoarding.warmup();
      onBoarding.renderCamera("selfie", containerRef.current, {
        goNext,
        onError: showError,
        token: session,
        numberOfTries: 3
      });
      console.log("onBoarding",onBoarding)
    })*/