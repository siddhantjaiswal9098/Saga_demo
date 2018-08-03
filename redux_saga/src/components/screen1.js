
import React, {Component} from 'react';
import {Text,Image, View,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as Actions from '../actions/action1';
import {bindActionCreators} from 'redux';
class Screen1 extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
     <View style={{alignItems : 'center',marginTop : 50}}>
            <TouchableOpacity onPress={() => this.actiondispatch()}>
            <Text style= {{paddingTop : 30}}>
                    Call API
                </Text>

            </TouchableOpacity>
            <View style={{marginTop : 50}}>  
                {
                this.props.data2.length ? (
                    this.props.data2.map((aa, i) => {
                        console.log(aa.first_name);
                        return( 
                            <View 
                                style = {{alignItems : 'center'}}
                                key={i}>
                            <Image
                                    style={{width: 70, height: 70 }}
                                    source={{uri: aa.avatar}}
                                />
                                <Text>First Name: {aa.first_name}</Text>
                                <Text>Last Name: {aa.last_name}</Text>
                                
                                <Text>----------------------------</Text>
                                
                            </View>
                        )
                    })
                ) : null
                } 
            </View>
    </View>
    );
  }
  actiondispatch(){
     this.props.SignUpSave();
  }
}
function mapStateToProps(state) {
   
  return {
        data2 :  state.Demo.data
    }
  }
   
function mapDispatchToProps(dispatch) 
{
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps ,mapDispatchToProps)(Screen1);