import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class TransactionScreen extends Component{

    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    } 

     getCameraPerrmission=async()=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status==='granted',
            buttonState:'clicked'

        })
    }

    handeledBarcodeScan=async({type,data})=>{
        this.setState({
            scanned:true,
            scannedData:'data',
            buttonState:'normal'
        })
    }
    
    render(){
        const hasCameraPermissions=this.state.hasCameraPermissions
        const scanned=this.state.scanned
        const scannedData=this.state.scannedData
        const buttonState=this.state.buttonState
        if(hasCameraPermissions&&buttonState==='clicked'){
            return(
                <BarCodeScanner  
                  onBarCodeScanned={scanned?undefined:this.handeledBarcodeScan}
                />
            )
        }
        else if(buttonState==='normal'){
            return(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        {hasCameraPermissions===true?scannedData:'request Camera Permission'}
                    </Text>
                    <TouchableOpacity onPress={this.getCameraPermission}><Text>Scan QR Code</Text></TouchableOpacity>
                </View>
            )    
        }
       
    }
}

const styles=StyleSheet.create({
    DisplayText:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    ScanButton:{
        backgroundColor: 'blue',
        padding:10,
        margin:10
    }
})